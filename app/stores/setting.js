export const useSettingStore = defineStore("setting", {
  state: () => ({
    errors: null,
    loading: false,
    home: null,
  }),

  getters: {},

  actions: {
    async getGeneral() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api("/api/settings");
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      }
    },

    async updateGeneral(payload) {
      const { $api } = useNuxtApp();
      this.loading = true;
      try {
        const response = await $api("/api/settings", {
          method: "POST",
          body: payload,
        });
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async getHome() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api("/api/settings/home");
        this.home = response;
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      }
    },

    async updateHome(payload) {
      const { $api } = useNuxtApp();
      this.loading = true;
      try {
        const response = await $api("/api/settings/home", {
          method: "POST",
          body: payload,
        });
        this.home = response;
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    async getShop() {
      const { $api } = useNuxtApp();
      try {
        const response = await $api("/api/settings/shop");
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      }
    },

    async updateShop(payload) {
      const { $api } = useNuxtApp();
      this.loading = true;
      try {
        const response = await $api("/api/settings/shop", {
          method: "POST",
          body: payload,
        });
        return response;
      } catch (error) {
        this.errors = error?.response?._data?.errors;
        throw error;
      } finally {
        this.loading = false;
      }
    },
  },
});
