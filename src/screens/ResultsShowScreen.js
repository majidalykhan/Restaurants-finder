import { React } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ResultsShowScreen = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <View>
      <Text>Results Show Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
