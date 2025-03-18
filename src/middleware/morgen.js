import morgan from "morgan";
import { logTail } from "../utils/logger.js";

const setUpMorgan = morgan((tokens, req, res) => {
  const entry = {
    // requestId: tokens.id(req, res),
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    status: parseInt(tokens.status(req, res), 10),
    response_time: tokens["response-time"](req, res),
    data: req.body,
    error: req.error || "NO Error Message",
  };

  switch (req.errorType) {
    case "info":
      logTail.info("HTTP request", entry);
      break;
    case "error":
      logTail.error("HTTP request", entry);
      break;
    case "log":
      logTail.log("HTTP request", entry);
      break;
    case "warn":
      logTail.warn("HTTP request", entry);
      break;
    default:
      logTail.error("HTTP request", entry);
  }

  return;
});

export { setUpMorgan };
