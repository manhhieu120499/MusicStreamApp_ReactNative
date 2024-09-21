import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { CirclePlus, UploadIcon } from '../../Icon';

function ChapterItem({ data }) {
	const { item, lengthChapter } = data;

	return (
		<View
			style={{
				width: '100%',
				borderBottomColor: 'rgba(255,255,255,0.5)',
				borderBottomWidth: 1,
				paddingBottom: 12,
				marginBottom: 10,
			}}
		>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					alignItems: 'center',
				}}
			>
				<Image
					source={
						item.img || {
							uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTIP7uCj-UAjFG-Fn9Syx2zRCSmN_aFqzsw&s',
						}
					}
					style={{ width: 45, height: 45, borderRadius: 5 }}
				/>
				<Text
					style={{
						fontSize: 13,
						fontWeight: 'bold',
						color: 'white',
						width: '70%',
						marginLeft: 10,
					}}
				>
					{item.title}
				</Text>
			</View>
			<View style={{ width: '100%', marginVertical: 8 }}>
				<Text style={{ color: 'white', fontSize: 13 }}>
					Tập {item.session}/{lengthChapter} Không gia đình
				</Text>
				<Text
					style={{
						color: 'white',
						fontSize: 13,
						marginVertical: 4,
						fontWeight: 'bold',
					}}
				>
					{item.date} {item.duration}
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<View
					style={{
						width: '40%',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<CirclePlus />
					<UploadIcon />
					<Icon name="ellipsis-vertical" size={20} color={'white'} />
				</View>
				<TouchableOpacity>
					<Icon name="circle-play" size={40} color={'white'} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

export default ChapterItem;
