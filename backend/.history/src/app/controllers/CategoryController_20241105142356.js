const Category = require('../models/Category');
const { multipleMongooseToObject } = require('../../util/mongoose');

class CategoryController {
	getAllCategory(req, res, next) {
		Category.find({})
			.then((categories) => {
				console.log(categories);
				return res.json(multipleMongooseToObject(categories));
			})
			.catch((err) => next(err));
	}
}

module.exports = new CategoryController();
