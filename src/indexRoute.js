import express from "express";
import userRoute from "./components/auth/auth.route.js";

const apiRoute = express.Router();

apiRoute.use("/users", userRoute);

export default apiRoute;
