const cloudinary = require('cloudinary').v2;

cloudinary.config({
	cloud_name: 'dwzptn5fj',
	api_key: '814953298218439',
	api_secret: 'r0yqWcSE3Tv3IDjzqn_25P06eVE',
});

const arrAudio = [
	require('../../resource/audio/Attention.mp3'),
	require('../../resource/audio/HuKhong-Kha.mp3'),
	require('../../resource/audio/lemontree.mp3'),
	require('../../resource/audio/rington.mp3'),
	require('../../resource/audio/sou.mp3'),
	require('../../resource/audio/Summerise.mp3'),
	require('../../resource/audio/tinhtahainga.mp3'),
];

async function uploadAudio() {
	for (let i = 0; i < audio.length; i++) {
		await cloudinary.uploader.upload(
			arrAudio[i],
			{ resource_type: 'video' }, // Đặt loại tài nguyên là "video" vì Cloudinary xử lý audio và video chung
			function (error, result) {
				if (error) {
					console.log('Upload Error:', error);
				} else {
					console.log('Upload Success:', result);
					console.log('Audio URL:', result.secure_url); // Đây là link tải về hoặc phát trực tiếp file audio
				}
			}
		);
	}
}

module.exports = { uploadAudio };
