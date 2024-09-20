import React from "react";
import EventItem from "./EventItem";
import { FlatList } from "react-native";

const playList = [
  {
    id: 1,
    title: "Chỉ Thích Nhạc Hòa Minzy",
    uri: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da84795b083b034af430a9d76154",
  },
  {
    id: 2,
    title: "Nàng Thơ Nhạc Việt",
    uri: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84f008a5ebad9e89061a43b716",
  },
  {
    id: 3,
    title: "Nhạc Việt Ngày Mới",
    uri: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000d72c4d6af6fa8afcfedfc083fd1e",
  },
  {
    id: 4,
    title: "This Is Hòa Minzy",
    uri: "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO26gPeO-default.jpg",
  },
];

function Playlist() {
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
