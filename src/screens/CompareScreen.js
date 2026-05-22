import React, { useState } from "react";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const vehicles = [
  {
    nome: "Ford Ranger Raptor",

    specs: {
      Motor: "3.0 V6 Biturbo",
      Potência: 397,
      Torque: 59.4,
      Economia: 6,
      Transmissão:
        "Automática 10 marchas",
      Tração: "4x4",
      Combustível:
        "Gasolina",
      Suspensão:
        "FOX Racing",
      Categoria:
        "Pickup Off-Road",
      Ano: 2024,
    },
  },

  {
    nome: "Toyota Hilux GR Sport",

    specs: {
      Motor:
        "2.8 Turbo Diesel",
      Potência: 224,
      Torque: 55,
      Economia: 10,
      Transmissão:
        "Automática 6 marchas",
      Tração: "4x4",
      Combustível:
        "Diesel",
      Suspensão:
        "Esportiva",
      Categoria:
        "Pickup",
      Ano: 2024,
    },
  },

  {
    nome: "RAM 1500 Rebel",

    specs: {
      Motor: "5.7 V8 HEMI",
      Potência: 400,
      Torque: 56.7,
      Economia: 5,
      Transmissão:
        "Automática 8 marchas",
      Tração: "4x4",
      Combustível:
        "Gasolina",
      Suspensão:
        "Off-Road",
      Categoria:
        "Pickup Premium",
      Ano: 2024,
    },
  },

  {
    nome: "Chevrolet Silverado",

    specs: {
      Motor: "5.3 V8",
      Potência: 360,
      Torque: 53,
      Economia: 7,
      Transmissão:
        "Automática 10 marchas",
      Tração: "4x4",
      Combustível:
        "Gasolina",
      Suspensão:
        "Premium",
      Categoria:
        "Pickup",
      Ano: 2024,
    },
  },

  {
    nome: "Jeep Gladiator",

    specs: {
      Motor: "3.6 V6",
      Potência: 284,
      Torque: 35.4,
      Economia: 8,
      Transmissão:
        "Automática 8 marchas",
      Tração: "4x4",
      Combustível:
        "Gasolina",
      Suspensão:
        "Off-Road",
      Categoria:
        "Pickup Aventura",
      Ano: 2024,
    },
  },

  {
    nome: "Nissan Frontier Pro-4X",

    specs: {
      Motor: "3.8 V6",
      Potência: 310,
      Torque: 38,
      Economia: 8,
      Transmissão:
        "Automática 9 marchas",
      Tração: "4x4",
      Combustível:
        "Gasolina",
      Suspensão:
        "Off-Road",
      Categoria:
        "Pickup",
      Ano: 2024,
    },
  },
];

export default function CompareScreen() {
  const [selectedVehicle, setSelectedVehicle] =
    useState(vehicles[1]);

  const baseVehicle = vehicles[0];

  const winnerPower =
    baseVehicle.specs.Potência >
    selectedVehicle.specs.Potência
      ? baseVehicle.nome
      : selectedVehicle.nome;

  const winnerTorque =
    baseVehicle.specs.Torque >
    selectedVehicle.specs.Torque
      ? baseVehicle.nome
      : selectedVehicle.nome;

  const winnerEconomy =
    baseVehicle.specs.Economia >
    selectedVehicle.specs.Economia
      ? baseVehicle.nome
      : selectedVehicle.nome;

  function renderBar(
    label,
    value1,
    value2,
    unit
  ) {
    const max = Math.max(
      value1,
      value2
    );

    const width1 =
      (value1 / max) * 95;

    const width2 =
      (value2 / max) * 95;

    return (
      <View style={styles.graphCard}>
        <Text style={styles.graphTitle}>
          {label}
        </Text>

        <Text style={styles.vehicleName}>
          Ranger Raptor
        </Text>

        <View style={styles.barBackground}>
          <View
            style={[
              styles.barFillBlue,
              {
                width: `${width1}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.value}>
          {value1} {unit}
        </Text>

        <Text style={styles.vehicleName}>
          {selectedVehicle.nome}
        </Text>

        <View style={styles.barBackground}>
          <View
            style={[
              styles.barFillGray,
              {
                width: `${width2}%`,
              },
            ]}
          />
        </View>

        <Text style={styles.value}>
          {value2} {unit}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      removeClippedSubviews={true}
      showsVerticalScrollIndicator={
        false
      }
    >
      <Text style={styles.title}>
        Comparação Inteligente
      </Text>

      <Text style={styles.subtitle}>
        Ranger Raptor VS
      </Text>

      <View style={styles.selector}>
        {vehicles
          .slice(1)
          .map((vehicle) => (
            <TouchableOpacity
              key={vehicle.nome}
              style={[
                styles.button,

                selectedVehicle.nome ===
                  vehicle.nome &&
                  styles.selectedButton,
              ]}
              onPress={() =>
                setSelectedVehicle(vehicle)
              }
            >
              <Text style={styles.buttonText}>
                {vehicle.nome}
              </Text>
            </TouchableOpacity>
          ))}
      </View>

      <View style={styles.aiBox}>
        <Text style={styles.aiTitle}>
          IA Competitiva
        </Text>

        <Text style={styles.aiText}>
          🏆 Maior potência:
          {"\n"}
          {winnerPower}
        </Text>

        <Text style={styles.aiText}>
          🔥 Maior torque:
          {"\n"}
          {winnerTorque}
        </Text>

        <Text style={styles.aiText}>
          ⛽ Melhor economia:
          {"\n"}
          {winnerEconomy}
        </Text>
      </View>

      {renderBar(
        "Potência",
        baseVehicle.specs.Potência,
        selectedVehicle.specs
          .Potência,
        "cv"
      )}

      {renderBar(
        "Torque",
        baseVehicle.specs.Torque,
        selectedVehicle.specs
          .Torque,
        "kgfm"
      )}

      {renderBar(
        "Economia",
        baseVehicle.specs.Economia,
        selectedVehicle.specs
          .Economia,
        "km/l"
      )}

      <View style={styles.specsContainer}>
        {Object.entries(
          baseVehicle.specs
        ).map(
          ([key, value], index) => (
            <View
              key={`${key}-${index}`}
              style={styles.specCard}
            >
              <Text
                style={styles.specTitle}
              >
                {key}
              </Text>

              <Text
                style={styles.specText}
              >
                Ranger Raptor:
                {"\n"}
                {String(value)}
              </Text>

              <Text
                style={styles.specText}
              >
                {selectedVehicle.nome}
                :
                {"\n"}
                {String(
                  selectedVehicle.specs[
                    key
                  ]
                )}
              </Text>
            </View>
          )
        )}
      </View>
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
    marginBottom: 10,
  },

  subtitle: {
    color: "#999",
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
  },

  selector: {
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginBottom: 10,
  },

  selectedButton: {
    backgroundColor: "#0066ff",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
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
    marginBottom: 12,
  },

  aiText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  graphCard: {
    backgroundColor: "#1e1e1e",
    padding: 18,
    borderRadius: 16,
    marginBottom: 20,
  },

  graphTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  vehicleName: {
    color: "#ccc",
    marginBottom: 8,
    fontWeight: "bold",
  },

  barBackground: {
    width: "95%",
    height: 18,
    backgroundColor: "#333",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 6,
  },

  barFillBlue: {
    height: "100%",
    backgroundColor: "#0066ff",
    borderRadius: 20,
  },

  barFillGray: {
    height: "100%",
    backgroundColor: "#999",
    borderRadius: 20,
  },

  value: {
    color: "#fff",
    marginBottom: 15,
  },

  specsContainer: {
    marginTop: 10,
  },

  specCard: {
    backgroundColor: "#1e1e1e",
    padding: 18,
    borderRadius: 14,
    marginBottom: 14,
  },

  specTitle: {
    color: "#0066ff",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 10,
  },

  specText: {
    color: "#fff",
    marginBottom: 8,
    fontSize: 15,
  },
});