import React from "react";
import EventItem from "./EventItem";
import { FlatList } from "react-native";

function Playlist(props) {
  const { playList } = props;
  return (
    <FlatList
      data={playList}
      renderItem={({ item }) => <EventItem title={item.title} uri={item.uri} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default Playlist;
