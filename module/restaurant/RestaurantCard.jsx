import { Image, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/Theme";
import { Iconify } from "react-native-iconify";

const RestaurantCard = ({ name, id, logoUrl, caption }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./image1.png")} />
      <View style={{ marginHorizontal: 13 }}>
        <Text
          style={{ fontSize: 16, fontWeight: theme.font.fontWeight.medium }}
        >
          {name}
        </Text>
        <View style={{ flexDirection: "row", gap: 17 }}>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <Iconify icon="ic:baseline-delivery-dining" color={"#FE724C"} />
            <Text style={{ color: "#8A8E9B" }}>Free Delivery</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
            <Iconify icon="charm:clock-alarm" color={"#FE724C"} />
            <Text style={{ color: "#8A8E9B" }}>10 - 15 mins</Text>
          </View>
        </View>
        <View>
          <Text style={{ color: "#8A8E9B" }}>Burger</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    marginVertical: 10,
    borderColor: "#d3d1d8",
    borderWidth: 0.25,
    paddingBottom: 10,
  },
  image: {
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default RestaurantCard;
