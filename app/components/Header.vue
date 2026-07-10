<script setup>
const settings = useSettings();
const isOpen = ref(false);

const navigation = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false;
  },
);
</script>

<template>
  <header class="border-b border-border bg-white">
    <nav class="mx-auto max-w-7xl px-4 py-2">
      <div class="flex items-center justify-between gap-4">
        <button
          class="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
          @click="isOpen = !isOpen"
        >
          <UIcon
            :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'"
            class="size-5"
          />
        </button>

        <NuxtLink to="/" class="flex items-center">
          <img src="/logo.svg" alt="Logo" class="h-16 w-auto" />
        </NuxtLink>

        <ul
          class="hidden items-center gap-8 text-sm font-medium uppercase lg:flex"
        >
          <li v-for="item in navigation" :key="item.to">
            <NuxtLink
              :to="item.to"
              class="font-semibold transition hover:text-primary"
              active-class="text-primary"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <div class="hidden items-center gap-5 lg:flex">
          <div class="flex items-center gap-3">
            <NuxtLink
              to="/auth/login"
              class="rounded-full border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
            >
              Sign In
            </NuxtLink>

            <NuxtLink
              to="/auth/login"
              class="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Sign Up
            </NuxtLink>
          </div>

          <a
            :href="'tel:' + settings?.phone"
            class="flex items-center gap-3 border-l border-border pl-5 transition hover:text-primary"
          >
            <span
              class="flex size-11 items-center justify-center rounded-full bg-primary/10 text-primary"
            >
              <UIcon name="i-lucide-headset" class="size-5" />
            </span>

            <div class="leading-tight">
              <p class="text-xs text-muted">Support</p>

              <span class="text-sm font-semibold">{{ settings?.phone }} </span>
            </div>
          </a>
        </div>

        <NuxtLink
          to="/dashboard"
          class="flex size-10 items-center justify-center rounded-full border border-border lg:hidden"
        >
          <UIcon name="i-lucide-user-round" class="size-5" />
        </NuxtLink>
      </div>

      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-if="isOpen"
          class="mt-4 rounded-2xl border border-border bg-white p-4 shadow-sm lg:hidden"
        >
          <ul class="flex flex-col gap-4 uppercase text-sm font-medium">
            <li v-for="item in navigation" :key="item.to">
              <NuxtLink
                :to="item.to"
                class="block transition hover:text-primary"
                active-class="text-primary"
              >
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <div class="mt-5 border-t border-border pt-5">
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

            <div class="mt-4 grid grid-cols-2 gap-3">
              <NuxtLink
                to="/auth/sign-in"
                class="rounded-xl border border-border py-2.5 text-center text-sm font-medium"
              >
                Sign In
              </NuxtLink>

              <NuxtLink
                to="/auth/sign-up"
                class="rounded-xl bg-primary py-2.5 text-center text-sm font-medium text-white"
              >
                Sign Up
              </NuxtLink>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>
