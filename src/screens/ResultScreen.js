import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import {
  FavoritesContext,
} from "../context/FavoritesContext";

import {
  HistoryContext,
} from "../context/HistoryContext";

export default function ResultScreen({
  route,
}) {
  const {
    brand,
    model,
    version,
  } = route.params;

  const { addFavorite } =
    useContext(FavoritesContext);

  const { addHistory } =
    useContext(HistoryContext);

  const [loading, setLoading] =
    useState(true);

  const [vehicle, setVehicle] =
    useState(null);

  useEffect(() => {
    async function loadVehicle() {
      try {
        await new Promise(
          (resolve) =>
            setTimeout(resolve, 1200)
        );

        const vehicleData = {
          nome: `${brand} ${model} ${version}`,

          specs: {
            Motor:
              "3.0 V6 Biturbo",

            Potência: "397 cv",

            Torque: "59.4 kgfm",

            Transmissão:
              "Automática 10 marchas",

            Tração: "4x4",

            Combustível:
              "Gasolina",

            Economia:
              "6 km/l",

            Suspensão:
              "FOX Racing",

            Categoria:
              "Pickup Off-Road",

            Ano: "2024",
          },
        };

        setVehicle(vehicleData);

        addHistory({
          nome: vehicleData.nome,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    loadVehicle();
  }, []);

  function handleFavorite() {
    addFavorite({
      nome: vehicle.nome,
    });

    console.log(
      "Favoritado:",
      vehicle.nome
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#0066ff"
        />

        <Text style={styles.loadingText}>
          Buscando veículo...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={
        false
      }
    >
      <Text style={styles.title}>
        Resultado da Pesquisa
      </Text>

      <View style={styles.headerCard}>
        <Text style={styles.vehicleName}>
          {vehicle.nome}
        </Text>

        <Text style={styles.vehicleCategory}>
          {vehicle.specs.Categoria}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavorite}
      >
        <Text style={styles.favoriteText}>
          ⭐ Favoritar Veículo
        </Text>
      </TouchableOpacity>

      <View style={styles.aiBox}>
        <Text style={styles.aiTitle}>
          IA Competitiva
        </Text>

        <Text style={styles.aiText}>
          Este veículo possui foco em
          performance off-road e alto
          torque, sendo competitivo no
          segmento premium de pickups.
        </Text>
      </View>

      {Object.entries(
        vehicle.specs
      ).map(([key, value]) => (
        <View
          key={key}
          style={styles.specCard}
        >
          <Text style={styles.specTitle}>
            {key}
          </Text>

          <Text style={styles.specValue}>
            {value}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    padding: 20,
  },

  loadingContainer: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    color: "#fff",
    marginTop: 15,
    fontSize: 16,
  },

  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    marginTop: 10,
  },

  headerCard: {
    backgroundColor: "#1e1e1e",
    padding: 25,
    borderRadius: 18,
    marginBottom: 20,
  },

  vehicleName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  vehicleCategory: {
    color: "#999",
    fontSize: 16,
  },

  favoriteButton: {
    backgroundColor: "#ffb800",
    padding: 16,
    borderRadius: 14,
    marginBottom: 20,
  },

  favoriteText: {
    color: "#111",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  aiBox: {
    backgroundColor: "#0066ff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
  },

  aiTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },

  aiText: {
    color: "#fff",
    lineHeight: 24,
    fontSize: 15,
  },

  specCard: {
    backgroundColor: "#1e1e1e",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
  },

  specTitle: {
    color: "#0066ff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  specValue: {
    color: "#fff",
    fontSize: 16,
  },
});