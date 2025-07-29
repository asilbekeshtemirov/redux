import { useState, useEffect } from 'react';

export const useLocalStorage =(key, initialValue) => {
  const getStoredValue = () => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  };

  const [value, setValue] = useState(getStoredValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
