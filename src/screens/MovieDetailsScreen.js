import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import movieDetails from "../assets/movieDetail.json";
import { Ionicons } from "@expo/vector-icons";
const MovieDetailsScreen = () => {
  // const navigation = useNavigation();
  // const route = useRoute();

  // useEffect(() => {
  //   navigation.setOptions({ title: route.params.name });
  // }, [route.params.name]);

  // const [movieInfo, setMovieInfo] = useState({});

  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Image
            source={{
              uri: movieDetails.Poster,
            }}
            style={{
              width: "auto",
              objectFit: "fill",
              height: 600,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            <Text style={styles.movieTitle}>{movieDetails.Title}</Text>
            <Text style={styles.highlight}>
              {movieDetails.Year}
              {movieDetails.Genre} / {movieDetails.Runtime} /
            </Text>
            <Text style={styles.rating}>
              <Ionicons name="star" color="yellow" size={25} />{"  "}
              {movieDetails.imdbRating}
            </Text>
          </View>
          <Text style={styles.plot}>{movieDetails.Plot}</Text>
          <Text>{movieDetails.imdbRating}</Text>
          <Text style={styles.boldTitle}>
            Released Date :
            <Text style={styles.highlight}>{movieDetails.Released}</Text>
          </Text>
          <Text style={styles.boldTitle}>
            Director :
            <Text style={styles.highlight}> {movieDetails.Director}</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default MovieDetailsScreen;

const styles = StyleSheet.create({
  container: { backgroundColor: "#001", color: "#eee" },
  movieTitle: {
    fontWeight: "bold",
    fontSize: 35,
    color: "white",
    textAlign: "center",
  },
  highlight: {
    color: "#eee",
    textAlign: "center",
    fontWeight: "normal",
  },
  plot: {
    color: "#eee",
    textAlign: "justify",
  },
  boldTitle: {
    fontWeight: "bold",
    color: "#fff",
  },
  rating: {
    color: "yellow",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
});
