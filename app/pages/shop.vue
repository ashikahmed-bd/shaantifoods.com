<script setup>
const { data: products, pending, error } = await useAsyncData('products', () => {
  return $fetch('/api/products')
});
</script>

<template>
  <main>
    <div v-if="pending">
      Loading...
    </div>

    <div v-else-if="error">
      Something went wrong.
    </div>

    <div v-else>
      <section>
        <div class="relative overflow-hidden rounded-b-3xl">
          <img src="/images/banners/shop.png" alt="Mango Products" class="w-full h-auto object-cover" />

          <div class="absolute inset-0 flex items-center">
            <div class="mx-auto w-full max-w-7xl px-6">
              <div class="max-w-xl text-white">
                <div class="mb-4 flex items-center gap-2 text-sm">
                  <NuxtLink to="/">Home</NuxtLink>
                  <span>></span>
                  <span>Products</span>
                </div>

                <h1 class="mb-4 text-5xl font-bold">
                  Our Products
                </h1>

                <div class="mb-6 h-1 w-16 bg-amber-500"></div>

                <p class="text-lg text-white/90">
                  Premium mango products made in Rajshahi,
                  Bangladesh with care, quality and passion.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section class="bg-gray-50 py-16">
          <div class="mx-auto max-w-7xl px-6">
            <div class="mb-12 text-center">
              <h2 class="mb-3 text-4xl font-bold text-green-900">
                Our Product Range
              </h2>

              <p class="mx-auto max-w-2xl text-gray-600">
                We offer a variety of high-quality mango products
                to meet different business needs around the world.
              </p>
            </div>

            <div class="space-y-8">
              <article v-for="product in products">
                <ProductCard :product="product" />
              </article>
            </div>
          </div>
        </section>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
