export const getLocalValues = (key: string) => {
  const val = window.localStorage.getItem(key);

  if (!val) return null;

  try {
    return JSON.parse(val);
  } catch (e) {
    return val;
  }
};

export const setLocalValue = (key: string, value: object) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
