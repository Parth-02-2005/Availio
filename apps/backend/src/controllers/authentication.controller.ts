import { Request, Response, Router } from 'express';
import { LoginBody, UserResponse } from '../schema/auth.schema';
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { login } from '../services/authentication.service';
import { ZodError } from 'zod';

export const authenticationController = Router();

export const authenticationRegistry = new OpenAPIRegistry();

authenticationRegistry.registerPath({
  method: "post",
  path: "/api/v1/auth/login",
  summary: "User login",
  tags: ["Authentication"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: LoginBody,
        },
      },
    },
  },
  responses: {
    200: {
      description: "User logged in successfully",
      content: {
        "application/json": {
          schema: UserResponse,
        },
      },
    },
  },
});

authenticationController.post('/login', async (req: Request, res: Response) => {
  
  let parsed = LoginBody.parse(req.body);
  
  try {

    let data = await login(parsed.email, parsed.password);

    return res.status(200).json(data);

  } catch (error) {
    console.log('er ::: ',error)
      if(error instanceof ZodError){
        return res.status(400).json({
          message: "Invalid request body",
          errors: error.issues
        })
      }
  }
})