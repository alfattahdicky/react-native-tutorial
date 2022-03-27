import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";

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
        <AppButton title="update state" onPress={handlerName} />
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
  appButtonContainer: {
    backgroundColor: "#25bc5d",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    alignSelf: "center",
    textTransform: "capitalize",
  },
});

export default App;
