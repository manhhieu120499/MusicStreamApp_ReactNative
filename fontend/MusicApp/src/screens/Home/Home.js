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
import MusicTab from './MusicTab';
import PodcastTab from './PodcastTab';
import Navbar from './Navbar';

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
	const { navigate, goBack } = props.navigation;
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
				<Navbar
					styles={styles}
					state={[active, setActive]}
					onPress={{ navigate, goBack }}
				/>
				{active.all && (
					<>
						<MusicTab
							data={[data, dataTwo, dataThree]}
							navigation={{ navigate, goBack }}
						/>
						<PodcastTab data={dataPodcast} />
					</>
				)}
				{active.music && <MusicTab data={[data, dataTwo, dataThree]} />}
				{active.podcast && <PodcastTab data={dataPodcast} />}
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
