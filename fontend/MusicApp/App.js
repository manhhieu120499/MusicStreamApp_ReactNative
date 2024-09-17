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
} from './src/screens';
import { AppNavigator } from './navigation';

export default function App() {
	return <AppNavigator />;
}
