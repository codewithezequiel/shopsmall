import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-red.png")}
        ></Image>
        <Text>Helping Small Businesses One Day At A Time</Text>
      </View>

      <View style={styles.loginWithAppleButton}></View>
      <View style={styles.loginWithGoogleButton}></View>

      <View style={styles.loginAndRegisterContainer}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,229,100,.25)",
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 30,
  },
  loginButton: {
    width: "50%",
    height: 50,
    backgroundColor: "red",
  },
  registerButton: {
    width: "50%",
    height: 50,
    backgroundColor: "green",
  },
  loginWithAppleButton: {
    width: "100%",
    height: 70,
    backgroundColor: "black",
  },
  loginWithGoogleButton: {
    width: "100%",
    height: 70,
    backgroundColor: "yellow",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  loginAndRegisterContainer: {
    backgroundColor: "dodgerblue",
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default WelcomeScreen;
