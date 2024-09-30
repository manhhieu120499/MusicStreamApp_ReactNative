import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import {
	Popular,
	Album,
	Event,
	Artist,
	Playlist,
} from '../../../../components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';

const popular = [
	{
		id: 1,
		title: 'Bật Tình Yêu Lên',
		views: '17.886.145',
		uri: 'https://i.scdn.co/image/ab67616d00001e021e843401f662f331d0eeded7',
	},
	{
		id: 2,
		title: 'Không Thể Cùng Nhau Suốt Kiếp',
		views: '17.886.145',
		uri: 'https://i.scdn.co/image/ab67616d00001e02eb667eeea7b8e2435878f56b',
	},
	{
		id: 3,
		title: 'Rời Bỏ',
		views: '17.886.145',
		uri: 'https://i.scdn.co/image/ab67616d00001e02a0d88a10d1e28c76dda2826c',
	},
	{
		id: 4,
		title: 'Thị Mầu',
		views: '17.886.145',
		uri: 'https://i.scdn.co/image/ab67616d00001e02f45feff6341ef614db701a49',
	},
	{
		id: 5,
		title: 'Kén cá chọn canh',
		views: '17.886.145',
		uri: 'https://i.scdn.co/image/ab67616d00001e02432981aa89124b663d0ea0b8',
	},
];
const album = [
	{
		id: 1,
		title: 'Bật Tình Yêu Lên',
		year: '2023 • Đĩa đơn',
		uri: 'https://i.scdn.co/image/ab67616d00001e021e843401f662f331d0eeded7',
	},
	{
		id: 2,
		title: 'Không Thể Cùng Nhau Suốt Kiếp',
		year: '2023 • Đĩa đơn',
		uri: 'https://i.scdn.co/image/ab67616d00001e02eb667eeea7b8e2435878f56b',
	},
	{
		id: 3,
		title: 'Rời Bỏ',
		year: '2023 • Đĩa đơn',
		uri: 'https://i.scdn.co/image/ab67616d00001e02a0d88a10d1e28c76dda2826c',
	},
	{
		id: 4,
		title: 'Thị Mầu',
		year: '2023 • Đĩa đơn',
		uri: 'https://i.scdn.co/image/ab67616d00001e02f45feff6341ef614db701a49',
	},
];
const event = [
	{
		id: 1,
		title: 'This Is Hòa Minzy',
		uri: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26gPeO-default.jpg',
	},
	{
		id: 2,
		title: 'Hòa Minzy Radio',
		uri: 'https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3BWBxpXDxofgji3RKZPIz8/vi',
	},
	{
		id: 3,
		title: 'Song Ca V-Pop',
		uri: 'https://i.scdn.co/image/ab67706f000000022bc4242d1c93f8768509a4a0',
	},
	{
		id: 4,
		title: 'Best of V-Pop Không Thể Thiếu 2023',
		uri: 'https://i.scdn.co/image/ab67706f00000002084387e06ca83f175694b9eb',
	},
	{
		id: 5,
		title: 'Tiến Lên Việt Nam Ơi',
		uri: 'https://i.scdn.co/image/ab67706f00000002c06525ae9f0aba656edd8852',
	},
];
const playList = [
	{
		id: 1,
		title: 'Chỉ Thích Nhạc Hòa Minzy',
		uri: 'https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84795b083b034af430a9d76154',
	},
	{
		id: 2,
		title: 'Nàng Thơ Nhạc Việt',
		uri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f008a5ebad9e89061a43b716',
	},
	{
		id: 3,
		title: 'Nhạc Việt Ngày Mới',
		uri: 'https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c4d6af6fa8afcfedfc083fd1e',
	},
	{
		id: 4,
		title: 'This Is Hòa Minzy',
		uri: 'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26gPeO-default.jpg',
	},
];
const artist = [
	{
		id: 1,
		name: 'Issac',
		uri: 'https://i.scdn.co/image/ab67616100005174cb44ea77e9b885b05ea60e8a',
	},
	{
		id: 2,
		name: 'Anh Tú',
		uri: 'https://i.scdn.co/image/ab67616100005174653268b19c265e835504190e',
	},
	{
		id: 3,
		name: 'Hương Giang',
		uri: 'https://i.scdn.co/image/ab67616100005174813f1953da358f0e68a42b5c',
	},
	{
		id: 4,
		name: 'Miu Lê',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 5,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 6,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 7,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 8,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 9,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
	{
		id: 10,
		name: 'Hòa Minzy',
		uri: 'https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8',
	},
];

const data = {
	uriBanner: require('../../../../assets/img/profile/banner.png'),
	nameArtist: 'Hòa Minzy',
	followers: '410,1N',
	popular: popular,
	album: album,
	event: event,
	playList: playList,
	uriAvatar:
		'https://i.scdn.co/image/ab67616100005174c5ca014c7d8a729016b3b5f0',
	artist: artist,
};

function Profile(props) {
	const {
		uriBanner = data.uriBanner,
		nameArtist = data.nameArtist,
		followers = data.followers,
		popular = data.popular,
		album = data.album,
		event = data.event,
		playList = data.playList,
		uriAvatar = data.uriAvatar,
		artist = data.artist,
	} = props;
	return (
		<LinearGradient
			colors={['#361913', '#000']}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.container}
		>
			<StatusBar style="light" />
			<View style={{ position: 'relative' }}>
				<Image source={uriBanner} />
				<Text
					style={{
						fontSize: 48,
						fontWeight: '900',
						color: '#fff',
						position: 'absolute',
						bottom: 10,
						left: 30,
					}}
				>
					{nameArtist}
				</Text>
			</View>
			<ScrollView
				showsVerticalScrollIndicator={false}
				style={{ paddingHorizontal: 15 }}
			>
				<View style={{ marginTop: 20 }}>
					<Text style={{ color: '#B2A8A8', fontSize: 14 }}>
						{followers} người nghe hàng tháng
					</Text>
					<View
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
							marginTop: 15,
						}}
					>
						<TouchableOpacity
							style={{
								borderWidth: 1,
								borderColor: '#fff',
								paddingVertical: 5,
								paddingHorizontal: 15,
								borderRadius: 7,
							}}
						>
							<Text
								style={{
									fontSize: 14,
									color: '#fff',
									textAlign: 'center',
									fontWeight: '600',
								}}
							>
								Đang theo dõi
							</Text>
						</TouchableOpacity>
						<Icon name="ellipsis-v" size={24} color="#B2A8A8" />
						<Icon name="random" size={24} color="#1ED760" />
						<Icon name="play" size={24} color="#1ED760" />
					</View>
				</View>
				<View style={{ marginTop: 20 }}>
					<Text style={styles.text}>Phổ biến</Text>
					<Popular popular={popular} />
				</View>
				<View style={{ marginTop: 20 }}>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Text style={styles.text}>
							Bản phát hành mới phổ biến
						</Text>
						<Text
							style={{
								fontSize: 13,
								color: '#B2A8A8',
								fontWeight: '600',
							}}
						>
							Hiện tất cả
						</Text>
					</View>
					<Album album={album} />
					<View
						style={{
							borderWidth: 1,
							borderColor: '#4B4A4A',
							width: '60%',
							borderRadius: 20,
							alignSelf: 'center',
							padding: 5,
						}}
					>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '700',
								color: '#fff',
								textAlign: 'center',
							}}
						>
							Xem danh sách đĩa nhạc
						</Text>
					</View>
				</View>
				<View style={{ marginTop: 30 }}>
					<Text style={styles.text}>
						Có sự tham gia của {nameArtist}
					</Text>
					<Event event={event} />
				</View>
				<View style={{ marginTop: 20 }}>
					<Text style={styles.text}>Giới thiệu</Text>
					<View style={{ marginTop: 15 }}>
						<Image
							source={{
								uri: uriAvatar,
							}}
							style={{
								height: 350,
								width: '100%',
								borderRadius: 10,
							}}
						/>
						<View
							style={{
								...StyleSheet.absoluteFillObject,
								backgroundColor: 'rgba(0, 0, 0, 0.3)',
								borderRadius: 10,
							}}
						/>
					</View>
					<View
						style={{
							flexDirection: 'row',
							columnGap: 10,
							alignItems: 'center',
							position: 'absolute',
							top: 50,
							left: 20,
						}}
					>
						<Icon name="check" size={17} color="#0071BD" />
						<Text
							style={{
								fontSize: 13,
								fontWeight: '400',
								color: '#fff',
							}}
						>
							Nghệ sĩ đã xác minh
						</Text>
					</View>
					<View
						style={{
							flexDirection: 'row',
							columnGap: 10,
							alignItems: 'flex-end',
							position: 'absolute',
							bottom: 30,
							left: 20,
						}}
					>
						<Text style={styles.text}>{followers}</Text>
						<Text
							style={{
								fontSize: 13,
								fontWeight: '400',
								color: '#fff',
							}}
						>
							NGƯỜI NGHE HÀNG THÁNG
						</Text>
					</View>
				</View>
				<View style={{ marginTop: 40 }}>
					<Text style={styles.text}>Playlist dựa trên Nghệ sĩ</Text>
					<Playlist playList={playList} />
				</View>
				<View style={{ marginTop: 20, marginBottom: 100 }}>
					<Text style={styles.text}>Fan cũng thích</Text>
					<Artist artist={artist} />
				</View>
			</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
	},
	text: {
		color: '#fff',
		fontSize: 18,
		fontWeight: '700',
	},
});

export default Profile;
