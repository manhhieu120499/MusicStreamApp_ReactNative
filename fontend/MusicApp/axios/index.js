import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://10.0.2.2:5000/', // Thay localhost bằng 10.0.2.2
	timeout: 5000,
});

export const fetchData = (path) => {
	return axiosInstance
		.get(`${path}`)
		.then((res) => res.data)
		.catch((err) => console.error(err));
};