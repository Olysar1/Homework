import { useContext, createContext, useMemo, useState } from "react";

export const themeIdToStringMap = {
  black: "theme is black",
  white: "theme is white",
};

const ThemeContext = createContext(null);

const ThemeContextProvider = ({ children }) => {
  const [isBlack, setIsBlack] = useState();

  const contextValue = useMemo(
    () => ({
      themeCode: isBlack ? "black" : "white",
      toggleTheme: () => setIsBlack((prev) => !prev),
    }),
    [isBlack]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const contextValue = useContext(ThemeContext);

  if (!contextValue)
    throw new Error(
      "useThemeContext can only be used inside ThemeContextProvider"
    );

  return contextValue;
};

export default ThemeContextProvider;
