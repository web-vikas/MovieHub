import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Card from "./Card";
const Swiper = ({ title = "", movies = [] }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeading}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies?.map((movies, i) => {
          return (
            <Card
              key={i}
              uri={movies?.poster}
              title={movies?.title}
              height={230}
            />
          );
        })}
        {/* <Card
          uri="https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          height={230}
        />
        <Card
          uri="https://image.tmdb.org/t/p/original//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
          height={230}
        />
        <Card
          uri="https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          height={230}
        />
        <Card
          uri="https://image.tmdb.org/t/p/original//iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"
          height={230}
        /> */}
      </ScrollView>
    </View>
  );
};

export default Swiper;
const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 18,
    paddingStart: 10,
    color: "white",
  },
});
