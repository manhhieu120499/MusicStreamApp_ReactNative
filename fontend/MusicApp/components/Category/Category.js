import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    id: 1,
    name: "Nhạc",
    bgColor: "#DC148C",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 2,
    name: "Podcasts",
    bgColor: "#006450",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 3,
    name: "Sự kiện trực tiếp",
    bgColor: "#8400E7",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 4,
    name: "Dành Cho Bạn",
    bgColor: "#1E3264",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "SearchForYou",
  },
  {
    id: 5,
    name: "Mới phát hành",
    bgColor: "#608108",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 6,
    name: "Nhạc Việt",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 7,
    name: "Pop",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 8,
    name: "K-Pop",
    bgColor: "#E61E32",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 9,
    name: "Hip-Hop",
    bgColor: "#E13300",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 10,
    name: "Bảng xếp hạng Podcast",
    bgColor: "#0D73EC",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 11,
    name: "Sư phạm",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 12,
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 13,
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 14,
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 15,
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    id: 16,
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
];

function Category() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem
          name={item.name}
          bgColor={item.bgColor}
          img={item.img}
          path={item.path}
        />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      scrollEnabled={false}
    />
  );
}

export default Category;
