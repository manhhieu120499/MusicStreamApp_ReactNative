import React from "react";
import { FlatList } from "react-native";
import PopularItem from "./PopularItem";

const songs = [
  {
    id: 1,
    title: "Bật Tình Yêu Lên",
    views: "17.886.145",
    uri: "https://i.scdn.co/image/ab67616d00001e021e843401f662f331d0eeded7",
  },
  {
    id: 2,
    title: "Không Thể Cùng Nhau Suốt Kiếp",
    views: "17.886.145",
    uri: "https://i.scdn.co/image/ab67616d00001e02eb667eeea7b8e2435878f56b",
  },
  {
    id: 3,
    title: "Rời Bỏ",
    views: "17.886.145",
    uri: "https://i.scdn.co/image/ab67616d00001e02a0d88a10d1e28c76dda2826c",
  },
  {
    id: 4,
    title: "Thị Mầu",
    views: "17.886.145",
    uri: "https://i.scdn.co/image/ab67616d00001e02f45feff6341ef614db701a49",
  },
  {
    id: 5,
    title: "Kén cá chọn canh",
    views: "17.886.145",
    uri: "https://i.scdn.co/image/ab67616d00001e02432981aa89124b663d0ea0b8",
  },
];

function Popular() {
  return (
    <FlatList
      data={songs}
      renderItem={({ item }) => (
        <PopularItem
          id={item.id}
          title={item.title}
          views={item.views}
          uri={item.uri}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}

export default Popular;
