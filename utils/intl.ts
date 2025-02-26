// https://gist.github.com/w3cj/e9e39a1b1942c03a82ac9f252236341b - w3cj <3

export const dateFormatter = new Intl.DateTimeFormat(navigator.language, {
  weekday: "long",
  month: "short",
  day: "numeric",
  year: "numeric",
  //   hour: "numeric",
  //   minute: "2-digit",
});

export const numberFormatter = new Intl.NumberFormat(navigator.language, {
  notation: "compact",
});

export const timeFormatter = new Intl.RelativeTimeFormat(navigator.language, {
  style: "narrow",
});

const maximums: [number, Intl.RelativeTimeFormatUnit][] = [
  [60, "seconds"],
  [60, "minutes"],
  [24, "hours"],
  [7, "days"],
  [4.34524, "weeks"],
  [12, "months"],
  [Number.POSITIVE_INFINITY, "years"],
];

export function formatTimeAgo(date: Date) {
  let duration = (date.getTime() - Date.now()) / 1000;

  const [, unit] = maximums.find(([amount]) => {
    if (Math.abs(duration) < amount) {
      return true;
    }
    duration /= amount;
  })!;

  return timeFormatter.format(Math.round(duration), unit);
}
