<script setup></script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              Blog
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              Food Blog
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Blog', to: '/blog' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <article
              v-for="item in 4"
              class="relative rounded-2xl overflow-hidden group"
            >
              <img
                src="/images/posts/1.png"
                class="w-full aspect-auto object-cover"
              />

              <div
                class="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-5 shadow"
              >
                <div class="flex items-center gap-4 text-sm text-gray-500 mb-2">
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-calendar" class="size-5" />
                    <span>July 14, 2021</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <UIcon name="i-lucide-tag" class="size-5" />
                    <span>Burger</span>
                  </div>
                </div>

                <h3 class="text-xl font-semibold text-primary font-sans">
                  Greek yogurt breakfast bowls with toppings
                </h3>
              </div>
            </article>
          </div>

          <div class="space-y-6">
            <div
              class="bg-white rounded-xl p-4 flex items-center justify-between"
            >
              <input
                type="text"
                placeholder="Search your items"
                class="w-full outline-none text-gray-600"
              />
              <UIcon name="i-lucide-search" class="size-5" />
            </div>

            <div class="bg-white rounded-xl p-5">
              <h3 class="text-lg font-bold mb-4">Recent Post</h3>

              <div class="space-y-4">
                <article v-for="item in 5" class="flex gap-2.5 items-center">
                  <img
                    src="/images/posts/2.png"
                    class="w-14 h-14 rounded object-cover"
                  />
                  <p class="text-base text-dark">
                    Greek yogurt breakfast bowls with toppings
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
