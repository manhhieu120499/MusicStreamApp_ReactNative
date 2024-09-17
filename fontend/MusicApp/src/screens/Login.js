import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function Login() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Icon
        name="arrow-left"
        size={24}
        color="#fff"
        style={{ marginTop: 20 }}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Email hoặc tên người dùng</Text>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.text}>Mật khẩu</Text>
        <View>
          <TextInput style={styles.input} />
          <Icon
            name="eye-slash"
            size={24}
            color="#fff"
            style={{ position: "absolute", right: 11, top: 11 }}
          />
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity style={styles.btn_login}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#484848",
            borderRadius: 20,
            paddingHorizontal: 10,
            paddingVertical: 5,
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 13 }}>
            Đăng nhập không cần mật khẩu
          </Text>
        </View>
      </View>
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
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  input: {
    height: 50,
    backgroundColor: "#747474",
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 18,
    color: "#fff",
  },
  btn_login: {
    width: "40%",
    height: 50,
    backgroundColor: "#1ED760",
    borderRadius: 27,
    paddingHorizontal: 10,
    borderWidth: 1,
    fontSize: 18,
    color: "#fff",
    justifyContent: "center",
  },
});

export default Login;
