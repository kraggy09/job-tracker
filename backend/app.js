import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";
import connection from "./db/dbConfig.js";
import cookieParser from "cookie-parser"; // Import cookie-parser

const app = express();
dotenv.config({
  path: path.resolve("backend", "config", "config.env"),
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Connect to Database
const uri = process.env.MONGO_URI;
connection(uri);

// Use Routes
app.use("/api/v1", router);

export default app;
