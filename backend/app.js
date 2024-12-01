const express = require("express");
const userRouter = require("./routes/userRoutes");
const app = express();

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello from server end");
});

app.use("/api/v1/users", userRouter);

module.exports = app;
