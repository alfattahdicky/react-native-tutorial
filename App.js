import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

const App = () => {
  const [people, setPeople] = useState([
    { name: "shaun", id: "1" },
    { name: "gemini", id: "2" },
    { name: "dicky", id: "3" },
    { name: "azka", id: "4" },
    { name: "vera", id: "5" },
    { name: "diaz", id: "6" },
    { name: "amun", id: "7" },
  ]);

  return (
    // can use id but using attribute in flatlist is keyExtractor
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
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
    marginHorizontal: 10,
  },
});

export default App;
