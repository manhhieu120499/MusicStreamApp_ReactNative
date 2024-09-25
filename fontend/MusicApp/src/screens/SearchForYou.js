import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Cards } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const yoursOwn = {
  title: "Của riêng mình bạn",
  data: [
    {
      uri: "https://daylist.spotifycdn.com/playlist-covers-mix/en/afternoon_default.jpg",
      text: "Danh sách phát cho các khoảnh khắc trong ngày",
    },
  ],
};
const forUs = {
  title: "Dành cho chúng ta",
  data: [
    {
      uri: "https://blend-playlist-covers.spotifycdn.com/create-blend.png",
      text: "Tạo Giai điệu chung",
    },
  ],
};
const types = {
  title: "Tuyển tập theo thể loại",
  data: [
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/mandopop/0BezPR1Hn38i8qShQKunSD/vi/default",
      text: "Zhou Shen, Liu Yu, Zhou Keyu và nhiều hơn nữa",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/reggae/3BWBxpXDxofgji3RKZPIz8/vi/default",
      text: "Hòa Minzy, Khởi My, Tăng Duy Tân và nhiều hơn nữa",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/cantopop/3hKH1FqP7gU4WZAljFQl3t/vi/default",
      text: "Zhou Keyu và nhiều hơn nữa",
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
const decade = {
  title: "Tuyển tập theo thập kỷ",
  data: [
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/6Ff53KvcvAj5U7Z1vojB5o/vi/default",
      text: "*NSYNC, Arctic Monkeys, Coldplay và nhiều hơn nữa",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/two_thousands/6Ff53KvcvAj5U7Z1vojB5o/vi/default",
      text: "Những bài hát hay nhất của thập kỷ 2000",
    },
  ],
};
const moods = {
  title: "Tuyển tập nhạc theo tâm trạng",
  data: [
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/moody/35HU1GT1q797EwZsP8uduO/vi/default",
      text: "Những bài hát hay nhất cho buổi sáng",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/moody/35HU1GT1q797EwZsP8uduO/vi/default",
      text: "Mr. Siro và nhiều hơn nữa",
    },
    {
      uri: "https://seed-mix-image.spotifycdn.com/v6/img/moody/35HU1GT1q797EwZsP8uduO/vi/default",
      text: "Những bài hát hay nhất cho buổi tối",
    },
  ],
};

function SearchForYou({}) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#3E3D3D",
          height: 55,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 15,
          columnGap: 100,
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
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Dành cho Bạn
        </Text>
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 15, rowGap: 30 }}>
          <Cards title={yoursOwn.title} data={yoursOwn.data} />
          <Cards title={forUs.title} data={forUs.data} />
          <Cards title={types.title} data={types.data} />
          <Cards title={artists.title} data={artists.data} />
          <Cards title={decade.title} data={decade.data} />
          <Cards title={moods.title} data={moods.data} />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              marginTop: 20,
              textAlign: "center",
              marginBottom: 140,
            }}
          >
            Khám phá nhạc mới
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    width: "100%",
    backgroundColor: "#101010",
  },
});

export default SearchForYou;
