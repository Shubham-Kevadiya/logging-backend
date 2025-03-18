import { Logtail } from "@logtail/node";
import winston from "winston";
import "winston-daily-rotate-file";
import config from "../config/config.js";
import common from "../constants/common.js";
const { combine, timestamp, json, printf } = winston.format;

export const logTail = new Logtail(config.telemetry.telemetry_secret, {
  endpoint: config.telemetry.telemetry_endpoint,
});

const fileRotateTransport = new winston.transports.DailyRotateFile({
  filename: common.FILE_ROTATE_TRANSPORT.FILE_NAME,
  datePattern: common.FILE_ROTATE_TRANSPORT.DATE_PATTERN,
  maxFiles: common.FILE_ROTATE_TRANSPORT.MAX_FILES,
});

export const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  // format: combine(errors({ stack: true }), timestamp(), json()),
  format: combine(
    timestamp(),
    json(),
    printf(({ level, timestamp, message }) =>
      JSON.stringify(`${timestamp}, ${level}, ${message}`)
    )
  ),
  transports: [fileRotateTransport],
  //   transports: [new winston.transports.Console(), new LogtailTransport(logtail)],
});

fileRotateTransport.on("new", (filename) => {
  console.log("log from new file", { filename });
});
fileRotateTransport.on("rotate", (oldFilename, newFilename) => {
  console.log("log from rotate file", { oldFilename, newFilename });
});
fileRotateTransport.on("archive", (zipFilename) => {
  console.log("log from archive file", { zipFilename });
});
fileRotateTransport.on("logRemoved", (removedFilename) => {
  console.log("log from log removed", { removedFilename });
});
