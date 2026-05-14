import AsyncStorage from "@react-native-async-storage/async-storage";

const HISTORY_KEY = "@vehicle_history";

export async function saveSearch(vehicle) {
  try {
    const data = await AsyncStorage.getItem(
      HISTORY_KEY
    );

    const history = data
      ? JSON.parse(data)
      : [];

    history.push(vehicle);

    await AsyncStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history)
    );
  } catch (error) {
    console.log(error);
  }
}