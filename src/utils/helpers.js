export function capitalizeString(str, separator = " ") {
  return str
    .split(separator)
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
}
