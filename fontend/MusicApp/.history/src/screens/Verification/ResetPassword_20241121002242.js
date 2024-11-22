import { useState } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	StatusBar,
	Text,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function ResetPassword() {
	const [newPassword, setNewPassword] = useState('');
	const [againPassword, setAgainPassword] = useState('');
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
				<Icon name="chevron-left" size={20} color={'white'} />
				<Text
					style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}
				>
					Reset password
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					marginBottom: 15,
				}}
			>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						borderBottomWidth: 1,
						borderColor: 'lightgray',
					}}
				>
					{/* <Text style={{ marginVertical: 10 }}>
						Enter new password
					</Text> */}
					<TextInput
						placeholder="Enter new password"
						placeholderTextColor={'#ccc'}
						style={styles.input}
					/>
				</View>
				<View
					style={{
						marginTop: 15,
						flexDirection: 'row',
						justifyContent: 'space-between',
						borderBottomWidth: 1,
						borderColor: 'lightgray',
					}}
				>
					{/* <Text style={{ marginVertical: 10 }}>
						Enter new password again
					</Text> */}
					<TextInput
						placeholder="Enter new password again"
						placeholderTextColor={'#ccc'}
						style={styles.input}
					/>
					<View style={{ width: '15%' }}>
						<Icon name="eye-slash" size={20} color={'white'} />
						<Icon name="eye" size={20} color={'white'} />
					</View>
				</View>
			</View>

			<View
				style={{
					width: '100%',
					height: 45,
					alignItems: 'center',
					marginTop: 15,
					borderRadius: 15,
				}}
			>
				<Pressable
					style={{
						width: '80%',
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
						borderRadius: 15,
					}}
					onPress={() => alert('Hello anh em')}
				>
					<Text>Accept</Text>
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
	input: {
		fontSize: 16,
		fontWeight: 'bold',
		color: 'white',
		paddingVertical: 10,
		paddingHorizontal: 15,
        width: '80%'
		marginBottom: 10,
	},
});
