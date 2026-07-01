<script setup>
const route = useRoute();

const {
  data: product,
  pending,
  error,
} = await useAsyncData(`product-${route.params.slug}`, async () => {
  const products = await $fetch("/api/products");

  return products.find((item) => item.slug === route.params.slug);
});

const images = [
  "/images/products/freeze-mango/main.jpg",
  "/images/products/freeze-mango/main.jpg",
  "/images/products/freeze-mango/main.jpg",
  "/images/products/freeze-mango/main.jpg",
];

const activeImage = ref(images[0]);
</script>

<template>
  <main class="max-w-6xl mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div class="rounded-2xl overflow-hidden bg-white">
          <img :src="activeImage" class="w-full object-cover" alt="Product" />
        </div>

        <div class="flex gap-3 mt-4">
          <button
            v-for="(img, i) in images"
            :key="i"
            @click="activeImage = img"
            class="rounded-xl overflow-hidden w-20 h-20"
            :class="activeImage === img ? 'ring-2 ring-green-600' : ''"
          >
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div class="space-y-5">
        <h1 class="text-3xl font-bold text-primary">Premium Dried Mango</h1>
        <p class="text-gray-500">
          Naturally delicious dried mango made from carefully selected ripe
          mangoes using modern dehydration technology.
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            class="flex items-center gap-1 px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full"
          >
            <UIcon name="i-heroicons-check-circle" class="w-4 h-4" />
            Natural Taste
          </span>

          <span
            class="flex items-center gap-1 px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full"
          >
            <UIcon name="i-heroicons-sparkles" class="w-4 h-4" />
            No Additives
          </span>

          <span
            class="flex items-center gap-1 px-3 py-1 text-sm bg-green-50 text-green-700 rounded-full"
          >
            <UIcon name="i-heroicons-clock" class="w-4 h-4" />
            Long Shelf Life
          </span>
        </div>

        <div class="space-y-3">
          <button
            class="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-xl transition"
          >
            REQUEST FREE SAMPLE
          </button>

          <button
            class="w-full flex items-center justify-center gap-2 border border-green-600 text-green-700 font-medium py-3 rounded-xl hover:bg-green-50 transition"
          >
            CONTACT US ON WHATSAPP
          </button>
        </div>
      </div>
    </div>

    <div class="space-y-6">
      <UCard class="p-5">
        <div class="flex gap-4 items-start">
          <UIcon
            name="i-heroicons-document-text"
            class="w-6 h-6 text-green-700 mt-1"
          />

          <div class="flex-1">
            <h3 class="text-lg font-semibold text-gray-900">
              Product Description
            </h3>

            <p class="text-sm text-gray-600 mt-2 leading-relaxed">
              Shaanti Premium Dried Mango is made from the finest ripe mangoes
              cultivated in Rajshahi, Bangladesh. Advanced dehydration process
              preserves natural flavor, vibrant color and essential nutrients
              without artificial ingredients. It is soft, chewy and packed with
              tropical goodness of real mango.
            </p>
          </div>

          <img
            src="/images/products/freeze-mango/main.jpg"
            class="w-24 h-24 object-cover rounded-xl"
          />
        </div>
      </UCard>

      <!-- GRID SECTION -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        <!-- INGREDIENT INFO -->
        <UCard class="p-5">
          <div class="flex items-center gap-2 mb-3">
            <UIcon
              name="i-heroicons-clipboard-document-list"
              class="w-5 h-5 text-green-700"
            />
            <h3 class="font-semibold text-gray-900">Ingredient Info</h3>
          </div>

          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Mango Variety: Selected Premium Varieties</li>
            <li>• Origin: Rajshahi, Bangladesh</li>
            <li>• Harvest Season: May - July</li>
            <li>• Ingredients: 100% Mango</li>
            <li>• Additives: No additives or preservatives</li>
          </ul>
        </UCard>

        <!-- SPECIFICATIONS -->
        <UCard class="p-5">
          <div class="flex items-center gap-2 mb-3">
            <UIcon
              name="i-heroicons-cog-6-tooth"
              class="w-5 h-5 text-green-700"
            />
            <h3 class="font-semibold text-gray-900">Specifications</h3>
          </div>

          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between">
              <span>Moisture (Water Activity)</span>
              <span>≤ 0.60</span>
            </div>
            <div class="flex justify-between">
              <span>Sugar Level (Brix)</span>
              <span>60° ± 5°</span>
            </div>
            <div class="flex justify-between">
              <span>Size</span>
              <span>Length: 8–12 cm</span>
            </div>
            <div class="flex justify-between">
              <span>Best Before</span>
              <span>12 Months</span>
            </div>
            <div class="flex justify-between">
              <span>Packaging</span>
              <span>100g, 200g, 500g, 1kg</span>
            </div>
            <div class="flex justify-between">
              <span>Storage</span>
              <span>Cool & Dry Place</span>
            </div>
          </div>
        </UCard>

        <!-- SUGGESTED USES -->
        <UCard class="p-5">
          <div class="flex items-center gap-2 mb-3">
            <UIcon
              name="i-heroicons-light-bulb"
              class="w-5 h-5 text-green-700"
            />
            <h3 class="font-semibold text-gray-900">Suggested Uses</h3>
          </div>

          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Healthy snacks</li>
            <li>• Baking ingredients</li>
            <li>• Yogurt and cereal topping</li>
            <li>• Smoothies and beverages</li>
            <li>• Ice cream and desserts</li>
          </ul>
        </UCard>

        <!-- CERTIFICATIONS -->
        <UCard class="p-5">
          <div class="flex items-center gap-2 mb-3">
            <UIcon
              name="i-heroicons-shield-check"
              class="w-5 h-5 text-green-700"
            />
            <h3 class="font-semibold text-gray-900">Certifications</h3>
          </div>

          <div class="flex flex-wrap gap-2 text-sm">
            <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full"
              >HACCP</span
            >
            <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full"
              >ISO 22000 (In Progress)</span
            >
            <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full"
              >Halal (In Progress)</span
            >
            <span class="px-3 py-1 bg-green-50 text-green-700 rounded-full"
              >Export Registration</span
            >
          </div>
        </UCard>
      </div>
    </div>
  </main>
</template>
