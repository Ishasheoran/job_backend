import express from "express";
import cors from "cors";
import {errorHandler} from "./middlewares/errorHandler.js"
import { config } from "dotenv";
import {dbConnection}  from "./database/dbConnection.js";
import jobRouter from "./routers/jobRouter.js"
const app = express();
config({ path: "./config/config.env" });

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));
app.use(express.json());
app.use("/api/jobs", jobRouter);

dbConnection();
app.use(errorHandler);
export default app;