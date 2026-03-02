
// schemas/auth.schema.ts
import { z } from "zod";

export const LoginBody = z.object({
    email: z.email({ error: 'Please Provide Email' }),
    password: z.string({ error: 'Please Provide Password' }),
});

export const UserResponse = z
    .object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        email: z.email(),
    });

export type UserLoginResponse = z.infer<typeof UserResponse>;