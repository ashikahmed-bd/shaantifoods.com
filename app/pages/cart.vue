<script setup>
const goToCheckout = () => {
  navigateTo("/checkout");
};
</script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              Cart
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              Check your box
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Cart', to: '/cart' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#faf7f2] py-10">
      <div class="max-w-7xl mx-auto px-4">
        <!-- Cart Table -->
        <div class="overflow-x-auto rounded-xl bg-white">
          <table class="w-full min-w-[900px]">
            <thead class="bg-[#f4efe6]">
              <tr class="text-left">
                <th class="p-5 text-center text-xl font-bold" colspan="2">
                  Product
                </th>
                <th class="p-5 text-center text-xl font-bold">Price</th>
                <th class="p-5 text-center text-xl font-bold">Quantity</th>
                <th class="p-5 text-center text-xl font-bold">Total Price</th>
              </tr>
            </thead>

            <tbody>
              <tr class="border-t border-border">
                <td class="p-6 w-12 text-center">
                  <button class="text-2xl hover:text-primary cursor-pointer">
                    <UIcon name="i-lucide-x" class="size-5" />
                  </button>
                </td>

                <td class="p-6">
                  <div class="flex items-center gap-6">
                    <img
                      src="/images/products/cart.png"
                      alt="product"
                      class="w-28 h-28 object-contain"
                    />

                    <div>
                      <h3 class="text-xl font-bold mb-3">
                        All Season Gulliver Pizza
                      </h3>
                      <p class="text-sm text-gray-600 mb-2">
                        Select Size: Large
                      </p>
                      <p class="text-sm text-gray-600">
                        Select Crust: Double Crust
                      </p>
                    </div>
                  </div>
                </td>

                <td class="p-6 text-center text-2xl font-medium">$50.00</td>

                <td class="p-6">
                  <div
                    class="mx-auto flex w-36 items-center justify-between rounded-md bg-background px-4 py-3"
                  >
                    <button class="text-xl">-</button>
                    <span class="text-lg">1</span>
                    <button class="text-xl">+</button>
                  </div>
                </td>

                <td class="p-6 text-center text-2xl font-medium">$40.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <!-- Coupon + Update -->
          <div
            class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div class="flex flex-col gap-4 sm:flex-row">
              <input
                type="text"
                placeholder="Coupon Code"
                class="h-14 w-full sm:w-56 rounded-md bg-white px-6 outline-none"
              />

              <button
                class="h-14 rounded-md bg-accent px-8 font-bold uppercase hover:bg-accent-hover transition"
              >
                Apply Coupon
              </button>
            </div>

            <button
              class="h-14 rounded-md bg-primary px-8 font-bold uppercase text-white hover:bg-primary-hover transition"
            >
              Update Cart
            </button>
          </div>

          <div class="overflow-hidden rounded-xl bg-white">
            <div class="p-8">
              <h3 class="mb-7 text-2xl font-bold">Cart totals</h3>

              <div class="mb-4 flex items-center justify-between">
                <span class="font-semibold text-gray-600">Subtotal</span>
                <span class="text-xl font-medium">$50.00</span>
              </div>

              <div class="flex items-center justify-between text-red-600">
                <span class="text-xl font-bold">Total</span>
                <span class="text-xl font-medium">$50.00</span>
              </div>
            </div>

            <button
              @click="goToCheckout"
              class="w-full bg-accent py-5 font-bold uppercase hover:bg-accent-hover transition"
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
