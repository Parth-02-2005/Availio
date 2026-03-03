import { REDIS_URL } from "../constants";
import { createClient, RedisClientType  } from "redis";

let redisClient: RedisClientType | null = null;

export const getRedisInstance = () => {
    if(!REDIS_URL){
        throw new Error("Redis URL is not defined in environment variables.")
    }
    if (!redisClient) {
       redisClient = createClient({ url: REDIS_URL });
    }
    return redisClient;
}