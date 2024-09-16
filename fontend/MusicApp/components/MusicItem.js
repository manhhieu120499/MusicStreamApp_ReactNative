import React from 'react';
import { View, Text, Image } from 'react-native';

function MusicItem(props) {
	const { img, major, title, des, size } = props.data;
	return (
		<View
			style={{
				paddingRight: 20,
				marginTop: 15,
			}}
		>
			{/** music item of list music */}
			<View>
				<Image
					source={
						img || {
							uri: 'https://media.wired.com/photos/5926df59f3e2356fd800ab80/master/w_2560%2Cc_limit/GettyImages-543338600-S2.jpg',
						}
					}
					style={{
						width: size.toLowerCase() == 'middle' ? 140 : 80,
						height: size.toLowerCase() == 'middle' ? 140 : 80,
						borderRadius: 8,
					}}
				/>
				<View
					style={{
						paddingHorizontal: 5,
						width: size.toLowerCase() == 'middle' ? 140 : 80,
					}}
				>
					{major && (
						<Text
							style={{
								color: '#008000',
								fontSize: 12,
								fontWeight: 'bold',
								marginTop: 5,
								width: '100%',
								flexWrap: 'wrap',
							}}
						>
							{major}
						</Text>
					)}
					{title && (
						<Text
							style={{
								color: 'white',
								fontSize: 12,
								fontWeight: 'bold',
								marginTop: 5,
								width: '100%',
								flexWrap: 'wrap',
							}}
						>
							{title}
						</Text>
					)}
					{des && (
						<Text
							style={{
								color: '#ccc',
								fontSize: 12,
								fontWeight: 'bold',
								marginTop: 5,
								width: '100%',
								flexWrap: 'wrap',
							}}
						>
							{des}
						</Text>
					)}
				</View>
			</View>
		</View>
	);
}

export default MusicItem;
