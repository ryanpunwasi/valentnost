export const capitalize = str => {
  if (!str) {
    return "";
  } else if (str.length === 1) {
    return str[0].toUpperCase();
  }
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
};
