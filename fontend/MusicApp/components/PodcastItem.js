import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Icon5 from 'react-native-vector-icons/FontAwesome5';

function PodcastItem(props) {
	const { title, author, date, time, content, img } = props.data;
	const [showIcon, setShowIcon] = useState(false);
	return (
		<View
			style={{
				width: '90%',
				paddingHorizontal: 10,
				backgroundColor: 'rgba(204,204,204,0.1)',
				alignItems: 'center',
				borderRadius: 15,
				alignSelf: 'center',
				marginBottom: 15,
			}}
		>
			{/** header podcast */}
			<View
				style={{
					width: '100%',
					height: 100,
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<View style={{ width: '85%' }}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: 'white',
						}}
					>
						{title}
					</Text>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 5,
						}}
					>
						<Text style={{ color: '#ccc' }}>Tập</Text>
						<Icon
							name="circle"
							size={8}
							color={'#ccc'}
							style={{ marginHorizontal: 4 }}
						/>
						<Text
							style={{
								color: '#ccc',
								fontSize: 13,
								fontWeight: 'bold',
							}}
						>
							{author}
						</Text>
					</View>
				</View>
				<Icon
					name="circle-plus"
					size={20}
					color={'white'}
					style={{ marginTop: 25, alignSelf: 'flex-start' }}
				/>
			</View>
			{/** body podcast */}
			<View>
				<Image
					source={require('../assets/img/podcast/image.jpg')}
					style={{
						width: 100,
						height: 100,
						borderRadius: 5,
						alignSelf: 'center',
					}}
				/>
				<View style={{ width: '100%', marginTop: 10 }}>
					<Text style={{ alignItems: 'center' }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginRight: 4,
							}}
						>
							<Text
								style={{
									color: '#ccc',
									fontWeight: 'bold',
									fontSize: 13,
								}}
							>
								{date}
							</Text>
							<Icon
								name="circle"
								size={8}
								color={'#ccc'}
								style={{ marginHorizontal: 4 }}
							/>
							<Text
								style={{
									color: '#ccc',
									fontWeight: 'bold',
									fontSize: 13,
								}}
							>
								{time}
							</Text>
						</View>
						<Text style={{ color: '#ccc', fontSize: 13 }}>
							{content}
						</Text>
					</Text>
				</View>
			</View>
			{/** footer podcast */}
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
					width: '100%',
					marginVertical: 15,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: 40,
						width: 150,
						backgroundColor: 'rgba(0,0,0,0.8)',
						borderRadius: 20,
						justifyContent: 'space-around',
					}}
				>
					<TouchableOpacity onPress={() => setShowIcon(!showIcon)}>
						{showIcon && (
							<Icon5 name="volume-up" size={20} color={'white'} />
						)}
						{!showIcon && (
							<Icon
								name="volume-xmark"
								size={20}
								color={'white'}
							/>
						)}
					</TouchableOpacity>
					<Text style={{ fontSize: 13, color: 'white' }}>
						Xem trước tập
					</Text>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<TouchableOpacity>
						<Icon
							name="ellipsis"
							size={20}
							color={'white'}
							style={{ marginHorizontal: 10 }}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Icon name="circle-play" size={40} color={'white'} />
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
}

export default PodcastItem;
