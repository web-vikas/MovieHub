import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/core";

const Card = ({ uri, height = 300, title }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("MovieDetailsScreen", { name: "Jane" })
      }
    >
      <Image
        source={{
          uri: uri,
        }}
        alt={title}
        style={{
          width: "auto",
          aspectRatio: "11/16",
          height: height,
          borderRadius: 10,
          objectFit: "contain",
        }}
      />
    </Pressable>
  );
};

export default Card;
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 30,
    color: "#fff",
  },
});
