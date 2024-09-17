import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { PodcastItem } from '../../../../components';

function PodcastTab(props) {
	return (
		<View style={{ width: '100%', marginTop: 20 }}>
			<FlatList
				data={props.data}
				renderItem={({ item }) => <PodcastItem data={item} />}
				keyExtractor={(item) => item.id}
				showsHorizontalScrollIndicator={false}
				scrollEnabled={false}
			/>
		</View>
	);
}

export default PodcastTab;
