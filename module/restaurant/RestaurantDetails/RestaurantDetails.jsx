import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { theme } from "../../../style/Theme";
import FoodCard from "./FoodCard";
import { Iconify } from "react-native-iconify";

const RestaurantDetails = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
        <View
          style={{
            borderWidth: 1,
            borderColor: "#d3d1d8",
            padding: 10,
            borderRadius: 8,
          }}
        >
          <Iconify icon="ion:chevron-back-outline" size={26} />
        </View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Image
        style={styles.cover}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/foodys-34dd3.appspot.com/o/restaurant%2F_af7cfd6a-2397-4cae-a169-7271d1f38652.jpg?alt=media",
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
          {data?.map((item, index) => (
            <FoodCard key={index} {...item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  text: {
    fontSize: theme.font.fontSize.subTitle,
    marginVertical: 20,
    fontWeight: theme.font.fontWeight.bold,
    color: theme.colors.font.secondary,
  },
  subHead: {
    fontSize: 18,
    fontWeight: theme.font.fontWeight.medium,
    color: theme.colors.font.secondary,
  },
  foodSection: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 15,
    marginVertical: 10,
  },
  cover: {
    width: "100%",
    height: 250,
    borderRadius: 15,
    marginVertical: 10,
  },
});

export default RestaurantDetails;
