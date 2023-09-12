import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/Theme";

const Order = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>My Orders</Text>
      <View style={styles.orderBox}>
        <View>
          <Text>Restaurant Name</Text>
        </View>
        <Text>Order Item 1</Text>
        <Text>Order Item 2</Text>
        <Text>Order Item 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  head: {
    fontSize: theme.font.fontSize.subTitle,
    fontWeight: "bold",
    color: theme.colors.tertiary,
    marginVertical: 10,
    textAlign: "center",
  },
  orderBox: {
    borderWidth: 1,
    borderColor: theme.colors.tertiary,
    borderRadius: 10,
    padding: 10,
  },
});

export default Order;
