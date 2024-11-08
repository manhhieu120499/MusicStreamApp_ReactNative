import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { useState } from "react";
import Logout from "../../Logout";

function Navbar(props) {
  const { styles, state, onPress } = props;
  const [active, setActive] = state;
  const [showModal, setShowModal] = useState(false);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 60,
        width: "100%",
      }}
    >
      <TouchableOpacity
        style={{ width: 40, height: 40, borderRadius: 20 }}
        // onPress={() => onPress.navigate('Logout')}
        onPress={() => setShowModal(true)}
      >
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/a2/0d/a5/a20da505d402071bbbfc9bb55f59fb97.jpg",
          }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 20,
          }}
        />
      </TouchableOpacity>
      <Logout visible={showModal} onClose={() => setShowModal(false)} />
      <TouchableOpacity
        style={[
          styles.btnNavbar,
          {
            backgroundColor: active.all == true ? "#008000" : "#ccc",
          },
        ]}
        onPress={() =>
          setActive({
            all: true,
            music: false,
            podcast: false,
          })
        }
      >
        <Text style={styles.txtBtnNavbar}>Tất cả</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnNavbar,
          {
            backgroundColor: active.music == true ? "#008000" : "#ccc",
          },
        ]}
        onPress={() =>
          setActive({
            all: false,
            music: true,
            podcast: false,
          })
        }
      >
        <Text style={styles.txtBtnNavbar}>Nhạc</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.btnNavbar,
          {
            backgroundColor: active.podcast == true ? "#008000" : "#ccc",
          },
        ]}
        onPress={() =>
          setActive({
            all: false,
            music: false,
            podcast: true,
          })
        }
      >
        <Text style={styles.txtBtnNavbar}>Podcast</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;
