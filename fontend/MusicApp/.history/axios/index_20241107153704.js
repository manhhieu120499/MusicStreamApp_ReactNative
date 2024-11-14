import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://172.20.10.7', // Thay localhost bằng 10.0.2.2
	timeout: 10000,
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
