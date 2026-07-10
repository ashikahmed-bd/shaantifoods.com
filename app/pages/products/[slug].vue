<script setup>
const route = useRoute();
const productStore = useProductStore();

const {
  data: product,
  pending,
  error,
  refresh,
} = await useAsyncData(`product-${route.params.slug}`, async () => {
  return await productStore.show(route.params.slug);
});

const formatPrice = (amount, currency = "USD") => {
  if (!amount) return "";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(Number(amount));
};

const discountPercent = computed(() => {
  if (!product.value?.price || !product.value?.compare_price) return 0;

  const price = Number(product.value.price);
  const comparePrice = Number(product.value.compare_price);

  if (!comparePrice || comparePrice <= price) return 0;

  return Math.round(((comparePrice - price) / comparePrice) * 100);
});
</script>

<template>
  <main class="bg-gray-100">
    <div class="max-w-7xl mx-auto px-4 py-8 space-y-6">
      <LoadingState v-if="pending" />

      <ErrorState v-else-if="error" :retry="refresh" />

      <template v-else-if="product">
        <div class="mb-6 flex items-center gap-2 text-sm text-gray-500">
          <NuxtLink to="/" class="hover:text-green-700">Home</NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="size-4" />
          <NuxtLink to="/products" class="hover:text-green-700">
            Products
          </NuxtLink>
          <UIcon name="i-lucide-chevron-right" class="size-4" />
          <span class="font-medium text-gray-800">
            {{ product.name }}
          </span>
        </div>

        <section class="overflow-hidden rounded-xl bg-white">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div class="bg-gray-50 p-4 md:p-8">
              <div class="relative">
                <ProductGallery
                  :images="
                    [product?.cover_url, ...(product?.gallery || [])].filter(
                      Boolean,
                    )
                  "
                />

                <div
                  class="absolute left-4 top-4 flex flex-wrap items-center gap-2"
                >
                  <span
                    v-if="product.featured"
                    class="rounded-full bg-orange-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow"
                  >
                    Featured
                  </span>

                  <span
                    v-if="!product.available"
                    class="rounded-full bg-yellow-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow"
                  >
                    Coming Soon
                  </span>

                  <span
                    v-else
                    class="rounded-full bg-green-600 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow"
                  >
                    Available
                  </span>
                </div>
              </div>
            </div>

            <div class="p-6 space-y-4">
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-700"
                >
                  {{ product.country_of_origin }}
                </span>

                <span
                  class="rounded-full bg-orange-50 px-3 py-1 text-sm font-medium text-orange-700"
                >
                  {{ product.region }}
                </span>

                <span
                  class="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700"
                >
                  SKU: {{ product.sku }}
                </span>
              </div>

              <h1
                class="text-3xl md:text-5xl font-extrabold leading-tight text-green-950"
              >
                {{ product.name }}
              </h1>

              <p class="text-lg leading-8 text-gray-600">
                {{ product.overview }}
              </p>

              <div class="rounded-2xl bg-orange-50 p-5">
                <div class="flex flex-wrap items-end gap-3">
                  <p class="text-4xl font-extrabold text-orange-600">
                    {{ formatPrice(product.price, product.currency) }}
                  </p>

                  <p
                    v-if="product.compare_price"
                    class="pb-1 text-xl font-semibold text-gray-400 line-through"
                  >
                    {{ formatPrice(product.compare_price, product.currency) }}
                  </p>

                  <span
                    v-if="discountPercent"
                    class="mb-1 rounded-full bg-red-100 px-3 py-1 text-sm font-bold text-red-600"
                  >
                    Save {{ discountPercent }}%
                  </span>
                </div>

                <p class="mt-2 text-sm text-gray-600">
                  Minimum Order:
                  <span class="font-bold text-gray-900">
                    {{ product.minimum_order_quantity }}
                    {{ product.unit }}
                  </span>
                </p>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div class="rounded-2xl border border-gray-100 p-4">
                  <p class="text-gray-500">Stock Status</p>
                  <p
                    class="text-lg font-bold"
                    :class="
                      product.stock_status === 'in_stock'
                        ? 'text-green-700'
                        : 'text-red-600'
                    "
                  >
                    {{ product.stock_status?.replaceAll("_", " ") }}
                  </p>
                </div>

                <div class="rounded-2xl border border-gray-100 p-4">
                  <p class="text-gray-500">Stock Quantity</p>
                  <p class="text-lg font-bold text-gray-900">
                    {{ product.stock_quantity }} {{ product.unit }}
                  </p>
                </div>

                <div class="rounded-2xl border border-gray-100 p-4">
                  <p class="text-gray-500">Availability</p>
                  <p
                    class="mt-1 text-lg font-bold"
                    :class="
                      product.available ? 'text-green-700' : 'text-yellow-600'
                    "
                  >
                    {{ product.available ? "Available Now" : "Coming Soon" }}
                  </p>
                </div>

                <div
                  v-if="product.available_at"
                  class="rounded-2xl border border-gray-100 p-4"
                >
                  <p class="text-gray-500">Available From</p>
                  <p class="mt-1 text-lg font-bold text-gray-900">
                    {{ $date(product.available_at) }}
                  </p>
                </div>
              </div>

              <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  class="flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
                >
                  <UIcon name="i-lucide-send" class="size-5" />
                  Request Free Sample
                </button>

                <button
                  class="flex items-center justify-center gap-2 rounded-2xl border border-green-700 px-6 py-4 font-bold text-green-800 transition hover:bg-green-50"
                >
                  <UIcon name="i-lucide-message-circle" class="size-5" />
                  Contact WhatsApp
                </button>
              </div>
            </div>
          </div>
        </section>

        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
            class="lg:col-span-2 rounded-3xl border border-gray-100 bg-white p-6"
          >
            <h2 class="text-2xl font-extrabold text-green-950">
              Product Description
            </h2>

            <p class="mt-4 leading-8 text-gray-600">
              {{ product.description }}
            </p>

            <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="mb-4 text-xl font-bold text-gray-900">
                  Key Features
                </h3>

                <ul class="space-y-3">
                  <li
                    v-for="feature in product.features"
                    :key="feature"
                    class="flex items-center gap-3 text-gray-700"
                  >
                    <span
                      class="flex size-8 items-center justify-center rounded-full bg-green-50 text-green-700"
                    >
                      <UIcon name="i-lucide-check" class="size-4" />
                    </span>
                    {{ feature }}
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="mb-4 text-xl font-bold text-gray-900">Benefits</h3>

                <ul class="space-y-3">
                  <li
                    v-for="benefit in product.benefits"
                    :key="benefit"
                    class="flex items-center gap-3 text-gray-700"
                  >
                    <span
                      class="flex size-8 items-center justify-center rounded-full bg-orange-50 text-orange-600"
                    >
                      <UIcon name="i-lucide-star" class="size-4" />
                    </span>
                    {{ benefit }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            class="rounded-3xl border border-gray-100 bg-green-950 p-6 text-white"
          >
            <div
              class="flex size-14 items-center justify-center rounded-2xl bg-white/10"
            >
              <UIcon name="i-lucide-ship" class="size-7" />
            </div>

            <h2 class="text-2xl font-extrabold">Export Information</h2>

            <div class="mt-6 space-y-5">
              <div>
                <p class="text-sm text-green-100">Lead Time</p>
                <p class="mt-1 text-lg font-bold">
                  {{ product.shipping?.lead_time }}
                </p>
              </div>

              <div>
                <p class="text-sm text-green-100">Shipping Method</p>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span
                    v-for="method in product.shipping?.shipping_method"
                    :key="method"
                    class="rounded-full bg-white/10 px-3 py-1 text-sm font-medium"
                  >
                    {{ method }}
                  </span>
                </div>
              </div>

              <div>
                <p class="text-sm text-green-100">Export Available</p>
                <p class="mt-1 text-lg font-bold">
                  {{ product.shipping?.export_available ? "Yes" : "No" }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="rounded-3xl border border-gray-100 bg-white p-6">
          <div class="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 class="text-2xl font-extrabold text-green-950">
                Product Specifications
              </h2>

              <p class="mt-1 text-gray-500">
                Technical and packaging information for bulk buyers.
              </p>
            </div>

            <div
              class="hidden rounded-2xl bg-green-50 p-3 text-green-700 md:block"
            >
              <UIcon name="i-lucide-clipboard-list" class="size-7" />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="(value, key) in product.specifications"
              :key="key"
              class="rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div class="mb-3 flex items-center gap-3">
                <div
                  class="flex size-10 items-center justify-center rounded-xl bg-green-50 text-green-700"
                >
                  <UIcon name="i-lucide-check-circle" class="size-5" />
                </div>

                <h3
                  class="text-sm font-semibold uppercase tracking-wide text-gray-500"
                >
                  {{ key.replaceAll("_", " ") }}
                </h3>
              </div>

              <p class="text-lg font-bold text-gray-900">
                {{ value }}
              </p>
            </div>
          </div>
        </section>
      </template>

      <EmptyState v-else />
    </div>
  </main>
</template>
