import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

const categories = [
  {
    name: "Nhạc",
    bgColor: "#DC148C",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Podcasts",
    bgColor: "#006450",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Sự kiện trực tiếp",
    bgColor: "#8400E7",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Dành Cho Bạn",
    bgColor: "#1E3264",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "SearchForYou",
  },
  {
    name: "Mới phát hành",
    bgColor: "#608108",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Nhạc Việt",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Pop",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "K-Pop",
    bgColor: "#E61E32",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Hip-Hop",
    bgColor: "#E13300",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Bảng xếp hạng Podcast",
    bgColor: "#0D73EC",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Sư phạm",
    bgColor: "#477D95",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
    name: "Tài liệu",
    bgColor: "#503750",
    img: require("../../assets/img/search/img-nhac.jpg"),
    path: "",
  },
  {
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
