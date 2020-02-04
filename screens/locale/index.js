import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Locale(props) {
  return (
    <View style={styles.container}>
      <Text>Locale</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
