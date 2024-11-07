import React from "react";
import CardType3Item from "./CardType3Item";
import { FlatList, Text, View } from "react-native";

function CardType3(props) {
    const { title, data } = props;
    return (
        <View>
            <Text
                style={{
                    fontSize: 27,
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: 20,
                }}
            >
                {title}
            </Text>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <CardType3Item
                    uri={item.uri}
                    text={item.text}
                    desc={item.desc} />}
                numColumns={2}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={false}
                columnWrapperStyle={{ justifyContent: "space-between" }}
            />
        </View>
    );
}

export default CardType3;
