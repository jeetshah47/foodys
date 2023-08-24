import { StatusBar, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./module/home/HomeScreen";
import Login from "./module/auth/Login";
import Restaurant from "./module/restaurant/Restaurant";
import RestaurantDetails from "./module/restaurant/RestaurantDetails/RestaurantDetails";

export default function App() {
  const foodItem = [
    {
      name: "Cheese Burger",
      price: 10,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/food%2Ffood1.jpg?alt=media",
    },
    {
      name: "Cheese Burger",
      price: 10,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/food%2Ffood2.jpg?alt=media",
    },
    {
      name: "Cheese Burger",
      price: 10,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/food%2Ffood3.jpg?alt=media",
    },
    {
      name: "Cheese Burger",
      price: 10,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/food%2Ffood4.jpg?alt=media",
    },
    {
      name: "Cheese Burger",
      price: 10,
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/food%2Fpizzabg.png?alt=media",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      {/* <Restaurant /> */}
      <StatusBar />
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
