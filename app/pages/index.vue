<script setup>
const appStore = useAppStore();

const {
  data: home,
  pending,
  error,
  refresh,
} = await useAsyncData("home", async () => {
  return await appStore.getHome();
});
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-3.5">
    <LoadingState v-if="pending" />

    <ErrorState v-else-if="error" :retry="refresh" />

    <template v-else-if="home">
      <SeoMeta
        title="Shaanti Foods (BD) Limited - Premium Mango Export & Food Products"
        description="Shaanti Foods (BD) Limited delivers premium quality mango products worldwide with certified food safety, hygienic processing, and export-standard packaging."
        keywords="Shaanti Foods, mango export Bangladesh, premium mango, food processing company, export mango supplier, Bangladesh food export"
      />

      <section class="relative overflow-hidden rounded-2xl">
        <UCarousel
          v-slot="{ item }"
          :prev="{ color: 'primary' }"
          :next="{ variant: 'solid' }"
          :items="home.sliders"
          class="w-full mx-auto"
        >
          <img
            :src="item.image_url"
            :alt="item.title"
            class="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            class="relative flex min-h-96 items-center px-4 sm:px-6 lg:px-12 py-16"
          >
            <div class="w-full max-w-xl">
              <p
                class="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1 text-xs font-medium text-white backdrop-blur"
              >
                {{ item.title }}
              </p>

              <h1
                class="mb-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white"
              >
                {{ item.subtitle }}
              </h1>

              <p
                class="mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-white/80"
              >
                {{ item.description }}
              </p>

              <div class="flex flex-col sm:flex-row gap-3 sm:items-center">
                <NuxtLink
                  :to="`/${item.button_url}`"
                  class="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg bg-amber-500 px-6 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  <UIcon name="i-lucide-calendar" class="mr-2" />
                  {{ item.button_text }}
                </NuxtLink>

                <NuxtLink
                  to="/free-sample"
                  class="inline-flex h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/70 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <UIcon name="i-lucide-gift" class="mr-2" />
                  Free Sample
                </NuxtLink>
              </div>
            </div>
          </div>
        </UCarousel>
      </section>

      <section class="bg-green-900 text-white rounded-2xl mt-6">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 py-8">
          <div
            v-for="item in home.highlights"
            :key="item.title"
            class="flex items-center gap-3"
          >
            <UIcon :name="item.icon" class="size-6 text-emerald-300" />

            <div>
              <p class="font-semibold">
                {{ item.title }}
              </p>

              <p class="text-xs text-white/70">
                {{ item.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="px-4 py-10">
        <h2 class="mb-10 text-center text-3xl font-bold text-green-900">
          {{ home.why_choose_us.section_title }}
        </h2>

        <div class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <UCard
              v-for="(item, index) in home.why_choose_us.items"
              :key="item.title"
            >
              <div class="text-center">
                <div
                  class="mx-auto mb-4 flex size-20 items-center justify-center rounded-full"
                  :class="index === 1 ? 'bg-orange-50' : 'bg-green-50'"
                >
                  <UIcon
                    :name="item.icon"
                    class="size-10"
                    :class="index === 1 ? 'text-orange-500' : 'text-green-700'"
                  />
                </div>

                <h3 class="mb-2 text-xl font-bold">
                  {{ item.title }}
                </h3>

                <p class="text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <section class="px-4 py-8">
        <div class="text-center py-4">
          <h2 class="text-3xl font-bold text-green-900">
            {{ home?.products?.title }}
          </h2>

          <p class="mx-auto max-w-2xl text-gray-600">
            {{ home?.products?.subtitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <ProductCard
            v-for="product in home?.products?.items"
            :product="product"
          />
        </div>
      </section>

      <section class="px-4 py-8">
        <div class="relative overflow-hidden rounded-2xl bg-green-800">
          <img
            src="/images/banners/cta.png"
            class="absolute inset-0 h-full w-full object-cover opacity-30"
            alt=""
          />

          <div class="relative p-6 md:p-8">
            <div class="mb-6">
              <h3 class="mb-2 text-3xl font-bold text-white">
                {{ home?.cta?.title }}
              </h3>

              <p class="max-w-md text-green-100">
                {{ home?.cta?.description }}
              </p>
            </div>

            <div class="max-w-xl">
              <div class="grid gap-4 md:grid-cols-2">
                <NuxtLink
                  :to="home?.cta?.primary_button_url"
                  class="flex w-full items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 font-semibold text-white transition hover:bg-orange-600"
                >
                  <UIcon name="i-lucide-gift" class="mr-2 size-5" />
                  {{ home?.cta?.primary_button_text }}
                </NuxtLink>

                <NuxtLink
                  :to="home?.cta?.secondary_button_url"
                  class="flex w-full items-center justify-center rounded-lg border border-white/30 bg-white/10 px-6 py-2.5 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <UIcon name="i-lucide-phone" class="mr-2 size-5" />
                  {{ home?.cta?.secondary_button_text }}
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <EmptyState v-else />
  </main>
</template>

<style scoped></style>
