import { TextInput, View } from "react-native";
import { Iconify } from "react-native-iconify";

const Filter = ({ searchParam }) => {
  return (
    <View style={{ padding: 2 }}>
      <Iconify icon="mi:filter" size={30} color={"#FE724C"} />
    </View>
  );
};

export default Filter;
