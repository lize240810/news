import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Detail = ({ navigation, route }: any) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Detail 1</Text>
    <Button
      title="Go to Screen 2"
      onPress={() => {
        navigation.push('About')
      }}
    />
  </View>
)

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

export default Detail