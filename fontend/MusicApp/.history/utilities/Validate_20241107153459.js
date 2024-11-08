import axios from 'axios';
import { fetchData } from '../axios';

export const ValidateEmail = (email) => {
	const regex = /^\w+@(gmail\.com|edu\.com\.vn|outlook\.com\.vn)$/;
	return regex.test(email);
};

export const ValidatePassword = (password) => {
	const regex = /^[A-Z][a-z0-9]+[@|#]$/;
	return regex.test(password);
};

export const CheckAccount = async (username, password) => {
	try {
		const response = await fetchData(
			`/account/find?username=${username}&password=${password}`
		);
		console.log('Response from API account:', response);

		if (response.success) {
			return true; // Tài khoản tồn tại
		} else {
			console.warn('Account not found:', response.message);
			return false; // Tài khoản không tồn tại
		}
	} catch (error) {
		console.error('Error during login:', error);
		return false; // Xử lý lỗi bất ngờ
	}
};
