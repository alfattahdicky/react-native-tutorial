import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App = () => {
  const [name, setName] = useState("dicky");
  const [person, setPerson] = useState({ name: "diaz", age: 20 });

  const handlerName = () => {
    setName("azka");
    setPerson({ name: "vera", age: 24 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        His name {person.name} and age {person.age}
      </Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={handlerName} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});

export default App;
