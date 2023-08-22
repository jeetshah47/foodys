import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/Theme";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/LogoCenter.png")} />
      </View>
      <View style={styles.inputContainer}>
        <Pressable style={styles.buttonContainer}>
          <Text>Login</Text>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowRadius: 20,
  },
  inputContainer: {
    flex: 0.6,
  },
  buttonContainer: {
    alignSelf: "center",

    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
});

export default Login;
