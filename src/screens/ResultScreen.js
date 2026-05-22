import React, {
  useEffect,
  useState,
} from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import VehicleCard from "../components/VehicleCard";

import Loading from "../components/Loading";

import { saveSearch } from "../storage/history";

import { saveFavorite } from "../storage/favorites";

export default function ResultScreen({
  route,
}) {
  const { marca, modelo, versao } =
    route.params;

  const [loading, setLoading] =
    useState(true);

  const [vehicle, setVehicle] =
    useState(null);

  useEffect(() => {
    async function loadVehicle() {
      setTimeout(async () => {
        const vehicleData = {
          marca: "Ford",

          modelo: "Ranger Raptor",

          especificacoes: {
            Motor: "3.0 V6 Biturbo",

            Potência: "397 cv",

            Torque: "59,4 kgfm",

            Transmissão:
              "Automática 10 marchas",

            Tração: "4x4",

            Suspensão:
              "FOX Racing",

            Combustível:
              "Gasolina",

            Ano: "2024",
          },
        };

        setVehicle(vehicleData);

        await saveSearch(vehicleData);

        setLoading(false);
      }, 1500);
    }

    loadVehicle();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {vehicle.marca} {vehicle.modelo}
      </Text>

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() =>
          saveFavorite(vehicle)
        }
      >
        <Text style={styles.favoriteText}>
          ⭐ Favoritar
        </Text>
      </TouchableOpacity>

      {Object.entries(
        vehicle.especificacoes
      ).map(([key, value]) => (
        <VehicleCard
          key={key}
          label={key}
          value={value}
        />
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

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  favoriteButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  favoriteText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});