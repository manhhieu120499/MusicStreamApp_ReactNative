import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Artist, Cards, CardType1 } from "../../../../components";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

const popularV = {
  title: "Nhạc Việt thịnh hành",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f0000000299d356cc507118764f8718bb",
      title: "Thiên Hạ Nghe Gì?",
      text: "209.429 nguời theo dõi",
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
const divaV = {
  title: "Diva nhạc Việt",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67616d00001e0278e5d4cce17098876e185de2",
      title: "Hồng Nhung và Những Bài Top Ten",
      text: "Hồng Nhung",
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
const roseV = {
  title: "Những đóa hồng nhạc Việt",
  data: [
    {
      uri: "https://i.scdn.co/image/ab67706f0000000204430b73deb8162bbbb5496a",
      title: "Đóa Hồng Nhạc Việt",
      text: "30.787 người theo dõi",
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
const bandIndie = {
  title: "Những nhóm nhạc Indie Việt cực chất",
  artist: [
    {
      id: "1",
      uri: "https://i.scdn.co/image/ab6761610000517466e0a040a53996e8bf19f9b5",
      name: "Ngọt",
    },
    {
      id: "2",
      uri: "https://i.scdn.co/image/ab6761610000517466e0a040a53996e8bf19f9b5",
      name: "Playlist • của Spotify",
    },
    {
      id: "3",
      uri: "https://i.scdn.co/image/ab6761610000517466e0a040a53996e8bf19f9b5",
      name: "Playlist • của Spotify",
    },
  ],
};

const moiPhatHanh = {
  colors: ["#035444", "#042821", "#101010"],
  title: "Mới phát hành",
  sections: [
    { component: CardType1, title: popularV.title, data: popularV.data },
    {
      component: CardType1,
      title: divaV.title,
      data: divaV.data,
    },
  ],
};
const musicViet = {
  colors: ["#0D51A2", "#092B54", "#101010"],
  title: "Nhạc Việt",
  sections: [
    { component: CardType1, title: popularV.title, data: popularV.data },
    {
      component: CardType1,
      title: divaV.title,
      data: divaV.data,
    },
    { component: CardType1, title: roseV.title, data: roseV.data },
    {
      component: CardType1,
      title: newRelease.title,
      data: newRelease.data,
    },
    { component: CardType1, title: ranking.title, data: ranking.data },
    { component: Cards, title: dailyMix.title, data: dailyMix.data },
    { component: CardType1, title: equal.title, data: equal.data },
    { component: Cards, title: artists.title, data: artists.data },
    { component: Artist, title: bandIndie.title, data: bandIndie.artist },
  ],
};
const pop = {
  colors: ["#6E162A", "#330C14", "#101010"],
  title: "Pop",
  sections: [
    { component: CardType1, title: popularV.title, data: popularV.data },
    {
      component: CardType1,
      title: divaV.title,
      data: divaV.data,
    },
    { component: CardType1, title: roseV.title, data: roseV.data },
  ],
};
const kpop = {
  colors: ["#B42C04", "#511604", "#101010"],
  title: "K-Pop",
  sections: [
    { component: CardType1, title: popularV.title, data: popularV.data },
    {
      component: CardType1,
      title: divaV.title,
      data: divaV.data,
    },
    { component: CardType1, title: roseV.title, data: roseV.data },
  ],
};

function SearchGeneral({ props, route }) {
  const { name } = route.params;

  let selected = null;
  if (name === "Nhạc Việt") {
    selected = musicViet;
  } else if (name === "Pop") {
    selected = pop;
  } else if (name === "K-Pop") {
    selected = kpop;
  } else if (name === "Mới phát hành") {
    selected = moiPhatHanh;
  }

  const {
    colors = selected.colors,
    title = selected.title,
    sections = selected.sections,
  } = selected;
  const navigation = useNavigation();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <LinearGradient
        colors={colors}
        locations={[0.0, 0.05, 0.1]}
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
            {title}
          </Text>
        </View>
        <View style={{ rowGap: 20, marginBottom: 170 }}>
          {sections.map((section, index) => (
            <section.component
              key={index}
              title={section.title}
              data={section.data}
            />
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
}

export default SearchGeneral;
