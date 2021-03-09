// Format date string
export const formatDate = (string) => {
  let options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(string).toLocaleDateString([], options);
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
