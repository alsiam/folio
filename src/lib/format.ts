const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatMonth(isoYearMonth: `${number}-${number}`): string {
  const [year, month] = isoYearMonth.split("-").map(Number);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatJobPeriod(
  start: `${number}-${number}`,
  end: `${number}-${number}` | null,
): string {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : "Present"}`;
}
