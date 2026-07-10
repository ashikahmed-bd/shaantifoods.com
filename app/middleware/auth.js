export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();

  if (!authStore.token) {
    return navigateTo("/auth/login", { replace: true });
  }
});
