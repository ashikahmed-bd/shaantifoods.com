<script setup>
const products = [
  {
    name: "Premium Dried Mango",
    description: "Natural taste with attractive texture and long shelf life.",
    image_url: "/images/products/1.jpg",
    action: "VIEW PRODUCT",
    available: true,
  },
  {
    name: "Freeze-Dried Mango",
    description: "Coming Soon",
    image_url: "/images/products/2.jpg",
    action: "LEARN MORE",
    available: false,
  },
  {
    name: "Mango Puree",
    description:
      "Available for industrial and food-service use.",
    image_url: "/images/products/3.jpg",
    action: "VIEW PRODUCT",
    available: true,
  },
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">

    <section class="relative">
      <img src="/images/hero.png" class="w-full h-auto object-cover object-center" alt="">


      <div class="absolute inset-0 px-5 py-10">
        <div class="max-w-md">
          <h2 class="mb-4 text-4xl font-extrabold leading-tight text-green-950">
            Premium Mango
            Products From
            Bangladesh
          </h2>

          <p class="mb-6 text-base leading-relaxed text-gray-700">
            From carefully selected mangoes to international-quality
            processing, Shaanti Foods delivers premium dried mango
            products for global buyers.
          </p>

          <div class="space-y-3">
            <UButton block size="xl" color="warning" class="h-14 justify-center text-base font-bold">
              <UIcon name="i-lucide-calendar" class="mr-2" />
              REQUEST A MEETING
            </UButton>

            <UButton block size="xl" color="success" variant="outline" class="h-14 justify-center text-base font-bold">
              <UIcon name="i-lucide-gift" class="mr-2" />
              REQUEST FREE SAMPLE
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-green-900 text-white">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 py-8">
        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-map-pin" class="size-7" />
          <div>
            <p class="font-semibold">
              Bangladesh
            </p>
            <p class="text-sm text-white/80">
              Origin
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-leaf" class="size-7" />
          <div>
            <p class="font-semibold">
              Premium
            </p>
            <p class="text-sm text-white/80">
              Processing
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-shield-check" class="size-7" />
          <div>
            <p class="font-semibold">
              Export-Oriented
            </p>
            <p class="text-sm text-white/80">
              Production
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <UIcon name="i-lucide-circle-check" class="size-7" />
          <div>
            <p class="font-semibold">
              Hygienic
            </p>
            <p class="text-sm text-white/80">
              Manufacturing
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-10">
      <h2 class="mb-10 text-center text-3xl font-bold text-green-900">
        Why Global Buyers Choose Us
      </h2>

      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <UCard>
            <div class="text-center">
              <div class="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-green-50">
                <UIcon name="i-lucide-sprout" class="size-10 text-green-700" />
              </div>

              <h3 class="mb-2 text-xl font-bold">
                Direct From Mango Farms
              </h3>

              <p class="text-gray-600">
                Carefully sourced mangoes from Bangladesh's leading
                mango-growing regions.
              </p>
            </div>
          </UCard>

          <UCard>
            <div class="text-center">
              <div class="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-orange-50">
                <UIcon name="i-lucide-apple" class="size-10 text-orange-500" />
              </div>

              <h3 class="mb-2 text-xl font-bold">
                Premium Quality
              </h3>

              <p class="text-gray-600">
                Selected fruits processed using modern dehydration
                technology.
              </p>
            </div>
          </UCard>

          <UCard>
            <div class="text-center">
              <div class="mx-auto mb-4 flex size-20 items-center justify-center rounded-full bg-green-50">
                <UIcon name="i-lucide-handshake" class="size-10 text-green-700" />
              </div>

              <h3 class="mb-2 text-xl font-bold">
                Reliable Supply
              </h3>

              <p class="text-gray-600">
                Consistent quality and scalable production for long-term
                business partnerships.
              </p>
            </div>
          </UCard>
        </div>
      </div>
    </section>


    <section class="px-4 py-8">
      <!-- Title -->
      <div class="mb-6 text-center">
        <h2 class="text-3xl font-bold text-green-900">
          Our Products
        </h2>
      </div>

      <!-- Products -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
        <article v-for="product in products" :key="product.name" class="overflow-hidden border border-border">
          <img :src="product.image_url" :alt="product.name" class="h-auto w-full object-cover">

          <div class="space-y-3 p-4">
            <h3 class="text-xl font-bold text-green-900">
              {{ product.name }}
            </h3>

            <p class="text-sm text-gray-600 line-clamp-2">
              {{ product.description }}
            </p>

            <button class="flex items-center gap-2 font-semibold" :class="product.available
              ? 'text-green-800'
              : 'text-orange-500'
              ">
              {{ product.action }}

              <UIcon name="i-lucide-arrow-right" class="size-4" />
            </button>
          </div>
        </article>
      </div>


      <div class="relative mt-8 overflow-hidden rounded-2xl bg-green-800">
        <img src="https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=1200"
          class="absolute inset-0 h-full w-full object-cover opacity-30" alt="">

        <div class="relative p-6 md:p-8">
          <div class="mb-6">
            <h3 class="mb-2 text-3xl font-bold text-white">
              Start With A Sample
            </h3>

            <p class="max-w-md text-green-100">
              Experience the quality before making a purchasing decision.
            </p>
          </div>

          <div class="flex items-center gap-4 max-w-xl">
            <UButton size="xl" color="warning" block class="h-14 font-semibold shadow-lg">
              <UIcon name="i-lucide-gift" class="mr-2 size-5" />
              REQUEST FREE SAMPLE
            </UButton>

            <UButton size="xl" block
              class="h-14 border border-white/30 bg-white/10 font-semibold text-white backdrop-blur hover:bg-white/20">
              <UIcon name="i-lucide-phone" class="mr-2 size-5" />
              CONTACT OUR TEAM
            </UButton>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped></style>
