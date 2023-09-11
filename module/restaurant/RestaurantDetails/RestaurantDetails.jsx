import {
  Animated,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { theme } from "../../../style/Theme";
import FoodCard from "./FoodCard";
import { Iconify } from "react-native-iconify";
import { getFoodByid } from "./api";
import { useEffect, useState } from "react";

const RestaurantDetails = ({ route, navigation }) => {
  const { itemId, logoUrl, title } = route.params;
  const [foodItem, setFoodItem] = useState([]);

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await getFoodByid(itemId);
        setFoodItem(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFood();
  }, []);
  const handleAddtoCart = (itemId) => {
    setCartItems((prev) => [...prev, itemId]);
  };

  const handleOnPressPlace = () => {
    const payload = {
      user_id: "{{userId}}",
      item_id_list: ["{{itemId1}}", "{{itemId1}}", "{{itemId2}}"],
      restaurant_id: "{{resturantId}}",
    };

    ToastAndroid.show("Order Placed Successfully", ToastAndroid.SHORT);

    // navigation.navigate("Restaurant", {
    //   screen: "Orders",
    //   cartItems: cartItems,
    // });
  };

  const handleRemoveFromCart = (itemId) => {
    const indexToRemove = cartItems.indexOf(itemId);
    const prevItem = [...cartItems];
    if (indexToRemove !== -1) {
      prevItem.splice(indexToRemove, 1);
    }
    setCartItems(prevItem);
  };
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
      ></View>
      <Image
        style={styles.cover}
        source={{
          uri: logoUrl,
        }}
      />
      <View style={{ marginHorizontal: 10 }}>
        <Text style={styles.subHead}>Popular Items</Text>
        <Text style={{ fontSize: 12, color: theme.colors.font.secondary }}>
          80 Types of pizza
        </Text>
      </View>

      <ScrollView>
        <View style={styles.foodSection}>
          {foodItem?.map((item, index) => (
            <FoodCard
              key={index}
              imgUrl={item.imgUrl}
              name={item.name}
              id={item.id}
              nutritionalUrl={item.nutritionalUrl}
              price={item.price}
              type={item.type}
              onItemAdd={handleAddtoCart}
              onItemRemove={handleRemoveFromCart}
            />
          ))}
        </View>
      </ScrollView>
      <Pressable onPress={handleOnPressPlace} style={styles.cart}>
        {/* <Iconify icon="mdi:cart" size={30} color={theme.colors.white} /> */}
        <Text style={{ color: theme.colors.white, fontWeight: "600" }}>
          Place Order
        </Text>
        <Text
          style={{
            backgroundColor: theme.colors.white,
            borderRadius: 50,
            width: 20,
            height: 20,
            textAlign: "center",
          }}
        >
          {cartItems.length}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: theme.font.fontSize.subTitle,
    fontWeight: theme.font.fontWeight.bold,
  },
  subHead: {
    fontSize: 18,
    fontWeight: theme.font.fontWeight.medium,
    color: theme.colors.font.secondary,
  },
  foodSection: {
    // flexWrap: "wrap",
    flexDirection: "column",
    gap: 15,
    marginVertical: 10,
    alignItems: "center",
    marginHorizontal: 20,
    // justifyContent: "center",
  },
  cover: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginBottom: 10,
  },
  cart: {
    backgroundColor: theme.colors.orange.primary,
    position: "absolute",
    bottom: 5,
    borderRadius: 50,
    alignSelf: "center",
    padding: 16,
    elevation: 1,
    flexDirection: "row",
    gap: 10,
  },
});

export default RestaurantDetails;
