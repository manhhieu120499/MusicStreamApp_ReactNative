import React from "react";
import { View, Text, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CardType3 } from "../../../../components";
import { useNavigation } from "@react-navigation/native";

const suPham = {
    title: "Sư phạm",
    data: [
        {
            id: 1,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "Better Version",
            desc: "Better Version"
        },
        {
            id: 2,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "Giang ơi Radio",
            desc: "Giang ơi Radio"
        },
        {
            id: 3,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 4,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 5,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 6,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 7,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 8,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
    ]
}

const taiLieu = {
    title: "Tài liệu",
    data: [
        {
            id: 1,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "Better Version",
            desc: "Better Version"
        },
        {
            id: 2,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "Giang ơi Radio",
            desc: "Giang ơi Radio"
        },
        {
            id: 3,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 4,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 5,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 6,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 7,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
        {
            id: 8,
            uri: "https://i.scdn.co/image/ab67656300005f1f33e903d1f9adb0a2f087c5e0",
            text: "LEP-Learn English Podcast",
            desc: "LEP by 3s Media",
        },
    ]
}

function SearchGeneral2({ props, route }) {
    const navigation = useNavigation();
    const { name } = route.params;

    let selected = null;
    if (name === "Sư phạm") {
        selected = suPham;
    } else if (name === "Tài liệu") {
        selected = taiLieu;
    }

    const {
        title = selected.title,
        data = selected.data,
    } = selected;

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#000", paddingHorizontal: 15 }}>
            <View
                style={{
                    marginTop: 20,
                    marginBottom: 40
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
            </View>
            <CardType3 title={title} data={data} />

        </ScrollView>
    );
}

export default SearchGeneral2;