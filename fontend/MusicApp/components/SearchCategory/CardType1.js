import React from "react";
import { FlatList, Text, View } from "react-native";
import CardType1Item from "./CardType1Item";

function CardType1(props) {
  const { title, data } = props;
  return (
    <View>
      <Text
        style={{
          color: "#fff",
          fontSize: 19,
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
        renderItem={({ item }) => (
          <CardType1Item uri={item.uri} text={item.text} title={item.title} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default CardType1;
