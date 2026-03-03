// Fixed AppError.ts
export class AppError extends Error {
    status: number;
    code: string
    constructor(message: string, status: number = 500, code?: string) {
        super(message);
        this.name = "AppError";
        this.status = status;
        this.code = code ?? "INTERNAL_SERVER_ERROR";
    }
}
export class NotFoundError extends AppError {
    constructor(message: string) {
        super(message, 404);
    }
}
export class UnauthorizedAccessError extends AppError { // Fixed typo
    constructor(
        message: string
    ) {
        super(message, 401);
    }
}