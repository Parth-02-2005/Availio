import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { AppError } from "../classes/AppError";

export const globalErrorHandler = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    if (err instanceof ZodError) {
        res.status(422).json({
            status: "error",
            type: "ValidationError",
            errors: err.issues.map((e) => ({
                field: e.path.join("."),
                message: e.message,
                code: e.code,
            })),
        });
        return;
    }

    if (err instanceof AppError) {
        res.status(err.status).json({
            status: "error",
            type: "AppError",
            code: err.code ?? null,
            message: err.message,
        });
        return;
    }
    
    res.status(500).json({
        status: "error",
        type: "InternalServerError",
        message: "An unexpected error occurred.",
    });
};