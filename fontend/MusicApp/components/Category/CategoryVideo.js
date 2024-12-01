import React from "react";
import CategoryVideoItem from "./CategoryVideoItem";
import { FlatList, View } from "react-native";

const videos = [
  {
    id: 1,
    uri: "https://cdn.pixabay.com/video/2023/11/26/190776-888535446_large.mp4",
    text: "#v-pop",
  },
  {
    id: 2,
    uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    text: "#thu-gian",
  },
  {
    id: 3,
    uri: "https://cdn.pixabay.com/video/2021/04/12/70796-538877060_tiny.mp4",
    text: "#nhac-phim",
  },
];

function CategoryVideo() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: 15,
      }}
    >
      <FlatList
        data={videos}
        renderItem={({ item }) => (
          <CategoryVideoItem uri={item.uri} text={item.text} />
        )}
        horizontal
        ItemSeparatorComponent={() => <View style={{ width: 13 }} />}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
      />
    </View>
  );
}

export default CategoryVideo;
