import { Router, Request, Response, NextFunction, RequestHandler } from "express";
import { globalErrorHandler } from "./global.response.handler";

type AsyncRequestHandler = (req: Request, res: Response) => Promise<unknown>;

function asyncWrap(fn: AsyncRequestHandler): RequestHandler {
    return (req, res, next) => {
        Promise.resolve(fn(req, res)).catch((err) => globalErrorHandler(err, req, res, next));
    };
}

export function createRouter() {
    const router = Router();

    return {
        get: (path: string, handler: AsyncRequestHandler) =>
            router.get(path, asyncWrap(handler)),

        post: (path: string, handler: AsyncRequestHandler) =>
            router.post(path, asyncWrap(handler)),

        put: (path: string, handler: AsyncRequestHandler) =>
            router.put(path, asyncWrap(handler)),

        patch: (path: string, handler: AsyncRequestHandler) =>
            router.patch(path, asyncWrap(handler)),

        delete: (path: string, handler: AsyncRequestHandler) =>
            router.delete(path, asyncWrap(handler)),

        router, // expose underlying Router to mount on app
    };
}