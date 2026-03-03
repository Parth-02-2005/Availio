export class ApiResponse<T = any> {
  public readonly statusCode: number;
  public readonly data: T | null;
  public readonly message: string;
  public readonly success: boolean;

  constructor(statusCode: number, data: T | null = null, message = "Success") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.success = statusCode < 400;
  }
}