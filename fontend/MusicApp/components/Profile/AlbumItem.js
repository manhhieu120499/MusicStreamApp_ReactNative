import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

function AlbumItem(props) {
  const { uri, title, year } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={{ height: 85, width: 85, borderRadius: 5 }}
      />
      <View>
        <Text
          style={{ color: "#fff", fontSize: 16, width: 200 }}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {title}
        </Text>
        <Text style={{ color: "#B2A8A8", fontSize: 14 }}>{year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    columnGap: 13,
    paddingVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default AlbumItem;
