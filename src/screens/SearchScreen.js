import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.background}>
      <SearchBar term={term} onChangeTerm={setTerm} onTermSubmit={searchApi} />
      <Text>We have found {results.length} number of results</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#ffffff",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
});

export default SearchScreen;
