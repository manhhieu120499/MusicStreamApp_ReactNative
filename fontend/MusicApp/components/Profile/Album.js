import React from "react";
import AlbumItem from "./AlbumItem";
import { FlatList } from "react-native";

function Album(props) {
  const { album } = props;
  return (
    <FlatList
      data={album}
      renderItem={({ item }) => (
        <AlbumItem title={item.title} year={item.year} uri={item.uri} />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}

export default Album;
