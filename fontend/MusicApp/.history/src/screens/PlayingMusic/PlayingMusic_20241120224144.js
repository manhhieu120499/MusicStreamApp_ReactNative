import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	Text,
	StatusBar,
	StyleSheet,
	SafeAreaView,
	Animated,
	Easing,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import { RandomIcon, ReflectIcon, RepeatIcon } from '../../../components/Icon';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import ConvertTime from '../../../utilities/ConvertTime';
import { fetchData } from '../../../axios';

function PlayingMusic(props) {
	// const [data, setData] = useState([
	// 	{
	// 		id: 1,
	// 		title: 'Attention - Charliput',
	// 		author: 'Charliput',
	// 		image: 'https://i.scdn.co/image/ab67616d0000b27385e10f64143313263cd25af5',
	// 		src: require('../../../assets/audio/Attention.mp3'),
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'HuKhong - Kha',
	// 		author: 'Kha',
	// 		image: 'https://i.scdn.co/image/ab67616d0000b27382358b9e4d73bf8b38129eda',
	// 		src: require('../../../assets/audio/HuKhong-Kha.mp3'),
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'LemonTree',
	// 		author: 'DJ DESA',
	// 		image: 'https://i.scdn.co/image/ab67616d0000b273310928489d92d67a26a8df04',
	// 		src: require('../../../assets/audio/lemontree.mp3'),
	// 	},
	// 	{
	// 		id: 4,
	// 		title: 'rington',
	// 		author: 'Apple',
	// 		image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s',
	// 		src: require('../../../assets/audio/rington.mp3'),
	// 	},
	// 	{
	// 		id: 5,
	// 		title: 'Summerise - Sunshie',
	// 		author: 'Sunshie',
	// 		image: 'https://i.scdn.co/image/ab67616d0000b273f8098faa3f94e7639891ec8f',
	// 		src: require('../../../assets/audio/Summerise.mp3'),
	// 	},
	// 	{
	// 		id: 6,
	// 		title: 'Tình ta hai ngã - Aki Khoa',
	// 		author: 'Aki Khoa',
	// 		image: 'https://photo-resize-zmp3.zadn.vn/w600_r1x1_jpeg/cover/d/0/3/3/d03338f37bcf00ce8efd35b4023703ad.jpg',
	// 		src: require('../../../assets/audio/tinhtahainga.mp3'),
	// 	},
	// 	{
	// 		id: 7,
	// 		title: 'Sou Favela',
	// 		author: 'LeTra',
	// 		image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/46/91/da/4691daf9-73b6-5697-2440-4f97d34ca65b/00192562931912_Cover.jpg/1200x1200bf-60.jpg',
	// 		src: require('../../../assets/audio/sou.mp3'),
	// 	},
	// ]);
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;
	const [data, setData] = useState([
		{
			id: '',
			title: '',
			author: '',
			image: '',
			src: '',
		},
	]);
	const [isPlaying, setPlaying] = useState(false);
	const [currentPosition, setCurrentPosition] = useState('0:00');
	const [duration, setDuration] = useState('3:43');
	const [option, setOption] = useState({
		random: false,
		repeat: false,
	});
	const repeatRef = useRef();
	const randomRef = useRef();
	repeatRef.current = option.repeat;
	randomRef.current = option.random;
	const [index, setIndex] = useState(0);
	const [sound, setSound] = useState();
	const [position, setPosition] = useState(0);
	// dùng để update index mới nhất vì setIndex update later gây ra lỗi phần tự động chuyển bài hát
	const indexUpdate = useRef();
	indexUpdate.current = index;
	const [sliderValue, setSliderValue] = useState(0);
	const [flagCheckPreOrNextPlay, setFlagCheckPreOrNextPlay] = useState(false);
	const soundLongRef = useRef();
	const rotateValue = useRef(new Animated.Value(0)).current;
	const rotateLoop = useRef(null);

	Audio.setAudioModeAsync({
		allowsRecordingIOS: false,
		staysActiveInBackground: true,
		playsInSilentModeIOS: true, // Đảm bảo phát âm thanh ngay cả khi thiết bị ở chế độ im lặng
	});

	const fetchSong = async () => {
		const data = await fetchData('/songs/');
		setData(data);
	};

	useEffect(() => {
		fetchSong();
	}, []);

	useEffect(() => {
		console.log(option);
	}, [option]);

	const startRotate = () => {
		rotateValue.setValue(0); // Đặt lại giá trị xoay về 0
		rotateLoop.current = Animated.loop(
			Animated.timing(rotateValue, {
				toValue: 1,
				duration: 5000, // Thời gian xoay (ms)
				easing: Easing.linear,
				useNativeDriver: true,
			})
		);
		rotateLoop.current.start();
	};

	// Sử dụng interpolate để biến đổi giá trị từ 0-1 thành 0-360 độ
	const rotateInterpolate = rotateValue.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	const handlePlaySound = async () => {
		// khi chưa phát nhạc
		if (!isPlaying) {
			// kiểm tra audio đã có chưa
			if (sound == undefined) {
				loadAndPlayNewTrack(indexUpdate.current, true);
				startRotate();
			} else {
				if (sound && flagCheckPreOrNextPlay == true) {
					console.log(3);
					loadAndPlayNewTrack(indexUpdate.current, true);
					setFlagCheckPreOrNextPlay(false);
				} else {
					console.log(2);
					// phát tiếp vị trí đã dừng
					await sound.playFromPositionAsync(position);
					sound.setOnPlaybackStatusUpdate(handleMusicOnEnded);
				}
				startRotate();
			}
		} else {
			// khi dừng thì lưu lại vị trí lúc dừng để thực hiện phát lại
			await sound.pauseAsync();
			const status = await sound.getStatusAsync();
			setPosition(status.positionMillis);
			rotateLoop.current.stop();
		}
	};

	const setIndexAndPlayTrack = async (trackIndex, autoPlay = false) => {
		try {
			setIndex(trackIndex); // Update the index first
			await loadAndPlayNewTrack(trackIndex, autoPlay); // Then call the function to load and play the track
		} catch (e) {
			console.log('Error setting index and playing music:', e);
		}
	};

	const updateSound = (trackIndex, newSound) => {
		return new Promise((resolve) => {
			setSound(() => {
				setIndex(trackIndex);
				resolve();
				return newSound;
			});
		});
	};

	const loadAndPlayNewTrack = async (trackIndex, autoPlay = false) => {
		try {
			await removeCacheMusicBefore();
			const { sound: newSoundItem } = await Audio.Sound.createAsync(
				// data[trackIndex].src,
				{
					uri: data[trackIndex].src,
				},
				{
					shouldPlay: autoPlay,
				}
			);

			const status = await newSoundItem.getStatusAsync();
			soundLongRef.current = status.durationMillis;

			await updateSound(trackIndex, newSoundItem);
			// Thiết lập theo dõi trạng thái phát nhạc
			newSoundItem.setOnPlaybackStatusUpdate(handleMusicOnEnded);

			if (isPlaying) {
				await newSoundItem.playAsync();
			}
		} catch (e) {
			console.log('Error playing music: ', e);
		}
	};

	const removeCacheMusicBefore = async () => {
		if (sound) {
			// Dừng và giải phóng bài nhạc trước đó
			await sound.unloadAsync();
			setSound(); // Đặt lại giá trị sound thành undefine
		}
	};

	const handleMusicOnEnded = async (status) => {
		if (status.didJustFinish) {
			console.log(option);
			if (repeatRef.current == true) {
				console.log('have seen');
				loadAndPlayNewTrack(indexUpdate.current, true);
			} else if (randomRef.current == true) {
				const updateIndex = Math.floor(Math.random() * data.length);
				await loadAndPlayNewTrack(updateIndex, true);
			} else {
				const updateIndex = 0;
				if (indexUpdate.current == data.length - 1) {
					await setIndexAndPlayTrack(updateIndex, true);
				} else {
					await setIndexAndPlayTrack(indexUpdate.current + 1, true);
					indexUpdate.current++;
				}
			}
			setCurrentPosition('0:0');
		}
		if (status.isPlaying) {
			const percentage =
				(status.positionMillis / status.durationMillis) * 100;
			setCurrentPosition(ConvertTime(status.positionMillis / 1000));
			setSliderValue(percentage);
		}
		if (status.isLoaded) {
			const time = ConvertTime(status.durationMillis / 1000);
			setDuration(time);
		}
	};

	const handleBtnNext = async () => {
		let newIndex;
		if (randomRef.current)
			newIndex = Math.floor(Math.random() * data.length);
		else if (indexUpdate.current < data.length - 1) {
			newIndex = index + 1;
		} else {
			newIndex = 0;
		}
		indexUpdate.current = newIndex;
		setCurrentPosition('0:0');
		setSliderValue(0);
		setFlagCheckPreOrNextPlay(true);
		await setIndexAndPlayTrack(newIndex);
	};

	const handleBtnPrev = async () => {
		let newIndex;
		if (randomRef.current) {
			newIndex = Math.floor(Math.random() * data.length);
		} else if (indexUpdate.current > 0) {
			newIndex = indexUpdate.current - 1;
		} else if (indexUpdate.current == 0) {
			newIndex = data.length - 1;
		}
		indexUpdate.current = newIndex;
		setCurrentPosition('0:0');
		setSliderValue(0);
		setFlagCheckPreOrNextPlay(true);
		await setIndexAndPlayTrack(newIndex);
	};

	const handleCompleteSilderChange = async (value) => {
		if (sound) {
			// Calculate the new position in milliseconds
			const newPosition = (value / 100) * soundLongRef.current;
			setCurrentPosition(ConvertTime(newPosition / 1000));
			if (isPlaying) await sound.playFromPositionAsync(newPosition);
			else {
				await sound.setPositionAsync(newPosition);
			}
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="auto" />
			<View
				style={{
					width: '100%',
					height: 80,
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
					paddingHorizontal: 15,
				}}
			>
				<Icon
					name="chevron-down"
					size={20}
					color={'white'}
					onPress={() => goBack('')}
				/>
				<Text
					style={{
						textAlign: 'center',
						color: 'white',
					}}
				>
					My playlist
				</Text>
				<Icon name="ellipsis-h" size={20} color={'white'} />
			</View>

			<View
				style={{
					width: '100%',
					height: 320,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Animated.View
					style={[
						{
							width: 300,
							height: 300,
							borderRadius: 10,
							borderRadius: isPlaying == true ? 150 : 10,
						},
						isPlaying == true
							? { transform: [{ rotate: rotateInterpolate }] }
							: {},
					]}
				>
					<Image
						source={{
							uri:
								data[index].image ||
								'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTIP7uCj-UAjFG-Fn9Syx2zRCSmN_aFqzsw&s',
						}}
						style={{
							width: '100%',
							height: '100%',
							borderRadius: 10,
							borderRadius: isPlaying == true ? 150 : 10,
						}}
					/>
				</Animated.View>
			</View>

			<View style={{ width: '100%', marginTop: 15 }}>
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						justifyContent: 'space-around',
						alignItems: 'center',
						paddingHorizontal: 7,
					}}
				>
					<Text
						style={{
							width: '70%',
							flexWrap: 'wrap',
							color: 'white',
							fontSize: 20,
							fontWeight: 'bold',
							height: 50,
							textAlignVertical: 'center',
						}}
						numberOfLines={3}
						ellipsizeMode="tail"
					>
						{data[index].title ?? ''}
					</Text>
					<Icon name="check-circle" size={20} color={'green'} />
				</View>
				<Text
					style={{
						marginLeft: 32,
						fontSize: 20,
						color: 'white',
						marginVertical: 8,
						width: '80%',
						height: 50,
						textAlignVertical: 'center',
					}}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					{data[index].author ?? ''}
				</Text>

				{/** progress bar */}
				<View style={{ width: '100%' }}>
					<Slider
						style={{
							width: '90%',
							height: 40,
							alignSelf: 'center',
						}}
						value={sliderValue}
						minimumValue={0}
						maximumValue={100}
						minimumTrackTintColor="#ccc"
						maximumTrackTintColor="white"
						thumbStyle={{ width: 10, height: 10, borderRadius: 5 }}
						onValueChange={(value) =>
							setSliderValue(
								ConvertTime(
									(value / 100) * soundLongRef.current
								)
							)
						}
						onSlidingComplete={(value) =>
							handleCompleteSilderChange(value)
						}
						step={1}
					/>
					<View
						style={{
							flexDirection: 'row',
							paddingHorizontal: 30,
							justifyContent: 'space-between',
						}}
					>
						<Text style={{ color: 'white' }}>
							{currentPosition}
						</Text>
						<Text style={{ color: 'white' }}>{duration}</Text>
					</View>
				</View>
				{/** play music */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						paddingHorizontal: 30,
						width: '100%',
						justifyContent: 'space-between',
						marginTop: 5,
					}}
				>
					<TouchableOpacity
						onPress={() => {
							setOption((preOption) => {
								randomRef.current = !randomRef.current;
								return {
									...preOption,
									random: !preOption.random,
								};
							});
						}}
					>
						<RandomIcon
							color={option.random == true ? 'green' : 'white'}
						/>
					</TouchableOpacity>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '50%',
							justifyContent: 'space-between',
						}}
					>
						<TouchableOpacity onPress={() => handleBtnPrev()}>
							<Icon
								name="step-backward"
								size={25}
								color={'white'}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => {
								handlePlaySound();
								setPlaying(!isPlaying);
							}}
						>
							{!isPlaying && (
								<Icon
									name="play-circle"
									size={60}
									color={'white'}
								/>
							)}
							{isPlaying && (
								<Icon
									name="pause-circle"
									size={60}
									color={'white'}
								/>
							)}
						</TouchableOpacity>
						<TouchableOpacity onPress={() => handleBtnNext()}>
							<Icon
								name="step-forward"
								size={25}
								color={'white'}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() => {
							setOption((prevOption) => {
								repeatRef.current = !repeatRef.current;
								return {
									...prevOption,
									repeat: !prevOption.repeat,
								};
							});
						}}
					>
						<RepeatIcon
							color={option.repeat == true ? 'green' : 'white'}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						width: '100%',
						paddingHorizontal: 30,
						flexDirection: 'row',
						justifyContent: 'space-between',
						marginTop: 15,
					}}
				>
					<TouchableOpacity>
						<ReflectIcon />
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon5
							name="arrow-up-from-bracket"
							size={20}
							color={'white'}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		backgroundColor: '#702727',
	},
});

export default PlayingMusic;
