import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user/user.model.js";

export const authorize = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.send(401).json({
        message: "Unauthorized",
      });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      res.send(401).json({
        message: "Unauthorized",
      });
    }
    req.user = user;

    next();
  } catch (error) {
    res.send(401).json({
      message: "Unauthorized",
      error: error.message,
    });
  }
};
