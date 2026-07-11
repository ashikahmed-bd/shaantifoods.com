<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <main class="min-h-screen bg-gray-50 p-6">
    <!-- Header -->
    <div
      class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Products</h1>

        <p class="mt-1 text-gray-500">Manage all food products</p>
      </div>

      <NuxtLink
        to="/dashboard/products/create"
        class="rounded-xl bg-green-600 px-5 py-2.5 font-medium text-white hover:bg-green-700"
      >
        Add Product
      </NuxtLink>
    </div>

    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr class="text-left text-sm font-semibold text-gray-600">
              <th class="px-6 py-4">Product</th>

              <th class="px-6 py-4">SKU</th>

              <th class="px-6 py-4">Price</th>

              <th class="px-6 py-4">Stock</th>

              <th class="px-6 py-4">Status</th>

              <th class="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4">
                <div class="flex items-center gap-4">
                  <img
                    src="https://placehold.co/60"
                    class="h-14 w-14 rounded-xl object-cover"
                  />

                  <div>
                    <h3 class="font-semibold">Premium Dried Mango</h3>

                    <p class="text-sm text-gray-500">Bangladesh</p>
                  </div>
                </div>
              </td>

              <td class="px-6 py-4">PDM-001</td>

              <td class="px-6 py-4">
                <p class="font-semibold">$8.50</p>

                <span class="text-sm text-gray-400 line-through"> $10.00 </span>
              </td>

              <td class="px-6 py-4">5,000 KG</td>

              <td class="px-6 py-4">
                <span
                  class="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700"
                >
                  Active
                </span>
              </td>

              <td class="px-6 py-4">
                <div class="flex justify-end gap-2">
                  <button
                    class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100"
                  >
                    👁
                  </button>

                  <button
                    class="rounded-lg border border-gray-200 p-2 hover:bg-gray-100"
                  >
                    ✏
                  </button>

                  <button
                    class="rounded-lg border border-red-200 p-2 text-red-600 hover:bg-red-50"
                  >
                    🗑
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
