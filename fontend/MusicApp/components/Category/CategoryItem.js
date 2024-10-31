import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View, Text, Image, Pressable } from "react-native";

function CategoryItem(props) {
  const { name, bgColor, uri, path } = props;
  const navigation = useNavigation();
  return (
    <Pressable
      style={{
        borderRadius: 5,
        width: 157,
        height: 82,
        marginBottom: 13,
        backgroundColor: `${bgColor}`,
        overflow: "hidden",
        position: "relative",
      }}
      onPress={() => {
        navigation.navigate(path, { name });
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
        source={{ uri: uri }}
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
