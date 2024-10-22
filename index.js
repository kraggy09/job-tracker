import http from "http";

import multer from "multer";
import app from "./backend/app.js";

const server = http.createServer(app);

server.setTimeout(300000);

// Multer setup for handling file uploads
const upload = multer();

// Define your routes
app.get("/hello", (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "Hello and welcome to the world of Job Tracker",
  });
});

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    msg: "Hello from Express.js",
  });
});

// Start the server
server.listen(8000, () => {
  console.log("App is running at http://localhost:8000");
});
