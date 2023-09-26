import { React } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const ResultsDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 100,
    borderRadius: 4,
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;
