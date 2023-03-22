import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

function AppButton({ title, onPress, color = "primary", textColor = "white" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    colors: ["#d64747", "#bd4d4d", "#862424"],
  },
  button: {
    backgroundColor: "primaryRed",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    borderRadius: 15,
    marginBottom: 10,
    marginHorizontal: 4,
    borderColor: "white",
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default AppButton;
