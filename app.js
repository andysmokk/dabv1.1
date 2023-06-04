const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const httpCode = require("./lib/httpCodes");
// eslint-disable-next-line no-unused-vars
const { colors } = require("./helpers");

dotenv.config({ path: "./config/.env" });

const orderRouter = require("./routes/api/order");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(
  cors({
    origin: "https://delivery-app-i4x3.onrender.com",
    methods: "GET, POST, PUT, DELETE",
    allowedHeaders: "Content-Type",
  })
);
app.use(express.json());

app.get("/shopping-cart", (req, res) => {
  // Відправка відповіді на маршрут /shopping-cart
  res.send("Shopping Cart Page");
});

app.use("/orders", orderRouter);

app.use((req, res) => {
  res
    .status(httpCode.NOT_FOUND)
    .json({ status: "error", code: httpCode.NOT_FOUND, message: "Not found" });
});

app.use((err, req, res, next) => {
  const statusCode = error.status || httpCode.INTERNAL_SERVER_ERROR;
  const status =
    statusCode === httpCode.INTERNAL_SERVER_ERROR ? "fail" : "error";
  res.status().json({
    status: statusCode,
    code: status,
    message: err.message,
  });
});

module.exports = app;
