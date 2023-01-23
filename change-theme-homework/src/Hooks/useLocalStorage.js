import { useState, useEffect } from "react";

const useLocalStorage = (storageKey, fallBack) => {
  const [night, setNight] = useState(
    localStorage.getItem(storageKey) || fallBack
  );

  useEffect(() => {
    localStorage.setItem(storageKey, night);
  }, [storageKey, night]);

  return [night, setNight];
};

export default useLocalStorage;
