import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UITab from './UITab';
import {
	Register,
	RegisterEmail,
	RegisterPassword,
	Home,
	Search,
	Login,
	Library,
	SearchForYou,
	PlayingMusic,
} from '../src/screens';
import PreviewItem from '../components/PreviewItem';

const Stack = createNativeStackNavigator();

function AppNavigator() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName="Register"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="RegisterEmail" component={RegisterEmail} />
				<Stack.Screen
					name="RegisterPassword"
					component={RegisterPassword}
				/>
				<Stack.Screen name="UITab" component={UITab} />
				<Stack.Screen name="PlayingMusic" component={PlayingMusic} />
				<Stack.Screen name="PreviewItem" component={PreviewItem} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default AppNavigator;
