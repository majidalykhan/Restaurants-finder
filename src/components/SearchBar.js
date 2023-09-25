import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onChangeTerm }) => {
  return (
    <View style={styles.background}>
      <Feather style={styles.iconStyle} name="search" size={24} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={(newTerm) => onChangeTerm(newTerm)}
      />
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
    flex: 1,
    marginHorizontal: 5,
  },
  iconStyle: {
    marginHorizontal: 5,
  },
});

export default SearchBar;
