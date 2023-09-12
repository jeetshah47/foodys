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
import { getRestaurant, getRestaurantByCity } from "./api";
import { Dropdown } from "react-native-element-dropdown";
import { Iconify } from "react-native-iconify";

const Restaurant = ({ navigation }) => {
  const handlePress = (id, logoUrl) => {
    navigation.navigate("Restaurant Detail", {
      itemId: id,
      logoUrl: logoUrl,
    });
  };

  const cityData = [
    {
      id: 1,
      name: "Vadodara",
    },
    {
      id: 2,
      name: "Surat",
    },
    {
      id: 3,
      name: "Ahmedabad",
    },
  ];

  const [searchParam, setSearchParam] = useState("");
  const [city, setCity] = useState({
    id: 1,
    name: "Vadodara",
  });
  const [viewCity, setViewCity] = useState(false);

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
  const [filterRestaurant, setFilter] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRestaurantByCity(city.name);
        console.log(response);
        setData(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    // setData
  }, [city]);

  useEffect(() => {
    const searct = data?.filter((item) => item.name.includes(searchParam));
    setFilter(searct);
  }, [searchParam]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.haeding}>What would you like to order</Text>
        <Iconify
          icon="fluent:location-12-filled"
          size={30}
          color={theme.colors.orange.secondary}
          onPress={() => setViewCity(true)}
        />
      </View>
      {viewCity && (
        <Dropdown
          data={cityData}
          onChange={(value) => {
            setCity(value);
            setViewCity(false);
          }}
          placeholder="Select City"
          labelField={"name"}
          valueField={"id"}
          value={city.id}
          style={styles.dropdown}
        />
      )}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SearchBar param={searchParam} setValue={setSearchParam} />
        <Filter />
      </View>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: theme.font.fontWeight.medium,
          }}
        >
          Featured Restaurants of {city.name}
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
          data={filterRestaurant.length > 0 ? filterRestaurant : data}
          renderItem={({ item }) => (
            <Pressable onPress={() => handlePress(item.id, item.logoUrl)}>
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
    fontSize: 22,
    marginVertical: 9,
    fontWeight: theme.font.fontWeight.bold,
    color: theme.colors.font.secondary,
  },
  scroll: {},
  dropdown: {
    borderWidth: 1,
    borderColor: theme.colors.secondary,
    borderRadius: 10,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});

export default Restaurant;
