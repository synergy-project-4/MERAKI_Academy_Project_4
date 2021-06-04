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
  const id = req.query.id;
  cartModel
    .find({ userId: id })
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

module.exports = { showCart, sendToCart };
