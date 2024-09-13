import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Register() {
	return (
		<View style={styles.container}>
			<View style={{ flex: 25 }} />
			<View style={{ flex: 75, alignItems: 'center' }}>
				<Icon name="spotify" size={50} color={'white'} />
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 24,
						color: 'white',
						marginVertical: 15,
						textAlign: 'center',
					}}
				>
					Hàng triệu bài hát.{'\n'}Miễn phí trên Spotify.
				</Text>
				<View
					style={{
						width: '100%',
						alignItems: 'center',
						marginVertical: 15,
					}}
				>
					<TouchableOpacity
						style={[
							styles.btn,
							{
								backgroundColor: '#1ED760',
								justifyContent: 'center',
							},
						]}
					>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 16,
								textAlign: 'center',
							}}
						>
							Đăng ký miễn phí
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<View style={styles.iconBtn}>
							<Icon name="mobile" size={30} color={'white'} />
						</View>

						<Text style={styles.txtBtn}>
							Tiếp tục bằng số điện thoại
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<View style={styles.iconBtn}>
							<Image
								source={require('../../../assets/img/google.png')}
								style={{ width: 25, height: 25 }}
							/>
						</View>

						<Text style={styles.txtBtn}>Tiếp tục bằng Google</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<View style={styles.iconBtn}>
							<View
								style={{
									backgroundColor: '#1773EA',
									borderRadius: 12.5,
									width: 25,
									height: 25,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							>
								<Icon
									name="facebook"
									size={20}
									color={'white'}
								/>
							</View>
						</View>

						<Text style={styles.txtBtn}>
							Tiếp tục bằng Facebook
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btn}>
						<View style={styles.iconBtn}>
							<Icon name="apple" size={25} color={'white'} />
						</View>

						<Text style={styles.txtBtn}>Tiếp tục bằng Apple</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity>
					<Text
						style={{
							color: 'white',
							fontSize: 16,
							fontWeight: 'bold',
							height: 40,
						}}
					>
						Đăng nhập
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		backgroundColor: '#101010',
		marginTop: 37,
	},
	btn: {
		width: '90%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: 45,
		borderWidth: 1,
		borderColor: '#cccc',
		borderRadius: 20,
		paddingHorizontal: 20,
		marginBottom: 15,
	},
	txtBtn: {
		color: 'white',
		fontSize: 16,
		width: '90%',
		textAlign: 'center',
		fontWeight: 'bold',
	},
	iconBtn: {
		width: '10%',
		alignItems: 'center',
	},
});

export default Register;
