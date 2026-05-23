import React, { useState } from "react";

import {
  View,
 Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function SearchScreen({
  navigation,
}) {
  const [brand, setBrand] =
    useState("");

  const [model, setModel] =
    useState("");

  const [version, setVersion] =
    useState("");

  function handleSearch() {
    navigation.navigate("Result", {
      brand,
      model,
      version,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Pesquisar Veículo
      </Text>

      <TextInput
        placeholder="Marca"
        placeholderTextColor="#999"
        style={styles.input}
        value={brand}
        onChangeText={setBrand}
      />

      <TextInput
        placeholder="Modelo"
        placeholderTextColor="#999"
        style={styles.input}
        value={model}
        onChangeText={setModel}
      />

      <TextInput
        placeholder="Versão"
        placeholderTextColor="#999"
        style={styles.input}
        value={version}
        onChangeText={setVersion}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>
          Buscar
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
    justifyContent: "center",
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },

  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#0066ff",
    padding: 18,
    borderRadius: 14,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});