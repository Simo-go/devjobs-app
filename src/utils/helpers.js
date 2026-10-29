export function capitalizeString(str, separator = " ") {
  return str
    .split(separator)
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
}

export function normalizeObjectKeys(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key
        .split("_")
        .map((str, idx) =>
          idx === 0 ? str : str[0].toUpperCase() + str.slice(1),
        )
        .join(""),
      value,
    ]),
  );
}
