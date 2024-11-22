import { useEffect, useRef, useState } from 'react';
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
import ConvertTime from '../../../utilities/ConvertTime';
import { forgotPassword } from '../../../axios';

export default function VerifyEmail({ route, navigation }) {
	const { navigate, goBack } = navigation;
	const { email, verifyCode } = route.params;
	const inputRefOne = useRef();
	const inputRefTwo = useRef();
	const inputRefThree = useRef();
	const inputRefFour = useRef();
	const [codeValue, setCodeValue] = useState([]);
	const [active, setActive] = useState(false);
	const [timeDown, setTimeDown] = useState(60);
	const [newCode, setNewCode] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const timeRef = useRef();

	useEffect(() => {
		inputRefOne.current.focus();
	}, []);

	useEffect(() => {
		let item = '';
		codeValue.forEach((value) => (item += value));
	}, [codeValue]);

	useEffect(() => {
		timeRef.current = setInterval(() => {
			setTimeDown((prev) => {
				if (prev == 0) {
					clearInterval(timeRef.current);
					return 0;
				} else {
					return prev - 1;
				}
			});
		}, 1000);
		return () => clearInterval(timeRef.current);
	}, [newCode]);

	const handleChangCode = (val, index) => {
		const data = [...codeValue];
		data[index] = val;

		setCodeValue(data);
	};

	const handleResendCode = async () => {
		try {
			setIsLoading(true);
			const { status, verifyCode, message } = await forgotPassword(email);
			if (status == 200) {
				setTimeDown(1 * 60);
				setNewCode(verifyCode);
				Alert.alert(message);
			} else {
				Alert.alert(message);
			}
		} catch (err) {
			Alert.alert(
				'Error',
				'An error occurred while sending verification code. Please try again later.'
			);
			setIsLoading(false);
		} finally {
			setIsLoading(false);
		}
	};

	const handleNextToChangePassword = () => {
		if (timeDown == 0) {
			Alert.alert('Time out!', 'Please resend verification code');
			return;
		} else {
			if (
				verifyCode == codeValue.join('') ||
				newCode == codeValue.join('')
			) {
				navigate('ResetPassword', {
					email,
				});
			} else {
				Alert.alert(
					'Invalid code!',
					'Please enter valid verification code'
				);
			}
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
							text.length < 0 && inputRefOne.current.focus();
							handleChangCode(text, 0);
						}}
						onChange={(event) => {
							event.nativeEvent.text == ''
								? inputRefOne.current.focus()
								: inputRefTwo.current.focus();
						}}
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
							text.length < 0 && inputRefOne.current.focus();
							handleChangCode(text, 1);
						}}
						onChange={(event) => {
							event.nativeEvent.text == ''
								? inputRefOne.current.focus()
								: inputRefThree.current.focus();
						}}
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
							text.length < 0 && inputRefTwo.current.focus();
							handleChangCode(text, 2);
						}}
						onChange={(event) => {
							event.nativeEvent.text == ''
								? inputRefTwo.current.focus()
								: inputRefFour.current.focus();
						}}
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
							text.length < 0 && inputRefThree.current.focus();
							handleChangCode(text, 3);
						}}
						onChange={(event) => {
							event.nativeEvent.text == '' &&
								inputRefThree.current.focus();
							setActive(!active);
						}}
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
					onPress={handleNextToChangePassword}
				>
					<Text style={styles.subTitle}>Next</Text>
				</Pressable>
			</View>

			<View
				style={{
					marginVertical: 10,
					width: '100%',
					alignItems: 'center',
				}}
			>
				<Text style={{ color: 'white', marginTop: 8 }}>
					{`Enter code in ${
						timeDown != 0 ? ConvertTime(timeDown) : '0:00'
					}`}{' '}
				</Text>
			</View>
			<Pressable
				style={{
					marginVertical: 10,
					width: '100%',
					alignItems: 'center',
				}}
				onPress={handleResendCode}
			>
				<Text
					style={{
						color: '#87CEFF',
						marginTop: 8,
						textDecorationLine: 'underline',
					}}
				>
					Resend pass code
				</Text>
			</Pressable>

			{isLoading && (
				<View
					style={{
						position: 'absolute',
						top: '30%',
						left: '25%',
						zIndex: 1,
						width: 200,
						height: 200,
						borderRadius: 15,
						backgroundColor: '#ccc',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<ActivityIndicator size="large" color="white" />
					<Text style={{ marginTop: 20, fontSize: 18 }}>
						Sending...
					</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 100,
		width: '100%',
		backgroundColor: '#101010',
		paddingHorizontal: 15,
		position: 'relative',
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
