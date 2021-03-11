// Format date string: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
export const formatDate = (string) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
