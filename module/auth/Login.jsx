import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { theme } from "../../style/Theme";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../../assets/images/LogoCenter.png")} />
        <View style={styles.buttonTabs}>
          <Text>Login</Text>
          <Text>Sign-Up</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Pressable style={styles.buttonContainer}>
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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    shadowRadius: 20,
  },
  buttonTabs: {
    justifyContent: "space-between",
    // width: "100%",
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingHorizontal: 50,
    backgroundColor: theme.colors.primary,
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: "flex-end",
    marginHorizontal: 50,
    marginBottom: 30,
  },

  buttonContainer: {
    alignSelf: "center",
    backgroundColor: theme.colors.orange.secondary,
    color: theme.colors.white,
    width: "100%",
    height: 65,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
});

export default Login;
