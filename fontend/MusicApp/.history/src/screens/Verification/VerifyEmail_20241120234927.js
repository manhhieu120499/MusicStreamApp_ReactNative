import {
	TextInput,
	View,
	StyleSheet,
	StatusBar,
	Text,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function VerifyEmail({ email }) {
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
					Verification
				</Text>
			</View>
			<View style={{ height: 30, color: 'white', marginBottom: 10 }}>
				<Text style={{ color: 'white' }}>
					We have send a verify code to {email}
				</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-around',
					alignItems: 'center',
					marginVertical: 20,
				}}
			>
				<View style={styles.textCode}>
					<TextInput placeholder="-" />
				</View>
				<View style={styles.textCode}>
					<TextInput placeholder="-" />
				</View>
				<View style={styles.textCode}>
					<TextInput placeholder="-" />
				</View>
				<View style={styles.textCode}>
					<TextInput placeholder="-" />
				</View>
			</View>

			<View
				style={{
					width: '100%',
					height: 45,
					alignItems: 'center',
					marginTop: 15,
				}}
			>
				<Pressable
					style={{
						width: '80%',
						height: '100%',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: 'white',
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
		color: '#fff',
	},
	textCode: {
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
	},
});
