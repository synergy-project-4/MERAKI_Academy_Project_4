const userModel = require("../../db/models/user");
const productsModel = require("./../../db/models/productSchema");

const createProduct = (req, res) => {
  const {
    title,
    tags,
    description,
    price,
    quantity,
    location,
    shortDescription,
    userId,
    image,
  } = req.body;

  const product = new productsModel({
    title,
    tags,
    description,
    price,
    quantity,
    location,
    shortDescription,
    userId,
    image,
  });

  product
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

const getProductToHistory = (req, res) => {
  productsModel
    .find({ sold: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getAllProducts = (req, res) => {
  productsModel
    .find({ ready: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const pendingApproval = (req, res) => {
  const id = req.query.id;
  userModel
    .findOne({ _id: id })
    .then((result_user) => {
      if (result_user.admin === true) {
        productsModel.find({ ready: false }).then((result_product) => {
          res.json(result_product);
        });
      } else {
        productsModel
          .find({ ready: false, userId: id })
          .then((result_product) => {
            res.status(200).json(result_product);
          })
          .catch((err) => {
            res.send(err);
          });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};

const updateProduct = (req, res) => {
  const id = req.query.id;
  productsModel
    .findByIdAndUpdate(id, req.body, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const deleteProduct = (req, res) => {
  const id = req.query.id;
  productsModel
    .findByIdAndDelete(id)
    .then((result) => {
      res.json({ message: "success delete he product" });
    })
    .catch((err) => {
      res.send(err);
    });
};

const searchProduct = (req, res) => {
  const { title, tags } = req.body;
  productsModel
    .find({ $or: [{ title: title }, { tags: tags }] })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const filterProduct = (req, res) => {
  const { product } = req.body;
  productsModel
    .find({
      $or: [
        {
          $and: [
            { price: { $lt: lessPrice } },
            { price: { $gt: greaterPrice } },
          ],
        },
        { location: location },
      ],
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getProductToHistory,
  getAllProducts,
  pendingApproval,
  searchProduct,
  filterProduct,
};
