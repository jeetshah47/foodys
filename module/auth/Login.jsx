import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { theme } from "../../style/Theme";
import { useState } from "react";
import { LoginApi } from "./api";

const Login = ({ navigation }) => {
  const [user, setUser] = useState({
    email: "user1@example.com",
    password: "user1_password",
  });

  const handleLoginPress = async () => {
    console.log(user);
    try {
      const response = await LoginApi({
        email: user.email,
        password: user.password,
      });
      console.log(response);
      navigation.navigate("Restaurant");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/LogoCenter.png")} />
        <View style={styles.buttonTabs}>
          <Pressable
            style={{
              paddingBottom: 15,
              borderBottomWidth: 2,
              width: "40%",
              borderBottomColor: theme.colors.orange.secondary,
            }}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
          <Pressable
            style={{
              paddingBottom: 15,
              borderBottomWidth: 0,
              width: "40%",
              borderBottomColor: theme.colors.orange.secondary,
            }}
          >
            <Text style={styles.buttonText}>Sign-Up</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <View style={{ marginVertical: 50 }}>
          <View>
            <Text style={styles.inputLabel}>Email Address</Text>
            <TextInput
              onChangeText={(text) => setUser({ ...user, email: text })}
              style={styles.inputText}
              value={user.email}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              inputMode="text"
              textContentType="password"
              secureTextEntry={true}
              value={user.password}
              style={styles.inputText}
              onChangeText={(text) => setUser({ ...user, password: text })}
            />
          </View>
        </View>
        <Pressable onPress={handleLoginPress} style={styles.buttonContainer}>
          <Text
            style={{
              color: theme.colors.white,
              fontWeight: theme.font.fontWeight.medium,
              fontSize: theme.font.fontSize.medium,
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.secondary,
    justifyContent: "space-between",
  },
  logoContainer: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowRadius: 20,
  },
  buttonTabs: {
    justifyContent: "space-between",
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 50,
    position: "absolute",
    bottom: 0,
    marginHorizontal: 10,
  },
  inputContainer: {
    flex: 0.6,
    // justifyContent: "flex-end",
    flexDirection: "column",
    marginHorizontal: 50,
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  buttonContainer: {
    alignSelf: "center",
    backgroundColor: theme.colors.orange.secondary,
    color: theme.colors.white,
    width: "100%",
    height: 65,
    position: "absolute",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  inputLabel: {
    color: theme.colors.tertiary,
    fontSize: 16,
    fontWeight: theme.font.fontWeight.medium,
  },
  inputText: {
    fontSize: 18,
    fontWeight: theme.font.fontWeight.medium,
    paddingVertical: 10,
    // paddingHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderRadius: 10,
    // borderColor: theme.colors.orange.secondary,
  },
});

export default Login;
