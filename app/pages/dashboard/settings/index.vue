<script setup>
definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <main class="bg-gray-50 p-4">
    <div class="py-4">
      <h1 class="text-3xl font-extrabold text-gray-950">
        Website Content Settings
      </h1>

      <p class="mt-2 max-w-2xl text-gray-500">
        Manage your website home page, about page, and contact information from
        one place.
      </p>
    </div>

    <UCard class="overflow-hidden">
      <UTabs
        :items="[
          {
            label: 'General',
            icon: 'i-lucide-settings',
            slot: 'general',
          },
          {
            label: 'Home',
            icon: 'i-lucide-home',
            slot: 'home',
          },
          {
            label: 'Shop',
            icon: 'i-lucide-package',
            slot: 'shop',
          },
          {
            label: 'About',
            icon: 'i-lucide-info',
            slot: 'about',
          },
          {
            label: 'Contact',
            icon: 'i-lucide-phone',
            slot: 'contact',
          },
        ]"
      >
        <template #general>
          <SettingsGeneral />
        </template>

        <template #home>
          <SettingsHome />
        </template>

        <template #shop>
          <SettingsShop />
        </template>
        <template #about>
          <SettingsAbout />
        </template>
        <template #contact>
          <SettingsContact />
        </template>
      </UTabs>
    </UCard>
  </main>
</template>
