import mongoose from "mongoose";
import { NODE_ENV, MONGODB_URI } from "../config/env.js";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.<development/production>.local",
  );
}

const connectToDb = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.log(`Error connecting to database: ${error}`);
    process.exit(1);
  }
};

export default connectToDb;
