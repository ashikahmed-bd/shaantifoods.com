<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
});
</script>

<template>
  <nav aria-label="Breadcrumb">
    <ol class="flex justify-center items-center gap-2">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="flex items-center gap-2"
      >
        <!-- Link -->
        <NuxtLink
          v-if="item.to && index !== items.length - 1"
          :to="item.to"
          class="text-white hover:text-accent transition"
        >
          {{ item.label }}
        </NuxtLink>

        <!-- Active (Last Item) -->
        <span v-else class="text-accent font-medium">
          {{ item.label }}
        </span>

        <UIcon
          v-if="index !== items.length - 1"
          name="i-lucide-chevron-right"
          class="size-4 text-white/60"
        />
      </li>
    </ol>
  </nav>
</template>
