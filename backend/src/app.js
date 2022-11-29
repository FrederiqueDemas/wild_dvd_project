const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
// const auth = require("./middlewares/auth");
require("dotenv").config();

const app = express();

app.use(cookieParser());

// use some application-level middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:5000",
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

app.use(express.json());

// Serve the public folder for public resources
app.use(express.static(path.join(__dirname, "../public")));

// Serve REACT APP
app.use(express.static(path.join(__dirname, "..", "..", "frontend", "dist")));

const router = express.Router();
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

// pour aller chercher les routes du userRouter et du authRouter
router.use("/user", userRouter);
router.use("/auth", authRouter);

// API routes
app.use("/api", router);

// Redirect all requests to the REACT app
app.get("/*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "dist", "index.html")
  );
});

// ready to export
module.exports = app;
