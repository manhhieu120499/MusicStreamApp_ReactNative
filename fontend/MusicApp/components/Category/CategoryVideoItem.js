import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";

function CategoryVideoItem(props) {
  const { uri, text } = props;
  return (
    <View>
      <Video
        source={{ uri: uri }}
        rate={1.0}
        volume={1.0}
        isMuted={true}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{
          position: "relative",
          width: 100,
          height: 170,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: 10,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontWeight: "600",
          color: "white",
          position: "absolute",
          bottom: 10,
          left: 10,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </View>
  );
}

export default CategoryVideoItem;
