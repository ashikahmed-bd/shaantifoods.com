<script setup>
const settingStore = useSettingStore();
const toast = useToast();

const form = reactive({
  site_name: "",
  company_name: "",
  description: "",
  phone: "",
  email: "",
  website: "",

  address: {
    line_1: "",
    line_2: "",
  },

  commitment_title: "",
  commitment_description: "",
  certification_text: "",
  copyright: "",

  social_links: {
    facebook: {
      icon: "i-simple-icons-facebook",
      url: "",
    },
    linkedin: {
      icon: "i-simple-icons-linkedin",
      url: "",
    },
    instagram: {
      icon: "i-simple-icons-instagram",
      url: "",
    },
    youtube: {
      icon: "i-simple-icons-youtube",
      url: "",
    },
  },
});

const loadGeneral = async () => {
  const response = await settingStore.getGeneral();

  Object.assign(form, {
    site_name: response?.site_name,
    company_name: response?.company_name,
    description: response?.description,
    phone: response?.phone,
    email: response?.email,
    website: response?.website,

    address: {
      line_1: response?.address?.line_1,
      line_2: response?.address?.line_2,
    },

    commitment_title: response?.commitment_title,
    commitment_description: response?.commitment_description,
    certification_text: response?.certification_text,

    social_links: {
      facebook: {
        icon: response?.social_links?.facebook?.icon,
        url: response?.social_links?.facebook?.url,
      },

      linkedin: {
        icon: response?.social_links?.linkedin?.icon,
        url: response?.social_links?.linkedin?.url,
      },

      instagram: {
        icon: response?.social_links?.instagram?.icon,
        url: response?.social_links?.instagram?.url,
      },

      youtube: {
        icon: response?.social_links?.youtube?.icon,
        url: response?.social_links?.youtube?.url,
      },
    },
  });
};

const onSubmit = async () => {
  const response = await settingStore.updateGeneral(form);

  toast.add({
    title: response.message,
  });
};

onMounted(() => {
  loadGeneral();
});
</script>

<template>
  <div class="space-y-6">
    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-700"
          >
            <UIcon name="i-lucide-building-2" class="size-5" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-gray-900">
              Basic Information
            </h2>
            <p class="text-sm text-gray-500">
              Website and company basic details.
            </p>
          </div>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-2">
        <UFormField label="Site Name" name="site_name">
          <UInput
            v-model="form.site_name"
            placeholder="eg. SHAANTI"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Company Name" name="company_name">
          <UInput
            v-model="form.company_name"
            placeholder="eg. Company Name Ltd."
            class="w-full"
          />
        </UFormField>

        <UFormField label="Phone" name="phone">
          <UInput
            v-model="form.phone"
            placeholder="eg. +880 1XXX XXXXXX"
            icon="i-lucide-phone"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Email" name="email">
          <UInput
            v-model="form.email"
            placeholder="eg. example@company.com"
            icon="i-lucide-mail"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Website" name="website" class="md:col-span-2">
          <UInput
            v-model="form.website"
            placeholder="eg. www.example.com"
            icon="i-lucide-globe"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Description"
          name="description"
          class="md:col-span-2"
        >
          <UTextarea
            v-model="form.description"
            placeholder="eg. Write a short company description here..."
            :rows="4"
            class="w-full"
          />
        </UFormField>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600"
          >
            <UIcon name="i-lucide-map-pin" class="size-5" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-gray-900">Address</h2>
            <p class="text-sm text-gray-500">
              Company office or factory address.
            </p>
          </div>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-2">
        <UFormField label="Address Line 1" name="address.line_1">
          <UInput
            v-model="form.address.line_1"
            placeholder="eg. Road / Area / City"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Address Line 2" name="address.line_2">
          <UInput
            v-model="form.address.line_2"
            placeholder="eg. District - Postal Code, Country"
            class="w-full"
          />
        </UFormField>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600"
          >
            <UIcon name="i-lucide-shield-check" class="size-5" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-gray-900">
              Commitment Section
            </h2>
            <p class="text-sm text-gray-500">
              Update commitment, certification and copyright text.
            </p>
          </div>
        </div>
      </template>

      <div class="grid gap-4">
        <UFormField label="Commitment Title" name="commitment_title">
          <UInput
            v-model="form.commitment_title"
            placeholder="eg. About Our Commitment"
            class="w-full"
          />
        </UFormField>

        <UFormField
          label="Commitment Description"
          name="commitment_description"
        >
          <UTextarea
            v-model="form.commitment_description"
            placeholder="eg. Write your commitment description here..."
            :rows="4"
            class="w-full"
          />
        </UFormField>

        <UFormField label="Certification Text" name="certification_text">
          <UTextarea
            v-model="form.certification_text"
            placeholder="eg. Certified and export-ready company..."
            :rows="3"
            class="w-full"
          />
        </UFormField>
      </div>
    </UCard>

    <UCard>
      <template #header>
        <div class="flex items-center gap-3">
          <div
            class="flex size-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600"
          >
            <UIcon name="i-lucide-share-2" class="size-5" />
          </div>

          <div>
            <h2 class="text-lg font-semibold text-gray-900">Social Links</h2>
            <p class="text-sm text-gray-500">
              Update social media icon and URL.
            </p>
          </div>
        </div>
      </template>

      <div class="grid gap-4 md:grid-cols-2">
        <div
          v-for="(item, key) in form.social_links"
          :key="key"
          class="rounded-2xl border border-gray-200 bg-gray-50/60 p-4 transition hover:border-green-200 hover:bg-green-50/40"
        >
          <div class="mb-4 flex items-center justify-between gap-3">
            <div class="flex items-center gap-3">
              <div
                class="flex size-10 items-center justify-center rounded-xl bg-white text-green-700 shadow-sm"
              >
                <UIcon :name="item.icon" class="size-5" />
              </div>

              <div>
                <h3 class="font-semibold capitalize text-gray-900">
                  {{ key }}
                </h3>
                <p class="text-xs text-gray-500">Social media profile link</p>
              </div>
            </div>
          </div>

          <div class="grid gap-4">
            <UFormField
              :label="`${key} Icon`"
              :name="`social_links.${key}.icon`"
            >
              <UInput
                v-model="item.icon"
                placeholder="i-simple-icons-facebook"
                class="w-full"
              />
            </UFormField>

            <UFormField :label="`${key} URL`" :name="`social_links.${key}.url`">
              <UInput
                v-model="item.url"
                placeholder="https://facebook.com/"
                icon="i-lucide-link"
                class="w-full"
              />
            </UFormField>
          </div>
        </div>
      </div>
    </UCard>

    <div
      class="sticky bottom-0 z-10 flex justify-end gap-3 border-t border-gray-200 bg-white/90 py-4 backdrop-blur"
    >
      <UButton type="button" color="neutral" variant="soft"> Cancel </UButton>

      <UButton
        type="submit"
        icon="i-lucide-save"
        color="primary"
        :loading="settingStore.loading"
        @click="onSubmit"
      >
        Save Changes
      </UButton>
    </div>
  </div>
</template>
