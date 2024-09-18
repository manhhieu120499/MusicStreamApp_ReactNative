import React, { useState } from 'react';
import {
	View,
	TouchableOpacity,
	Image,
	Text,
	StatusBar,
	StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome6';
import { RandomIcon, ReflectIcon, RepeatIcon } from '../../../components/Icon';
import Slider from '@react-native-community/slider';

function PlayingMusic(props) {
	const [isPlaying, setPlaying] = useState(false);
	const [startMusic, setStartMusic] = useState('0:0');
	const [endMusic, setEndMusic] = useState('3:43');
	const [repeat, setRepeat] = useState(false);
	const [random, setRandom] = useState(false);
	return (
		<View style={styles.container}>
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
				<Icon name="chevron-down" size={20} color={'white'} />
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
				<Image
					source={{
						uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTIP7uCj-UAjFG-Fn9Syx2zRCSmN_aFqzsw&s',
					}}
					width={300}
					height={300}
					style={{ borderRadius: 10 }}
				/>
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
						}}
						numberOfLines={3}
						ellipsizeMode="tail"
					>
						NGÁO NGƠ {'('}feat. HIEUTHUHAI, ERIK, Anh Tú Atus, Json
						& Orange
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
					}}
					numberOfLines={1}
					ellipsizeMode="tail"
				>
					ANH TRAI “SAY HI”, ERIK....
				</Text>

				{/** progress bar */}
				<View style={{ width: '100%' }}>
					<Slider
						style={{
							width: '90%',
							height: 40,
							alignSelf: 'center',
						}}
						minimumValue={0}
						maximumValue={100}
						minimumTrackTintColor="#ccc"
						maximumTrackTintColor="white"
						thumbStyle={{ width: 10, height: 10, borderRadius: 5 }}
					/>
					<View
						style={{
							flexDirection: 'row',
							paddingHorizontal: 30,
							justifyContent: 'space-between',
						}}
					>
						<Text style={{ color: 'white' }}>{startMusic}</Text>
						<Text style={{ color: 'white' }}>{endMusic}</Text>
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
					<TouchableOpacity onPress={() => setRandom(!random)}>
						<RandomIcon
							color={random == true ? 'green' : 'white'}
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
						<TouchableOpacity>
							<Icon
								name="step-backward"
								size={25}
								color={'white'}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => setPlaying(!isPlaying)}
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
						<TouchableOpacity>
							<Icon
								name="step-forward"
								size={25}
								color={'white'}
							/>
						</TouchableOpacity>
					</View>
					<TouchableOpacity onPress={() => setRepeat(!repeat)}>
						<RepeatIcon
							color={repeat == true ? 'green' : 'white'}
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
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		backgroundColor: '#702727',
	},
});

export default PlayingMusic;
