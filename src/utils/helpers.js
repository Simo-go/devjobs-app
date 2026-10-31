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

/**
 * Formats an ISO string into a duration object from today's date and time
 * @param {*} ISOString ISO 8601 datetime string
 */
export function formatDurationFromNow(ISOString) {
  const now = Temporal.Now.zonedDateTimeISO();
  const createdAt2 = Temporal.Instant.from(ISOString).toZonedDateTimeISO(
    Temporal.Now.timeZoneId(),
  );

  const duration = now.until(createdAt2, {
    smallestUnit: "minute",
    largestUnit: "year",
  });

  const units = ["years", "months", "days", "hours", "minutes", "seconds"];
  let unit, value;
  for (let i = 0; i < units.length; i++) {
    if (duration[units[i]]) {
      unit = units[i];
      value = duration[units[i]];
      break;
    }
  }

  const rtf = new Intl.RelativeTimeFormat(navigator.languages, {
    numeric: "auto",
    style: "short",
  });

  const formattedTime = rtf.format(value, unit);
  return formattedTime;
}

export function mapSearchParamsToObj(searchParams) {
  return Object.fromEntries(
    [...searchParams.keys()].map((key) => [key, searchParams.get(key)]),
  );
}
