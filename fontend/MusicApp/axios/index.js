import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://192.168.34.112:5000',
	// baseURL: 'http://10.0.2.2:5000', // Thay localhost bằng 10.0.2.2
	timeout: 5000,
});

export const fetchData = async (path) => {
	try {
		const res = await axiosInstance.get(`${path}`);
		return res.data;
	} catch (err) {
		if (err.response) {
			console.warn("Error response from server:", err.response.data);
			return err.response.data; 
		} else {
			console.error("Network or unexpected error:", err);
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
