import React from 'react';
import { Text, View } from 'react-native';
import { Category } from '../../../../components';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';

const categories = {
	categories: [
		{
			id: 1,
			name: 'Bảng xếp hạng Podcast',
			bgColor: '#0D73EC',
			img: require('../../../../assets/img/search/img-nhac.jpg'),
			path: '',
		},
		{
			id: 2,
			name: 'Sư phạm',
			bgColor: '#477D95',
			img: require('../../../../assets/img/search/img-nhac.jpg'),
			path: '',
		},
		{
			id: 3,
			name: 'Tài liệu',
			bgColor: '#503750',
			img: require('../../../../assets/img/search/img-nhac.jpg'),
			path: '',
		},
		{
			id: 4,
			name: 'Tài liệu',
			bgColor: '#503750',
			img: require('../../../../assets/img/search/img-nhac.jpg'),
			path: '',
		},
	],
};
function SearchPodcasts() {
	const navigation = useNavigation();
	return (
		<LinearGradient
			colors={['#206954', '#112E25', '#101010']}
			locations={[0.0, 0.1, 0.2]}
			style={{ flex: 1, paddingHorizontal: 15 }}
		>
			<View
				style={{
					marginTop: 20,
					height: '10%',
					justifyContent: 'space-between',
				}}
			>
				<Icon
					name="chevron-left"
					size={20}
					color="#fff"
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<Text
					style={{ fontSize: 27, fontWeight: 'bold', color: '#fff' }}
				>
					Podcasts
				</Text>
			</View>
			<View>
				<Text
					style={{
						fontSize: 20,
						fontWeight: '600',
						color: '#fff',
						paddingTop: 35,
						paddingBottom: 15,
						textAlign: 'center',
					}}
				>
					Danh mục
				</Text>
				<Category categories={categories.categories} />
			</View>
		</LinearGradient>
	);
}

export default SearchPodcasts;
