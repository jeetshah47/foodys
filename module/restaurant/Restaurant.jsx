import { StyleSheet, Text, View, ScrollView } from "react-native";
import { theme } from "../../style/Theme";
import SearchBar from "../common/SearchBar/SearchBar";
import RestaurantCard from "./RestaurantCard";

const Restaurant = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.haeding}>What would you like to order</Text>
      <SearchBar />
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: theme.font.fontWeight.medium,
          }}
        >
          Featured Restaurants
        </Text>
        <ScrollView style={{ height: "75%" }}>
          <RestaurantCard />
        </ScrollView>
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
