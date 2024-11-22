const Account = require('../models/Account');
const { singleMongooseToObject } = require('../../util/mongoose');

class AccountController {
	//[GET] find account by username and password
	async getAccount(req, res, next) {
		const { username, password } = req.query;

		await Account.findOne({ username, password })
			.then((account) => {
				if (account) {
					res.status(200).send({
						success: true,
						account: singleMongooseToObject(account),
					});
				} else {
					res.status(404).send({
						success: false,
						message: 'Account not found',
					});
				}
			})
			.catch((err) => {
				console.log('Error fetching account:', err);
				res.status(500).send({
					success: false,
					message: 'Server error',
				});
			});
	}

	async createAccount(req, res, next) {
		console.log(req.body);
		const formData = req.body;
		const account = new Account(formData);
		console.log(account);
		try {
			await account.save();
			return res.status(200).send('Add account successfully');
		} catch (err) {
			return res.status(400).send({ message: err.message });
		}
	}

	async forgotPassword(req, res, next) {
		const { username } = req.body;
		console.log(req.body);
		const account = await Account.findOne({ username: username });
		if (account) {
			// Send email to user
			res.status(200).send({
				message: 'PassCode was send to your email!',
			});
		} else {
			res.status(404).send({ message: 'Account not found' });
		}
	}
}

module.exports = new AccountController();
