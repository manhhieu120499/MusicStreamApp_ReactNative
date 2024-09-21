import React from "react";
import AlbumItem from "./AlbumItem";
import { FlatList } from "react-native";

const songs = [
  {
    id: 1,
    title: "Bật Tình Yêu Lên",
    year: "2023 • Đĩa đơn",
    uri: "https://i.scdn.co/image/ab67616d00001e021e843401f662f331d0eeded7",
  },
  {
    id: 2,
    title: "Không Thể Cùng Nhau Suốt Kiếp",
    year: "2023 • Đĩa đơn",
    uri: "https://i.scdn.co/image/ab67616d00001e02eb667eeea7b8e2435878f56b",
  },
  {
    id: 3,
    title: "Rời Bỏ",
    year: "2023 • Đĩa đơn",
    uri: "https://i.scdn.co/image/ab67616d00001e02a0d88a10d1e28c76dda2826c",
  },
  {
    id: 4,
    title: "Thị Mầu",
    year: "2023 • Đĩa đơn",
    uri: "https://i.scdn.co/image/ab67616d00001e02f45feff6341ef614db701a49",
  },
];

function Album() {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => (
        <AlbumItem title={item.title} year={item.year} uri={item.uri} />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}

export default Album;
