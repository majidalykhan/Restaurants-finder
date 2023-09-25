import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" size={24} color="black" />
      <TextInput style={styles.inputStyle} placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inputStyle: {
    borderWidth: 3,
    borderColor: "black",
    flex: 1,
    marginLeft: 10,
  },
  iconStyle: {
    marginLeft: 5,
  },
});

export default SearchBar;
