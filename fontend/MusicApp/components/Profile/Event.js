import React from "react";
import EventItem from "./EventItem";
import { FlatList } from "react-native";

const events = [
  {
    id: 1,
    title: "This Is Hòa Minzy",
    uri: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26gPeO-default.jpg",
  },
  {
    id: 2,
    title: "Hòa Minzy Radio",
    uri: "https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/3BWBxpXDxofgji3RKZPIz8/vi",
  },
  {
    id: 3,
    title: "Song Ca V-Pop",
    uri: "https://i.scdn.co/image/ab67706f000000022bc4242d1c93f8768509a4a0",
  },
  {
    id: 4,
    title: "Best of V-Pop Không Thể Thiếu 2023",
    uri: "https://i.scdn.co/image/ab67706f00000002084387e06ca83f175694b9eb",
  },
  {
    id: 5,
    title: "Tiến Lên Việt Nam Ơi",
    uri: "https://i.scdn.co/image/ab67706f00000002c06525ae9f0aba656edd8852",
  },
];

function Event() {
  return (
    <FlatList
      data={events}
      renderItem={({ item }) => <EventItem title={item.title} uri={item.uri} />}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default Event;
