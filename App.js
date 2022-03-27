import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

// Custom Button
const AppButton = ({ onPress, title }) => (
  <TouchableOpacity
    activeOpacity={0.95}
    onPress={onPress}
    style={styles.appButtonContainer}
  >
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [name, setName] = useState("dicky");
  const [age, setAge] = useState("30");

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        // change automatically update state name
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 80"
        // change automatically update state age
        onChangeText={(value) => setAge(value)}
      />

      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#010101",
    padding: 8,
    paddingLeft: 15,
    marginVertical: 10,
    width: 200,
  },
});

export default App;
