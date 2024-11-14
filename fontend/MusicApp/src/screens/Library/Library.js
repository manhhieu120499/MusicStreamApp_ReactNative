import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Artists } from "../../../components";
import Logout from "../Logout";

function Library({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: 30,
          rowGap: 25,
          paddingBottom: 7,
          borderBottomWidth: 1,
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
            <Logout
              navigation={navigation}
              visible={showModal}
              onClose={() => setShowModal(false)}
            />
            <Text
              style={{
                fontSize: 24,
                fontWeight: "600",
                color: "#fff",
              }}
            >
              Thư viện
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: 18,
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <Icon name="search" size={25} color="#fff" light />
            <Icon name="plus" size={25} color="#fff" light />
          </View>
        </View>
        <View style={{ flexDirection: "row", columnGap: 15 }}>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#333333",
              borderRadius: 15,
              paddingVertical: 7,
              alignItems: "center",
              justifyContent: "center",
              width: "37%",
            }}
          >
            <Text style={styles.text}>Danh sách phát</Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: "#333333",
              borderRadius: 15,
              paddingVertical: 7,
              alignItems: "center",
              justifyContent: "center",
              width: "25%",
            }}
          >
            <Text style={styles.text}>Nghệ sĩ</Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              columnGap: 10,
              alignItems: "center",
            }}
          >
            <Icon name="sort" size={14} color="#fff" />
            <Text style={styles.text}>Thứ tự chữ cái</Text>
          </View>
          <Icon name="list-ul" size={14} color="#fff" />
        </View>
        <View>
          <Pressable
            style={{
              marginBottom: 25,
              justifyContent: "center",
              rowGap: 10,
            }}
            onPress={() => navigation.navigate("PlayingMusic")}
          >
            <View
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#fff",
              }}
            >
              <Image
                source={{
                  uri: "https://alfred.app/workflows/vdesabou/spotify-mini-player/icon.png",
                }}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                }}
              />
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "400",
              }}
            >
              My Playlist
            </Text>
          </Pressable>
          <Artists />
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
    paddingHorizontal: 15,
  },
  text: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "450",
    textAlign: "center",
  },
});

export default Library;
