import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	StatusBar,
	Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ValidateEmail } from '../../../../utilities/Validate';

function RegisterEmail(props) {
	const { navigation, route } = props;
	const { navigate, goBack } = navigation;
	const [email, setEmail] = useState('');
	const [messgae, setMessgae] = useState('');
	const validateEmail = (email) => {
		return ValidateEmail(email);
	};
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
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
				<Icon
					name="chevron-left"
					size={20}
					color={'white'}
					onPress={() => goBack('Register')}
				/>
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
					Email của bạn là gì?
				</Text>
				<TextInput
					style={{
						width: '100%',
						height: 40,
						borderRadius: 5,
						marginVertical: 10,
						backgroundColor: '#ccc',
						paddingHorizontal: 10,
					}}
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				{messgae && (
					<Text
						style={{
							color: 'white',
							fontSize: 14,
							fontWeight: 'normal',
						}}
					>
						{messgae}
					</Text>
				)}
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
						if (validateEmail(email)) {
							{
								/** handle success */
								navigate('RegisterPassword', { email });
							}
						} else {
							{
								/** handle error */
								alert('Email is not valid');
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
	},
});

export default RegisterEmail;
