import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, errorMessage, searchApi] = useResults();

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onChangeTerm={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricer" />
      <ResultsList title="Big Spender" />
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
