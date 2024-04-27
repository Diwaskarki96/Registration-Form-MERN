require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./modules/user.api");
const { errorHandler } = require("./middleware/errorHandler");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL).then(() => {
  console.log("Database is connected...");
});

app.use(express.json());
app.use(
  cors({
    origin: ["https://registration-form-topaz-alpha.vercel.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/", userRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
