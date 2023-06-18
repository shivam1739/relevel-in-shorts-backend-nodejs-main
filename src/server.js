require("dotenv").config();
const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");

const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// sample for express server
// app.use("/", (req, res, next) => {
//   res.status(200).json({ success: true, data: "Welcome to express server" });
// });

const uri = process.env.DB_URI;

const PORT = process.env.PORT || 8000; // port at which server listening

// import routes
let authRouter = require("../src/routes/auth.routes");

let categoryRouter = require("../src/routes/category.routes");

let userRouter = require("../src/routes/user.routes");
// import other routes BookMark Category News

// define root routes.
app.use("/authentication", authRouter);

app.use("/category", categoryRouter);

console.log(uri);
// define other routes BookMark Category News

app.listen(PORT, async () => {
  await mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => console.log("successfully connected"),
      (err) => console.log(err)
    );
  console.log(`server started at port ${PORT}`);
});
