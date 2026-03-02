import prismaConfig from "../../prisma.config"
import { NotFoundError } from "../classes/AppError";
import { getPrismaClient } from "../handlers/database.handler"
import { UserLoginResponse, UserResponse } from "../schema/auth.schema";

export const login = async (email: string, password: string): Promise<UserLoginResponse> => {
    let db = getPrismaClient();

    let user = db.user.findUnique({
        where: {
            email: email
        }
    });

    if(!user){
       throw new NotFoundError("User not found")
    }

    return UserResponse.parse(user);
}