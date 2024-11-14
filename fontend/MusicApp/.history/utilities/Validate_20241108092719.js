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

		if (response.success) {
			return true;
		} else {
			console.warn('Account not found:', response.message);
			return false;
		}
	} catch (error) {
		console.error('Error during login:', error);
		return false;
	}
};
