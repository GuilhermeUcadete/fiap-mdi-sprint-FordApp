import React from "react";

import AppRoutes from "./src/routes/AppRoutes";

import {
  FavoritesProvider,
} from "./src/context/FavoritesContext";

import {
  HistoryProvider,
} from "./src/context/HistoryContext";

export default function App() {
  return (
    <HistoryProvider>
      <FavoritesProvider>
        <AppRoutes />
      </FavoritesProvider>
    </HistoryProvider>
  );
}