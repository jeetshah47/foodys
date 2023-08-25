import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Pressable,
} from "react-native";
import { theme } from "../../style/Theme";
import SearchBar from "../common/SearchBar/SearchBar";
import RestaurantCard from "./RestaurantCard";
import Filter from "../common/Filter/Filter";
import { useEffect, useState } from "react";
import { getRestaurant } from "./api";

const Restaurant = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate("Restaurant Detail", {
      itemId: id,
    });
  };
  // const data = [
  //   {
  //     id: 1,
  //     name: "Burger King",
  //     logoUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image1.png",
  //     caption: "American - Burgers - Fast Food",
  //   },
  //   {
  //     id: 2,
  //     name: "Mc Donalds",
  //     logoUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image2.png",
  //     caption: "American - Burgers - Fast Food",
  //   },
  //   {
  //     id: 3,
  //     name: "Mc Donalds",
  //     logoUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image3.png",
  //     caption: "American - Burgers - Fast Food",
  //   },
  //   {
  //     id: 4,
  //     name: "Mc Donalds",
  //     logoUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image4.png",
  //     caption: "American - Burgers - Fast Food",
  //   },
  //   {
  //     id: 5,
  //     name: "Mc Donalds",
  //     logoUrl:
  //       "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/image5.png",
  //     caption: "American - Burgers - Fast Food",
  //   },
  // ];

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRestaurant();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    // setData
  }, []);

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
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item.id)}>
              <RestaurantCard {...item} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  haeding: {
    fontSize: theme.font.fontSize.subTitle,
    marginVertical: 9,
    fontWeight: theme.font.fontWeight.bold,
    color: theme.colors.font.secondary,
  },
  scroll: {},
});

export default Restaurant;
