import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import { theme } from "../../style/Theme";
import SearchBar from "../common/SearchBar/SearchBar";
import RestaurantCard from "./RestaurantCard";
import Filter from "../common/Filter/Filter";

const Restaurant = () => {
  const data = [
    {
      id: 1,
      name: "Burger King",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image1.png",
      caption: "American - Burgers - Fast Food",
    },
    {
      id: 2,
      name: "Mc Donalds",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image2.png",
      caption: "American - Burgers - Fast Food",
    },
    {
      id: 3,
      name: "Mc Donalds",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image3.png",
      caption: "American - Burgers - Fast Food",
    },
    {
      id: 4,
      name: "Mc Donalds",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image4.png",
      caption: "American - Burgers - Fast Food",
    },
    {
      id: 5,
      name: "Mc Donalds",
      logoUrl:
        "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image5.png",
      caption: "American - Burgers - Fast Food",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.haeding}>What would you like to order</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SearchBar />
        <Filter />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: theme.font.fontWeight.medium,
          }}
        >
          Featured Restaurants
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: theme.colors.secondary,
          }}
        />
        <FlatList
          style={{ height: "78%" }}
          data={data}
          renderItem={({ item }) => <RestaurantCard {...item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 25,
    marginVertical: 20,
  },
  haeding: {
    fontSize: theme.font.fontSize.subTitle,
    marginVertical: 20,
    fontWeight: theme.font.fontWeight.bold,
    color: theme.colors.font.secondary,
  },
  scroll: {},
});

export default Restaurant;
