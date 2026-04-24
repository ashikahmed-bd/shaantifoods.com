<script setup></script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              Checkout
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              delivery & payment info
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Checkout', to: '/checkout' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#faf7f2] py-10">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid gap-6 lg:grid-cols-[1fr_395px]">
          <!-- Billing Details -->
          <div class="overflow-hidden rounded-lg bg-white">
            <h3 class="bg-[#f4efe6] px-9 py-3 text-lg font-bold">
              Billing details
            </h3>

            <form class="p-9">
              <div class="grid gap-5 sm:grid-cols-2">
                <div>
                  <label class="mb-4 block font-medium">
                    First Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    class="h-11 w-full rounded bg-[#faf7f2] px-6 text-sm outline-none"
                  />
                </div>

                <div>
                  <label class="mb-4 block font-medium">
                    Last Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    class="h-11 w-full rounded bg-[#faf7f2] px-6 text-sm outline-none"
                  />
                </div>

                <div class="sm:col-span-2">
                  <label class="mb-4 block font-medium">
                    Country <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type Your Country"
                    class="h-11 w-full rounded bg-[#faf7f2] px-6 text-sm outline-none"
                  />
                </div>

                <div>
                  <label class="mb-4 block font-medium">
                    Street address <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    class="h-11 w-full rounded bg-[#faf7f2] px-6 text-sm outline-none"
                  />
                </div>

                <div>
                  <label class="mb-4 block font-medium">
                    Permanent address <span class="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Address"
                    class="h-11 w-full rounded bg-[#faf7f2] px-6 text-sm outline-none"
                  />
                </div>
              </div>
            </form>
          </div>

          <!-- Your Order -->
          <div class="overflow-hidden rounded-lg bg-white">
            <h3 class="bg-[#f4efe6] px-6 py-3 text-lg font-bold">Your order</h3>

            <!-- Product -->
            <div class="flex gap-4 border-b border-border p-6">
              <img
                src="/images/products/cart.png"
                alt="product"
                class="size-14 object-contain"
              />

              <div>
                <h4 class="font-bold">All Season Gulliver Pizza</h4>
                <p class="mt-2 text-xs text-gray-600">Select Size: Large</p>
                <p class="mt-1 text-xs text-gray-600">
                  Select Crust: Double Crust
                </p>
              </div>
            </div>

            <!-- Price -->
            <div class="border-b border-border p-6">
              <div class="mb-4 flex items-center justify-between">
                <span class="font-semibold text-gray-600">Subtotal</span>
                <span class="font-semibold">$50.00</span>
              </div>

              <div class="flex items-center justify-between text-red-600">
                <span class="font-bold">Total</span>
                <span class="font-semibold">$50.00</span>
              </div>
            </div>

            <!-- Payments -->
            <div class="p-6">
              <h4 class="mb-5 font-bold text-gray-600">Check payments</h4>

              <div class="overflow-hidden rounded border border-border">
                <label class="flex cursor-pointer items-start gap-4 p-4">
                  <input
                    type="radio"
                    name="payment"
                    class="mt-2 size-5 accent-accent"
                  />

                  <div class="flex-1">
                    <div class="mb-1 flex items-center justify-between gap-3">
                      <span class="font-bold">PayPal</span>
                      <img
                        src="/images/paypal.png"
                        alt="paypal"
                        class="h-4 object-contain"
                      />
                    </div>
                    <p class="text-xs leading-relaxed text-gray-500">
                      Pay easily, fast and secure with PayPal.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              class="w-full bg-yellow-400 py-5 font-bold uppercase hover:bg-yellow-500 transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
