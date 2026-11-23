import { Temporal } from "temporal-polyfill";

export function capitalizeString(str: string, separator = " ") {
  if (!str) return;

  return str
    .split(separator)
    .map((str) => (str[0]?.toUpperCase() ?? "") + str.slice(1))
    .join(" ");
}

export function normalizeObjectKeys(obj: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key
        .split("_")
        .map((str, idx) =>
          idx === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1),
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
export function formatDurationFromNow(ISOString: string) {
  const now = Temporal.Now.zonedDateTimeISO();
  const createdAt2 = Temporal.Instant.from(ISOString).toZonedDateTimeISO(
    Temporal.Now.timeZoneId(),
  );

  const duration = now.until(createdAt2, {
    smallestUnit: "minute",
    largestUnit: "year",
  });

  const units = [
    "years",
    "months",
    "days",
    "hours",
    "minutes",
    "seconds",
  ] as const;

  let unit: (typeof units)[number] | undefined = "seconds";
  let value: number = 0;

  for (let i = 0; i < units.length; i++) {
    unit = units[i];
    if (!unit) continue;

    if (duration[unit]) {
      value = duration[unit];
      break;
    }
  }

  const rtf = new Intl.RelativeTimeFormat(navigator.languages, {
    numeric: "auto",
    style: "short",
  });

  if (!unit) return "now";

  const formattedTime = rtf.format(value, unit);
  return formattedTime;
}

export function mapSearchParamsToObj(searchParams: URLSearchParams) {
  const newObj = Object.fromEntries(searchParams.entries());

  if (!Object.keys(newObj).length) return {};
  return newObj;
}

export function convertSnakecaseToCamelcase(str: string) {
  return str
    .toLowerCase()
    .split("_")
    .map((subStr, idx) =>
      idx === 0 ? subStr : subStr.charAt(0).toUpperCase() + subStr.slice(1),
    )
    .join("");
}

export function getWordCount(str: string | undefined) {
  if (!str) return 0;

  return str.split(" ").reduce((acc, word) => ++acc, 0);
}
