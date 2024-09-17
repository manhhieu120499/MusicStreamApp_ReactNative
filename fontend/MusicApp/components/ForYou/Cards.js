import React from "react";
import CardItem from "./CardItem";
import { FlatList, Text, View } from "react-native";

const yoursOwn = [
  {
    uri: "https://daylist.spotifycdn.com/playlist-covers-mix/en/afternoon_default.jpg",
    text: "Danh sách phát cho các khoảnh khắc trong ngày",
  },
];

function Cards(props) {
  const { title, data } = props;
  return (
    <View>
      <Text
        style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "600",
          marginTop: 20,
          textAlign: "center",
          paddingBottom: 10,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardItem uri={item.uri} text={item.text} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default Cards;
