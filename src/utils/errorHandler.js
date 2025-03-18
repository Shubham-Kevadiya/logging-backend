import errorCodes from "../constants/errorCodes.js";

const errorHandler = (err, req, res, next) => {
  const errorNames = Object.keys(errorCodes);
  const errorMsg = err.message;
  const errorMatch = errorNames.includes(errorMsg);
  if (errorMatch) {
    const status = errorCodes[errorMsg].httpStatusCode;
    const code = errorCodes[errorMsg].body.code;
    const message = errorCodes[errorMsg].body.message;
    const errObj = {
      status,
      code,
      message,
    };
    req.error = errObj;
    res.status(status).json({
      code,
      message,
    });
    // next();
  } else {
    const errObj = {
      status: err.status || 500,
      code: err.code || "server crashed",
      message: err.message || "Server Crashed",
    };
    req.error = errObj;
    res.status(err.status || 500).json({
      code: err.code || "server crashed",
      message: err.message || "Server Crashed",
    });
    // next();
  }
};

export { errorHandler };
