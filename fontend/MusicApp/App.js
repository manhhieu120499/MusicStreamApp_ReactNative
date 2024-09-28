import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
	Register,
	RegisterEmail,
	RegisterPassword,
	Home,
	Search,
	Login,
	Library,
	SearchForYou,
	Profile,
	Premium,
	Logout,
} from './src/screens';
import { AppNavigator } from './navigation';
import PlayingMusic from './src/screens/PlayingMusic';

export default function App() {
	return <AppNavigator />;
}
