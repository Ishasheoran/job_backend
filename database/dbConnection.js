import mongoose from "mongoose";
import { config } from "dotenv";

config();

const dbServerUrl = process.env.MONGODB_URI;

export const dbConnection = async () => {
  try {
    await mongoose.connect(dbServerUrl);
    console.log("Connected to the database");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }

  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from the database");
  });
};
