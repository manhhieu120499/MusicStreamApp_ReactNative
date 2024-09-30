import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Popular, Album, Event, Artist, Playlist } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";

function Profile(props) {
  const {
    uriBanner,
    nameArtist,
    followers,
    popular,
    album,
    event,
    playList,
    uriAvatar,
    artist,
  } = props;
  return (
    <LinearGradient
      colors={["#361913", "#000"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />
      <View style={{ position: "relative" }}>
        <Image source={uriBanner} />
        <Text
          style={{
            fontSize: 48,
            fontWeight: "900",
            color: "#fff",
            position: "absolute",
            bottom: 10,
            left: 30,
          }}
        >
          {nameArtist}
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 15 }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "#B2A8A8", fontSize: 14 }}>
            {followers} người nghe hàng tháng
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "#fff",
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 7,
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "#fff",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Đang theo dõi
              </Text>
            </TouchableOpacity>
            <Icon name="ellipsis-v" size={24} color="#B2A8A8" />
            <Icon name="random" size={24} color="#1ED760" />
            <Icon name="play" size={24} color="#1ED760" />
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>Phổ biến</Text>
          <Popular popular={popular} />
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.text}>Bản phát hành mới phổ biến</Text>
            <Text style={{ fontSize: 13, color: "#B2A8A8", fontWeight: "600" }}>
              Hiện tất cả
            </Text>
          </View>
          <Album album={album} />
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
              Xem danh sách đĩa nhạc
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.text}>Có sự tham gia của {nameArtist}</Text>
          <Event event={event} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.text}>Giới thiệu</Text>
          <View style={{ marginTop: 15 }}>
            <Image
              source={{
                uri: uriAvatar,
              }}
              style={{
                height: 350,
                width: "100%",
                borderRadius: 10,
              }}
            />
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: "rgba(0, 0, 0, 0.3)",
                borderRadius: 10,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
              position: "absolute",
              top: 50,
              left: 20,
            }}
          >
            <Icon name="check" size={17} color="#0071BD" />
            <Text style={{ fontSize: 13, fontWeight: "400", color: "#fff" }}>
              Nghệ sĩ đã xác minh
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              alignItems: "flex-end",
              position: "absolute",
              bottom: 30,
              left: 20,
            }}
          >
            <Text style={styles.text}>{followers}</Text>
            <Text style={{ fontSize: 13, fontWeight: "400", color: "#fff" }}>
              NGƯỜI NGHE HÀNG THÁNG
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.text}>Playlist dựa trên Nghệ sĩ</Text>
          <Playlist playList={playList} />
        </View>
        <View style={{ marginTop: 20, marginBottom: 100 }}>
          <Text style={styles.text}>Fan cũng thích</Text>
          <Artist artist={artist} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "700",
  },
});

export default Profile;
