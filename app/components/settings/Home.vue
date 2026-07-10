<script setup>
const settingStore = useSettingStore();
const toast = useToast();

const { home } = storeToRefs(settingStore);

const form = reactive({
  highlights: [],

  why_choose_us: {
    title: "",
    subtitle: "",
    items: [],
  },

  products: {
    title: "",
    subtitle: "",
  },

  cta: {
    title: "",
    description: "",
    primary_button_text: "",
    primary_button_url: "",
    secondary_button_text: "",
    secondary_button_url: "",
  },
});

const updateHome = async () => {
  const response = await settingStore.updateHome(form);

  toast.add({
    title: response.message,
  });
};

const loadHome = async () => {
  const response = await settingStore.getHome();
  Object.assign(form, {
    highlights: response?.highlights || [],
    why_choose_us: response?.why_choose_us || {
      title: "",
      subtitle: "",
    },
    products: response?.products || {
      title: "",
      subtitle: "",
    },
    cta: response?.cta || {
      title: "",
      description: "",
      primary_button_text: "",
      primary_button_url: "",
      secondary_button_text: "",
      secondary_button_url: "",
    },
  });
};

onMounted(() => {
  loadHome();
});
</script>

<template>
  <div class="space-y-6">
    <template v-if="home">
      <UCard variant="subtle">
        <template #header>
          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
            >
              <UIcon name="i-lucide-sparkles" class="size-5" />
            </div>

            <div>
              <h3 class="font-bold text-gray-950">Highlights Section</h3>
              <p class="text-sm text-gray-500">
                Manage homepage highlight items.
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-5">
          <div
            v-for="(highlight, index) in form?.highlights"
            :key="index"
            class="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div class="mb-4 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-700"
                >
                  <UIcon :name="highlight.icon" class="size-5" />
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">
                    Highlight {{ index + 1 }}
                  </h4>
                  <p class="text-sm text-gray-500">Icon, title and subtitle</p>
                </div>
              </div>

              <UButton
                icon="i-lucide-trash-2"
                color="error"
                variant="soft"
                size="sm"
                @click="form?.highlights.splice(index, 1)"
              />
            </div>

            <div class="grid gap-4 md:grid-cols-3">
              <UFormField label="Icon">
                <UInput
                  v-model="highlight.icon"
                  placeholder="i-lucide-map-pin"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Title">
                <UInput
                  v-model="highlight.title"
                  placeholder="Bangladesh"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Subtitle">
                <UInput
                  v-model="highlight.subtitle"
                  placeholder="Origin"
                  class="w-full"
                />
              </UFormField>
            </div>
          </div>

          <UButton
            icon="i-lucide-plus"
            label="Add Highlight"
            color="primary"
            variant="soft"
            @click="
              form.highlights.push({
                icon: 'i-lucide-circle-check',
                title: '',
                subtitle: '',
              })
            "
          />
        </div>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-green-100 text-green-700"
            >
              <UIcon name="i-lucide-thumbs-up" class="size-5" />
            </div>

            <div>
              <h3 class="font-bold text-gray-950">Why Choose Us Section</h3>
              <p class="text-sm text-gray-500">
                Manage homepage trust and benefit content.
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-5">
          <UFormField label="Section Title" required>
            <UInput
              v-model="form.why_choose_us.title"
              size="lg"
              placeholder="Why Global Buyers Choose Us"
              class="w-full"
            />
          </UFormField>

          <div
            v-for="(item, index) in form?.why_choose_us.items"
            :key="index"
            class="rounded-2xl border border-gray-200 bg-white p-5"
          >
            <div class="mb-4 flex items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div
                  class="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-700"
                >
                  <UIcon :name="item.icon" class="size-5" />
                </div>

                <div>
                  <h4 class="font-semibold text-gray-900">
                    Item {{ index + 1 }}
                  </h4>
                  <p class="text-sm text-gray-500">
                    Icon, title and description
                  </p>
                </div>
              </div>

              <UButton
                icon="i-lucide-trash-2"
                color="error"
                variant="soft"
                size="sm"
                @click="form.why_choose_us.items.splice(index, 1)"
              />
            </div>

            <div class="grid gap-4 md:grid-cols-2">
              <UFormField label="Icon">
                <UInput
                  v-model="item.icon"
                  placeholder="i-lucide-sprout"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Title">
                <UInput
                  v-model="item.title"
                  placeholder="Direct From Mango Farms"
                  class="w-full"
                />
              </UFormField>

              <UFormField label="Description" class="md:col-span-2">
                <UTextarea
                  v-model="item.description"
                  autoresize
                  :rows="3"
                  placeholder="Carefully sourced mangoes from Bangladesh's leading mango-growing regions."
                  class="w-full"
                />
              </UFormField>
            </div>
          </div>

          <UButton
            icon="i-lucide-plus"
            label="Add Item"
            color="primary"
            variant="soft"
            @click="
              form.why_choose_us.items.push({
                title: '',
                description: '',
                icon: 'i-lucide-circle-check',
              })
            "
          />
        </div>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
            >
              <UIcon name="i-lucide-package" class="size-5" />
            </div>

            <div>
              <h3 class="font-bold text-gray-950">Products Section</h3>
              <p class="text-sm text-gray-500">
                Manage homepage products section title and subtitle.
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-5">
          <div class="grid gap-5 md:grid-cols-2">
            <UFormField label="Section Title" required>
              <UInput
                v-model="form.products.title"
                size="lg"
                placeholder="Our Products"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Section Subtitle">
              <UInput
                v-model="form.products.subtitle"
                size="lg"
                placeholder="Premium dried mango products for global buyers."
                class="w-full"
              />
            </UFormField>
          </div>
        </div>
      </UCard>

      <UCard variant="subtle">
        <template #header>
          <div class="flex items-center gap-3">
            <div
              class="flex size-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700"
            >
              <UIcon name="i-lucide-megaphone" class="size-5" />
            </div>

            <div>
              <h3 class="font-bold text-gray-950">CTA Section</h3>
              <p class="text-sm text-gray-500">
                Manage homepage call-to-action content.
              </p>
            </div>
          </div>
        </template>

        <div class="space-y-5">
          <div class="grid gap-5 md:grid-cols-2">
            <UFormField label="CTA Title" required class="md:col-span-2">
              <UInput
                v-model="form.cta.title"
                size="lg"
                placeholder="Start With A Sample"
                class="w-full"
              />
            </UFormField>

            <UFormField label="CTA Description" class="md:col-span-2">
              <UTextarea
                v-model="form.cta.description"
                autoresize
                :rows="3"
                placeholder="Experience the quality before making a purchasing decision."
                class="w-full"
              />
            </UFormField>

            <UFormField label="Primary Button Text">
              <UInput
                v-model="form.cta.primary_button_text"
                placeholder="Request Free Sample"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Primary Button URL">
              <UInput
                v-model="form.cta.primary_button_url"
                placeholder="/sample-request"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Secondary Button Text">
              <UInput
                v-model="form.cta.secondary_button_text"
                placeholder="Contact Our Team"
                class="w-full"
              />
            </UFormField>

            <UFormField label="Secondary Button URL">
              <UInput
                v-model="form.cta.secondary_button_url"
                placeholder="/contact"
                class="w-full"
              />
            </UFormField>
          </div>
        </div>
      </UCard>

      <div class="flex justify-end gap-3 border-t border-gray-200 pt-5">
        <UButton
          label="Reset"
          icon="i-lucide-rotate-ccw"
          color="neutral"
          variant="outline"
          size="lg"
          :disabled="settingStore.loading"
        />

        <UButton
          label="Update"
          icon="i-lucide-save"
          color="primary"
          size="lg"
          :loading="settingStore.loading"
          @click="updateHome"
        />
      </div>
    </template>

    <LoadingState v-else />
  </div>
</template>
