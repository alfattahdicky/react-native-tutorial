import React, { useState } from "react";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native";

const App = () => {
  const [people, setPeople] = useState([
    { name: "shaun", key: "1" },
    { name: "gemini", key: "2" },
    { name: "dicky", key: "3" },
    { name: "azka", key: "4" },
    { name: "vera", key: "5" },
    { name: "diaz", key: "6" },
    { name: "amun", key: "7" },
  ]);

  return (
    // need key prop in parent component
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "green",
    fontSize: 16,
  },
});

export default App;
