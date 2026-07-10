<script setup>
definePageMeta({
  layout: "dashboard",
});

const settingStore = useSettingStore();
const toast = useToast();

const form = reactive({
  breadcrumb: {
    title: "",
    description: "",
  },

  shop: {
    title: "",
    description: "",
  },
});

const loadShop = async () => {
  const response = await settingStore.getShop();

  Object.assign(form, {
    breadcrumb: {
      title: response?.breadcrumb?.title,
      description: response?.breadcrumb?.description,
    },
    shop: {
      title: response?.shop?.title,
      description: response?.shop?.description,
    },
  });
};

onMounted(() => {
  loadShop();
});

const onSubmit = async () => {
  const response = await settingStore.updateShop(form);

  toast.add({
    title: response.message,
  });
};
</script>

<template>
  <div class="space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <div
            class="flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700"
          >
            <UIcon name="i-lucide-route" class="size-5" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-gray-900">
              Breadcrumb Section
            </h2>
            <p class="text-sm text-gray-500">
              Update the top breadcrumb title and description.
            </p>
          </div>
        </div>
      </template>

      <UForm :state="form" class="space-y-6" @submit="onSubmit">
        <UFormField label="Breadcrumb Title" name="breadcrumb.title">
          <UInput
            v-model="form.breadcrumb.title"
            size="lg"
            placeholder="Our Products"
            icon="i-lucide-heading"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Breadcrumb Description"
          name="breadcrumb.description"
        >
          <UTextarea
            v-model="form.breadcrumb.description"
            :rows="4"
            size="lg"
            placeholder="Premium mango products made in Rajshahi, Bangladesh with care, quality and passion."
            class="w-full"
          />
        </UFormField>

        <UFormField label="Shop Title" name="shop.title">
          <UInput
            v-model="form.shop.title"
            size="lg"
            placeholder="Our Product Range"
            icon="i-lucide-package"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Shop Description" name="shop.description">
          <UTextarea
            v-model="form.shop.description"
            :rows="4"
            size="lg"
            placeholder="We offer a variety of high-quality mango products to meet different business needs around the world."
            class="w-full"
          />
        </UFormField>

        <UButton
          type="submit"
          color="primary"
          icon="i-lucide-save"
          :loading="settingStore.loading"
        >
          Save Settings
        </UButton>
      </UForm>
    </UCard>
  </div>
</template>
