import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ImageBackground,
	StatusBar,
	ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

function Premium(props) {
	return (
		<ScrollView style={styles.container}>
			<StatusBar style="auto" />
			<View
				style={{
					flex: 30,
					position: 'relative',
					height: 200,
				}}
			>
				<ImageBackground
					source={{
						uri: 'https://recmiennam.com/wp-content/uploads/2018/03/hoang-hon-tren-bien-1.jpg',
					}}
					style={{
						width: '100%',
						height: '100%',
					}}
				/>
				<View
					style={{
						width: '100%',
						height: '100%',
						paddingHorizontal: 20,
						backgroundColor: 'rgba(0,0,0,0.5)',
						position: 'absolute',
						flex: 100,
						justifyContent: 'center',
					}}
				>
					<View
						style={{
							width: '100%',
							flexDirection: 'row',
							marginBottom: 10,
						}}
					>
						<Icon name="spotify" size={30} color={'white'} />
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: 'white',
								marginHorizontal: 20,
							}}
						>
							Premium
						</Text>
					</View>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							width: '70%',
							flexWrap: 'wrap',
							color: 'white',
							marginBottom: 15,
						}}
					>
						Tò mò về gói Premium? Bạn thật may mắn
					</Text>
					<View
						style={{
							width: 150,
							height: 33,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'center',
							backgroundColor: 'rgba(217,217,217,0.2)',
						}}
					>
						<Icon name="bell" size={20} />
						<Text
							style={{
								fontSize: 13,
								color: 'white',
								marginLeft: 10,
							}}
						>
							Ưu đãi có hạn
						</Text>
					</View>
				</View>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<View
					style={{
						width: '100%',
						backgroundColor: 'rgba(255,255,255,0.15)',
						borderRadius: 10,
						marginVertical: 10,
						padding: 8,
					}}
				>
					<View
						style={{
							height: 40,
							paddingHorizontal: 10,
							justifyContent: 'center',
						}}
					>
						<Text
							style={{
								fontSize: 14,
								fontWeight: 'bold',
								color: 'white',
							}}
						>
							Lý do nên dùng gói Premium
						</Text>
					</View>

					<View
						style={{
							height: 2,
							width: '100%',
							backgroundColor: 'white',
						}}
					/>
					<View
						style={{
							width: '100%',
							marginTop: 10,
						}}
					>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon
									name="volume-xmark"
									size={15}
									color={'white'}
								/>
							</View>
							<Text style={styles.listTextSale}>
								Nghe nhạc không quảng cáo
							</Text>
						</View>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon
									name="circle-down"
									size={15}
									color={'white'}
								/>
							</View>
							<Text style={styles.listTextSale}>
								Tải xuống để nghe offline
							</Text>
						</View>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon
									name="shuffle"
									size={15}
									color={'white'}
								/>
							</View>
							<Text style={styles.listTextSale}>
								Phát nhạc theo thứ tự bất kỳ
							</Text>
						</View>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon
									name="headphones"
									size={15}
									color={'white'}
								/>
							</View>
							<Text style={styles.listTextSale}>
								Chất lượng âm thanh cao
							</Text>
						</View>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon name="users" size={15} color={'white'} />
							</View>
							<Text style={styles.listTextSale}>
								Nghe cung bạn bè theo thời gian thực
							</Text>
						</View>
						<View style={styles.listSale}>
							<View style={styles.listIconSale}>
								<Icon
									name="list-ul"
									size={15}
									color={'white'}
								/>
							</View>

							<Text style={styles.listTextSale}>
								Sắp xếp danh sách chờ nghe
							</Text>
						</View>
					</View>
				</View>
				<View
					style={{
						width: '100%',
						marginTop: 8,
					}}
				>
					<Text
						style={{
							fontSize: 20,
							color: 'white',
							fontWeight: 'bold',
						}}
					>
						Các gói có sẵn
					</Text>
					<View
						style={{
							width: '100%',
							marginTop: 10,
							backgroundColor: 'rgba(255,255,255,0.15)',
							padding: 10,
							borderRadius: 10,
						}}
					>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginVertical: 10,
							}}
						>
							<Icon name="spotify" size={20} color={'white'} />
							<Text
								style={{
									fontSize: 13,
									fontWeight: 'bold',
									marginLeft: 10,
									color: 'white',
								}}
							>
								Premium
							</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: '#FFFF00',
								marginVertical: 5,
							}}
						>
							Mini
						</Text>
						<View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									1 tài khoản Premium chỉ dành cho thiết bị di
									động
								</Text>
							</View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									Nghe tối đa 30 bài hát trên 1 thiết bị khi
									không có kết nối mạng
								</Text>
							</View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									Thanh toán một lần
								</Text>
							</View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									Chất lượng âm thanh cơ bản
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ width: '100%', marginTop: 8 }}>
					<View
						style={{
							width: '100%',
							marginTop: 10,
							backgroundColor: 'rgba(255,255,255,0.15)',
							padding: 10,
							borderRadius: 10,
							position: 'relative',
						}}
					>
						<View
							style={{
								width: 110,
								height: 30,
								alignItems: 'center',
								justifyContent: 'center',
								backgroundColor: '#FFD2D5',
								borderTopLeftRadius: 10,
								borderBottomRightRadius: 10,
								position: 'absolute',
								top: 0,
								left: 0,
							}}
						>
							<Text style={{ fontWeight: 'bold' }}>
								Ưu đãi 2 tháng
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 40,
								marginBottom: 5,
							}}
						>
							<Icon name="spotify" size={20} color={'white'} />
							<Text
								style={{
									fontSize: 13,
									fontWeight: 'bold',
									marginLeft: 10,
									color: 'white',
								}}
							>
								Premium
							</Text>
						</View>
						<Text
							style={{
								fontSize: 20,
								fontWeight: 'bold',
								color: '#FFFF00',
								marginVertical: 7,
							}}
						>
							Individual
						</Text>
						<View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									1 tài khoản Premium
								</Text>
							</View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									Hủy bất cứ lúc nào
								</Text>
							</View>
							<View style={styles.listSale}>
								<View style={styles.listIconSale}>
									<Icon
										name="circle"
										size={8}
										color={'white'}
									/>
								</View>

								<Text style={styles.listTextSale}>
									Đăng ký hoặc thanh toán một lần
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		backgroundColor: '#101010',
	},
	listSale: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 4,
	},
	listTextSale: {
		fontSize: 13,
		color: 'white',
		width: '90%',
		paddingLeft: 10,
	},
	listIconSale: {
		flex: 1,
		alignItems: 'center',
	},
});

export default Premium;
