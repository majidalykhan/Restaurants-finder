import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.background}>
      <SearchBar />
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
