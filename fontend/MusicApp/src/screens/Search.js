import React from "react";
import { View, Text, StatusBar, StyleSheet, ScrollView } from "react-native";
import { Category, CategoryVideo } from "../../components";
import Icon from "react-native-vector-icons/FontAwesome";

function Search() {
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
              <View
                style={{
                  backgroundColor: "#FFA500",
                  width: 30,
                  height: 30,
                  justifyContent: "center",
                  borderRadius: 30,
                }}
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
              </View>
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

        <View style={{ marginBottom: 15 }}>
          <Text style={styles.subTitle}>Khám phá các thể loại của bạn</Text>
          <CategoryVideo />
        </View>

        <View>
          <Text style={styles.subTitle}>Duyệt tìm tất cả</Text>
          <Category />
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
