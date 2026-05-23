import React, {
  createContext,
  useState,
} from "react";

export const FavoritesContext =
  createContext();

export function FavoritesProvider({
  children,
}) {
  const [favorites, setFavorites] =
    useState([]);

  function addFavorite(vehicle) {
    const alreadyExists =
      favorites.find(
        (item) =>
          item.nome === vehicle.nome
      );

    if (!alreadyExists) {
      setFavorites([
        ...favorites,
        vehicle,
      ]);
    }
  }

  function removeFavorite(nome) {
    const filtered =
      favorites.filter(
        (item) =>
          item.nome !== nome
      );

    setFavorites(filtered);
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}