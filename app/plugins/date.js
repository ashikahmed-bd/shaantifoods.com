import { formatDate } from "~/utils/date";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      date: formatDate,
    },
  };
});
