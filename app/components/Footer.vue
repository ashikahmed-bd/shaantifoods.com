<script setup>
const year = new Date().getFullYear()

const socialLinks = [
  { icon: 'i-simple-icons-facebook', url: '#' },
  { icon: 'i-simple-icons-instagram', url: '#' },
  { icon: 'i-simple-icons-linkedin', url: '#' },
  { icon: 'i-simple-icons-youtube', url: '#' }
]
</script>

<template>
  <footer class="bg-gradient-to-br from-green-950 via-green-900 to-green-950 text-white">
    <div class="container mx-auto px-6 py-14">

      <!-- Main Grid -->
      <div class="grid gap-12 lg:grid-cols-3">

        <!-- Brand -->
        <div>
          <h2 class="text-3xl font-bold tracking-wide">
            SHAANTI
          </h2>

          <div class="mt-4 h-1 w-20 rounded-full bg-amber-400" />

          <p class="mt-6 max-w-md text-white/80 leading-7">
            Shaanti Foods (BD) Limited is committed to delivering premium mango products worldwide with uncompromising
            quality, food safety, and customer satisfaction.
          </p>

          <!-- Social -->
          <div class="mt-8 flex items-center gap-4">
            <a v-for="social in socialLinks" :key="social.icon" :href="social.url" target="_blank"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 transition hover:border-amber-400 hover:bg-amber-400 hover:text-green-950">
              <UIcon :name="social.icon" class="h-5 w-5" />
            </a>
          </div>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="mb-5 text-lg font-semibold">
            Contact Information
          </h3>

          <div class="space-y-5 text-white/80">

            <div class="flex gap-3">
              <UIcon name="i-lucide-map-pin" class="mt-1 h-5 w-5 text-amber-400" />
              <span>
                Jogitala, Bason, Gazipur Sadar<br>
                Gazipur-1704, Bangladesh
              </span>
            </div>

            <div class="flex gap-3">
              <UIcon name="i-lucide-mail" class="h-5 w-5 text-amber-400" />
              <span>shaantifoodsbd@gmail.com</span>
            </div>

            <div class="flex gap-3">
              <UIcon name="i-lucide-globe" class="h-5 w-5 text-amber-400" />
              <span>www.shaantifoods.com</span>
            </div>

          </div>
        </div>

        <!-- Company Note / CTA -->
        <div>
          <h3 class="mb-5 text-lg font-semibold">
            About Our Commitment
          </h3>

          <p class="text-white/80 leading-7">
            We ensure global export standards, hygienic processing, and sustainable sourcing practices. Every product
            reflects our dedication to quality and trust.
          </p>

          <div class="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
            <p class="text-sm text-white/70">
              Certified & export-ready food processing company serving international markets.
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 lg:flex-row">
        <p>
          © {{ year }} Shaanti Foods (BD) Limited. All Rights Reserved.
        </p>

        <div class="flex gap-6">
          <NuxtLink to="/privacy-policy" class="hover:text-amber-400">
            Privacy Policy
          </NuxtLink>

          <NuxtLink to="/terms" class="hover:text-amber-400">
            Terms & Conditions
          </NuxtLink>
        </div>
      </div>

    </div>
  </footer>
</template>