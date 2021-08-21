// const cartModel = require("./../../db/models/cartSchema");
const usersModel = require("./../../db/models/user");

const sendToCart = (req, res) => {
  const { productId, userId } = req.body;
  console.log("add to cart", productId, userId);
  // const item = new cartModel({ product, userId });

  usersModel
    .updateOne({ _id: userId }, { $addToSet: { cart: [productId] } })
    .then((result) => {
      res.json(result).status(200);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
  // .save()
  // .then((result) => {
  //   res.json(result).status(201);
  // })
  // .catch((err) => {
  //   res.send(err).status(404);
  // });
};

const showCart = (req, res) => {
  const { userId } = req.body;

  usersModel
    .findById({ _id: userId })
    .then((result) => {
      res.json(result.cart);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
  // cartModel
  //   .find({})
  //   .populate("product")
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     res.send(err);
  //   });
};

const deleteItem = (req, res) => {
  const { productId, userId } = req.body;
  
  usersModel
    .updateOne({ _id: userId }, { $pull: { cart: productId } })
    .then((result) => {
      console.log(result);
      res.json(result).status(200);
    })
    .catch((err) => {
      res.send(err).status(404);
    });

  // .findByIdAndDelete(id)
  // .then((result) => {
  //   res.status(200).json("success deleted");
  // })
  // .catch((err) => {
  //   res.send(err);
  // });
};

module.exports = { showCart, sendToCart, deleteItem };
