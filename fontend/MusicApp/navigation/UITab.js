import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Library, Premium, Search } from '../src/screens';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
	HomeIcon,
	LibraryIcon,
	PremiumIcon,
	SearchIcon,
} from '../components/Icon';
const Tab = createBottomTabNavigator();

const screenOptions = ({ route }) => ({
	headerShown: false,
	tabBarActiveTintColor: 'white',
	tabBarInactiveTintColor: 'gray',
	tabBarStyle: {
		backgroundColor: '#101010',
		borderTopColor: '#333',
	},
	tabBarIcon: ({ focused, color, size }) => {
		const tabs = {
			Home: {
				icon: <HomeIcon color={focused == true ? 'white' : 'gray'} />,
			},
			Search: {
				icon: <SearchIcon color={focused == true ? 'white' : 'gray'} />,
			},
			Library: {
				icon: (
					<LibraryIcon color={focused == true ? 'white' : 'gray'} />
				),
			},
			Premium: {
				icon: (
					<PremiumIcon color={focused == true ? 'white' : 'gray'} />
				),
			},
		};
		return tabs[route.name].icon;
	},
});

function UITab(props) {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
			<Tab.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: 'Home',
					tabBarLabelStyle: {
						fontSize: 12,
					},
				}}
			/>
			<Tab.Screen
				name="Search"
				component={Search}
				options={{
					tabBarLabel: 'Search',
					tabBarLabelStyle: {
						fontSize: 12,
					},
				}}
			/>
			<Tab.Screen
				name="Library"
				component={Library}
				options={{
					tabBarLabel: 'Library',
					tabBarLabelStyle: {
						fontSize: 12,
					},
				}}
			/>
			<Tab.Screen
				name="Premium"
				component={Premium}
				options={{
					tabBarLabel: 'Premium',
					tabBarLabelStyle: {
						fontSize: 12,
					},
				}}
			/>
		</Tab.Navigator>
	);
}

export default UITab;
