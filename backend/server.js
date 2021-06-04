const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const userRouter = require("./routers/routes/auth/signUp");

const productRouter = require("./routers/routes/product")
const editProfileRouter=require("./routers/routes/user")
const cartRouter = require("./routers/routes/cart");
const authRouter = require("./routers/routes/auth/login");


const app = express();

//routers

//built-in middleWares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(userRouter);
app.use(editProfileRouter)
app.use(productRouter);
app.use(cartRouter);
app.use(authRouter);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server On ${PORT}`);
});
