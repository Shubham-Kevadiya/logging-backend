import authService from "./auth.service.js";

const register = async (req, res, next) => {
  try {
    const payloadValue = req.body;
    const user = await authService.registerUser(payloadValue);
    return res.status(200).json({ user });
  } catch (error) {
    req.errorType = "error";
    console.log("error", "error in register", error);
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const payloadValue = req.body;
    const user = await authService.userLogin(payloadValue);
    return res.status(200).json({ user });
  } catch (error) {
    req.errorType = "error";
    console.log("error", "error in login", error);
    next(error);
  }
};

export default {
  register,
  login,
};
