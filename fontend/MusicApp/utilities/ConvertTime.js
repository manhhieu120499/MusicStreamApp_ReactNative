export default function ConvertTime(time) {
	const second = Math.floor(time / 60).toFixed(0);
	const milliseconds = Math.floor(time % 60).toFixed(0);
	return second + ':' + `${milliseconds < 10 ? '0' : ''}` + milliseconds;
}
