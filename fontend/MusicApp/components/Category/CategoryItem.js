import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";

const data = {
  kpop: ["Zhou Shen", "Liu Yu", "Zhou Keyu"],
};

function CategoryItem(props) {
  const { name, bgColor, img, path } = props;
  const navigation = useNavigation();
  return (
    <Pressable
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
      onPress={() => {
        navigation.navigate(path);
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
    </Pressable>
  );
}

export default CategoryItem;
