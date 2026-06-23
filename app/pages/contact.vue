<script setup>

</script>

<template>
  <main class="space-y-6">
    <section class="relative h-full overflow-hidden py-10">
      <img src="/images//banners/about.png" alt="" class="absolute inset-0 h-full w-full object-cover" />

      <div class="container mx-auto px-4  relative z-10 h-full flex flex-col justify-center text-white">
        <div class="flex items-center gap-2 text-sm mb-4">
          <span>Home</span>
          <span>›</span>
          <span>Contact Us</span>
        </div>

        <h1 class="text-4xl lg:text-6xl font-bold mb-4">
          We will reply within 24 hours.
        </h1>

        <p class="max-w-xl text-lg leading-relaxed">
          We are ready to hear from you. Send us an inquiry or
          request a sample.
        </p>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4">
      <div class="bg-white rounded-xl border border-gray-100 p-6">
        <h2 class="text-xl font-bold text-emerald-900 border-b-2 border-orange-500 w-fit pb-1 mb-6">
          Send Us an Inquiry
        </h2>

        <form class="space-y-4">
          <div class="flex flex-col md:flex-row md:items-center">
            <label class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1 md:mb-0">
              <i class="fa-solid fa-building text-emerald-800 w-5"></i>
              Company Name <span class="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Enter your company name"
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm">
          </div>

          <div class="flex flex-col md:flex-row md:items-center">
            <label class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1 md:mb-0">
              <i class="fa-solid fa-user text-emerald-800 w-5"></i>
              Contact Person Name <span class="text-red-500">*</span>
            </label>
            <input type="text" placeholder="Enter contact person name"
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm">
          </div>

          <div class="flex flex-col md:flex-row md:items-center">
            <label class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1 md:mb-0">
              <i class="fa-solid fa-envelope text-emerald-800 w-5"></i>
              Email Address <span class="text-red-500">*</span>
            </label>
            <input type="email" placeholder="Enter your email address"
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm">
          </div>

          <div class="flex flex-col md:flex-row md:items-center">
            <label class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1 md:mb-0">
              <i class="fa-solid fa-phone text-emerald-800 w-5"></i>
              Phone Number
            </label>
            <input type="tel" placeholder="Enter your phone number"
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm">
          </div>

          <div class="flex flex-col md:flex-row md:items-center">
            <label class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mb-1 md:mb-0">
              <i class="fa-solid fa-earth-americas text-emerald-800 w-5"></i>
              Country / Region <span class="text-red-500">*</span>
            </label>
            <select
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm text-gray-500 bg-white">
              <option>Select your country / region</option>
              <option>Bangladesh</option>
              <option>United States</option>
            </select>
          </div>

          <div class="flex flex-col md:flex-row md:items-start">
            <label
              class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mt-1 mb-2 md:mb-0">
              <i class="fa-solid fa-tag text-emerald-800 w-5"></i>
              Products of Interest <span class="text-red-500">*</span>
            </label>
            <div class="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="accent-emerald-700 h-4 w-4 rounded border-gray-300"> Dry Mango
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="accent-emerald-700 h-4 w-4 rounded border-gray-300"> Freeze-dried Mango
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" class="accent-emerald-700 h-4 w-4 rounded border-gray-300"> Mango Puree
              </label>
              <label class="flex items-center gap-2 cursor-pointer col-span-2 md:col-span-3">
                <input type="checkbox" class="accent-emerald-700 h-4 w-4 rounded border-gray-300"> Other
              </label>
            </div>
          </div>

          <div class="flex flex-col md:flex-row md:items-start">
            <label
              class="w-full md:w-1/3 text-sm font-semibold text-gray-700 flex items-center gap-2 mt-2 mb-1 md:mb-0">
              <i class="fa-solid fa-comment-dots text-emerald-800 w-5"></i>
              Message <span class="text-red-500">*</span>
            </label>
            <textarea rows="4" placeholder="Please tell us about your inquiry..."
              class="w-full md:w-2/3 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-emerald-600 text-sm"></textarea>
          </div>

          <div class="flex justify-center pt-4">
            <button type="submit"
              class="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-lg text-sm flex items-center gap-2 shadow transition-colors uppercase tracking-wide w-full md:w-auto justify-center">
              <i class="fa-solid fa-paper-plane"></i> Submit Inquiry
            </button>
          </div>
        </form>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4">
      <div class="rounded-xl border border-gray-100 bg-white p-6">
        <h2 class="mb-6 w-fit border-b-2 border-orange-500 pb-1 text-lg font-bold text-emerald-900">
          Other Ways to Contact Us
        </h2>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <!-- WhatsApp -->
          <div
            class="flex flex-col items-center justify-between rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 text-center">
            <div class="flex flex-col items-center">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 text-white">
                <UIcon name="i-simple-icons-whatsapp" class="h-6 w-6" />
              </div>

              <h3 class="text-sm font-bold text-gray-800">WhatsApp</h3>
              <p class="mt-1 text-xs text-gray-500">
                Chat with us directly on WhatsApp.
              </p>
            </div>

            <button
              class="mt-4 flex w-full items-center justify-center gap-1 rounded-lg border border-emerald-800 px-4 py-2 text-xs font-semibold text-emerald-800 transition-colors hover:bg-emerald-800 hover:text-white">
              CHAT ON WHATSAPP
              <UIcon name="i-lucide-arrow-right" class="h-3 w-3" />
            </button>
          </div>

          <!-- Email -->
          <div
            class="flex flex-col items-center justify-between rounded-xl border border-orange-100 bg-orange-50/40 p-4 text-center">
            <div class="flex flex-col items-center">
              <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white">
                <UIcon name="i-lucide-mail" class="h-6 w-6" />
              </div>

              <h3 class="text-sm font-bold text-gray-800">Email Us</h3>
              <p class="mt-1 text-xs text-gray-500">
                Send us an email anytime.
              </p>
            </div>

            <button
              class="mt-4 flex w-full items-center justify-center gap-1 rounded-lg border border-orange-500 px-4 py-2 text-xs font-semibold text-orange-500 transition-colors hover:bg-orange-500 hover:text-white">
              SEND EMAIL
              <UIcon name="i-lucide-arrow-right" class="h-3 w-3" />
            </button>
          </div>

          <!-- Call -->
          <div
            class="flex flex-col items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50/40 p-4 text-center">
            <div class="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-900 text-white">
              <UIcon name="i-lucide-phone" class="h-6 w-6" />
            </div>

            <h3 class="text-sm font-bold text-gray-800">Call Us</h3>

            <p class="mt-1 text-[11px] leading-tight text-gray-500">
              Mon - Fri (9:00 AM - 6:00 PM)<br />
              GMT+6
            </p>

            <a href="tel:+8801712345678" class="mt-4 text-sm font-bold text-emerald-900 hover:underline">
              +880 1712 345 678
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <div
        class="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 flex items-center justify-between text-emerald-800 text-sm">
        <div class="flex items-center gap-3">
          <i class="fa-solid fa-headset text-xl text-emerald-700"></i>
          <div>
            <p class="font-bold">We will reply within 24 hours.</p>
            <p class="text-xs text-gray-500">Your inquiry is important to us.</p>
          </div>
        </div>
        <i class="fa-solid fa-circle-check text-emerald-700 text-xl"></i>
      </div>

      <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 class="text-lg font-bold text-emerald-900 border-b-2 border-orange-500 w-fit pb-1 mb-4">
          Our Location
        </h2>

        <div class="flex items-start gap-2 text-sm text-gray-700 mb-4">
          <i class="fa-solid fa-location-dot text-orange-500 text-base mt-0.5"></i>
          <p class="font-medium leading-tight">
            Jogitola, Bason, Gazipur Sadar,<br>
            Gazipur-1704, Bangladesh
          </p>
        </div>

        <div class="w-full h-64 rounded-xl overflow-hidden relative shadow-inner bg-gray-200">
          <div class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('https://maps.googleapis.com/maps/api/staticmap?center=24.0000,90.4167&zoom=14&size=600x300&sensor=false');">
            <div
              class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full bg-white px-3 py-1.5 rounded shadow text-xs font-semibold border border-gray-200 whitespace-nowrap text-center">
              <span class="text-red-600 font-bold">Shaanti Foods (BD) Limited</span><br>
              <span class="text-[10px] text-gray-500">Jogitola, Bason, Gazipur Sadar</span>
              <div
                class="w-3 h-3 bg-white transform rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 border-r border-b border-gray-200">
              </div>
            </div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <i class="fa-solid fa-location-pin text-red-600 text-3xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
