/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};
