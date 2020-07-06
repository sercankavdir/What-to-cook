import React from "react";
import { Text, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";

const SearchScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>There will be search bar in this screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
