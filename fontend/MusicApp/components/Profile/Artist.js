import React from "react";
import ArtistItem from "./ArtistItem";
import { FlatList } from "react-native";

const artists = [
  {
    id: 1,
    name: "Issac",
    uri: "https://i.scdn.co/image/ab67616100005174cb44ea77e9b885b05ea60e8a",
  },
  {
    id: 2,
    name: "Anh Tú",
    uri: "https://i.scdn.co/image/ab67616100005174653268b19c265e835504190e",
  },
  {
    id: 3,
    name: "Hương Giang",
    uri: "https://i.scdn.co/image/ab67616100005174813f1953da358f0e68a42b5c",
  },
  {
    id: 4,
    name: "Miu Lê",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 5,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 6,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 7,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 8,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 9,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
  {
    id: 10,
    name: "Hòa Minzy",
    uri: "https://i.scdn.co/image/ab676161000051742fc3ef8a80c35243e5e899b8",
  },
];

function Artist() {
  return (
    <FlatList
      data={artists}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ArtistItem uri={item.uri} name={item.name} />}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}
    />
  );
}

export default Artist;
