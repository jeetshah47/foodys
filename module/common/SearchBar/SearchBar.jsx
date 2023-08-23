import { StyleSheet, Text, View } from "react-native";
import { theme } from "../../../style/Theme";
import { Iconify } from "react-native-iconify";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Iconify icon="iconamoon:search-bold" color={"#767F9D"} />
      <Text>Find Food or Restaurant</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FCFCFD",
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#EFEFEF",
    padding: 19,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  text: {
    fontSize: 14,
    color: "#9AA0B4",
    fontWeight: "300",
  },
});

export default SearchBar;
