export const useProductStore = defineStore("product", {
  state: () => ({
    loading: false,
    errors: null,
    product: null,
    related: null,
  }),

  getters: {},

  actions: {
    async index() {
      const { $api } = useNuxtApp();
      try {
        return await $api("/api/products");
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      }
    },

    async show(slug) {
      const { $api } = useNuxtApp();
      try {
        const response = await $api(`/api/products/${slug}`);
        return response.data;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      }
    },
  },
});
