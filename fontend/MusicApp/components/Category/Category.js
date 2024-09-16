import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    name: "Nhạc",
    bgColor: "#DC148C",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Podcasts",
    bgColor: "#006450",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Sự kiện trực tiếp",
    bgColor: "#8400E7",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Dành Cho Bạn",
    bgColor: "#1E3264",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Mới phát hành",
    bgColor: "#608108",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Nhạc Việt",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Pop",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "K-Pop",
    bgColor: "#E61E32",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Hip-Hop",
    bgColor: "#E13300",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Bảng xếp hạng Podcast",
    bgColor: "#0D73EC",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Sư phạm",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
  },
];

function Category() {
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem name={item.name} bgColor={item.bgColor} img={item.img} />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      scrollEnabled={false}
    />
  );
}

export default Category;
