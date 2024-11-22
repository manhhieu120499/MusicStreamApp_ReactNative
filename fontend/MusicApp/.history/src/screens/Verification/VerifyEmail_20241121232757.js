import { useEffect, useRef, useState } from 'react';
import {
	TextInput,
	View,
	StyleSheet,
	StatusBar,
	Text,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function VerifyEmail({ route, navigation }) {
	const { navigate, goBack } = navigation;
	const { email, verifyCode } = route.params;
	const inputRefOne = useRef();
	const inputRefTwo = useRef();
	const inputRefThree = useRef();
	const inputRefFour = useRef();
	const [codeValue, setCodeValue] = useState([]);
	const [active, setActive] = useState(false);

	useEffect(() => {
		inputRefOne.current.focus();
	}, []);

	useEffect(() => {
		let item = '';
		codeValue.forEach((value) => (item += value));
	}, [codeValue]);

	const handleChangCode = (val, index) => {
		const data = [...codeValue];
		data[index] = val;

		setCodeValue(data);
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
					height: 50,
					color: 'white',
					marginBottom: 10,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text style={{ color: 'white' }}>
					{`We have send a verify code to ${email.replace(
						/.{1,5}/,
						(m) => '*'.repeat(m.length)
					)}`}
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
					<TextInput
						keyboardType="number-pad"
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
						placeholder="-"
						placeholderTextColor={'#222'}
						ref={inputRefOne}
						maxLength={1}
						onChangeText={(text) => {
							text.length > 0 && inputRefTwo.current.focus();
							handleChangCode(text, 0);
						}}
						onChange={() => inputRefTwo.current.focus()}
					/>
				</View>
				<View style={styles.textCode}>
					<TextInput
						keyboardType="number-pad"
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
						placeholder="-"
						placeholderTextColor={'#222'}
						ref={inputRefTwo}
						maxLength={1}
						onChangeText={(text) => {
							text.length > 0 && inputRefThree.current.focus();
							handleChangCode(text, 1);
						}}
						onChange={() => inputRefThree.current.focus()}
					/>
				</View>
				<View style={styles.textCode}>
					<TextInput
						keyboardType="number-pad"
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
						placeholder="-"
						placeholderTextColor={'#222'}
						ref={inputRefThree}
						maxLength={1}
						onChangeText={(text) => {
							text.length > 0 && inputRefFour.current.focus();
							handleChangCode(text, 2);
						}}
						onChange={() => inputRefFour.current.focus()}
					/>
				</View>
				<View style={styles.textCode}>
					<TextInput
						keyboardType="number-pad"
						style={{
							fontSize: 20,
							width: '100%',
							textAlign: 'center',
							fontWeight: 'bold',
						}}
						placeholder="-"
						placeholderTextColor={'#222'}
						ref={inputRefFour}
						maxLength={1}
						onChangeText={(text) => {
							(text.startsWith('') || text.startsWith(' ')) &&
								inputRefThree.current.focus();
							handleChangCode(text, 3);
						}}
						onChange={() => setActive(!active)}
					/>
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
						backgroundColor: active ? 'white' : '#ccc',
						borderRadius: 15,
					}}
					disabled={!active}
					onPress={() => navigate('ResetPassword')}
				>
					<Text style={styles.subTitle}>Next</Text>
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
		width: 40,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
		backgroundColor: 'white',
		borderWidth: 2,
		borderColor: 'gray',
	},
});
