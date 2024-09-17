import React from "react";
import ArtistItem from "./ArtistItem";
import { FlatList, View } from "react-native";

const listArtist = [
  {
    id: 1,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
  {
    id: 2,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
  {
    id: 3,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
  {
    id: 4,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
  {
    id: 5,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
  {
    id: 6,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
  },
];

function Artists() {
  return (
    <FlatList
      data={listArtist}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ArtistItem name={item.name} image={item.image} text={item.text} />
      )}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
}

export default Artists;
