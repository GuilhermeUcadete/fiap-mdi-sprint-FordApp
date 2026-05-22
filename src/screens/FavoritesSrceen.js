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

import { getFavorites } from "../storage/favorites";

export default function FavoritesScreen() {
  const [favorites, setFavorites] =
    useState([]);

  useEffect(() => {
    async function loadFavorites() {
      const data = await getFavorites();

      setFavorites(data);
    }

    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(_, index) =>
          index.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              ⭐ {item.marca}{" "}
              {item.modelo}
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