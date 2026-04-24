<script setup></script>

<template>
  <main>
    <section class="py-16 bg-primary">
      <div class="container mx-auto px-4">
        <div class="flex justify-center">
          <div class="w-full text-center">
            <h3 class="font-script text-xl md:text-3xl text-accent mb-2">
              About us
            </h3>

            <h1
              class="font-heading tracking-widest text-4xl md:text-6xl font-bold uppercase text-white mb-4"
            >
              Who are we?
            </h1>

            <breadcrumb
              :items="[
                { label: 'Home', to: '/' },
                { label: 'About', to: '/about' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-10 items-center">
          <div class="flex justify-center lg:justify-end">
            <img
              src="/images/about/2.png"
              alt="about"
              class="w-full max-w-md lg:max-w-full"
            />
          </div>

          <div class="text-center lg:text-left">
            <h3
              class="font-script text-sm font-semibold uppercase text-primary mb-2"
            >
              Our History
            </h3>

            <h2 class="text-3xl sm:text-4xl font-bold mb-4">
              Origins of the restaurant
            </h2>

            <div class="space-y-4">
              <p class="text-muted-foreground leading-relaxed">
                Sharing knowledge and skills is what we do. With passion. That’s
                why the Alimentarium organises daily culinary workshops and
                classes led by qualified chefs. A neque malesuada in tortor eget
                justo mauris nec dolor. Consequat risus vitae, ac ac et
                preparation.
              </p>

              <p class="text-muted-foreground leading-relaxed">
                Nunc quam nibh diam in eget. Tortor amet, eleifend sed viverra
                ac eu porta netus pulvinar. Quis sem donec pharetra viverra
                consectetur aliquam, platea egestas. Egestas quis fringilla
                cursus nullam. Nisl vulputate aliquam odio massa mattis.
              </p>

              <p class="text-muted-foreground leading-relaxed">
                Nunc quam nibh diam in eget. Tortor amet, eleifend sed viverra
                ac eu porta netus pulvinar. Quis sem donec pharetra viverra
                consectetur aliquam, platea egestas. Egestas quis fringilla
                cursus nullam. Nisl vulputate aliquam odio massa mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="flex justify-center">
            <img
              src="/images/about/1.png"
              alt="about"
              class="w-full max-w-md lg:max-w-full"
            />
          </div>

          <!-- Content -->
          <div>
            <div class="text-center lg:text-left mb-8">
              <h3 class="text-sm font-semibold uppercase text-primary mb-2">
                Why choose us
              </h3>

              <h2 class="text-3xl sm:text-4xl font-bold mb-4">
                Why we are the best
              </h2>

              <p class="text-muted-foreground leading-relaxed">
                A, blandit euismod ullamcorper vestibulum enim habitasse.
                Ultrices tincidunt scelerisque elit enim. A neque malesuada in
                tortor eget justo mauris nec dolor. Consequat risus vitae, ac ac
                et preparation. He wanted to serve burgers, fries and beverages
                that tasted.
              </p>
            </div>

            <!-- Features -->
            <div class="grid sm:grid-cols-2 gap-4">
              <div
                class="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary transition"
              >
                <img src="/img/icon/1.png" alt="" class="size-10" />
                <span class="font-medium">Fresh food</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary transition"
              >
                <img src="/img/icon/2.png" alt="" class="size-10" />
                <span class="font-medium">Fast Delivery</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary transition"
              >
                <img src="/img/icon/3.png" alt="" class="size-10" />
                <span class="font-medium">Quality Maintain</span>
              </div>

              <div
                class="flex items-center gap-3 p-4 rounded-xl border border-border hover:border-primary transition"
              >
                <img src="/img/icon/4.png" alt="" class="size-10" />
                <span class="font-medium">24/7 Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
