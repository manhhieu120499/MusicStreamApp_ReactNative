const Account = require('../models/Account');
const { singleMongooseToObject } = require('../../util/mongoose');
const nodemailer = require('nodemailer');

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

	async handleSendEmail(email) {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: process.env.EMAIL_ADDRESS,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		const verifyCode = Math.floor(1000 + Math.random() * 9000);

		const mailOptions = {
			from: process.env.EMAIL_ADDRESS,
			to: email,
			subject: 'Reset password for account',
			text: `Your verification code is: ${verifyCode}`,
		};
		try {
			const res = await transporter.sendMail(mailOptions);
			if (res.status == 200) {
				return {
					status: 200,
					verifyCode: verifyCode,
					message: 'PassCode was send to your email!',
				};
			} else {
				return {
					status: 404,
					verifyCode: undefined,
					message: 'Fail to send email!',
				};
			}
		} catch (err) {
			console.log(err);
		}
	}

	async forgotPassword(req, res, next) {
		const { username } = req.body;
		const account = await Account.findOne({ username: username });
		if (account) {
			// Send email to user
			const { status, verifyCode, message } = await this.handleSendEmail(
				username
			);
			res.status(status).send({
				verifyCode: verifyCode,
				message: message,
			});
		} else {
			res.status(404).send({ message: 'Account not found' });
		}
	}
}

module.exports = new AccountController();
