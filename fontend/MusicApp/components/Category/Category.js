import { View, FlatList } from "react-native";
import CategoryItem from "./CategoryItem";

function Category(props) {
  const { categories } = props;
  return (
    <FlatList
      data={categories}
      renderItem={({ item }) => (
        <CategoryItem
          name={item.name}
          bgColor={item.bgColor}
          uri={item.uri}
          path={item.path}
        />
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()}
      columnWrapperStyle={{ justifyContent: "space-between" }}
      scrollEnabled={false}
    />
  );
}

export default Category;
