import React from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

export default function VehicleCard({
  label,
  value,
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        {label}
      </Text>

      <Text style={styles.value}>
        {value || "Não disponível"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  label: {
    color: "#999",
    fontSize: 16,
  },

  value: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
});