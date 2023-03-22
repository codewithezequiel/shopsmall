import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

function WelcomeScreen(props) {
  return (
    <LinearGradient
      colors={["#020024", "#886046", "#403526"]}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <MaterialIcons name="local-attraction" size={200} />
          <Text style={styles.companyTitle}>ShopSmall</Text>
        </View>

        <View style={styles.googleAndAppleButtonsContainer}>
          <AppButton
            style={[styles.loginWithGoogleButton, { text: { color: "black" } }]}
            title="Sign In with Google"
            textColor="black"
            onPress={() => console.log("Tapped")}
            color="white"
          />
          <AppButton
            styles={styles.loginWithAppleButton}
            title="Sign in with Apple"
            color="black"
            onPress={() => console.log("Tapped")}
          />
        </View>

        <View style={styles.loginAndRegisterContainer}>
          <View style={styles.loginContainer}>
            <AppButton
              style={styles.loginButton}
              title="Login"
              color="gold"
              onPress={() => console.log("Tapped")}
            />
          </View>
          <View style={styles.registerContainer}>
            <AppButton
              styles={styles.registerButton}
              title="Register"
              color="tertiary"
              textColor="black"
              onPress={() => console.log("Tapped")}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    // paddingLeft: 15,
    // paddingRight: 15,
    // borderRadius: 5,
  },
  container: {
    // backgroundColor: "#4D4D4D",
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  companyTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "600",
  },

  loginContainer: {
    // backgroundColor: "green",
    width: "50%",
    height: 100,
    marginTop: 0,
    paddingRight: 3,
    paddingLeft: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },

  registerContainer: {
    // backgroundColor: "yellow",
    width: "50%",
    marginTop: 0,
    height: 100,
    paddingLeft: 3,
    paddingRight: 15,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  //   loginWithAppleButton: {
  //     // width: "100%",
  //     // height: "100%",
  //     backgroundColor: "black",
  //   },
  //   loginWithGoogleButton: {
  //     color: "black",
  //   },
  googleAndAppleButtonsContainer: {
    // backgroundColor: "grey",
    width: "100%",
    paddingHorizontal: 15,
  },
  logoContainer: {
    position: "relative",
    justifyContent: "center",
    flex: 1,
    top: 50,
    alignItems: "center",
  },
  loginAndRegisterContainer: {
    // backgroundColor: "red",
    position: "relative",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginTop: 0,
  },
});

export default WelcomeScreen;
