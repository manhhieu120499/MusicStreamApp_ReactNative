import React from "react";
import EventItem from "./EventItem";
import { FlatList } from "react-native";

function Event(props) {
  const { event } = props;
  return (
    <FlatList
      data={event}
      renderItem={({ item }) => <EventItem title={item.title} uri={item.uri} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default Event;
