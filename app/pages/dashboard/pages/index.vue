<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <main class="bg-gray-50 rounded-2xl p-6">
    <div
      class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
    >
      <div>
        <h1 class="text-3xl font-bold text-gray-900">Pages</h1>

        <p class="mt-1 text-gray-500">Manage website pages and content.</p>
      </div>

      <NuxtLink
        to="/dashboard/pages/create"
        class="inline-flex items-center rounded bg-green-600 px-5 py-2.5 font-medium text-white hover:bg-green-700"
      >
        Add Page
      </NuxtLink>
    </div>

    <div class="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div class="overflow-x-auto">
        <table class="min-w-full">
          <thead class="bg-gray-50">
            <tr class="text-left text-sm font-semibold text-gray-600">
              <th class="px-6 py-4">Title</th>
              <th class="px-6 py-4">Slug</th>
              <th class="px-6 py-4">Status</th>
              <th class="px-6 py-4">Updated</th>
              <th class="px-6 py-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-5">
                <div>
                  <h3 class="font-semibold text-gray-900">About Us</h3>

                  <p class="mt-1 text-sm text-gray-500">
                    Company information page
                  </p>
                </div>
              </td>

              <td class="px-6 py-5 text-gray-600">about-us</td>

              <td class="px-6 py-5">
                <span
                  class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                >
                  Published
                </span>
              </td>

              <td class="px-6 py-5 text-sm text-gray-500">Jul 11, 2026</td>

              <td class="px-6 py-5">
                <div class="flex justify-end gap-2">
                  <button
                    class="rounded border border-gray-200 p-2 hover:bg-gray-100"
                  >
                    <UIcon name="i-lucide-eye" class="size-5" />
                  </button>
                </div>
              </td>
            </tr>

            <tr class="hover:bg-gray-50">
              <td class="px-6 py-5">
                <div>
                  <h3 class="font-semibold text-gray-900">Privacy Policy</h3>

                  <p class="mt-1 text-sm text-gray-500">
                    Website privacy policy
                  </p>
                </div>
              </td>

              <td class="px-6 py-5">privacy-policy</td>

              <td class="px-6 py-5">
                <span
                  class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700"
                >
                  Draft
                </span>
              </td>

              <td class="px-6 py-5 text-sm text-gray-500">Jul 10, 2026</td>

              <td class="px-6 py-5">
                <div class="flex justify-end gap-2">
                  <button
                    class="rounded border border-gray-200 p-2 hover:bg-gray-100"
                  >
                    <UIcon name="i-lucide-eye" class="size-5" />
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
