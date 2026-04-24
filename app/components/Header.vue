<script setup>
const isOpen = ref(false);
</script>

<template>
  <header class="w-full bg-white border-b border-border">
    <nav class="max-w-7xl mx-auto px-4 py-2">
      <div class="flex items-center justify-between gap-4">
        <button
          class="lg:hidden cursor-pointer flex items-center justify-center size-10 rounded-full border border-border"
          @click="isOpen = !isOpen"
        >
          <UIcon
            :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>

        <NuxtLink to="/" class="flex items-center">
          <img src="/logo.svg" alt="Logo" class="h-16" />
        </NuxtLink>

        <ul
          class="hidden lg:flex items-center gap-8 uppercase text-sm font-medium"
        >
          <li><NuxtLink to="/" class="hover:text-primary">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/products" class="hover:text-primary"
              >Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:text-primary">About Us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog" class="hover:text-primary">Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:text-primary"
              >Contact</NuxtLink
            >
          </li>
        </ul>

        <!-- Desktop -->
        <div class="hidden lg:flex items-center gap-5">
          <NuxtLink
            to="/cart"
            class="relative flex items-center justify-center size-11 rounded-full border border-border hover:bg-primary hover:text-white transition"
          >
            <UIcon name="i-lucide-shopping-cart" class="size-5" />
            <span
              class="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white"
            >
              1
            </span>
          </NuxtLink>

          <div class="text-sm font-semibold whitespace-nowrap">$49.50</div>

          <a
            href="tel:+997509153849"
            class="flex items-center gap-3 border-l border-border pl-5 hover:text-primary transition"
          >
            <span
              class="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <UIcon name="i-lucide-headset" class="size-5" />
            </span>

            <div class="leading-tight">
              <p class="text-xs text-muted-foreground">Support</p>
              <p class="text-sm font-semibold whitespace-nowrap">
                +997 509 153 849
              </p>
            </div>
          </a>
        </div>

        <!-- Mobile Cart -->
        <NuxtLink
          to="/cart"
          class="lg:hidden relative flex items-center justify-center size-10 rounded-full border border-border"
        >
          <UIcon name="i-lucide-shopping-cart" class="size-5" />
          <span
            class="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-semibold text-white"
          >
            1
          </span>
        </NuxtLink>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isOpen"
        class="lg:hidden mt-4 rounded-2xl border border-border bg-white p-4 shadow-sm"
      >
        <ul class="flex flex-col gap-4 uppercase text-sm font-medium">
          <li>
            <NuxtLink to="/" class="block hover:text-primary">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" class="block hover:text-primary"
              >Products</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="block hover:text-primary"
              >About Us</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/blog" class="block hover:text-primary"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/contact" class="block hover:text-primary"
              >Contact</NuxtLink
            >
          </li>
        </ul>

        <div class="mt-5 flex flex-col gap-4 border-t border-border pt-4">
          <div class="flex items-center justify-between">
            <span class="text-sm text-muted-foreground">Cart Total</span>
            <span class="font-semibold">$49.50</span>
          </div>

          <a
            href="tel:+997509153849"
            class="flex items-center gap-3 rounded-xl bg-primary/10 p-3 text-primary"
          >
            <UIcon name="i-lucide-headset" class="size-5" />
            <div>
              <p class="text-xs">Support</p>
              <p class="text-sm font-semibold">+997 509 153 849</p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>
