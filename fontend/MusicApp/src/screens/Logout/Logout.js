import React, { useEffect, useRef } from 'react';
import { ViewBase } from 'react-native';
import {
	View,
	Text,
	Modal,
	StyleSheet,
	Button,
	Dimensions,
	Animated,
	PanResponder,
	TouchableOpacity,
	Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Logout(props) {
	const { visible, onClose, navigation } = props;
	const { width } = Dimensions.get('window');
	const slideAnim = useRef(new Animated.Value(-width)).current;

	useEffect(() => {
		if (visible) {
			slideAnim.setValue(-width);
			Animated.timing(slideAnim, {
				toValue: 0,
				duration: 300,
				useNativeDriver: true,
			}).start();
		} else {
			Animated.timing(slideAnim, {
				duration: 300,
				useNativeDriver: true,
			}).start();
		}
	}, [visible]);

	const panResponder = useRef(
		PanResponder.create({
			onMoveShouldSetPanResponder: (evt, gestureState) => {
				return Math.abs(gestureState.dx) > Math.abs(gestureState.dy);
			},
			onPanResponderRelease: (evt, gestureState) => {
				if (gestureState.dx < -100) {
					Animated.timing(slideAnim, {
						toValue: -width,
						duration: 300,
						useNativeDriver: true,
					}).start(() => onClose());
				} else {
					Animated.timing(slideAnim, {
						toValue: 0,
						duration: 300,
						useNativeDriver: true,
					}).start();
				}
			},
		})
	).current;

	useEffect(() => console.log(props));

	return (
		<Modal
			transparent={true}
			visible={visible}
			onRequestClose={() => navigation.goBack('UITab')}
		>
			<View style={styles.centeredView}>
				<Animated.View
					{...panResponder.panHandlers}
					style={[
						styles.modalView,
						{ transform: [{ translateX: slideAnim }] },
					]}
				>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
							borderBottomWidth: 1,
							borderBottomColor: '#B4A8A8',
							paddingRight: 20,
						}}
					>
						<Pressable
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 15,
								// borderBottomWidth: 1,
								// borderBottomColor: "#B4A8A8",
								padding: 15,
							}}
						>
							<View
								style={{
									backgroundColor: '#FFA500',
									width: 50,
									height: 50,
									justifyContent: 'center',
									borderRadius: 30,
								}}
							>
								<Text
									style={{
										fontSize: 24,
										fontWeight: 'bold',
										color: '#fff',
										textAlign: 'center',
									}}
								>
									M
								</Text>
							</View>
							<View>
								<Text
									style={{
										fontSize: 22,
										fontWeight: '600',
										color: '#fff',
									}}
								>
									Mạnh Hiếu
								</Text>
								<Text
									style={{
										fontSize: 13,
										fontWeight: '400',
										color: '#B8A2A2',
									}}
								>
									Xem hồ sơ
								</Text>
							</View>
						</Pressable>
						<Button
							title="Hủy"
							onPress={() => {
								setTimeout(
									() => navigation.goBack('UITab'),
									500
								);
							}}
						/>
					</View>
					<View style={{ padding: 15, rowGap: 20 }}>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 15,
							}}
						>
							<Icon name="plus" size={25} color="#fff" />
							<Text style={styles.test}>Thêm tài khoản</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 22,
							}}
						>
							<Icon name="bolt" size={25} color="#fff" />
							<Text style={styles.test}>Thông tin mới </Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 15,
							}}
						>
							<Icon name="star" size={25} color="#fff" />
							<Text style={styles.test}>Nội dung đã nghe</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								columnGap: 15,
							}}
						>
							<Icon name="gear" size={25} color="#fff" />
							<Text style={styles.test}>
								Cài đặt và quyền riêng tư
							</Text>
						</View>
					</View>

					<View style={{ alignItems: 'center', marginTop: 350 }}>
						<TouchableOpacity
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								width: 113,
								height: 36,
								backgroundColor: '#565656',
								borderRadius: 15,
							}}
							onPress={() => navigation.navigate('Register')}
						>
							<Text style={styles.test}>Đăng xuất</Text>
						</TouchableOpacity>
					</View>
				</Animated.View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalView: {
		width: '88%',
		height: '100%',
		backgroundColor: '#232323',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
		position: 'absolute',
		zIndex: 1000,
	},
	test: {
		fontSize: 16,
		fontWeight: '400',
		color: '#fff',
	},
});

export default Logout;
