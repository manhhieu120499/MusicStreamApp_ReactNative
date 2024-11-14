import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Category, CategoryVideo } from "../../../components";
import Icon from "react-native-vector-icons/FontAwesome";
import Logout from "../Logout/Logout";
import { fetchData } from "../../../axios";
import axios from "axios";

// const categories = {
// 	categories: [
// 		{
// 			id: 1,
// 			name: 'Nhạc',
// 			bgColor: '#DC148C',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: 'SearchMusic',
// 		},
// 		{
// 			id: 2,
// 			name: 'Podcasts',
// 			bgColor: '#006450',
// 			uri: 'https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa',
// 			path: 'SearchPodcasts',
// 		},
// 		{
// 			id: 3,
// 			name: 'Sự kiện trực tiếp',
// 			bgColor: '#8400E7',
// 			uri: 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
// 			path: '',
// 		},
// 		{
// 			id: 4,
// 			name: 'Dành Cho Bạn',
// 			bgColor: '#1E3264',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: 'SearchForYou',
// 		},
// 		{
// 			id: 5,
// 			name: 'Mới phát hành',
// 			bgColor: '#608108',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf194fec0fdc197fb9e4fe8e64',
// 			path: 'SearchGeneral',
// 		},
// 		{
// 			id: 6,
// 			name: 'Nhạc Việt',
// 			bgColor: '#477D95',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005cafe3ace120cac714821f256c93',
// 			path: 'SearchGeneral',
// 		},
// 		{
// 			id: 7,
// 			name: 'Pop',
// 			bgColor: '#477D95',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf66d545e6a69d0bfe8bd1e825',
// 			path: 'SearchGeneral',
// 		},
// 		{
// 			id: 8,
// 			name: 'K-Pop',
// 			bgColor: '#E61E32',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: 'SearchGeneral',
// 		},
// 		{
// 			id: 9,
// 			name: 'Hip-Hop',
// 			bgColor: '#E13300',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf3c7749936299ad94cce65d83',
// 			path: '',
// 		},
// 		{
// 			id: 10,
// 			name: 'Bảng xếp hạng Podcast',
// 			bgColor: '#0D73EC',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: '',
// 		},
// 		{
// 			id: 11,
// 			name: 'Sư phạm',
// 			bgColor: '#477D95',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: '',
// 		},
// 		{
// 			id: 12,
// 			name: 'Tài liệu',
// 			bgColor: '#503750',
// 			uri: 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
// 			path: '',
// 		},
// 	],
// };

function Search({ navigation }) {
  const [showModal, setShowModal] = useState(false);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(searchText);

  const fetchCategory = async () => {
    // const data = await fetchData('/categories/');
    // setCategories(data);

    // try {
    // 	const response = await axios.get('http://192.168.120.135:5000/categories/');
    // 	setCategories(response.data);
    // } catch (e) {
    // 	console.error(e);
    // }
    try {
      const response = await fetchData("/categories/");
      setCategories(response);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
              <Logout
                navigation={navigation}
                visible={showModal}
                onClose={() => setShowModal(false)}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
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
              height: 45,
              borderRadius: 5,
              paddingHorizontal: 10,
              flexDirection: "row",
              alignItems: "center",
              columnGap: 10,
            }}
          >
            <Icon name="search" size={20} color="#101010" />
            <TextInput
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "#919191",
                width: "100%",
              }}
              placeholder="Bạn muốn nghe gì?"
              value={searchText}
              onChangeText={setSearchText}
            />
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
          <Category categories={categories} />
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
