import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import { theme } from "../../../style/Theme";
import { Iconify } from "react-native-iconify";

const FoodCard = ({ imageUrl, name, price }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{ borderRadius: 15, width: 170, height: 170 }}
        source={{ uri: imageUrl }}
      />

      <Pressable
        android_ripple={{ color: "#9796A1", radius: 50 }}
        style={styles.info}
      >
        <Iconify
          icon="icon-park-solid:traditional-chinese-medicine"
          color={"#2e88fa"}
        />
        <Text>Nutrients</Text>
      </Pressable>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ marginHorizontal: 10, marginVertical: 12 }}>
          <Text style={{ fontWeight: theme.font.fontWeight.bold }}>{name}</Text>
          <View>
            <Text
              style={{
                fontSize: theme.font.fontSize.small,
                color: theme.colors.tertiary,
              }}
            >
              Rs.{" "}
              {/* <Iconify
              icon="fa6-solid:indian-rupee-sign"
              size={theme.font.fontSize.small}
            />{" "} */}
              {price}
            </Text>
            <Iconify icon="mdi:lacto-vegetarian" color={"#"} />
          </View>
        </View>
        <View>
          <TouchableNativeFeedback>
            <Iconify
              icon="carbon:add-filled"
              color={theme.colors.orange.secondary}
              size={30}
            />
          </TouchableNativeFeedback>
          {/*  */}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.25,
    borderColor: "#d3d1d8",
    borderRadius: 12,
  },
  info: {
    position: "absolute",
    bottom: 50,
    elevation: 2,
    shadowColor: "#fe724c",
    left: 10,
    backgroundColor: theme.colors.white,
    borderRadius: 50,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default FoodCard;
