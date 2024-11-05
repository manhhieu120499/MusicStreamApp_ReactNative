const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dwzptn5fj',
	api_key: '814953298218439',
	api_secret: 'r0yqWcSE3Tv3IDjzqn_25P06eVE',
});

const arrAudio = [
	'../../resource/audio/Attention.mp3',
	'../../resource/audio/HuKhong-Kha.mp3',
	'../../resource/audio/lemontree.mp3',
	'../../resource/audio/rington.mp3',
	'../../resource/audio/sou.mp3',
	'../../resource/audio/Summerise.mp3',
	'../../resource/audio/tinhtahainga.mp3',
];

async function uploadAudio() {
	const arrResult = [];
	for (let i = 0; i < arrAudio.length; i++) {
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
	}
	console.log(arrResult);
}

module.exports = { uploadAudio };
