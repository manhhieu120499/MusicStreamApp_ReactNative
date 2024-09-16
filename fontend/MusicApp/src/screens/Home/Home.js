import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Image,
	ScrollView,
	FlatList,
	StatusBar,
} from 'react-native';
import { MusicItem } from '../../../components';
import PodcastItem from '../../../components/PodcastItem';

const data = [
	{
		id: 1,
		img: require('../../../assets/img/favorite/image.jpg'),
		major: 'Nghệ thuật',
		title: 'ROSE and BLACKPINK',
		des: 'Chương trình Nh_R',
		size: 'middle',
	},
	{
		id: 2,
		img: require('../../../assets/img/favorite/image2.jpg'),
		major: 'Nghệ thuật',
		title: 'ROSE cover - Gone',
		des: `Chương trình\ndsfgjkroboitvn.com`,
		size: 'middle',
	},
	{
		id: 3,
		img: require('../../../assets/img/favorite/image3.jpg'),
		major: 'Nghệ thuật',
		title: 'ROSE and BLACKPINK',
		des: 'Chương trình Nh_R',
		size: 'middle',
	},
];

const dataTwo = [
	{
		id: 1,
		img: require('../../../assets/img/album/image3.jpg'),
		title: 'Reddy, Hiền Hồ và Noo Phước Thịnh',
		size: 'middle',
	},
	{
		id: 2,
		img: require('../../../assets/img/album/image2.jpg'),
		title: 'Djo, TheNeighbourhood, Arctic Monkeys và nhiều...',
		size: 'middle',
	},
	{
		id: 3,
		img: require('../../../assets/img/album/image.jpg'),
		title: 'Billie Eilish, Sabrina Carpenter, Chappell...',
		size: 'middle',
	},
	{
		id: 4,
		img: '',
		title: 'ROSE and BLACKPINK',
		size: 'middle',
	},
];

const dataThree = [
	{
		id: 1,
		img: require('../../../assets/img/recentAlbum/image.jpg'),
		title: 'ANH TRAI “SAY HI” Radio',
		size: 'small',
	},
	{
		id: 2,
		img: require('../../../assets/img/recentAlbum/image2.jpg'),
		title: 'HieuThuHai Radio',
		size: 'small',
	},
	{
		id: 3,
		img: require('../../../assets/img/recentAlbum/image3.jpg'),
		title: 'Hoa Nở Không Màu guitar',
		size: 'small',
	},
	{
		id: 4,
		img: require('../../../assets/img/recentAlbum/image4.jpg'),
		title: 'Thanh Hưng Radio',
		size: 'small',
	},
];

const dataPodcast = [
	{
		id: 1,
		title: 'Con Nưa Trong Góc Bếp - 10 Nưa Con Báo',
		author: 'Truyện Đình Soạn',
		date: 'thg 4 5',
		time: '1 giờ, 6 phút',
		content: `Con nưa là một rắn độc thuộc chi Dabodia, đến từ Ấn Độ, được xem là 1 trong bốn loài rắn độc nguy hiểm nhất tại khu vực Ấn Độ. Truyện Ma Đình Soạn - Kênh chính thức của MC Đình Soạn, mong rằng quý khán thính giả luôn...`,
		img: require('../../../assets/img/podcast/image.jpg'),
	},
	{
		id: 2,
		title: 'Con Nưa Trong Góc Bếp - 10 Nưa Con Báo',
		author: 'Truyện Đình Soạn',
		date: 'thg 4 5',
		time: '1 giờ, 6 phút',
		content: `Con nưa là một rắn độc thuộc chi Dabodia, đến từ Ấn Độ, được xem là 1 trong bốn loài rắn độc nguy hiểm nhất tại khu vực Ấn Độ. Truyện Ma Đình Soạn - Kênh chính thức của MC Đình Soạn, mong rằng quý khán thính giả luôn...`,
		img: require('../../../assets/img/podcast/image.jpg'),
	},
	{
		id: 3,
		title: 'Con Nưa Trong Góc Bếp - 10 Nưa Con Báo',
		author: 'Truyện Đình Soạn',
		date: 'thg 4 5',
		time: '1 giờ, 6 phút',
		content: `Con nưa là một rắn độc thuộc chi Dabodia, đến từ Ấn Độ, được xem là 1 trong bốn loài rắn độc nguy hiểm nhất tại khu vực Ấn Độ. Truyện Ma Đình Soạn - Kênh chính thức của MC Đình Soạn, mong rằng quý khán thính giả luôn...`,
		img: require('../../../assets/img/podcast/image.jpg'),
	},
];

function Home(props) {
	const [active, setActive] = useState({
		all: true,
		music: false,
		podcast: false,
	});
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<ScrollView
				style={{ flex: 100, backgroundColor: '#101010' }}
				showsVerticalScrollIndicator={false}
			>
				{/**Navbar */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						height: 60,
						width: '100%',
					}}
				>
					<TouchableOpacity
						style={{ width: 40, height: 40, borderRadius: 20 }}
					>
						<Image
							source={{
								uri: 'https://i.pinimg.com/736x/a2/0d/a5/a20da505d402071bbbfc9bb55f59fb97.jpg',
							}}
							style={{
								width: '100%',
								height: '100%',
								borderRadius: 20,
							}}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.btnNavbar,
							{
								backgroundColor:
									active.all == true ? '#008000' : '#ccc',
							},
						]}
						onPress={() =>
							setActive({
								all: true,
								music: false,
								podcast: false,
							})
						}
					>
						<Text style={styles.txtBtnNavbar}>Tất cả</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.btnNavbar,
							{
								backgroundColor:
									active.music == true ? '#008000' : '#ccc',
							},
						]}
						onPress={() =>
							setActive({
								all: false,
								music: true,
								podcast: false,
							})
						}
					>
						<Text style={styles.txtBtnNavbar}>Nhạc</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							styles.btnNavbar,
							{
								backgroundColor:
									active.podcast == true ? '#008000' : '#ccc',
							},
						]}
						onPress={() =>
							setActive({
								all: false,
								music: false,
								podcast: true,
							})
						}
					>
						<Text style={styles.txtBtnNavbar}>Podcast</Text>
					</TouchableOpacity>
				</View>
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
							renderItem={({ item }) => <MusicItem data={item} />}
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
							renderItem={({ item }) => <MusicItem data={item} />}
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
				{/** podcasr */}
				<View style={{ width: '100%', marginTop: 20 }}>
					<FlatList
						data={dataPodcast}
						renderItem={({ item }) => <PodcastItem data={item} />}
						keyExtractor={(item) => item.id}
						showsHorizontalScrollIndicator={false}
						scrollEnabled={false}
					/>
				</View>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		backgroundColor: '#101010',
		paddingHorizontal: 15,
	},
	btnNavbar: {
		width: 78,
		height: 30,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ccc',
		marginHorizontal: 10,
	},
	txtBtnNavbar: {
		fontSize: 14,
		fontWeight: 'bold',
	},
});

export default Home;
