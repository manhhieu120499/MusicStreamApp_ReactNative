import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { CheckAccount } from '../../../utilities/Validate';

function Login(props) {
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;

	const [showPassword, setShowPassword] = useState(true);
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');

	const handleLogin = async () => {
		if (username.trim() === '' || password.trim() === '') {
			Alert.alert(
				'Login Failed',
				'Vui lòng nhập đầy đủ tên đăng nhập và mật khẩu.'
			);
			return;
		}
		const isAuthenticated = await CheckAccount(username, password);
		if (isAuthenticated) {
			Alert.alert('Login Successful', 'You have successfully logged in.');
			navigation.navigate('UITab');
		} else {
			Alert.alert('Login Failed', 'Invalid username or password.');
		}
	};

	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View
				style={{
					flexDirection: 'row',
					alignItems: 'center',
					columnGap: 25,
					marginTop: 20,
				}}
			>
				<Icon
					name="angle-left"
					size={28}
					color="#fff"
					onPress={() => goBack('Login')}
				/>
				<Text
					style={{
						fontSize: 24,
						fontWeight: '600',
						color: 'white',
						textAlign: 'center',
					}}
				>
					Đăng nhập
				</Text>
			</View>
			<View style={{ marginTop: 40 }}>
				<Text style={styles.text}>Email hoặc tên người dùng</Text>
				<View style={styles.input}>
					<Icon name="user" size={24} color="black" />
					<TextInput
						style={{ width: '85%' }}
						value={username}
						onChangeText={setUsername}
					/>
				</View>
			</View>
			<View style={{ marginTop: 20 }}>
				<Text style={styles.text}>Mật khẩu</Text>
				<View style={styles.input}>
					<Icon name="lock" size={24} color="black" />
					<TextInput
						style={{ width: '77%' }}
						alue={password}
						onChangeText={setPassword}
						secureTextEntry={showPassword}
					/>
					<TouchableOpacity
						onPress={() => setShowPassword((prev) => !prev)}
					>
						<Icon
							name={showPassword ? 'eye-slash' : 'eye'}
							size={24}
							color="#000"
						/>
					</TouchableOpacity>
				</View>
			</View>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 30,
				}}
			>
				<TouchableOpacity
					style={styles.btn_login}
					onPress={handleLogin}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 18,
							fontWeight: '700',
							textAlign: 'center',
						}}
					>
						Đăng nhập
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderColor: '#484848',
						borderRadius: 20,
						paddingHorizontal: 10,
						paddingVertical: 5,
						marginTop: 20,
					}}
					onPress={() => navigate('UITab')}
				>
					<Text style={{ color: 'white', fontSize: 13 }}>
						Đăng nhập không cần mật khẩu
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderColor: '#484848',
						borderRadius: 20,
						paddingHorizontal: 10,
						paddingVertical: 5,
						marginTop: 20,
					}}
					onPress={() => navigate('VerifyEmail')}
				>
					<Text style={{ color: 'white', fontSize: 13 }}>
						Quên mật khẩu?
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		width: '100%',
		backgroundColor: '#101010',
		paddingHorizontal: 15,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff',
		paddingBottom: 10,
	},
	input: {
		flexDirection: 'row',
		// justifyContent: 'space-between',
		alignItems: 'center',
		height: 40,
		backgroundColor: '#fff',
		borderRadius: 5,
		paddingHorizontal: 10,
		columnGap: 15,
	},
	btn_login: {
		width: '40%',
		height: 50,
		backgroundColor: '#1ED760',
		borderRadius: 27,
		paddingHorizontal: 10,
		borderWidth: 1,
		fontSize: 18,
		color: '#fff',
		justifyContent: 'center',
	},
});

export default Login;
