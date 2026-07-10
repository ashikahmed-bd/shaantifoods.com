<script setup>
const settings = useSettings();
const year = new Date().getFullYear();
</script>

<template>
  <footer class="bg-green-950 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid gap-12 lg:grid-cols-3">
        <div>
          <h2 class="text-3xl font-bold tracking-wide">
            {{ settings?.site_name }}
          </h2>

          <div class="mt-4 h-1 w-20 rounded-full bg-amber-400" />

          <p class="mt-6 max-w-md text-white/80 leading-7">
            {{ settings?.description }}
          </p>

          <div class="mt-8 flex items-center gap-4">
            <a
              v-for="(social, name) in settings?.social_links"
              :key="name"
              :href="social?.url || '#'"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-amber-400 hover:bg-amber-400 hover:text-green-950"
            >
              <UIcon :name="social?.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 class="mb-5 text-lg font-semibold">Contact Information</h3>

          <div class="space-y-5 text-white/80">
            <div class="flex gap-3">
              <UIcon
                name="i-lucide-map-pin"
                class="mt-1 h-5 w-5 text-amber-400"
              />

              <span>
                {{ settings?.address?.line_1 }}<br />
                {{ settings?.address?.line_2 }}
              </span>
            </div>

            <div class="flex gap-3">
              <UIcon name="i-lucide-phone" class="h-5 w-5 text-amber-400" />

              <a
                :href="settings?.phone ? 'tel:' + settings.phone : '#'"
                class="hover:text-amber-400"
              >
                {{ settings?.phone }}
              </a>
            </div>

            <div class="flex gap-3">
              <UIcon name="i-lucide-mail" class="h-5 w-5 text-amber-400" />

              <a
                :href="settings?.email ? 'mailto:' + settings.email : '#'"
                class="hover:text-amber-400"
              >
                {{ settings?.email }}
              </a>
            </div>

            <div class="flex gap-3">
              <UIcon name="i-lucide-globe" class="h-5 w-5 text-amber-400" />

              <a
                :href="websiteUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-amber-400"
              >
                {{ settings?.website }}
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 class="mb-5 text-lg font-semibold">
            {{ settings?.commitment_title }}
          </h3>

          <p class="text-white/80 leading-7">
            {{ settings?.commitment_description }}
          </p>

          <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <p class="text-sm text-white/70">
              {{ settings?.certification_text }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-sm text-white/80 md:flex-row md:text-left"
    >
      <p class="leading-relaxed">
        {{ `© ${year} Shaanti Foods (BD) Limited. All Rights Reserved.` }}
      </p>

      <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        <NuxtLink to="/privacy-policy" class="transition hover:text-amber-400">
          Privacy Policy
        </NuxtLink>

        <NuxtLink to="/terms" class="transition hover:text-amber-400">
          Terms & Conditions
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
