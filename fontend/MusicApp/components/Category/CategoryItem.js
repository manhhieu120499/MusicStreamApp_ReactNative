import React from "react";
import { View, Text, Image } from "react-native";

function CategoryItem(props) {
  const { name, bgColor, img } = props;
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        width: 157,
        height: 82,
        marginBottom: 13,
        backgroundColor: `${bgColor}`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          fontWeight: "600",
          color: "#fff",
          paddingLeft: 7,
          paddingTop: 10,
          width: "60%",
        }}
      >
        {name}
      </Text>
      <Image
        source={img}
        style={{
          width: 65,
          height: 65,
          transform: [{ rotate: "30deg" }],
          position: "absolute",
          right: -10,
          bottom: -3,
          borderRadius: 5,
        }}
      />
    </View>
  );
}

export default CategoryItem;
