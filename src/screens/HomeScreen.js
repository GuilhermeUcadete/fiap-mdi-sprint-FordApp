import React from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function HomeScreen({
  navigation,
}) {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={
        false
      }
    >
      <Text style={styles.logo}>
        FORD AI
      </Text>

      <Text style={styles.title}>
        Inteligência Competitiva
      </Text>

      <Text style={styles.subtitle}>
        Plataforma de análise e
        comparação automotiva
      </Text>

      {/* BOTÕES PRINCIPAIS */}

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() =>
          navigation.navigate(
            "Search"
          )
        }
      >
        <Text style={styles.buttonText}>
          🔍 Pesquisar Veículo
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.mainButton}
        onPress={() =>
          navigation.navigate(
            "Compare"
          )
        }
      >
        <Text style={styles.buttonText}>
          ⚖️ Comparar Veículos
        </Text>
      </TouchableOpacity>

      {/* BOTÕES ANTIGOS VOLTANDO */}

      <View style={styles.secondaryButtons}>
        <TouchableOpacity
          style={
            styles.secondaryButton
          }
          onPress={() =>
            navigation.navigate(
              "History"
            )
          }
        >
          <Text
            style={
              styles.secondaryButtonText
            }
          >
            🕒 Histórico
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={
            styles.secondaryButton
          }
          onPress={() =>
            navigation.navigate(
              "Favorites"
            )
          }
        >
          <Text
            style={
              styles.secondaryButtonText
            }
          >
            ⭐ Favoritos
          </Text>
        </TouchableOpacity>
      </View>

      {/* DESTAQUES */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Destaques do Mercado
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🚀 Mais Potente
          </Text>

          <Text style={styles.cardText}>
            RAM 1500 Rebel
          </Text>

          <Text style={styles.cardInfo}>
            400 cv
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            ⛽ Mais Econômica
          </Text>

          <Text style={styles.cardText}>
            Toyota Hilux GR
          </Text>

          <Text style={styles.cardInfo}>
            10 km/l
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            🏆 Melhor Off-Road
          </Text>

          <Text style={styles.cardText}>
            Ranger Raptor
          </Text>

          <Text style={styles.cardInfo}>
            FOX Racing Suspension
          </Text>
        </View>
      </View>

      {/* ESTATÍSTICAS */}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Estatísticas
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.statsCard}>
            <Text
              style={styles.statsNumber}
            >
              6
            </Text>

            <Text
              style={styles.statsLabel}
            >
              Veículos
            </Text>
          </View>

          <View style={styles.statsCard}>
            <Text
              style={styles.statsNumber}
            >
              24
            </Text>

            <Text
              style={styles.statsLabel}
            >
              Comparações
            </Text>
          </View>

          <View style={styles.statsCard}>
            <Text
              style={styles.statsNumber}
            >
              IA
            </Text>

            <Text
              style={styles.statsLabel}
            >
              Insights
            </Text>
          </View>
        </View>
      </View>

      {/* INSIGHT */}

      <View style={styles.tipBox}>
        <Text style={styles.tipTitle}>
          💡 Insight Inteligente
        </Text>

        <Text style={styles.tipText}>
          A Ranger Raptor possui o
          melhor conjunto off-road
          entre as pickups analisadas,
          combinando potência,
          suspensão FOX e tração 4x4
          avançada.
        </Text>
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

  logo: {
    color: "#0066ff",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },

  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  subtitle: {
    color: "#999",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 30,
    fontSize: 16,
  },

  mainButton: {
    backgroundColor: "#0066ff",
    padding: 18,
    borderRadius: 14,
    marginBottom: 15,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },

  secondaryButtons: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    marginTop: 10,
  },

  secondaryButton: {
    backgroundColor: "#1e1e1e",
    width: "48%",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
  },

  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },

  section: {
    marginTop: 30,
  },

  sectionTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#1e1e1e",
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#0066ff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },

  cardText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  cardInfo: {
    color: "#999",
    marginTop: 6,
    fontSize: 15,
  },

  statsContainer: {
    flexDirection: "row",
    justifyContent:
      "space-between",
  },

  statsCard: {
    backgroundColor: "#1e1e1e",
    width: "31%",
    padding: 20,
    borderRadius: 14,
    alignItems: "center",
  },

  statsNumber: {
    color: "#0066ff",
    fontSize: 24,
    fontWeight: "bold",
  },

  statsLabel: {
    color: "#fff",
    marginTop: 8,
    textAlign: "center",
  },

  tipBox: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 16,
    marginTop: 30,
    marginBottom: 40,
  },

  tipTitle: {
    color: "#0066ff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  tipText: {
    color: "#fff",
    fontSize: 15,
    lineHeight: 24,
  },
});