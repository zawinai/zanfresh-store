import { useState, useEffect } from "react";

// My favourite hook

/* The parameter takes two values 
first one is the key for getting from or setting to the localStorage
the second one is the actual value to store to the localStorage
or pass as the type and it could be any values as we want

eq : useLocalStorage<valueTypes[]>("key", []) we'll use this one
eq : useLocalStorage<valueTypes>("key", {})
*/

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  const [value, setValue] = useState<T>(() => {
    const val =
      typeof window !== "undefined" ? window.localStorage.getItem(key) : "[]";
    if (val !== null) return JSON.parse(val);

    if (typeof initialValue === "function") {
      return (initialValue as () => T)();
    } else {
      return initialValue;
    }
  });

  useEffect(() => {
    typeof window !== "undefined"
      ? window.localStorage.setItem(key, JSON.stringify(value))
      : [];
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
