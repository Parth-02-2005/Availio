// Fixed authentication.services.ts
import bcrypt from "bcryptjs";
import { AppError, NotFoundError, UnauthorizedAccessError } from "../classes/AppError"; // Fixed typo in class name
import { getPrismaClient } from "../handlers/database.handler";
import { generateAccessAndRefreshTokens } from "../utils/token.utils";
import { UserResponse } from "../schema/auth.schema"; // Removed UserLoginResponse assuming it was a mistake; use z.infer for type
import { string, z } from "zod"; // Import zod for z.infer

export const login = async (
  email: string,
  password: string
): Promise<{ user: z.infer<typeof UserResponse>; accessToken: string; refreshToken: string }> => { // Fixed type using z.infer
  const db = getPrismaClient();
  // 1. Find user
  const user = await db.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
  });
  if (!user || !user.isActive) {
    throw new UnauthorizedAccessError("Invalid credentials"); // Fixed typo
  }
  // 2. Verify password
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    throw new UnauthorizedAccessError("Invalid credentials"); // Fixed typo
  }
  // 3. Generate tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user.id);
  // 4. Return safe user + tokens
  return {
    user: UserResponse.parse(user), // ensure password excluded in schema
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};

export const register = async (
  email: string,
  password: string
): Promise<{ user: z.infer<typeof UserResponse>; }> => { // Used consistent type
  const db = getPrismaClient();
  // 1. Check if user already exists
  const existingUser = await db.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
  });
  if (existingUser) {
    throw new AppError("User already exists", 409, "USER_EXISTS");
  }
  // 2. Hash password
  const hashedPassword = await bcrypt.hash(password, 10); // Using 10 salt rounds
  // 3. Create new user
  const user = await db.user.create({
  data: {
    firstName: firstName.trim(),
    lastName: lastName.trim(),
    email: email.toLowerCase().trim(),
    password: hashedPassword,
    isActive: true,
  },
});
  // 4. Generate tokens
  const { accessToken, refreshToken } =
    await generateAccessAndRefreshTokens(user.id);
  // 5. Return safe user + tokens
  return {
    user: UserResponse.parse(user),
    accessToken: accessToken,
    refreshToken: refreshToken,
  };
};