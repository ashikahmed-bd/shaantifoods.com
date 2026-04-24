<script setup></script>

<template>
  <main class="bg-white">
    <section class="max-w-7xl mx-auto px-4 py-4">
      <div
        class="relative bg-primary bg-[url('/images/banner/hero.png')] bg-cover bg-center bg-no-repeat overflow-hidden rounded-2xl py-12"
      >
        <div class="flex justify-center">
          <div class="w-full max-w-2xl self-center">
            <div class="text-center">
              <h3 class="text-accent text-xl md:text-3xl font-semibold mb-2">
                Do not miss it!
              </h3>

              <h1
                class="text-5xl md:text-7xl text-white tracking-widest uppercase font-bold"
              >
                Pizza tastes better <br />
                than skinny feels.
              </h1>

              <a
                href="#"
                class="inline-block mt-6 bg-accent text-dark px-6 py-3 rounded-full font-semibold hover:opacity-90 transition"
              >
                GET IT NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <article
            class="group bg-primary relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src="/img/offer/1.png"
              alt="Food"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div class="absolute bottom-4 right-4 z-10">
              <div
                class="flex flex-col items-center justify-center size-48 rounded-full bg-yellow-400 text-black font-bold shadow-xl ring-4 ring-white"
              >
                <span class="text-3xl font-script">BUY 2 </span>
                <span class="text-6xl font-sans italic font-extrabold"
                  >GET 1
                </span>

                <span class="text-3xl text-highlight italic font-sans"
                  >FREE</span
                >
              </div>
            </div>

            <div class="relative p-4 md:p-10">
              <h2 class="text-7xl text-white font-semibold font-serif">
                Special Delicious
              </h2>
              <h5 class="text-2xl text-white font-semibold font-sans">
                Mexican Pizza Tastes Better
              </h5>
              <div class="py-8">
                <a
                  class="bg-white px-6 py-2.5 rounded-full text-primary"
                  href="#"
                >
                  ORDER NOW
                </a>
              </div>
            </div>
          </article>

          <div class="grid gap-6">
            <article
              class="relative bg-dark rounded-xl overflow-hidden flex items-stretch px-6 py-8"
            >
              <div class="absolute left-0 transition">
                <img
                  src="/images/offer/2.png"
                  class="w-full object-contain hover:"
                  alt="Burger"
                />
              </div>
              <div class="max-w-md z-10 relative">
                <h3
                  class="text-white text-3xl md:text-4xl font-extrabold leading-tight"
                >
                  Enjoy Our <br />
                  Delicious Item
                </h3>

                <button
                  class="mt-6 bg-white text-primary rounded-full px-6 py-3 text-sm font-bold hover:bg-gray-200 transition"
                >
                  ORDER NOW
                </button>
              </div>
            </article>
            <article
              class="relative bg-yellow-50 rounded-xl overflow-hidden flex items-stretch px-6 py-8"
            >
              <div class="absolute left-0 transition">
                <img
                  src="/images/offer/3.png"
                  class="w-full object-contain hover:"
                  alt="Burger"
                />
              </div>

              <div class="max-w-md z-10 relative">
                <h3
                  class="text-dark text-3xl md:text-4xl font-extrabold leading-tight"
                >
                  The Fastest In <br />
                  Delivery <span class="text-primary">Food</span>
                </h3>

                <button
                  class="mt-6 bg-white text-primary border border-primary rounded-full px-6 py-3 text-sm font-bold transition"
                >
                  ORDER NOW
                </button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6">
      <div class="max-w-7xl mx-auto px-4">
        <article class="relative bg-accent rounded-lg overflow-hidden">
          <img
            src="/images/offer/4.png"
            class="w-full h-auto object-cover"
            alt="Burger"
          />

          <div
            class="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 text-black"
          >
            <div class="max-w-[70%] sm:max-w-sm md:max-w-md">
              <p
                class="font-script text-lg sm:text-2xl md:text-4xl leading-tight"
              >
                Double Cheese
              </p>

              <h2
                class="text-primary text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none"
              >
                BURGER
              </h2>

              <p
                class="mt-2 sm:mt-3 md:mt-4 font-body text-sm sm:text-lg md:text-2xl leading-snug"
              >
                With Free Coca-Cola. Stay home, we deliver
              </p>
            </div>
          </div>
        </article>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <article
            class="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src="/images/offer/5.png"
              alt="Food"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div class="relative flex h-full flex-col justify-start p-5">
              <h3
                class="text-xl md:text-3xl font-extrabold leading-tight text-yellow-400"
              >
                Enjoy 30% <br />
                CashBack
              </h3>

              <p
                class="mt-2 md:mt-3 text-sm md:text-lg font-semibold text-gray-200"
              >
                Up to $70 on all Bikash
              </p>
            </div>
          </article>
          <article
            class="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src="/images/offer/6.png"
              alt="Food"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div class="relative flex h-full flex-col justify-start p-5">
              <h3 class="text-xl md:text-4xl font-extrabold leading-tight">
                <p class="text-primary">25 EXTRA</p>
                FREE ON KFC
              </h3>

              <p
                class="mt-2 md:mt-3 text-sm md:text-lg font-semibold text-dark"
              >
                Up to $70 on all Bikash
              </p>
            </div>
          </article>
          <article
            class="group relative aspect-square overflow-hidden rounded-xl"
          >
            <img
              src="/images/offer/7.png"
              alt="Food"
              class="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div class="relative flex h-full flex-col justify-start p-5">
              <h5 class="font-script text-yellow-400 text-2xl">Test with</h5>
              <h3
                class="text-xl text-white md:text-4xl font-extrabold leading-tight"
              >
                <p class="text-yellow-400">JAPANESE</p>
                FOOD AT HOME
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
