import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function CardType3Item(props) {
    const { uri, text, desc } = props;
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: uri }}
                style={{ width: 150, height: 150, borderRadius: 5 }}
            />
            <Text style={[styles.text, { color: "#fff", fontWeight: "700" }]} numberOfLines={2} ellipsizeMode="tail">
                {text}
            </Text>
            <Text style={[styles.text, { color: "#B5B2B2", }]} numberOfLines={2} ellipsizeMode="tail">
                {desc}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        paddingBottom: 20,
    },
    text: {
        fontSize: 13,
        textAlign: "center",
        marginTop: 5,
        width: 125,
    },
});

export default CardType3Item;
