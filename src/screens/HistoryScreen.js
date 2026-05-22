import React, {
  useEffect,
  useState,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";

import { getHistory } from "../storage/history";

export default function HistoryScreen() {
  const [history, setHistory] =
    useState([]);

  useEffect(() => {
    async function loadHistory() {
      const data = await getHistory();

      setHistory(data);
    }

    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Histórico
      </Text>

      <FlatList
        data={history}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              {item.marca} {item.modelo}
            </Text>
          </View>
        )}
      />
    </View>
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
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#1e1e1e",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },

  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});