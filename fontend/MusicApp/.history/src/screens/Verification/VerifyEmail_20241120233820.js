import { TextInput, View, StyleSheet, StatusBar, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export function VerifyEmail({ email }) {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<View style={{ height: 60, justifyContent: 'center' }}>
				<Icon name="chevron-left" size={20} color={white} />
				<Text style={{ fontSize: 18, fontWeight: 'bold' }}>
					Verification
				</Text>
			</View>
			<View style={{ height: 30 }}>
				<Text>We have send a verify code to ${email}</Text>
			</View>
			<View
				style={{
					width: '100%',
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
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
	},
});
