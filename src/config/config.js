import dotenv from "dotenv-safe";

dotenv.config({
  path: "./.env",
  example: "./.env.example",
});

export default {
  port: {
    port: process.env.PORT,
  },
  telemetry: {
    telemetry_secret: process.env.TELEMETRY_SECRET,
    telemetry_endpoint: process.env.TELEMETRY_ENDPOINT,
  },
};
