import { React } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsDetail;
