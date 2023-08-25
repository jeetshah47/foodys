import { createStackNavigator } from "@react-navigation/stack";
import RestaurantStack from "../restaurant/RestaurantStack";
import Login from "../auth/Login";
import MyTab from "../routes/Tab";

const Base = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Restaurant"
        component={MyTab}
      />
    </Stack.Navigator>
  );
};

export default Base;
