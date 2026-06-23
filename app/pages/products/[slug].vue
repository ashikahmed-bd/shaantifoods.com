<script setup>
const route = useRoute();

const { data: product, pending, error } = await useAsyncData(
    `product-${route.params.slug}`,
    async () => {
        const products = await $fetch('/api/products')

        return products.find(
            item => item.slug === route.params.slug
        )
    }
);

const images = computed(() => [
    product.value?.cover_url,
    ...(product.value?.gallery || [])
].filter(Boolean))
</script>

<template>
    <main>
        <div v-if="pending" class="container mx-auto px-4 py-20">
            Loading...
        </div>

        <div v-else-if="error" class="container mx-auto px-4 py-20">
            Product not found
        </div>

        <div v-else class="bg-white">

            <div class="container mx-auto px-4 py-10">

                <div class="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>

                    <span>/</span>

                    <NuxtLink to="/products">
                        Products
                    </NuxtLink>

                    <span>/</span>

                    <span class="font-medium text-gray-900">
                        {{ product.name }}
                    </span>
                </div>


                <div class="grid gap-12 lg:grid-cols-2">
                    <div>
                        <ProductGallery :images="images" />
                        <div class="mt-8 grid gap-4 sm:grid-cols-2">
                            <div v-for="feature in product.features" :key="feature"
                                class="rounded-2xl border border-gray-200 p-4">
                                <div class="flex items-center gap-3">
                                    <UIcon name="i-lucide-check-circle" class="size-5 text-green-600" />
                                    <span class="font-medium">
                                        {{ feature }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div class="mb-4 flex flex-wrap gap-3">
                            <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                                In Stock
                            </span>
                            <span v-if="product.featured"
                                class="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                Featured Product
                            </span>
                        </div>

                        <h1 class="mb-4 text-4xl font-bold text-gray-900">
                            {{ product.name }}
                        </h1>

                        <p class="mb-6 text-lg leading-8 text-gray-600">
                            {{ product.overview }}
                        </p>


                        <div class="mb-8 flex items-center gap-4">
                            <span class="text-4xl font-bold text-primary">
                                {{ product.currency }}
                                {{ product.price }}
                            </span>
                            <span class="text-xl text-gray-400 line-through">
                                {{ product.currency }}
                                {{ product.compare_price }}
                            </span>
                        </div>

                        <div class="mb-8 grid gap-4 sm:grid-cols-2">
                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    SKU
                                </div>
                                <div class="font-semibold">
                                    {{ product.sku }}
                                </div>
                            </div>

                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    MOQ
                                </div>

                                <div class="font-semibold">
                                    {{ product.minimum_order_quantity }}
                                    {{ product.unit }}
                                </div>
                            </div>

                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    Origin
                                </div>

                                <div class="font-semibold">
                                    {{ product.region }},
                                    {{ product.country_of_origin }}
                                </div>
                            </div>

                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    Stock Quantity
                                </div>

                                <div class="font-semibold">
                                    {{ product.stock_quantity }}
                                    {{ product.unit }}
                                </div>
                            </div>

                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    Shelf Life
                                </div>

                                <div class="font-semibold">
                                    {{ product.specifications.shelf_life }}
                                </div>
                            </div>

                            <div class="rounded-2xl border border-border p-4">
                                <div class="text-sm text-gray-500">
                                    Variety
                                </div>

                                <div class="font-semibold">
                                    {{ product.specifications.variety }}
                                </div>
                            </div>
                        </div>


                        <div class="mb-8">
                            <h3 class="mb-3 font-semibold">
                                Certifications
                            </h3>

                            <div class="flex flex-wrap gap-2">
                                <span v-for="item in product.specifications.certification" :key="item"
                                    class="rounded-xl bg-green-50 px-3 py-2 text-sm font-medium text-green-700">
                                    {{ item }}
                                </span>
                            </div>
                        </div>


                        <div class="grid gap-4 md:grid-cols-2">
                            <button
                                class="rounded-2xl bg-primary px-6 py-4 font-semibold text-white transition hover:opacity-90">
                                Request Quotation
                            </button>
                            <button class="rounded-2xl border border-primary px-6 py-4 font-semibold text-primary">
                                Request Sample
                            </button>
                        </div>
                    </div>
                </div>


                <div class="mt-20">
                    <UTabs :items="[
                        {
                            label: 'Description',
                            slot: 'description'
                        },
                        {
                            label: 'Specifications',
                            slot: 'specifications'
                        },
                        {
                            label: 'Benefits',
                            slot: 'benefits'
                        },
                        {
                            label: 'Shipping',
                            slot: 'shipping'
                        }
                    ]">
                        <template #description>
                            <div class="prose max-w-none">
                                <p class="leading-8">
                                    {{ product.description }}
                                </p>
                            </div>
                        </template>

                        <template #specifications>
                            <div class="overflow-hidden rounded-3xl border border-border">
                                <table class="w-full">
                                    <tbody>
                                        <tr class="border-b">
                                            <td class="bg-gray-50 p-4 font-semibold">
                                                Variety
                                            </td>

                                            <td class="p-4">
                                                {{ product.specifications.variety }}
                                            </td>
                                        </tr>

                                        <tr class="border-b">
                                            <td class="bg-gray-50 p-4 font-semibold">
                                                Moisture
                                            </td>

                                            <td class="p-4">
                                                {{ product.specifications.moisture }}
                                            </td>
                                        </tr>

                                        <tr class="border-b">
                                            <td class="bg-gray-50 p-4 font-semibold">
                                                Shelf Life
                                            </td>

                                            <td class="p-4">
                                                {{ product.specifications.shelf_life }}
                                            </td>
                                        </tr>

                                        <tr class="border-b">
                                            <td class="bg-gray-50 p-4 font-semibold">
                                                Storage
                                            </td>

                                            <td class="p-4">
                                                {{ product.specifications.storage }}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="bg-gray-50 p-4 font-semibold">
                                                Packaging
                                            </td>

                                            <td class="p-4">
                                                {{ product.specifications.packaging }}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </template>

                        <template #benefits>
                            <div class="grid gap-4 md:grid-cols-2">
                                <div v-for="benefit in product.benefits" :key="benefit"
                                    class="rounded-2xl border border-border p-4">
                                    <div class="flex items-center gap-3">
                                        <UIcon name="i-lucide-badge-check" class="text-primary" />
                                        <span>
                                            {{ benefit }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <template #shipping>
                            <div class="grid gap-6 md:grid-cols-3">
                                <div class="rounded-2xl border border-border p-4">
                                    <div class="text-sm text-gray-500">
                                        Lead Time
                                    </div>
                                    <div class="mt-2 font-semibold">
                                        {{ product.shipping.lead_time }}
                                    </div>
                                </div>

                                <div class="rounded-2xl border border-border p-4">
                                    <div class="text-sm text-gray-500">
                                        Export Available
                                    </div>
                                    <div class="mt-2 font-semibold text-green-600">
                                        Yes
                                    </div>
                                </div>

                                <div class="rounded-2xl border border-border p-4">
                                    <div class="text-sm text-gray-500">
                                        Shipping Methods
                                    </div>
                                    <div class="mt-2">
                                        {{ product.shipping.shipping_method.join(', ') }}
                                    </div>
                                </div>
                            </div>
                        </template>
                    </UTabs>
                </div>
            </div>
        </div>
    </main>

</template>