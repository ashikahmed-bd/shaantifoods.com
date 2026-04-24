<script setup>
import BaseButton from "~/components/BaseButton.vue";
import BaseTextarea from "~/components/BaseTextarea.vue";
</script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              Contact with Us
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              Contact
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'Contact', to: '/contact' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-10 items-start">
          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="text-accent text-2xl">
                <UIcon name="i-lucide-map-pin" class="size-6" />
              </div>
              <p class="text-body">
                4920 Trails End Road Ft <br />
                United States, FL 33311
              </p>
            </div>

            <div class="flex items-start gap-4">
              <div class="text-accent text-2xl">
                <UIcon name="i-lucide-mail-open" class="size-6" />
              </div>
              <p class="text-body">ordernow@foodka.com</p>
            </div>

            <div class="flex items-start gap-4">
              <div class="text-accent text-2xl">
                <UIcon name="i-lucide-phone-incoming" class="size-6" />
              </div>
              <p class="text-body">+997 509 153 849</p>
            </div>

            <p class="text-body leading-relaxed pt-4">
              We’re an award-winning creative design studio with a small team
              and big ideas. We pour passion into projects big and small,
              providing our expert clients with solutions.
            </p>
          </div>

          <div>
            <form class="space-y-5">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <BaseInput label="Your Name" placeholder="Enter full name" />
                <BaseInput
                  label="Your Email"
                  placeholder="Enter email address"
                />
              </div>

              <BaseTextarea label="Message" placeholder="Message..." rows="6" />

              <BaseButton>Submit Message</BaseButton>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <!-- Map -->
        <div class="w-full rounded-2xl overflow-hidden">
          <iframe
            v-if="false"
            src="https://www.google.com/maps?q=4920+Trails+End+Road+Ft+United+States+FL+33311&output=embed"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
