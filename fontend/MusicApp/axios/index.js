import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'http://10.0.2.2:5000', 	// Thay localhost bằng 10.0.2.2 chạy trên máy ảo
	timeout: 5000,
});

export const fetchData = (path) => {
	return axiosInstance
		.get(`${path}`)
		.then((res) => {
			console.log("Response from API:", res.data);
			res.data;
		})
		.catch((err) => console.error(err));
};
