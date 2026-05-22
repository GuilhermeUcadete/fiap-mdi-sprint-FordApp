import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function HomeScreen({
  navigation,
}) {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [versao, setVersao] = useState("");

  function handleSearch() {
    if (!marca || !modelo || !versao) {
      Alert.alert(
        "Erro",
        "Preencha todos os campos"
      );

      return;
    }

    navigation.navigate("Results", {
      marca,
      modelo,
      versao,
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Ford Intelligence
      </Text>

      <TextInput
        placeholder="Marca"
        placeholderTextColor="#999"
        style={styles.input}
        value={marca}
        onChangeText={setMarca}
      />

      <TextInput
        placeholder="Modelo"
        placeholderTextColor="#999"
        style={styles.input}
        value={modelo}
        onChangeText={setModelo}
      />

      <TextInput
        placeholder="Versão"
        placeholderTextColor="#999"
        style={styles.input}
        value={versao}
        onChangeText={setVersao}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}
      >
        <Text style={styles.buttonText}>
          Pesquisar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.compareButton}
        onPress={() =>
          navigation.navigate("Compare")
        }
      >
        <Text style={styles.buttonText}>
          Comparar Veículos
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#0066ff",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  compareButton: {
    backgroundColor: "#444",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});