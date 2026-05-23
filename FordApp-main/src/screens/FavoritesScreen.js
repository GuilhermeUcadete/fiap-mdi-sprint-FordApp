import React, {
  useContext,
} from "react";

import {
  View,
  Text,
  StyleSheet,
} from "react-native";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

export default function FavoritesScreen() {
  const { favorites } =
    useContext(FavoritesContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Favoritos
      </Text>

      {favorites.length === 0 ? (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>
            Nenhum favorito ainda
          </Text>
        </View>
      ) : (
        favorites.map((vehicle) => (
          <View
            key={vehicle.nome}
            style={styles.card}
          >
            <Text style={styles.vehicle}>
              ⭐ {vehicle.nome}
            </Text>
          </View>
        ))
      )}
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
    marginBottom: 25,
  },

  emptyBox: {
    backgroundColor: "#1e1e1e",
    padding: 30,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 50,
  },

  emptyText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
  },

  vehicle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});