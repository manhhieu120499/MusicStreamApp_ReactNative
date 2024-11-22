import { useState } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	StatusBar,
	Text,
	Pressable,
	Alert,
	ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { forgotPassword } from '../../../axios';

export default function Email({ navigation }) {
	const { navigate, goBack } = navigation;
	const [email, setEmail] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const handleToVerifyEmail = async () => {
		const { status, message, verifyCode } = await forgotPassword(email);
		console.log('Verified code from email: ' + verifyCode);
		if (status == 200) {
			navigate('VerifyEmail', {
				email: email,
				verifyCode: verifyCode,
			});
			Alert.alert(message);
		} else {
			Alert.alert(message);
		}
	};
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />

			<View
				style={{
					height: 60,
					alignItems: 'center',
					flexDirection: 'row',
					gap: 15,
				}}
			>
				<Pressable onPress={() => goBack('')}>
					<Icon name="chevron-left" size={20} color={'white'} />
				</Pressable>
				<Text
					style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
				>
					Verification
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginBottom: 10,
				}}
			>
				<View style={styles.textCode}>
					<TextInput
						style={{
							fontSize: 16,
							width: '100%',
							fontWeight: 'bold',
							paddingHorizontal: 10,
						}}
						placeholder="Enter your email"
						placeholderTextColor={'gray'}
						value={email}
						onChangeText={(text) => setEmail(text)}
					/>
				</View>
			</View>

			<View
				style={{
					width: '100%',
					height: 40,
					alignItems: 'center',
					marginTop: 15,
					borderRadius: 15,
				}}
			>
				<Pressable
					style={{
						width: '40%',
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
						borderRadius: 15,
					}}
					onPress={handleToVerifyEmail}
				>
					<Text style={styles.subTitle}>Send</Text>
				</Pressable>
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
	subTitle: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'black',
	},
	textCode: {
		width: '100%',
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'gray',
	},
});
