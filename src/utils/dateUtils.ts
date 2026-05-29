export const getNow = (): Date => new Date();

export const formatDate = (
  date: Date = new Date(),
  separator = "-", //  2026-05-26
): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return [year, month, day].join(separator);
};

export const formatDateTime = (
  date: Date = new Date(),
  separator = "-",
): string => {
  const time = date.toTimeString().split(" ")[0].replace(/:/g, ":");
  return `${formatDate(date, separator)} ${time}`;
};

export const getUtcTimestamp = (): string => new Date().toISOString();

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const getDateAfterDays = (days: number): string =>
  formatDate(addDays(new Date(), days));
