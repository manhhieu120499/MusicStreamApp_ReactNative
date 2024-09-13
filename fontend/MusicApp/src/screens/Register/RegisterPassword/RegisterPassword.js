import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function RegisterPassword(props) {
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const validatePassword = (password) => {};
	return (
		<View style={styles.container}>
			<View
				style={{
					flex: 10,
					flexDirection: 'row',
					paddingHorizontal: 10,
					alignItems: 'center',
					width: '100%',
					marginBottom: 15,
				}}
			>
				<Icon name="chevron-left" size={20} color={'white'} />
				<Text
					style={{
						fontSize: 16,
						fontWeight: 'bold',
						color: 'white',
						width: '90%',
						textAlign: 'center',
					}}
				>
					Tạo tài khoản
				</Text>
			</View>
			<View style={{ flex: 90, paddingHorizontal: 15 }}>
				<Text
					style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}
				>
					Tạo mật khẩu
				</Text>
				<View
					style={{
						width: '100%',
						backgroundColor: '#ccc',
						height: 40,
						marginVertical: 10,
						borderRadius: 5,
						flexDirection: 'row',
						alignItems: 'center',
					}}
				>
					<TextInput
						style={{
							width: '90%',
							height: 40,
							paddingHorizontal: 10,
						}}
						secureTextEntry={!showPassword}
						value={password}
						onChangeText={(text) => setPassword(text)}
					/>
					<TouchableOpacity
						onPress={() => setShowPassword(!showPassword)}
					>
						{showPassword && <Icon name="eye" size={25} />}
						{!showPassword && <Icon name="eye-slash" size={25} />}
					</TouchableOpacity>
				</View>
				<Text
					style={{
						color: 'white',
						fontSize: 14,
						fontWeight: 'normal',
					}}
				>
					Sử dụng ít nhất 10 ký tự
				</Text>
				<TouchableOpacity
					style={{
						width: 100,
						backgroundColor: 'white',
						height: 40,
						borderRadius: 20,
						alignSelf: 'center',
						marginTop: 20,
					}}
					onPress={() => {
						if (validatePassword(password)) {
							{
								/** handle success */
							}
						} else {
							{
								/** handle error */
							}
						}
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: 'black',
							textAlign: 'center',
							lineHeight: 40,
						}}
					>
						Tiếp
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
});

export default RegisterPassword;
