<script setup>
import Breadcrumb from "~/components/Breadcrumb.vue";
</script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              Choose your items
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              OUR MENU
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Menu', to: '/menu' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article
            v-for="item in 6"
            class="w-full bg-white rounded-2xl overflow-hidden"
          >
            <div class="relative">
              <button
                class="cursor-pointer absolute top-5 right-5 text-body hover:text-primary transition"
              >
                <UIcon name="i-lucide-heart" class="size-6" />
              </button>

              <img
                src="/images/products/1.jpg"
                alt="Maxican Pizza"
                class="w-full h-auto object-contain"
              />
            </div>

            <div class="px-6 py-4">
              <h3 class="text-xl font-bold text-gray-900 mb-3">
                Maxican Pizza Test Better
              </h3>

              <div class="flex items-center justify-between mb-7">
                <div class="flex items-center gap-2">
                  <span class="text-sm font-semibold text-gray-700">4.9</span>

                  <div class="flex items-center text-red-500 text-lg">
                    ★★★★★
                  </div>

                  <span class="text-sm font-semibold text-gray-700">
                    (928)
                  </span>
                </div>
                <h4 class="text-xl font-bold text-gray-900">$29.00</h4>
              </div>

              <button
                class="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-t-3xl transition"
              >
                CHOOSE OPTIONS
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
