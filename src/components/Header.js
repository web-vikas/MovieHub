import { View, Text, StyleSheet, Image, Button, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={{
          width: "auto",
          aspectRatio: "1/1",
          height: 60,
          objectFit: "contain",
        }}
      />
      <Pressable>
        <Ionicons name="search-outline" size={30} color={"white"} />
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    // borderBlockColor: "red",
    // borderWidth: 2,
    paddingHorizontal: 20,
    paddingTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
