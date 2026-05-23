import React, {
  createContext,
  useState,
} from "react";

export const HistoryContext =
  createContext();

export function HistoryProvider({
  children,
}) {
  const [history, setHistory] =
    useState([]);

  function addHistory(vehicle) {
    setHistory((oldHistory) => {
      const alreadyExists =
        oldHistory.find(
          (item) =>
            item.nome === vehicle.nome
        );

      if (alreadyExists) {
        return oldHistory;
      }

      return [vehicle, ...oldHistory];
    });
  }

  return (
    <HistoryContext.Provider
      value={{
        history,
        addHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}