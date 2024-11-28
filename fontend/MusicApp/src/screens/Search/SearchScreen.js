import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect } from "react";

const CLIENT_ID = "b4b90ab4e8bf47c68af6a59737702756";
const CLIENT_SECRET = "2663617e49a447168773bc60b439d067";

const SearchScreen = ({ navigation, goBack }) => {
  const [data, setData] = useState([]);
  const [accessToken, setAccessToken] = useState(""); // Token từ Spotify
  const [searchInput, setSearchInput] = useState("");

  // Lấy access token
  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
    })
      .then((response) => response.json())
      .then((data) => {
        setAccessToken(data.access_token);
      })
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  const handleSearch = async () => {
    if (!accessToken) return;

    const authParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    try {
      const res = await fetch(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
        authParameters
      );
      if (!res.ok) {
        throw new Error("Error fetching search results");
      }

      const result = await res.json();
      setData(result.tracks.items);
    } catch (error) {
      console.error("Error searching:", error);
    }
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.resultItem}
        onPress={() => navigation.navigate("PlayingMusic")}
      >
        <Image
          source={{ uri: item.album.images[0].url }}
          style={styles.resultImage}
        />
        <View style={{ width: "80%" }}>
          <Text
            style={styles.resultText}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {item.name}
          </Text>
          <Text style={styles.resultText1}>
            {item.artists.map((artist) => artist.name).join(", ")}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          columnGap: 10,
          marginBottom: 20,
        }}
      >
        <Icon
          name="chevron-left"
          size={20}
          color="#000"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <View style={styles.searchInput}>
          <TextInput
            placeholder="Tìm kiếm bài hát"
            value={searchInput}
            onChangeText={setSearchInput}
            onSubmitEditing={handleSearch}
          />
        </View>
        <TouchableOpacity style={styles.btnSearch} onPress={handleSearch}>
          <Icon name="search" size={20} color="#101010" />
        </TouchableOpacity>
      </View>

      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontSize: 16, color: "#888" }}>
            Không có kết quả tìm kiếm
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchInput: {
    width: "80%",
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 7,
  },
  btnSearch: {
    backgroundColor: "#ccc",
    padding: 10,
    borderRadius: 8,
  },
  resultItem: {
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    columnGap: 15,
  },
  resultText: {
    fontSize: 18,
    fontWeight: "600",
  },
  resultText1: {
    fontSize: 14,
    color: "#888",
  },
  resultImage: {
    width: 55,
    height: 55,
    borderRadius: 5,
  },
});

export default SearchScreen;
