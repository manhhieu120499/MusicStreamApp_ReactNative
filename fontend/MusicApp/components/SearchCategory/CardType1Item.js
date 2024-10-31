import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function CardType1Item(props) {
  const { uri, title, text } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: uri }}
        style={{ width: 125, height: 125, borderRadius: 5 }}
      />
      <Text
        style={[styles.text, { color: "#fff", fontWeight: "500" }]}
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        {title}
      </Text>
      <Text
        style={[styles.text, { color: "#B5B2B2" }]}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 13,
  },
  text: {
    fontSize: 13,
    textAlign: "center",
    marginTop: 3,
    width: 125,
  },
});

export default CardType1Item;
