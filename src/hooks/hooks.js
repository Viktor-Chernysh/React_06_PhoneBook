import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    const parsedValues = JSON.parse(localStorage.getItem(key));
    return parsedValues?.length > 0 ? parsedValues : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
