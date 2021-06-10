const cartModel = require("./../../db/models/cartSchema");

const sendToCart = (req, res) => {
  const { product, userId } = req.body;
  const item = new cartModel({ product, userId });

  item
    .save()
    .then((result) => {
      res.json(result).status(201);
    })
    .catch((err) => {
      res.send(err).status(404);
    });
};

const showCart = (req, res) => {
  const { userId } = req.body;
  cartModel
    .find({})
    .populate("product")
    .exec()
    .then((result) => {
      res
        .status(200)
        .json(result)

    }).catch((err) => {
      res.send(err);
    });
};

const deleteItem = (req, res) => {
  const { id } = req.body;
  cartModel
    .findByIdAndDelete(id)
    .then((result) => { console.log("res",result); res.status(200).json("success deleted") })
    .catch((err) => { res.send(err) })
}

module.exports = { showCart, sendToCart, deleteItem };
