const Account = require('../models/Account');
const { singleMongooseToObject } = require('../../util/mongoose');

class AccountController {
	//[GET] find account by username and password
	async getAccount(req, res, next) {
		const { username, password } = req.query; // Lấy dữ liệu từ query

		// Account.findOne({ username, password })  // So sánh trực tiếp nếu mật khẩu không được mã hóa
		// 	.then((account) => {
		// 		if (account) {
		// 			res.send({ success: true, account: singleMongooseToObject(account) }); // Phản hồi thành công với dữ liệu tài khoản
		// 		} else {
		// 			res.status(404).send({ success: false, message: 'Account not found' });
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.error("Error fetching account:", err);
		// 		res.status(500).send({ success: false, message: 'Server error' });
		// 	});
		try {
			const res = await Account.findOne({ username, password });
			if (res.data) {
				res.status(200).json({
					data: { success: true, account: res.data },
				});
			} else {
				res.status(404).json({
					data: { success: false, message: 'Account not found' },
				});
			}
		} catch (err) {
			console.error('Error fetching account:', err);
			res.status(500).json({
				data: { success: false, message: 'Server error' },
			});
		}
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
}

module.exports = new AccountController();
