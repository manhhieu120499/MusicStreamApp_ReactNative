const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dwzptn5fj',
	api_key: '814953298218439',
	api_secret: 'r0yqWcSE3Tv3IDjzqn_25P06eVE',
});

const arrAudio = [
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/Attention.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/HuKhong-Kha.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/lemontree.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/rington.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/sou.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/Summerise.mp3',
	// 'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/tinhtahainga.mp3',
	'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/can_khong_co_co_khong_can.mp3',
	'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/tran_bo_nho.mp3',
	'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/hoa_no_khong_mau.mp3',
	'E:/HOCKI7_2024-2025/SubProject/MusicStreamApp_ReactNative/backend/src/resource/audio/khong_the_say.mp3',
];

async function uploadAudio() {
	const arrResult = [];
	for (let i = 0; i < arrAudio.length; i++) {
		try {
			await cloudinary.uploader.upload(
				arrAudio[i],
				{ resource_type: 'video' }, // Đặt loại tài nguyên là "video" vì Cloudinary xử lý audio và video chung
				function (error, result) {
					if (error) {
						console.log('Upload Error:', error);
					} else {
						console.log('Upload Success:', result);
						console.log('Audio URL:', result.secure_url); // Đây là link tải về hoặc phát trực tiếp file audio
						arrResult.push(result.secure_url); // Lưu link vào mảng để thao tác với nó
					}
				}
			);
		} catch (err) {
			console.log('Error:', err);
			continue; // Nếu có l��i xảy ra, b�� qua và tiếp tục upload các tập tin tiếp theo.
		}
	}
	console.log(arrResult);
}

module.exports = { uploadAudio };
