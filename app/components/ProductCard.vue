<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="overflow-hidden border border-border">
    <div class="relative">
      <img
        :src="product.cover_url"
        :alt="product.name"
        class="h-auto w-full object-cover"
      />

      <div
        v-if="!product.available"
        class="absolute inset-0 flex items-center justify-center bg-black/50"
      >
        <span class="text-white text-2xl font-bold tracking-wide">
          Coming Soon
        </span>
      </div>
    </div>

    <div class="space-y-4 p-4">
      <a :href="`/products/${product.slug}`">
        <h3 class="text-xl font-bold text-green-900">
          {{ product.name }}
        </h3>
      </a>

      <p class="text-sm text-body line-clamp-3">
        {{ product.overview }}
      </p>

      <NuxtLink
        :to="product.available ? `/products/${product.slug}` : ''"
        class="flex items-center gap-2 font-semibold"
        :class="
          product.available
            ? 'text-green-800'
            : 'text-orange-500 pointer-events-none cursor-not-allowed'
        "
      >
        {{ product.available ? "View Product" : "Coming Soon" }}
        <UIcon
          :name="product.available ? 'i-lucide-arrow-right' : 'i-lucide-clock'"
          class="size-4"
        />
      </NuxtLink>
    </div>
  </article>
</template>
