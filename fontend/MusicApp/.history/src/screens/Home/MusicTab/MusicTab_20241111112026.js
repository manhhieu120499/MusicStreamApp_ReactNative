import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { MusicItem } from '../../../../components';
import { CLIENT_ID, CLIENT_SECRET } from '../../../../constant';

// const data = [
// 	{
// 		id: 1,
// 		img: require('../../../../assets/img/favorite/image.jpg'),
// 		major: 'Nghệ thuật',
// 		title: 'ROSE and BLACKPINK',
// 		des: 'Chương trình Nh_R',
// 		size: 'middle',
// 	},
// 	{
// 		id: 2,
// 		img: require('../../../../assets/img/favorite/image2.jpg'),
// 		major: 'Nghệ thuật',
// 		title: 'ROSE cover - Gone',
// 		des: `Chương trình\ndsfgjkroboitvn.com`,
// 		size: 'middle',
// 	},
// 	{
// 		id: 3,
// 		img: require('../../../../assets/img/favorite/image3.jpg'),
// 		major: 'Nghệ thuật',
// 		title: 'ROSE and BLACKPINK',
// 		des: 'Chương trình Nh_R',
// 		size: 'middle',
// 	},
// ];

// const dataTwo = [
// 	{
// 		id: 1,
// 		img: require('../../../../assets/img/album/image3.jpg'),
// 		title: 'Reddy, Hiền Hồ và Noo Phước Thịnh',
// 		size: 'middle',
// 	},
// 	{
// 		id: 2,
// 		img: require('../../../../assets/img/album/image2.jpg'),
// 		title: 'Djo, TheNeighbourhood, Arctic Monkeys và nhiều...',
// 		size: 'middle',
// 	},
// 	{
// 		id: 3,
// 		img: require('../../../../assets/img/album/image.jpg'),
// 		title: 'Billie Eilish, Sabrina Carpenter, Chappell...',
// 		size: 'middle',
// 	},
// 	{
// 		id: 4,
// 		img: '',
// 		title: 'ROSE and BLACKPINK',
// 		size: 'middle',
// 	},
// ];

// const dataThree = [
// 	{
// 		id: 1,
// 		img: require('../../../../assets/img/recentAlbum/image.jpg'),
// 		title: 'ANH TRAI “SAY HI” Radio',
// 		size: 'small',
// 	},
// 	{
// 		id: 2,
// 		img: require('../../../../assets/img/recentAlbum/image2.jpg'),
// 		title: 'HieuThuHai Radio',
// 		size: 'small',
// 	},
// 	{
// 		id: 3,
// 		img: require('../../../../assets/img/recentAlbum/image3.jpg'),
// 		title: 'Hoa Nở Không Màu guitar',
// 		size: 'small',
// 	},
// 	{
// 		id: 4,
// 		img: require('../../../../assets/img/recentAlbum/image4.jpg'),
// 		title: 'Thanh Hưng Radio',
// 		size: 'small',
// 	},
// ];
function MusicTab(props) {
	const [data, dataTwo, dataThree] = props.data;
	const { navigate, goBack } = props.navigation;

	const [newData, setNewData] = useState([]);
	const [accessToken, setAccessToken] = useState('');

	useEffect(() => {
		var authParameters = {
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
			body:
				'grant_type=client_credentials&client_id=' +
				CLIENT_ID +
				'&client_secret=' +
				CLIENT_SECRET +
				'',
		};
		fetch('https://accounts.spotify.com/api/token', authParameters)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setAccessToken(data);
			});
	}, []);

	// search data
	const callAlbumApi = async () => {
		const authParameters = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + accessToken,
			},
		};
		const res = await fetch(
			'https://api.spotify.com/v1/albums',
			authParameters
		);
		const data = await res.json();
		console.log(data);
	};

	useEffect(() => {
		callAlbumApi();
	}, []);

	return (
		<>
			<View style={{ width: '100%' }}>
				{/** header music */}
				<View
					style={{
						flexDirection: 'row',
						width: '100%',
						marginTop: 15,
					}}
				>
					<Image
						source={{
							uri: 'https://i.pinimg.com/736x/a2/0d/a5/a20da505d402071bbbfc9bb55f59fb97.jpg',
						}}
						style={{
							width: 45,
							height: 45,
							borderRadius: 8,
							marginRight: 10,
						}}
					/>
					<View>
						<Text style={{ fontSize: 14, color: 'white' }}>
							Phổ biến với người nghe của
						</Text>
						<Text
							style={{
								fontSize: 20,
								color: 'white',
								fontWeight: 'bold',
							}}
						>
							for my Rose
						</Text>
					</View>
				</View>
				{/** list music */}

				<View
					style={{
						width: '100%',
						marginTop: 10,
					}}
				>
					<FlatList
						data={data}
						renderItem={({ item }) => (
							<MusicItem
								data={item}
								// onPress={() => navigate('PreviewItem', item)}
							/>
						)}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>
			{/** album */}
			<View style={{ width: '100%', marginVertical: 20 }}>
				<Text
					style={{
						fontSize: 16,
						fontWeight: 'bold',
						color: 'white',
					}}
				>
					Tuyển tập nhạc hàng đầu của bạn
				</Text>
				<View
					style={{
						width: '100%',
						marginTop: 5,
					}}
				>
					<FlatList
						data={dataTwo}
						renderItem={({ item }) => (
							<MusicItem
								data={item}
								onPress={() => navigate('PlayingMusic')}
							/>
						)}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>
			<View style={{ width: '100%' }}>
				<Text
					style={{
						fontSize: 16,
						fontWeight: 'bold',
						color: 'white',
					}}
				>
					Mới phát gần đây
				</Text>
				<View
					style={{
						width: '100%',
						marginTop: 5,
					}}
				>
					<FlatList
						data={dataThree}
						renderItem={({ item }) => <MusicItem data={item} />}
						keyExtractor={(item) => item.id}
						horizontal={true}
						showsHorizontalScrollIndicator={false}
					/>
				</View>
			</View>
		</>
	);
}

export default MusicTab;
