import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ArtistItem(props) {
  const { uri, name } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 125, height: 125, borderRadius: 99 }}
      />
      <Text style={styles.title}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
  },
  title: {
    width: 125,
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
});

export default ArtistItem;
