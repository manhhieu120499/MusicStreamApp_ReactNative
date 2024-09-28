import React from "react";
import ArtistItem from "./ArtistItem";
import { FlatList, View } from "react-native";

const listArtist = [
  {
    id: 1,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
    path: "",
  },
  {
    id: 2,
    name: "Hòa Minzy",
    image: {
      uri: "https://i.scdn.co/image/ab6761610000101fc5ca014c7d8a729016b3b5f0",
    },
    text: "Nghệ sĩ",
    path: "HoaMinzy",
  },
  {
    id: 3,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
    path: "",
  },
  {
    id: 4,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
    path: "",
  },
  {
    id: 5,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
    path: "",
  },
  {
    id: 6,
    name: "Liu Yu",
    image: require("../../assets/img/library/liuyu.jpg"),
    text: "Nghệ sĩ",
    path: "",
  },
];

function Artists() {
  return (
    <FlatList
      data={listArtist}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ArtistItem
          name={item.name}
          image={item.image}
          text={item.text}
          path={item.path}
        />
      )}
      scrollEnabled={false}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: "space-between" }}
    />
  );
}

export default Artists;
