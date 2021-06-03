const productsModel = require('./../../db/models/productSchema');
const createProduct = (req, res) => {
	const { title, tags, description, price, quantity, optionsToExchange, itemLength, itemHeight, itemWidth, itemWeight,
		location, shortDescription, userId } = req.body;

	const product = new productsModel({
		title,
		tags,
		description,
		price,
		quantity,
		optionsToExchange,
		itemLength,
		itemHeight,
		itemWidth,
		itemWeight,
		location,
		shortDescription,
		userId
	});

	product
		.save()
		.then((result) => {
			res.status(201).json(result);
		})
		.catch((err) => {
			console.log(err);
			res.status(404).send(err);
		});
};

const pendingApproval = (req, res) => {
	productsModel
		.find({ ready: false })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};

const manageProduct = (req, res) => {
	const id = req.query.id
	productsModel
		.find({ ready: false, userId: id })
		.then((result) => {
			res.status(200).json(result);
		})
		.catch((err) => {
			res.send(err);
		});
};


module.exports = {
	createProduct,
	pendingApproval,
	manageProduct
};