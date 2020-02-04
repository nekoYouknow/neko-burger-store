import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Others(props) {
  return (
    <View style={styles.container}>
      <Text>others</Text>
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
