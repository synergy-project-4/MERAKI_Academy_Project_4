const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const userRouter = require("./routers/routes/auth/signUp");
const productRouter = require("./routers/routes/product")
const editProfileRouter=require("./routers/routes/user")

const app = express();

//routers

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(userRouter);
app.use(productRouter)
app.use(editProfileRouter)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
