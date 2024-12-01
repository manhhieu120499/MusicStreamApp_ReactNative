import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://10.0.2.2:5000', // Thay localhost bằng 10.0.2.2
	timeout: 10000,
});

export const fetchData = (path) => {
	return axiosInstance
		.get(`${path}`)
		.then((res) => {
			return res.data;
		})
		.catch((err) => console.error(err));
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