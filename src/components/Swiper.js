import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import Card from "./Card";
const Swiper = ({ title = "Trending", topMovies }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {topMovies?.map((movies, i) => {
          return (
            <Card key={i} uri={movies?.poster_url} title={movies?.title} />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Swiper;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 23,
    paddingStart: 10,
    color: "white",
  },
});
