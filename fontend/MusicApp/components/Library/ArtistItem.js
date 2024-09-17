import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ArtistItem(props) {
  const { name, image, text } = props;
  return (
    <View style={{ marginBottom: 25 }}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  text: {
    color: "#484848",
    fontSize: 14,
    fontWeight: "400",
  },
});

export default ArtistItem;
