import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function PopularItem(props) {
  const { id, title, views, uri } = props;
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", columnGap: 13 }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
          }}
        >
          {id}
        </Text>
        <Image
          source={{ uri: uri }}
          style={{ height: 50, width: 50, borderRadius: 3 }}
        />
        <View>
          <Text
            style={{ color: "#fff", fontSize: 16, width: 200 }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {title}
          </Text>
          <Text style={{ color: "#B2A8A8", fontSize: 14 }}>{views}</Text>
        </View>
      </View>
      <Icon name="ellipsis-v" size={24} color="#B2A8A8" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 5,
    paddingVertical: 10,
  },
});

export default PopularItem;
