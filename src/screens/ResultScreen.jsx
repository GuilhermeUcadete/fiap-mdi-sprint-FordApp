import React, {
  useEffect,
  useState,
} from "react";

import {
  ScrollView,
  Text,
  StyleSheet,
  Alert,
} from "react-native";

import XMLParser from "react-xml-parser";

import VehicleCard from "../components/VehicleCard";

import Loading from "../components/Loading";

import { saveSearch } from "../storage/history";

export default function ResultScreen({
  route,
}) {
  const { modelo } = route.params;

  const [loading, setLoading] =
    useState(true);

  const [vehicle, setVehicle] =
    useState(null);

  useEffect(() => {
    async function loadVehicle() {
      try {
        const response = await fetch(
          `https://www.fueleconomy.gov/ws/rest/vehicle/menu/options?year=2024&make=Ford&model=${modelo}`
        );

        const xml =
          await response.text();

        const parsed =
          new XMLParser().parseFromString(
            xml
          );

        const menuItem =
          parsed.children?.[0];

        if (!menuItem) {
          Alert.alert(
            "Erro",
            "Veículo não encontrado"
          );

          setLoading(false);

          return;
        }

        const vehicleData = {
          marca: "Ford",

          modelo: modelo,

          especificacoes: {
            API:
              "FuelEconomy.gov",

            Modelo:
              modelo,

            Categoria:
              "Pickup",

            Status:
              "Dados online",

            Resultado:
              menuItem.children?.[0]
                ?.value ||
              "Não disponível",
          },
        };

        setVehicle(vehicleData);

        await saveSearch(vehicleData);
      } catch (error) {
        console.log(error);

        Alert.alert(
          "Erro",
          "Falha ao buscar API"
        );
      } finally {
        setLoading(false);
      }
    }

    loadVehicle();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (!vehicle) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        {vehicle.marca} {vehicle.modelo}
      </Text>

      {Object.entries(
        vehicle.especificacoes
      ).map(([key, value]) => (
        <VehicleCard
          key={key}
          label={key}
          value={String(value)}
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
});