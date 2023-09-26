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

  console.log(result);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.headings}>Photos</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.photoStyle} source={{ uri: item }} />;
        }}
      />
      <Text style={styles.headings}>Description</Text>
      <Text style={styles.properties}>Price: {result.price}</Text>
      <Text style={styles.properties}>Rating: {result.rating}</Text>
      <Text style={styles.properties}>Review Count: {result.review_count}</Text>
      <Text style={styles.properties}>Location: {result.location.city}</Text>
      <Text style={styles.properties}>Phone: {result.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  headings: {
    marginLeft: 10,
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
  },
  photoStyle: {
    width: 250,
    height: 150,
    alignSelf: "center",
    marginTop: 5,
    marginLeft: 10,
    borderRadius: 15,
  },
  properties: {
    marginLeft: 10,
    fontSize: 16,
  },
});

export default ResultsShowScreen;
