import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Onboarding from "./screens/onboarding";

export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
    backgroundColor: "#fff"
  }
});
