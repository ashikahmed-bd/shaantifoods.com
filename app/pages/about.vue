<script setup></script>

<template>
  <main>
    <section class="relative h-full overflow-hidden py-10">
      <img src="/images//banners/about.png" alt="" class="absolute inset-0 h-full w-full object-cover" />

      <div class="container mx-auto px-4  relative z-10 h-full flex flex-col justify-center text-white">
        <div class="flex items-center gap-2 text-sm mb-4">
          <span>Home</span>
          <span>›</span>
          <span>About Us</span>
        </div>

        <h1 class="text-4xl lg:text-6xl font-bold mb-4">
          About Shaanti Foods
        </h1>

        <p class="max-w-xl text-lg leading-relaxed">
          From Bangladesh to the world, delivering premium mango products
          with trust and care.
        </p>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12 space-y-10">
      <div class="grid gap-8 rounded-3xl bg-white p-6 lg:grid-cols-2 lg:p-8">
        <div>
          <img src="/images/about/founder.jpg" alt="Mr. Katsushi Furusawa" class="w-full rounded-2xl object-cover" />
        </div>

        <div class="flex flex-col justify-center">
          <span class="font-semibold uppercase tracking-wider text-green-700">
            Founder & Chairman
          </span>

          <h2 class="mt-2 mb-6 text-4xl font-bold text-green-900">
            Mr. Katsushi Furusawa
          </h2>

          <div class="space-y-5 text-lg leading-8 text-gray-600">
            <p>
              Mr. Katsushi Furusawa founded Shaanti Foods (BD) Limited with a clear
              vision: to showcase the rich agricultural heritage of Bangladesh and
              deliver premium-quality mango products to consumers around the world.
            </p>

            <p>
              Guided by a commitment to excellence, food safety, and sustainable
              sourcing, he has built a company that combines international quality
              standards with the expertise of local farmers and producers.
            </p>

            <p>
              Under his leadership, Shaanti Foods continues to strengthen its
              reputation as a trusted manufacturer and exporter, creating value for
              customers, business partners, and farming communities while promoting
              Bangladeshi products in global markets.
            </p>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 class="text-4xl font-bold text-green-900 mb-4">
            Our Story
          </h2>

          <div class="w-16 h-1 bg-green-700 mb-6"></div>

          <p class="text-gray-700 leading-8">
            Shaanti Foods began with a simple belief—Bangladesh produces
            some of the world's best mangoes. Our journey started in
            Rajshahi, the heart of mango cultivation.
          </p>

          <p class="text-gray-700 leading-8 mt-4">
            By combining local expertise with modern processing technology,
            we create premium mango products that meet international
            standards.
          </p>
        </div>

        <div>
          <img src="/images/about/mango-farm.jpg" alt="" class="rounded-3xl w-full" />
        </div>
      </div>

      <div class="grid gap-6 lg:grid-cols-2">
        <UCard class="h-full">
          <div class="flex items-start gap-5">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
              <UIcon name="i-heroicons-flag" class="h-7 w-7" />
            </div>

            <div>
              <h3 class="mb-4 text-2xl font-bold text-highlighted">
                Our Mission
              </h3>

              <ul class="space-y-3 text-muted">
                <li class="flex items-start gap-2">
                  <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-primary" />
                  <span>Deliver premium-quality mango and food products with consistent excellence.</span>
                </li>

                <li class="flex items-start gap-2">
                  <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-primary" />
                  <span>Maintain the highest standards of food safety, hygiene, and quality assurance.</span>
                </li>

                <li class="flex items-start gap-2">
                  <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-primary" />
                  <span>Empower local farmers and contribute to sustainable agricultural development.</span>
                </li>

                <li class="flex items-start gap-2">
                  <UIcon name="i-heroicons-check-circle" class="mt-0.5 h-5 w-5 text-primary" />
                  <span>Build long-term relationships through trust, transparency, and customer satisfaction.</span>
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <UCard class="h-full">
          <div class="flex items-start gap-5">
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-white">
              <UIcon name="i-heroicons-eye" class="h-7 w-7" />
            </div>

            <div>
              <h3 class="mb-4 text-2xl font-bold text-highlighted">
                Our Vision
              </h3>

              <p class="leading-8 text-muted">
                To establish Shanti Foods as a globally recognized and trusted
                Bangladeshi brand, delivering premium mango-based and processed food
                products while promoting innovation, sustainability, and excellence
                in every market we serve.
              </p>
            </div>
          </div>
        </UCard>
      </div>
    </section>

    <section class="container mx-auto px-4 py-6 bg-white">
      <div class="rounded-3xl ">
        <div class="mb-10 text-center">
          <span class="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Partnership Network
          </span>

          <h2 class="mt-4 text-3xl font-bold text-green-900 md:text-4xl">
            Our Local Partners
          </h2>

          <p class="mx-auto mt-4 max-w-2xl text-gray-600">
            Building strong relationships with local farmers and agricultural
            communities to deliver premium-quality mango products.
          </p>
        </div>

        <div class="grid items-center gap-10 lg:grid-cols-2">
          <div class="overflow-hidden rounded-3xl">
            <img src="/images/about/partners.jpg" alt="Local Farmers and Partners"
              class="h-auto w-full object-cover transition duration-500 hover:scale-105" />
          </div>

          <div>
            <div class="rounded-3xl border border-green-100 bg-green-50/50 p-8">
              <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-700 text-white">
                <UIcon name="i-heroicons-user-group" class="h-7 w-7" />
              </div>

              <h3 class="mb-4 text-2xl font-semibold text-green-900">
                Growing Together
              </h3>

              <p class="leading-8 text-gray-700">
                We collaborate closely with experienced farmers and trusted local
                partners across Rajshahi and surrounding regions. Through these
                partnerships, we ensure access to the finest mango varieties while
                promoting ethical farming practices, fair trade principles, and
                sustainable economic growth for local communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto px-4 py-12">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <span class="inline-flex rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
            Company Profile
          </span>

          <h2 class="mt-4 text-3xl font-bold text-green-900 md:text-4xl">
            Company Information
          </h2>

          <p class="mx-auto mt-4 max-w-2xl text-gray-600">
            Corporate details and official information about Shaanti Foods (BD)
            Limited.
          </p>
        </div>

        <div class="overflow-hidden rounded-3xl border border-gray-200 bg-white">
          <div class="divide-y divide-gray-100">
            <div class="grid gap-2 p-6 md:grid-cols-[240px_1fr]">
              <div class="font-semibold text-green-900">
                Company Name
              </div>
              <div class="text-gray-700">
                Shaanti Foods (BD) Limited
              </div>
            </div>

            <div class="grid gap-2 p-6 md:grid-cols-[240px_1fr]">
              <div class="font-semibold text-green-900">
                Registration No.
              </div>
              <div class="text-gray-700">
                C-209516/2026
              </div>
            </div>

            <div class="grid gap-2 p-6 md:grid-cols-[240px_1fr]">
              <div class="font-semibold text-green-900">
                Factory Address
              </div>
              <div class="text-gray-700 leading-7">
                Jogitala, Bason, Gazipur Sadar,<br>
                Gazipur-1704, Bangladesh
              </div>
            </div>

            <div class="grid gap-2 p-6 md:grid-cols-[240px_1fr]">
              <div class="font-semibold text-green-900">
                Website
              </div>
              <div>
                <a href="https://www.shaantifoods.com" target="_blank"
                  class="font-medium text-orange-500 hover:text-orange-600">
                  www.shaantifoods.com
                </a>
              </div>
            </div>

            <div class="grid gap-2 p-6 md:grid-cols-[240px_1fr]">
              <div class="font-semibold text-green-900">
                Email
              </div>
              <div>
                <a href="mailto:shaantifoodsbd@gmail.com" class="font-medium text-orange-500 hover:text-orange-600">
                  shaantifoodsbd@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- CTA -->
    <section
      class="container mx-auto px-4 py-8 relative overflow-hidden rounded-xl bg-gradient-to-br from-green-950 via-green-900 to-green-700">
      <div class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div class="max-w-2xl">
          <span
            class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-green-100">
            Partnership Opportunity
          </span>

          <h3 class="mt-4 text-3xl font-bold tracking-tight text-white lg:text-5xl">
            Let's Grow Together
          </h3>

          <p class="mt-4 text-lg leading-8 text-green-100">
            Partner with Shaanti Foods to access premium-quality mango products,
            reliable supply chains, and long-term business opportunities built on
            trust, quality, and sustainability.
          </p>
        </div>

        <div class="flex shrink-0">
          <UButton size="xl" color="warning" trailing-icon="i-heroicons-arrow-right"
            class="rounded-2xl px-8 py-4 font-semibold">
            Request a Meeting
          </UButton>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped></style>
