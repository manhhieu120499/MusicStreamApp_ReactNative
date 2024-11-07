const Account = require('../models/Account');
const { singleMongooseToObject } = require('../../util/mongoose');

class AccountController {
	//[GET] find account by username and password
	getAccount(req, res, next) {
		const { username, password } = req.query; // Lấy dữ liệu từ query

		Account.findOne({ username, password })  // So sánh trực tiếp nếu mật khẩu không được mã hóa
			.then((account) => {
				if (account) {
					res.send({ success: true, account: singleMongooseToObject(account) }); // Phản hồi thành công với dữ liệu tài khoản
				} else {
					res.status(404).send({ success: false, message: 'Account not found' });
				}
			})
			.catch((err) => {
				console.error("Error fetching account:", err);
				res.status(500).send({ success: false, message: 'Server error' });
			});
	}
}

module.exports = new AccountController();
