import React, { useState } from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	Image,
	StyleSheet,
	StatusBar,
	TextInput,
	ScrollView,
	FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ChapterItem from './ChapterItem';

const dataList = [
	{
		img: '',
		title: 'Không già đình',
		session: 1,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 2,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 3,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 4,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 5,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 6,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
	{
		img: '',
		title: 'Không già đình',
		session: 7,
		date: '23 thag 8, 2021',
		duration: '17 phút',
	},
];

function PreviewItem(props) {
	const { navigation, route } = props;
	const [active, setActive] = useState({
		chapter: true,
		introduce: false,
		samecontent: false,
	});
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Icon
				name="chevron-left"
				size={20}
				color="white"
				style={{ position: 'absolute', top: 20, paddingHorizontal: 15 }}
			/>
			<ScrollView>
				<View
					style={{
						width: '100%',
						height: 120,
						flexDirection: 'column',
						justifyContent: 'center',
					}}
				>
					{/** search */}
					<View
						style={{
							width: '100%',
							height: 36,
							backgroundColor: 'rgba(255,255,255,0.3)',
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 10,
							marginTop: 15,
							borderRadius: 5,
						}}
					>
						<Icon
							name="magnifying-glass"
							size={20}
							color={'white'}
						/>
						<TextInput
							placeholder="Tìm trong chương trình này"
							style={{
								width: '80%',
								height: 36,
								marginLeft: 10,
								fontWeight: 'bold',
							}}
							placeholderTextColor={'white'}
						/>
					</View>
				</View>

				{/** header */}
				<View
					style={{
						width: '100%',
					}}
				>
					<View
						style={{
							width: '100%',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View style={{ width: '30%' }}>
							<Image
								source={{
									uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTIP7uCj-UAjFG-Fn9Syx2zRCSmN_aFqzsw&s',
								}}
								style={{
									width: 100,
									height: 100,
									borderRadius: 10,
								}}
							/>
							<View
								style={{
									width: '100%',
									flexDirection: 'row',
									marginTop: 8,
									justifyContent: 'space-between',
								}}
							>
								<Icon name="star" size={15} color={'gray'} />
								<Text style={{ color: 'gray', fontSize: 11 }}>
									4,9 (502) Sách
								</Text>
							</View>
						</View>

						<View style={{ width: '60%' }}>
							<Text
								style={{
									fontSize: 20,
									color: 'white',
									fontWeight: 'bold',
								}}
							>
								Không Gia Đình
							</Text>
							<Text
								style={{
									fontSize: 13,
									color: 'white',
									fontWeight: 'bold',
									marginTop: 8,
								}}
							>
								Nguyễn Minh Quang
							</Text>
						</View>
					</View>

					<View
						style={{
							width: '100%',
							marginVertical: 10,
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								width: 46,
								height: 52,
								borderWidth: 4,
								borderRadius: 8,
								borderColor: 'white',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Image
								source={{
									uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjTIP7uCj-UAjFG-Fn9Syx2zRCSmN_aFqzsw&s',
								}}
								style={{
									width: 35,
									height: 42,
									borderRadius: 4,
								}}
							/>
						</View>
						<View
							style={{
								width: '80%',
								alignItems: 'center',
								flexDirection: 'row',
								justifyContent: 'space-around',
							}}
						>
							<TouchableOpacity
								style={{
									width: 86,
									height: 30,
									borderRadius: 20,
									borderWidth: 1,
									borderColor: 'rgba(204,204,204,0.8)',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Text
									style={{
										fontSize: 13,
										fontWeight: 'bold',
										color: 'white',
									}}
								>
									Theo dõi
								</Text>
							</TouchableOpacity>
							<Icon name="bell" size={20} color={'white'} />
							<Icon name="gear" size={20} color={'white'} />
							<Icon name="ellipsis" size={20} color={'white'} />
						</View>
					</View>
				</View>

				{/** body */}
				<View
					style={{
						width: '100%',
						flexDirection: 'row',
						justifyContent: 'space-between',
						paddingHorizontal: 8,
						height: 25,
					}}
				>
					<TouchableOpacity
						style={{ position: 'relative' }}
						onPress={() =>
							setActive({
								chapter: true,
								introduce: false,
								samecontent: false,
							})
						}
					>
						<Text
							style={{
								color:
									active.chapter == true ? 'white' : 'gray',
								fontSize: 13,
								fontWeight: 'bold',
							}}
						>
							Tập
						</Text>
						{active.chapter && (
							<View
								style={{
									height: 2,
									width: 40,
									backgroundColor: 'white',
									position: 'absolute',
									left: 0,
									bottom: 0,
								}}
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={{ position: 'relative' }}
						onPress={() =>
							setActive({
								chapter: false,
								introduce: true,
								samecontent: false,
							})
						}
					>
						<Text
							style={{
								color:
									active.introduce == true ? 'white' : 'gray',
								fontSize: 13,
								fontWeight: 'bold',
							}}
						>
							Giới thiệu
						</Text>
						{active.introduce && (
							<View
								style={{
									height: 2,
									width: 60,
									backgroundColor: 'white',
									position: 'absolute',
									left: 0,
									bottom: 0,
								}}
							/>
						)}
					</TouchableOpacity>
					<TouchableOpacity
						style={{ position: 'relative' }}
						onPress={() =>
							setActive({
								chapter: false,
								introduce: false,
								samecontent: true,
							})
						}
					>
						<Text
							style={{
								color:
									active.samecontent == true
										? 'white'
										: 'gray',
								fontSize: 13,
								fontWeight: 'bold',
							}}
						>
							Thêm nội dung tương tự
						</Text>
						{active.samecontent && (
							<View
								style={{
									height: 2,
									width: 140,
									backgroundColor: 'white',
									position: 'absolute',
									left: 0,
									bottom: 0,
								}}
							/>
						)}
					</TouchableOpacity>
				</View>
				{/** list chapter */}
				<View style={{ width: '100%', marginTop: 20 }}>
					<FlatList
						data={dataList}
						renderItem={({ item }) => (
							<ChapterItem
								data={{ item, lengthChapter: dataList.length }}
							/>
						)}
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
		position: 'relative',
	},
});

export default PreviewItem;
