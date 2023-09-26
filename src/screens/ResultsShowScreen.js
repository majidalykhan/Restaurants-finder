import { React, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.photoStyle} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: "#ffffff" },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  photoStyle: {
    width: 250,
    height: 150,
  },
});

export default ResultsShowScreen;
