import React from "react";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from "react-native";

export default function CompareScreen() {
  const vehicle1 = {
    nome: "Ford Ranger Raptor",

    specs: {
      Potência: "397 cv",
      Torque: "59,4 kgfm",
      Tração: "4x4",
      Transmissão: "10 marchas",
      Motor: "3.0 V6 Biturbo",
    },
  };

  const vehicle2 = {
    nome: "Toyota Hilux GR",

    specs: {
      Potência: "224 cv",
      Torque: "55 kgfm",
      Tração: "4x4",
      Transmissão: "6 marchas",
      Motor: "2.8 Turbo Diesel",
    },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        Comparação
      </Text>

      <View style={styles.header}>
        <Text style={styles.headerText}>
          Especificação
        </Text>

        <Text style={styles.headerText}>
          Raptor
        </Text>

        <Text style={styles.headerText}>
          Hilux
        </Text>
      </View>

      {Object.keys(vehicle1.specs).map(
        (key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.label}>
              {key}
            </Text>

            <Text style={styles.value}>
              {vehicle1.specs[key]}
            </Text>

            <Text style={styles.value}>
              {vehicle2.specs[key]}
            </Text>
          </View>
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },

  headerText: {
    color: "#0066ff",
    fontWeight: "bold",
    width: "30%",
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
  },

  label: {
    color: "#fff",
    width: "30%",
    fontWeight: "bold",
  },

  value: {
    color: "#ccc",
    width: "30%",
    textAlign: "center",
  },
});