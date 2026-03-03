import { DATABASE_URL } from "../constants";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";


let prismaClient: PrismaClient | null = null;

export const getPrismaClient = () => {
    if(!DATABASE_URL){
        throw new Error("DATABASE_URL is not defined in environment variables.")
    }
    if (!prismaClient) {
        const adapter = new PrismaPg({ connectionString: DATABASE_URL });
        prismaClient = new PrismaClient({ adapter });
    }
    return prismaClient;
}