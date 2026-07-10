export function formatDate(date, locale = "en-US") {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
