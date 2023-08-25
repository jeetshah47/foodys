import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Restaurant from "./Restaurant";
import RestaurantDetails from "./RestaurantDetails/RestaurantDetails";
import MyTab from "../routes/Tab";

const RStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RestaurantPage"
        component={Restaurant}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Restaurant Detail"
        component={RestaurantDetails}
      />
    </Stack.Navigator>
  );
};

const RestaurantStack = () => {
  return <RStack />;
};

export default RestaurantStack;
