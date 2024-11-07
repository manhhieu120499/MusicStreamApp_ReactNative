import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Category, CardType2, CardType1 } from "../../../../components";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const categories = {
  categories: [
    {
      id: 2,
      name: "Podcasts",
      bgColor: "#006450",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "SearchPodcasts",
    },
    {
      id: 3,
      name: "Sự kiện trực tiếp",
      bgColor: "#8400E7",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "",
    },
    {
      id: 4,
      name: "Dành Cho Bạn",
      bgColor: "#1E3264",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "SearchForYou",
    },
    {
      id: 5,
      name: "Mới phát hành",
      bgColor: "#608108",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "",
    },
    {
      id: 6,
      name: "Nhạc Việt",
      bgColor: "#477D95",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "",
    },
    {
      id: 7,
      name: "Pop",
      bgColor: "#477D95",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "",
    },
    {
      id: 8,
      name: "K-Pop",
      bgColor: "#E61E32",
      img: require("../../../../assets/img/search/img-nhac.jpg"),
      path: "",
    },
  ],
};
const newMusic = {
  title: "Khám phá âm nhạc mới",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "New Music Friday Vietnam",
      text: "20.289 người theo dõi",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "Discover Weekly",
      text: "Playlist • của Spotify",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "Mới ra lò",
      text: "Playlist • của Spotify",
    },
  ],
};
const editorChoice = {
  title: "Danh sách phát do Biên tập viên chọn",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f0000000299d356cc507118764f8718bb",
      title: "Thiên Hạ Nghe Gì?",
      text: "209.429 nguời theo dõi",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f0000000299d356cc507118764f8718bb",
      title: "Thiên Hạ Nghe Gì?",
      text: "209.429 nguời theo dõi",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f0000000299d356cc507118764f8718bb",
      title: "Thiên Hạ Nghe Gì?",
      text: "209.429 nguời theo dõi",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f0000000299d356cc507118764f8718bb",
      title: "Thiên Hạ Nghe Gì?",
      text: "209.429 nguời theo dõi",
    },
  ],
};
const yoursOwn = {
  title: "Của riêng mình bạn",
  data: [
    {
      uri: "https://daylist.spotifycdn.com/playlist-covers-mix/en/afternoon_default.jpg",
      text: "daylist",
    },
  ],
};
const newRelease = {
  title: "Tuyển chọn những bản phát hành mới",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "Want Me Back",
      text: "New Music Friday",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "Want Me Back",
      text: "Discover Weekly",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f000000024149a62e486983dca0f9e23a",
      title: "Want Me Back",
      text: "Mới ra lò",
    },
  ],
};
const ranking = {
  title: "Bảng xếp hạng nổi bật",
  data: [
    {
      uri: "https://charts-images.scdn.co/assets_generated/locale_vi/regional/weekly/region_global_default.jpg",
      title: "Bài hát hàng đầu tại Toàn Cầu",
      text: "New Music Friday",
    },
    {
      uri: "https://charts-images.scdn.co/assets_generated/locale_vi/regional/weekly/region_global_default.jpg",
      title: "Bài hát hàng đầu tại Toàn Cầu",
      text: "Discover Weekly",
    },
    {
      uri: "https://charts-images.scdn.co/assets_generated/locale_vi/regional/weekly/region_global_default.jpg",
      title: "Bài hát hàng đầu tại Toàn Cầu",
      text: "Mới ra lò",
    },
  ],
};
const dailyMix = {
  title: "Daily Mix của bạn",
  data: [
    {
      uri: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4371fb198b011bb666a3bfde/1/vi/default",
      text: "Daily Mix 1",
    },
    {
      uri: "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb555f21234ccc27d609c6f000/2/vi/default",
      text: "Daily Mix 2",
    },
  ],
};
const equal = {
  title: "Danh sách phát EQUAL phổ biến",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f00000002bacdb3c59b421516d8ba07e2",
      title: "EQUAL Việt Nam",
      text: "EQUAL Việt Nam",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f00000002bacdb3c59b421516d8ba07e2",
      title: "EQUAL Việt Nam",
      text: "EQUAL K-Pop",
    },
    {
      uri: "https://i.scdn.co/image/ab67706f00000002bacdb3c59b421516d8ba07e2",
      title: "EQUAL Việt Nam",
      text: "EQUAL US-UK",
    },
  ],
};
const artists = {
  title: "Tuyển tập theo nghệ sĩ",
  data: [
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/3BWBxpXDxofgji3RKZPIz8/vi/default",
      text: "Khởi My, Tóc Tiên, Chi Pu",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/1n9JKdEdLxrbgJiqz1WZFJ/vi/default",
      text: "Hòa Minzy, Khởi My và Mr. Siro",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/artist/4zRG1PU5uAC6ah9yeuxfFi/vi/default",
      text: "Mr. Siro, Khắc Việt và Bảo Thy",
    },
  ],
};

const musicViet = {
  // colors: ["#0D51A2", "#092B54", "#101010"],
  colors: ["#AC136F", "#500A34", "#101010"],
  title: "Nhạc",
  sections: [
    { component: CardType1, title: newMusic.title, data: newMusic.data },
    {
      component: CardType1,
      title: editorChoice.title,
      data: editorChoice.data,
    },
    { component: CardType2, title: yoursOwn.title, data: yoursOwn.data },
    {
      component: CardType1,
      title: newRelease.title,
      data: newRelease.data,
    },
    { component: CardType1, title: ranking.title, data: ranking.data },
    { component: CardType2, title: dailyMix.title, data: dailyMix.data },
    { component: CardType1, title: equal.title, data: equal.data },
    { component: CardType2, title: artists.title, data: artists.data },
  ],
};

function SearchMusic(props) {
  const { } = props;
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={["#AC136F", "#500A34", "#101010"]}
        locations={[0.0, 0.03, 0.1]}
        style={{ flex: 1, paddingHorizontal: 15 }}
      >
        <View
          style={{
            marginTop: 20,
            height: 90,
            justifyContent: "space-between",
          }}
        >
          <Icon
            name="chevron-left"
            size={20}
            color="#fff"
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Text
            style={{
              fontSize: 27,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Nhạc
          </Text>
        </View>
        <View style={{ rowGap: 20, marginBottom: 170 }}>
          <CardType1 title={newMusic.title} data={newMusic.data} />
          <CardType1 title={editorChoice.title} data={editorChoice.data} />
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "600",
                color: "#fff",
                paddingBottom: 15,
                textAlign: "center",
              }}
            >
              Duyệt tìm tất cả
            </Text>
            <Category categories={categories.categories} />
            <View
              style={{
                borderWidth: 1,
                borderColor: "#4B4A4A",
                width: "60%",
                borderRadius: 20,
                alignSelf: "center",
                padding: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: "700",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Khám phá tất cả danh mục
              </Text>
            </View>
          </View>
          <CardType2 title={yoursOwn.title} data={yoursOwn.data} />
          <CardType1 title={newRelease.title} data={newRelease.data} />
          <CardType1 title={ranking.title} data={ranking.data} />
          <CardType2 title={dailyMix.title} data={dailyMix.data} />
          <CardType1 title={equal.title} data={equal.data} />
          <CardType2 title={artists.title} data={artists.data} />
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default SearchMusic;
