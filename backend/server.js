const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const userRouter = require("./routers/routes/auth/signUp");

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});