import { PrismaPostgresAdapter } from "@prisma/adapter-ppg";
import { DATABASE_URL } from "../constants";
import { PrismaClient } from "../generated/prisma/client";

let prismaClient: PrismaClient | null = null;

export const getPrismaClient = () => {
    if(!DATABASE_URL){
        throw new Error("DATABASE_URL is not defined in environment variables.")
    }
    if (!prismaClient) {
        const adapter = new PrismaPostgresAdapter({ connectionString: DATABASE_URL })
        prismaClient = new PrismaClient({ adapter })
    }
    return prismaClient;
}