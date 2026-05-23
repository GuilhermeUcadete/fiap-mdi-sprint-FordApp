import AsyncStorage from "@react-native-async-storage/async-storage";

const HISTORY_KEY = "@history";

export async function saveSearch(vehicle) {
  try {
    const existing = await AsyncStorage.getItem(HISTORY_KEY);

    const history = existing
      ? JSON.parse(existing)
      : [];

    history.unshift(vehicle);

    await AsyncStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history)
    );
  } catch (error) {
    console.log(error);
  }
}

export async function getHistory() {
  try {
    const data = await AsyncStorage.getItem(HISTORY_KEY);

    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log(error);

    return [];
  }
}