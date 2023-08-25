import { StatusBar, StyleSheet, Text, View, LogBox } from "react-native";
import HomeScreen from "./module/home/HomeScreen";
import Login from "./module/auth/Login";
import Restaurant from "./module/restaurant/Restaurant";
import RestaurantDetails from "./module/restaurant/RestaurantDetails/RestaurantDetails";
import { NavigationContainer } from "@react-navigation/native";
import MyTab from "./module/routes/Tab";
import RestaurantStack from "./module/restaurant/RestaurantStack";
import { useState } from "react";
import Base from "./module/base/Base";
LogBox.ignoreAllLogs(true);
export default function App() {
  const [user, setUser] = useState({
    address: "",
    first_name: "",
    id: "",
    last_name: "",
    ph_number: "",
  });

  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <StatusBar />
      {/* <Restaurant /> */}
      {/* <RestaurantDetails title={"Buger King"} data={foodItem} /> */}
        <NavigationContainer>
          <Base />
        </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
