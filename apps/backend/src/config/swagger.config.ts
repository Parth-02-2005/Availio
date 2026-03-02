import { OpenApiGeneratorV3 } from "@asteasolutions/zod-to-openapi";
import { authenticationRegistry } from "../controllers/authentication.controller";

// Later generate the full doc
const generator = new OpenApiGeneratorV3(
  [
    ...authenticationRegistry.definitions
  ]
);

export const openApiSpec = generator.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "My API",
    version: "1.0.0",
  },
});