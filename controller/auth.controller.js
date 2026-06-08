import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { JWT_SECRET, JWT_EXPIRES_IN } from "../config/env.js";
import bcrypt from "bcryptjs";
import User from "../models/user/user.model.js";

export const signUp = async (req, res, next) => {
  // START
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { name, email, password } = req.body;

    // CHECK IF USER EXISTS
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("User already exists!");
      error.statusCode = 409;
      throw error;
    }

    // HASH PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10);

    // CREATE USER
    const newUser = await User.create(
      [{ name, email, password: hashedPassword }],
      { session },
    );

    // CREATE TOKEN
    const token = jwt.sign({ userId: newUser[0]._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN || "1d",
    });

    await session.commitTransaction();
    await session.endSession();

    // JSON RESPONSE
    res.status(201).json({
      success: true,
      message: "Signed Up successfully",
      data: {
        token,
        user: newUser[0],
      },
    });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    next(error);
  }
};

export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      throw error;
    }

    const isPasswordSame = await bcrypt.compare(password, user.password);

    if (!isPasswordSame) {
      const error = new Error("Invalid Password");
      error.statusCode = 401;
      throw error;
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN || "1d",
    });

    res.status(200).json({
      success: true,
      message: "User signed In successfully",
      data: {
        token,
        user,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const signOut = async (req, res, next) => {};
