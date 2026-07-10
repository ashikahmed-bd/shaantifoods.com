export default defineNuxtPlugin(async () => {
  const { $api } = useNuxtApp();

  const settings = useSettings();

  if (settings.value) return;

  try {
    const response = await $api("/api/settings");

    settings.value = response;
  } catch (error) {
    console.error("Settings load failed:", error);
  }
});
