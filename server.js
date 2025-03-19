import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import config from "./src/config/config.js";
import apiRoute from "./src/indexRoute.js";
import { setUpMorgan } from "./src/middleware/morgan.js";
import { errorHandler } from "./src/utils/errorHandler.js";

const port = config.port.port || 3000;
const app = express();
app.use(morgan("dev"));
app.use(setUpMorgan);
app.use(bodyParser.json());

app.use("/api", apiRoute);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
