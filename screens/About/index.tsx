import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function About(){

  return <View style={styles.screen}>
    <Text style={styles.title}>About 1</Text>
  </View>
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 40,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontSize: 42,
  },
})
