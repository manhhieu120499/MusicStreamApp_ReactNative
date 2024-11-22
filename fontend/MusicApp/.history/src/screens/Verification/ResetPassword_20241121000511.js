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
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
	},
});
