import React, { useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Category, CategoryVideo } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import Logout from "./Logout/Logout";

const categories = {
  categories: [
    {
      id: 1,
      name: "Nhạc",
      bgColor: "#DC148C",
      img: require("../../assets/img/search/img-nhac.jpg"),
      path: "SearchMusic",
    },
    {
      id: 2,
      name: "Podcasts",
      bgColor: "#006450",
      img: require("../../assets/img/search/img-nhac.jpg"),
      path: "SearchPodcasts",
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
  ],
};

function Search() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="auto" />
        <View
          style={{
            rowGap: 25,
            marginBottom: 25,
            marginTop: 30,
            position: "relative",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                columnGap: 15,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#FFA500",
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  borderRadius: 30,
                }}
                onPress={() => setShowModal(true)}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  M
                </Text>
              </TouchableOpacity>
              <Logout visible={showModal} onClose={() => setShowModal(false)} />
              <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
                Tìm kiếm
              </Text>
            </View>
            <View>
              <Icon name="camera" size={25} color="#fff" />
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              height: 49,
              borderRadius: 5,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Icon name="search" size={20} color="#101010" />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#949494",
              }}
            >
              Bạn muốn nghe gì?{" "}
            </Text>
          </View>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={styles.subTitle}>Khám phá các thể loại của bạn</Text>
          <CategoryVideo />
        </View>

        <View>
          <Text style={[styles.subTitle, { marginBottom: 15 }]}>
            Duyệt tìm tất cả
          </Text>
          <Category categories={categories.categories} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: "100%",
    // paddingTop: StatusBar.currentHeight,
    backgroundColor: "#101010",
    paddingHorizontal: 15,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default Search;
