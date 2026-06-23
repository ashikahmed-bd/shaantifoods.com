<script setup>
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const images = computed(() => [
    props.product?.cover_url,
    ...(props.product?.gallery || [])
].filter(Boolean))
</script>

<template>
    <div class="group relative overflow-hidden bg-white border border-border rounded-2xl transition-all duration-300">
        <div class="grid lg:grid-cols-2">
            <div class="p-4">
                <ProductGallery :images="images" />
            </div>

            <div class="relative p-6">
                <div class="mb-4 flex flex-wrap gap-2">
                    <span class="rounded-full bg-green-700 px-3 py-1 text-xs font-semibold text-white">
                        {{ product.country_of_origin }}
                    </span>

                    <span v-if="product.featured"
                        class="rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-white">
                        Featured
                    </span>

                    <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        {{ product.stock_status }}
                    </span>

                    <span class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        SKU: {{ product.sku }}
                    </span>
                </div>

                <h2 class="mb-3 text-3xl font-bold text-gray-900">
                    {{ product.name }}
                </h2>

                <p class="mb-8 line-clamp-3 text-gray-600">
                    {{ product.overview }}
                </p>

                <div class="mb-8 grid grid-cols-2 gap-4">
                    <div class="rounded-2xl bg-gray-50 p-4">
                        <p class="text-xs uppercase tracking-wide text-gray-500">
                            Price
                        </p>

                        <p class="mt-1 text-xl font-bold text-green-700">
                            {{ product.currency }} {{ product.price }}
                        </p>

                        <p v-if="product.compare_price" class="text-sm text-gray-400 line-through">
                            {{ product.currency }} {{ product.compare_price }}
                        </p>
                    </div>

                    <div class="rounded-2xl bg-gray-50 p-4">
                        <p class="text-xs uppercase tracking-wide text-gray-500">
                            MOQ
                        </p>

                        <p class="mt-1 font-semibold text-gray-900">
                            {{ product.minimum_order_quantity }}
                            {{ product.unit }}
                        </p>
                    </div>

                    <div class="rounded-2xl bg-gray-50 p-4">
                        <p class="text-xs uppercase tracking-wide text-gray-500">
                            Region
                        </p>

                        <p class="mt-1 font-semibold text-gray-900">
                            {{ product.region }}
                        </p>
                    </div>

                    <div class="rounded-2xl bg-gray-50 p-4">
                        <p class="text-xs uppercase tracking-wide text-gray-500">
                            Stock
                        </p>

                        <p class="mt-1 font-semibold text-green-600">
                            {{ product.stock_quantity }} {{ product.unit }}
                        </p>
                    </div>
                </div>

                <div v-if="product.features?.length" class="mb-8 flex flex-wrap gap-2">
                    <span v-for="feature in product.features" :key="feature"
                        class="rounded-full bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                        {{ feature }}
                    </span>
                </div>

                <div class="flex flex-wrap gap-3">
                    <NuxtLink :to="`/products/${product.slug}`"
                        class="inline-flex items-center rounded bg-green-800 px-6 py-3 font-semibold text-white transition hover:bg-green-900">
                        View Details
                    </NuxtLink>

                    <button
                        class="inline-flex items-center rounded border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-50">
                        Request Quote
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>