import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./module/home/HomeScreen";
import Login from "./module/auth/Login";
import Restaurant from "./module/restaurant/Restaurant";
import RestaurantDetails from "./module/restaurant/RestaurantDetails/RestaurantDetails";

export default function App() {
  const foodItem = [
    {
      name: "Cheese Burger",
      price: 10,
      image: "",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Restaurant /> */}
      <RestaurantDetails title={"Buger King"} data={foodItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
