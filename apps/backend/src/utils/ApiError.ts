export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly errors?: any[];
  public readonly isOperational: boolean = true;

  constructor(
    statusCode: number,
    message: string = "Something went wrong",
    errors: any[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors.length ? errors : undefined;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}