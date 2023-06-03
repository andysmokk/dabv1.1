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
app.use(cors());
app.use(express.json());

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
