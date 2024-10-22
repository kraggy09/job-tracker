import express from "express";
import path from "path";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import cors from "cors";
import connection from "./db/dbConfig.js";
import cookieParser from "cookie-parser"; // Import cookie-parser
import multer from "multer"; // Import multer

const app = express();
dotenv.config({
  path: path.resolve("backend", "config", "config.env"),
});

// Middleware to parse incoming request bodies
app.use(cookieParser());
app.use(express.json({ limit: "2mb" })); // Set limit for JSON bodies
app.use(express.urlencoded({ limit: "2mb", extended: true })); // Set limit for URL-encoded bodies

// Multer setup for handling file uploads
const upload = multer({
  limits: {
    fileSize: 2 * 1024 * 1024, // Limit file size to 2MB
  },
});

// Enable CORS
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
app.get("/api/v1", (req, res) => {
  console.log("You");
  res.json({
    msg: "Hello",
  });
});

console.log("I was compiled");

export default app;
