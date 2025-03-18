import express from "express";
import { validateBodySchema } from "../../utils/validation.js";
import authController from "./auth.controller.js";
import authValidateSchema from "./auth.validate.js";
const userRoute = express.Router();

userRoute.post(
  "/register",
  validateBodySchema(authValidateSchema.registerSchema),
  authController.register
);
userRoute.post(
  "/login",
  validateBodySchema(authValidateSchema.loginSchema),
  authController.login
);

export default userRoute;
