import fs from "fs";
import common from "../../constants/common.js";
import { logger } from "../../utils/logger.js";

const registerUser = async (userData) => {
  try {
    let users = [];
    users = JSON.parse(fs.readFileSync(common.DATA.PATH_TO_DATA, "utf-8"));
    if (Array.isArray(users) && users.length > 0) {
      const existingUser = users.filter((user) => {
        return user.email === userData.email;
      });
      if (existingUser && existingUser.length > 0) {
        // logger.error(`USER_ALREADY_EXIST, ${JSON.stringify(userData)}`);
        throw new Error("USER_ALREADY_EXIST");
      }
      users.push(userData);
    } else {
      users = [userData];
    }
    fs.writeFileSync(common.DATA.PATH_TO_DATA, JSON.stringify(users));
    return userData;
  } catch (error) {
    logger.error(`${error.message}, ${JSON.stringify(userData)}`);
    throw new Error(error.message);
  }
};

const userLogin = async (loginData) => {
  try {
    const users = JSON.parse(fs.readFileSync(common.DATA.PATH_TO_DATA, "utf8"));
    if (users.length > 0) {
      const user = users.filter((user) => {
        return user.email === loginData.email;
      });

      if (!user || user.length == 0) {
        // logger.error(new Error("USER_NOT_FOUND"), { data: loginData });
        throw new Error("USER_NOT_FOUND");
      }
      if (user[0].password !== loginData.password) {
        // logger.error(new Error("INVALID_USER_OR_PASSWORD"), {
        //   data: loginData,
        // });
        throw new Error("INVALID_USER_OR_PASSWORD");
      }
      return user[0];
    } else {
      // logger.error(new Error("DB is Empty!"), { data: loginData });
      throw new Error("USER_ALREADY_EXIST");
    }
  } catch (error) {
    logger.error(`${error.message}, ${JSON.stringify(loginData)}`);
    throw new Error(error.message);
  }
};

export default {
  registerUser,
  userLogin,
};
