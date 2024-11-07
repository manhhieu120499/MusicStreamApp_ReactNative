import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function CardType2Item(props) {
  const { uri, text } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: uri }}
        style={{ width: 125, height: 125, borderRadius: 5 }}
      />
      <Text style={styles.text} numberOfLines={2} ellipsizeMode="tail">
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
    color: "#B5B2B2",
    fontSize: 13,
    textAlign: "center",
    marginTop: 7,
    width: 125,
  },
});

export default CardType2Item;
