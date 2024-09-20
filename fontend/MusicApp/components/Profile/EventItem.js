import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function EventItem(props) {
  const { uri, title } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: uri,
        }}
        style={{ width: 125, height: 125, borderRadius: 5 }}
      />
      <Text
        style={{
          color: "#fff",
          fontSize: 13,
          fontWeight: "600",
          width: 125,
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 7,
    paddingVertical: 10,
    paddingRight: 13,
  },
});

export default EventItem;
