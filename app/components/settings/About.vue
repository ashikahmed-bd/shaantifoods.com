<script setup lang="ts">
import { h } from "vue";

const SectionHeader = defineComponent({
  props: { icon: String, title: String, text: String },
  setup(props) {
    return () =>
      h("div", { class: "flex items-center gap-3" }, [
        h(
          "div",
          {
            class:
              "flex size-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700",
          },
          [h("UIcon", { name: props.icon, class: "size-5" })],
        ),
        h("div", [
          h(
            "h2",
            { class: "text-lg font-semibold text-gray-900" },
            props.title,
          ),
          h("p", { class: "text-sm text-gray-500" }, props.text),
        ]),
      ]);
  },
});
const form = reactive({
  breadcrumb: {
    title: "About Shaanti Foods",
    description:
      "From Bangladesh to the world, delivering premium mango products with trust and care.",
  },
  founder: {
    name: "Mr. Katsushi Furusawa",
    role: "Founder & Chairman",
    image: null as File | null,
    description:
      "Mr. Katsushi Furusawa founded Shaanti Foods (BD) Limited with a clear vision: to showcase the rich agricultural heritage of Bangladesh and deliver premium-quality mango products to consumers around the world.\n\nGuided by a commitment to excellence, food safety, and sustainable sourcing, he has built a company that combines international quality standards with the expertise of local farmers and producers.\n\nUnder his leadership, Shaanti Foods continues to strengthen its reputation as a trusted manufacturer and exporter, creating value for customers, business partners, and farming communities while promoting Bangladeshi products in global markets.",
  },
  story:
    "Shaanti Foods began with a simple belief—Bangladesh produces some of the world's best mangoes. Our journey started in Rajshahi, the heart of mango cultivation.\n\nBy combining local expertise with modern processing technology, we create premium mango products that meet international standards.",
  mission: [
    "Deliver premium-quality mango and food products with consistent excellence.",
    "Maintain the highest standards of food safety, hygiene, and quality assurance.",
    "Empower local farmers and contribute to sustainable agricultural development.",
    "Build long-term relationships through trust, transparency, and customer satisfaction.",
  ],
  vision:
    "To establish Shaanti Foods as a globally recognized and trusted Bangladeshi brand, delivering premium mango-based and processed food products while promoting innovation, sustainability, and excellence in every market we serve.",
  partnership: {
    title: "Our Local Partners",
    subtitle:
      "Building strong relationships with local farmers and agricultural communities to deliver premium-quality mango products.",
    heading: "Growing Together",
    description:
      "We collaborate closely with experienced farmers and trusted local partners across Rajshahi and surrounding regions. Through these partnerships, we ensure access to the finest mango varieties while promoting ethical farming practices, fair trade principles, and sustainable economic growth for local communities.",
  },
  company: {
    name: "Shaanti Foods (BD) Limited",
    registration: "C-209516/2026",
    factory: "Jogitala, Bason, Gazipur Sadar, Gazipur-1704, Bangladesh",
    website: "www.shaantifoods.com",
    email: "shaantifoodsbd@gmail.com",
  },
  opportunity:
    "Partner with Shaanti Foods to access premium-quality mango products, reliable supply chains, and long-term business opportunities built on trust, quality, and sustainability.",
});

const onSubmit = () => {
  // Connect this handler to your settings API.
};

const addMission = () => form.mission.push("");
const removeMission = (index: number) => form.mission.splice(index, 1);
</script>

<template>
  <div class="min-h-screen space-y-6 bg-gray-50/70 p-4 sm:p-6">
    <div
      class="flex flex-col justify-between gap-3 sm:flex-row sm:items-center"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-900">About Page Settings</h1>
        <p class="text-sm text-gray-500">
          Manage the content shown on your About Shaanti Foods page.
        </p>
      </div>
      <UButton
        type="submit"
        form="about-settings-form"
        icon="i-lucide-save"
        size="lg"
        >Save all changes</UButton
      >
    </div>

    <UForm
      id="about-settings-form"
      :state="form"
      class="space-y-6"
      @submit="onSubmit"
    >
      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-route"
            title="Breadcrumb Section"
            text="Update the top breadcrumb title and description."
        /></template>
        <div class="grid gap-5 md:grid-cols-2">
          <UFormField label="Breadcrumb Title" name="breadcrumb.title"
            ><UInput
              v-model="form.breadcrumb.title"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField
            label="Breadcrumb Description"
            name="breadcrumb.description"
            ><UTextarea
              v-model="form.breadcrumb.description"
              :rows="3"
              size="lg"
              class="w-full"
          /></UFormField></div
      ></UCard>

      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-user-round"
            title="Founder & Chairman"
            text="Introduce the founder of Shaanti Foods."
        /></template>
        <div class="space-y-5">
          <div class="grid gap-5 md:grid-cols-2">
            <UFormField label="Name"
              ><UInput
                v-model="form.founder.name"
                size="lg"
                class="w-full" /></UFormField
            ><UFormField label="Role"
              ><UInput v-model="form.founder.role" size="lg" class="w-full"
            /></UFormField>
          </div>
          <UFormField label="Founder Image"
            ><UInput
              type="file"
              accept="image/*"
              size="lg"
              class="w-full"
              @change="
                (e: any) => (form.founder.image = e.target.files?.[0] || null)
              " /></UFormField
          ><UFormField label="Founder Description"
            ><UTextarea
              v-model="form.founder.description"
              :rows="9"
              size="lg"
              class="w-full"
          /></UFormField></div
      ></UCard>

      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-book-open"
            title="Our Story"
            text="Share the story behind your company." /></template
        ><UTextarea v-model="form.story" :rows="7" size="lg" class="w-full"
      /></UCard>

      <div class="grid gap-6 xl:grid-cols-2">
        <UCard
          ><template #header
            ><SectionHeader
              icon="i-lucide-target"
              title="Our Mission"
              text="Add the key mission points."
          /></template>
          <div class="space-y-3">
            <div
              v-for="(item, index) in form.mission"
              :key="index"
              class="flex gap-2"
            >
              <UInput
                v-model="form.mission[index]"
                :placeholder="`Mission point ${index + 1}`"
                size="lg"
                class="w-full"
              /><UButton
                variant="soft"
                icon="i-lucide-trash-2"
                :disabled="form.mission.length === 1"
              />
            </div>
            <UButton variant="soft" icon="i-lucide-plus"
              >Add mission point</UButton
            >
          </div></UCard
        ><UCard
          ><template #header
            ><SectionHeader
              icon="i-lucide-eye"
              title="Our Vision"
              text="Define the long-term vision of the company." /></template
          ><UTextarea v-model="form.vision" :rows="9" size="lg" class="w-full"
        /></UCard>
      </div>

      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-handshake"
            title="Partnership Network"
            text="Manage your local partners section."
        /></template>
        <div class="grid gap-5 md:grid-cols-2">
          <UFormField label="Section Title"
            ><UInput
              v-model="form.partnership.title"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField label="Subtitle"
            ><UInput
              v-model="form.partnership.subtitle"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField label="Heading"
            ><UInput
              v-model="form.partnership.heading"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField label="Description" class="md:col-span-2"
            ><UTextarea
              v-model="form.partnership.description"
              :rows="5"
              size="lg"
              class="w-full"
          /></UFormField></div
      ></UCard>

      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-building-2"
            title="Company Profile"
            text="Keep official company information up to date."
        /></template>
        <div class="grid gap-5 md:grid-cols-2">
          <UFormField label="Company Name"
            ><UInput
              v-model="form.company.name"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField label="Registration No."
            ><UInput
              v-model="form.company.registration"
              size="lg"
              class="w-full" /></UFormField
          ><UFormField label="Factory Address"
            ><UTextarea
              v-model="form.company.factory"
              :rows="3"
              size="lg"
              class="w-full"
          /></UFormField>
          <div class="space-y-5">
            <UFormField label="Website"
              ><UInput
                v-model="form.company.website"
                size="lg"
                class="w-full" /></UFormField
            ><UFormField label="Email"
              ><UInput
                v-model="form.company.email"
                type="email"
                size="lg"
                class="w-full"
            /></UFormField>
          </div></div
      ></UCard>

      <UCard
        ><template #header
          ><SectionHeader
            icon="i-lucide-sprout"
            title="Partnership Opportunity"
            text="Invite businesses to work with Shaanti Foods." /></template
        ><UTextarea
          v-model="form.opportunity"
          :rows="4"
          size="lg"
          class="w-full"
      /></UCard>
    </UForm>
  </div>
</template>
