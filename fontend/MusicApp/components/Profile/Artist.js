import React from "react";
import ArtistItem from "./ArtistItem";
import { FlatList } from "react-native";

function Artist(props) {
  const { artist } = props;
  return (
    <FlatList
      data={artist}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ArtistItem uri={item.uri} name={item.name} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
    />
  );
}

export default Artist;
