import { deepCopy } from "utils/helpers";

const useLocalStorage = (key) => {
  const setItem = (value) => {
    try {
      const clone = deepCopy(value);
      window.localStorage.setItem(key, JSON.stringify(clone));
    } catch (error) {
      console.log("Ошибка записи в локальное хранилище", error);
    }
  };

  const getItem = () => {
    try {
      const item = window.localStorage.getItem(key);
      if (!item) return [];
      const clone = deepCopy(item);
      return JSON.parse(clone);
    } catch (error) {
      console.log("Ошибка чтения локального хранилица", error);
    }
  };

  const removeItem = () => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log("Ошибка удаления из локального хранилища", error);
    }
  };

  return { getItem, setItem, removeItem };
};

export default useLocalStorage;
