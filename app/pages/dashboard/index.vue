<script setup>
definePageMeta({
  layout: "dashboard",
});

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    icon: "i-lucide-shopping-bag",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Revenue",
    value: "৳2,45,600",
    icon: "i-lucide-wallet",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Customers",
    value: "856",
    icon: "i-lucide-users",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Foods",
    value: "124",
    icon: "i-lucide-utensils-crossed",
    color: "bg-red-100 text-red-600",
  },
];

const orders = [
  {
    id: "#1001",
    customer: "Rahim Ahmed",
    total: "৳850",
    status: "Delivered",
  },
  {
    id: "#1002",
    customer: "Karim Mia",
    total: "৳420",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Nusrat Jahan",
    total: "৳1,150",
    status: "Preparing",
  },
  {
    id: "#1004",
    customer: "Tanvir Hasan",
    total: "৳670",
    status: "Delivered",
  },
];

const foods = [
  {
    name: "Chicken Burger",
    sold: 125,
  },
  {
    name: "Pizza",
    sold: 98,
  },
  {
    name: "Fried Chicken",
    sold: 87,
  },
  {
    name: "Beef Kacchi",
    sold: 75,
  },
];
</script>

<template>
  <main class="space-y-8">
    <!-- Header -->
    <section
      class="rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white"
    >
      <div
        class="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"
      >
        <div>
          <p class="text-sm opacity-90">Welcome Back</p>

          <h1 class="mt-2 text-3xl font-bold">Shanti Food Dashboard</h1>

          <p class="mt-2 text-orange-100">
            Monitor your restaurant performance and customer orders.
          </p>
        </div>

        <button
          class="rounded bg-white px-5 py-3 font-semibold text-orange-600 transition hover:bg-orange-50"
        >
          Add Product
        </button>
      </div>
    </section>

    <section class="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      <div
        v-for="item in stats"
        :key="item.title"
        class="rounded-2xl border border-gray-100 bg-white p-6"
      >
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm text-gray-500">
              {{ item.title }}
            </p>

            <h2 class="mt-2 text-3xl font-bold text-gray-900">
              {{ item.value }}
            </h2>
          </div>

          <div
            :class="item.color"
            class="flex h-14 w-14 items-center justify-center rounded-2xl"
          >
            <UIcon :name="item.icon" class="h-7 w-7" />
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-6 xl:grid-cols-3">
      <div
        class="overflow-hidden rounded-2xl border border-border bg-white xl:col-span-2"
      >
        <div class="border-b border-border px-6 py-5">
          <h2 class="text-lg font-semibold">Recent Orders</h2>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-sm font-semibold">Order</th>
                <th class="px-6 py-3 text-left text-sm font-semibold">
                  Customer
                </th>
                <th class="px-6 py-3 text-left text-sm font-semibold">Total</th>
                <th class="px-6 py-3 text-left text-sm font-semibold">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="order in orders"
                :key="order.id"
                class="border-t border-border"
              >
                <td class="px-6 py-4 font-medium">
                  {{ order.id }}
                </td>

                <td class="px-6 py-4">
                  {{ order.customer }}
                </td>

                <td class="px-6 py-4">
                  {{ order.total }}
                </td>

                <td class="px-6 py-4">
                  <span
                    class="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700"
                  >
                    {{ order.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="space-y-6">
        <div class="rounded-2xl border border-border bg-white p-6">
          <h2 class="mb-5 text-lg font-semibold">Popular Foods</h2>

          <div
            v-for="food in foods"
            :key="food.name"
            class="flex items-center justify-between border-b border-border py-3 last:border-none"
          >
            <div>
              <h3 class="font-medium">
                {{ food.name }}
              </h3>

              <p class="text-sm text-gray-500">{{ food.sold }} Sold</p>
            </div>
            <UIcon name="i-lucide-chef-hat" class="h-6 w-6 text-orange-500" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
