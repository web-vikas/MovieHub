import { View, Text, Button, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import SwiperComponent from "../components/Swiper";
import NewReleased from "../components/NewReleased";
import Header from "../components/Header";
import axios from "axios";
const Home = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [actionMovies, setActionMoviesData] = useState([]);

  useEffect(() => {
    getHomePageData();
    getRelevantData();
  }, []);

  const getHomePageData = () => {
    axios
      .post("https://buffee-backend.vercel.app/")
      .then((res) => {
        setMoviesData(res?.data?.movies);
      })
      .catch((error) => console.log(error));
  };
  const getRelevantData = () => {
    axios
      .post("https://buffee-backend.vercel.app/explore/")
      .then((res) => {
        setActionMoviesData(res?.data?.movies);
      })
      .catch((error) => console.log(error));
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Header />
        <SwiperComponent topMovies={moviesData} />
        <NewReleased title="New Released" movies={actionMovies} />
        <NewReleased title="Top Action Movies" movies={actionMovies} />
        <NewReleased title="You Might Also Like" movies={actionMovies} />
      </View>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
});
