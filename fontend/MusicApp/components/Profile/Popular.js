import React from "react";
import { FlatList } from "react-native";
import PopularItem from "./PopularItem";

function Popular(props) {
  const { popular } = props;
  return (
    <FlatList
      data={popular}
      renderItem={({ item }) => (
        <PopularItem
          id={item.id}
          title={item.title}
          views={item.views}
          uri={item.uri}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      scrollEnabled={false}
    />
  );
}

export default Popular;
