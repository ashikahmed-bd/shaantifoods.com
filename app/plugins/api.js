// plugins/api.js
export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBase,

    onRequest({ options }) {
      const token = useCookie("auth_token");

      options.headers = new Headers(options.headers);

      options.headers.set("X-Source", "Web");
      options.headers.set("Accept", "application/json");

      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },

    onResponseError({ response }) {
      if (response?.status === 401) {
        const authStore = useAuthStore();
        const token = useCookie("auth_token");

        token.value = null;
        authStore.$reset();

        navigateTo("/auth/login", { replace: true });
      }

      console.error("API Error:", response);
    },
  });

  return {
    provide: {
      api,
    },
  };
});
