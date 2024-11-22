import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.0.105:5000', // Thay localhost bằng 10.0.2.2
	timeout: 5000,
	proxy: false,
});

export const fetchData = async (path) => {
	try {
		const res = await axiosInstance.get(`${path}`);
		return res.data; // Trả về dữ liệu nếu yêu cầu thành công
	} catch (err) {
		if (err.response) {
			return err.response.data; // Trả về dữ liệu từ phản hồi lỗi
		} else {
			console.error('Network or unexpected error:', err);
			throw err;
		}
	}
};

export const createAccount = async ({ username, password }) => {
	const res = await axiosInstance.post(
		'/account/create',
		{
			username: username,
			password: password,
		},
		{
			'Content-Type': 'multipart/form-data',
		}
	);
	return res.status;
};

export const forgotPassword = async (username) => {
	try {
		const res = await axiosInstance.post('/account/forgot-password', {
			username: username,
		});
		return {
			status: res.status,
			message: res.data.message,
			verifyCode: res.data.verifyCode,
		};
	} catch (err) {
		if (err.response) {
			return {
				status: err.response.status,
				message: err.response.data.message,
			};
		} else {
			console.error('Network or unexpected error:', err);
			throw err;
		}
	}
};
