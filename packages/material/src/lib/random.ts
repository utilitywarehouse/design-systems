export const getRandomString = (prefix?: string): string => {
  return `${prefix ?? ""}${Math.round((Math.random() + 1) * 1e16).toString(
    16
  )}`;
};
