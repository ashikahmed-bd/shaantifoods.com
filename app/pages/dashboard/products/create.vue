<script setup>
definePageMeta({
  layout: "dashboard",
});

const form = reactive({
  name: "",
  slug: "",
  sku: "",
  overview: "",
  description: "",

  featured: false,
  active: true,
  available: true,
  available_at: "",

  cover: null,
  coverPreview: "",
  gallery: [],
  galleryPreviews: [],

  features: [""],
  benefits: [""],

  specifications: {
    storage: "",
    variety: "",
    moisture: "",
    packaging: "",
    shelf_life: "",
  },

  shipping: {
    lead_time: "",
    shipping_method: [],
    export_available: true,
  },

  currency: "USD",
  price: "",
  compare_price: "",
  minimum_order_quantity: "",
  unit: "KG",
  stock_status: "in_stock",
  stock_quantity: "",

  country_of_origin: "Bangladesh",
  region: "",

  meta_title: "",
  meta_description: "",
  meta_keywords: "",
});

const saving = ref(false);

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-100";

const slugify = () => {
  form.slug = form.name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

const addListItem = (key) => {
  form[key].push("");
};

const removeListItem = (key, index) => {
  if (form[key].length > 1) {
    form[key].splice(index, 1);
  } else {
    form[key][0] = "";
  }
};

const handleCover = (event) => {
  const file = event.target.files?.[0];

  if (!file) return;

  form.cover = file;

  if (form.coverPreview) {
    URL.revokeObjectURL(form.coverPreview);
  }

  form.coverPreview = URL.createObjectURL(file);
};

const handleGallery = (event) => {
  const files = Array.from(event.target.files || []);

  files.forEach((file) => {
    form.gallery.push(file);
    form.galleryPreviews.push(URL.createObjectURL(file));
  });

  event.target.value = "";
};

const removeGalleryImage = (index) => {
  URL.revokeObjectURL(form.galleryPreviews[index]);
  form.gallery.splice(index, 1);
  form.galleryPreviews.splice(index, 1);
};

const submitProduct = async (status = "publish") => {
  saving.value = true;

  try {
    form.active = status === "publish";

    const payload = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      if (
        [
          "cover",
          "coverPreview",
          "gallery",
          "galleryPreviews",
          "features",
          "benefits",
          "specifications",
          "shipping",
        ].includes(key)
      ) {
        return;
      }

      payload.append(key, value ?? "");
    });

    payload.append(
      "features",
      JSON.stringify(form.features.filter((item) => item.trim())),
    );

    payload.append(
      "benefits",
      JSON.stringify(form.benefits.filter((item) => item.trim())),
    );

    payload.append("specifications", JSON.stringify(form.specifications));
    payload.append("shipping", JSON.stringify(form.shipping));

    if (form.cover) {
      payload.append("cover", form.cover);
    }

    form.gallery.forEach((file) => {
      payload.append("gallery[]", file);
    });

    await $fetch("/api/products", {
      method: "POST",
      body: payload,
    });

    // Add your success notification here
  } catch (error) {
    console.error("Product creation failed:", error);
  } finally {
    saving.value = false;
  }
};
</script>

<template>
  <main class="rounded-2xl bg-gray-50 p-4 sm:p-6">
    <div
      class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Create Product
        </h1>

        <p class="mt-1 text-sm text-gray-500">
          Add a new export product to your catalog.
        </p>
      </div>

      <div class="flex gap-3">
        <button
          type="button"
          :disabled="saving"
          class="rounded-xl border border-gray-200 bg-white px-5 py-2.5 font-medium text-gray-700 transition hover:bg-gray-100 disabled:opacity-50"
          @click="submitProduct('draft')"
        >
          Save Draft
        </button>

        <button
          type="button"
          :disabled="saving"
          class="rounded-xl bg-green-600 px-6 py-2.5 font-medium text-white transition hover:bg-green-700 disabled:opacity-50"
          @click="submitProduct('publish')"
        >
          {{ saving ? "Saving..." : "Publish" }}
        </button>
      </div>
    </div>

    <form @submit.prevent="submit">
      <div class="grid gap-6 lg:grid-cols-3">
        <div class="space-y-6 lg:col-span-2">
          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Product Information
            </h2>

            <div class="space-y-5">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Product Name <span class="text-red-500">*</span>
                </label>

                <input
                  v-model="form.name"
                  type="text"
                  :class="inputClass"
                  placeholder="Premium Dried Mango"
                  required
                  @input="slugify"
                />
              </div>

              <div class="grid gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Slug
                  </label>

                  <input
                    v-model="form.slug"
                    type="text"
                    :class="inputClass"
                    placeholder="premium-dried-mango"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    SKU
                  </label>

                  <input
                    v-model="form.sku"
                    type="text"
                    :class="inputClass"
                    placeholder="PDM-001"
                  />
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Short Overview
                </label>

                <textarea
                  v-model="form.overview"
                  rows="3"
                  :class="inputClass"
                  placeholder="Naturally sweet dried mango slices..."
                />
              </div>

              <div class="grid gap-5 md:grid-cols-2">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Country of Origin
                  </label>

                  <input
                    v-model="form.country_of_origin"
                    type="text"
                    :class="inputClass"
                    placeholder="Bangladesh"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Region
                  </label>

                  <input
                    v-model="form.region"
                    type="text"
                    :class="inputClass"
                    placeholder="Rajshahi"
                  />
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Description
            </h2>

            <textarea
              v-model="form.description"
              rows="10"
              :class="inputClass"
              placeholder="Write a detailed product description..."
            />
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <div class="grid gap-8 md:grid-cols-2">
              <div>
                <div class="mb-4 flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900">Features</h2>
                  <button
                    type="button"
                    class="text-sm font-medium text-green-600 hover:text-green-700"
                    @click="addListItem('features')"
                  >
                    Add Feature
                  </button>
                </div>

                <div class="space-y-3">
                  <div
                    v-for="(feature, index) in form.features"
                    :key="index"
                    class="flex gap-2"
                  >
                    <input
                      v-model="form.features[index]"
                      type="text"
                      :class="inputClass"
                      placeholder="100% Natural"
                    />

                    <button
                      type="button"
                      class="rounded-xl border border-red-100 px-3 text-red-500 transition hover:bg-red-50"
                      @click="removeListItem('features', index)"
                    >
                      <UIcon name="i-lucide-x" class="size-5" />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div class="mb-4 flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-gray-900">Benefits</h2>
                  <button
                    type="button"
                    class="text-sm font-medium text-green-600 hover:text-green-700"
                    @click="addListItem('benefits')"
                  >
                    Add Benefit
                  </button>
                </div>

                <div class="space-y-3">
                  <div
                    v-for="(benefit, index) in form.benefits"
                    :key="index"
                    class="flex gap-2"
                  >
                    <input
                      v-model="form.benefits[index]"
                      type="text"
                      :class="inputClass"
                      placeholder="Rich in dietary fiber"
                    />

                    <button
                      type="button"
                      class="rounded-xl border border-red-100 px-3 text-red-500 transition hover:bg-red-50"
                      @click="removeListItem('benefits', index)"
                    >
                      <UIcon name="i-lucide-x" class="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Specifications
            </h2>

            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Variety
                </label>

                <input
                  v-model="form.specifications.variety"
                  type="text"
                  :class="inputClass"
                  placeholder="Amrapali"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Moisture
                </label>

                <input
                  v-model="form.specifications.moisture"
                  type="text"
                  :class="inputClass"
                  placeholder="< 15%"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Packaging
                </label>

                <input
                  v-model="form.specifications.packaging"
                  type="text"
                  :class="inputClass"
                  placeholder="1kg, 5kg, 10kg Vacuum Pack"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Shelf Life
                </label>

                <input
                  v-model="form.specifications.shelf_life"
                  type="text"
                  :class="inputClass"
                  placeholder="18 Months"
                />
              </div>

              <div class="md:col-span-2">
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Storage
                </label>

                <input
                  v-model="form.specifications.storage"
                  type="text"
                  :class="inputClass"
                  placeholder="Store in a cool and dry place"
                />
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Shipping Information
            </h2>

            <div class="grid gap-5 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Lead Time
                </label>

                <input
                  v-model="form.shipping.lead_time"
                  type="text"
                  :class="inputClass"
                  placeholder="7-15 Days"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Shipping Methods
                </label>

                <div
                  class="flex min-h-12 flex-wrap items-center gap-5 rounded-xl border border-gray-200 px-4"
                >
                  <label class="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      v-model="form.shipping.shipping_method"
                      type="checkbox"
                      value="Air Freight"
                      class="h-4 w-4 rounded accent-green-600"
                    />
                    Air Freight
                  </label>

                  <label class="flex items-center gap-2 text-sm text-gray-700">
                    <input
                      v-model="form.shipping.shipping_method"
                      type="checkbox"
                      value="Sea Freight"
                      class="h-4 w-4 rounded accent-green-600"
                    />
                    Sea Freight
                  </label>
                </div>
              </div>
            </div>

            <label class="mt-5 flex items-center gap-3">
              <input
                v-model="form.shipping.export_available"
                type="checkbox"
                class="h-5 w-5 rounded accent-green-600"
              />

              <span class="text-sm font-medium text-gray-700">
                Export available
              </span>
            </label>
          </section>
        </div>

        <aside class="space-y-6">
          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">Status</h2>

            <div class="space-y-5">
              <label class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Active</span>

                <input
                  v-model="form.active"
                  type="checkbox"
                  class="h-5 w-5 rounded accent-green-600"
                />
              </label>

              <label class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Available</span>

                <input
                  v-model="form.available"
                  type="checkbox"
                  class="h-5 w-5 rounded accent-green-600"
                />
              </label>

              <label class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Featured</span>

                <input
                  v-model="form.featured"
                  type="checkbox"
                  class="h-5 w-5 rounded accent-green-600"
                />
              </label>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Available At
                </label>

                <input
                  v-model="form.available_at"
                  type="date"
                  :class="inputClass"
                />
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">
              Pricing & Inventory
            </h2>

            <div class="space-y-5">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Currency
                </label>

                <select v-model="form.currency" :class="inputClass">
                  <option value="USD">USD</option>
                  <option value="BDT">BDT</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    v-model="form.price"
                    type="number"
                    step="0.01"
                    :class="inputClass"
                    placeholder="8.50"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Compare Price
                  </label>

                  <input
                    v-model="form.compare_price"
                    type="number"
                    step="0.01"
                    :class="inputClass"
                    placeholder="10.00"
                  />
                </div>
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Minimum Order
                  </label>

                  <input
                    v-model="form.minimum_order_quantity"
                    type="number"
                    :class="inputClass"
                    placeholder="500"
                  />
                </div>

                <div>
                  <label class="mb-2 block text-sm font-medium text-gray-700">
                    Unit
                  </label>

                  <select v-model="form.unit" :class="inputClass">
                    <option value="KG">KG</option>
                    <option value="TON">TON</option>
                    <option value="PCS">PCS</option>
                    <option value="BOX">BOX</option>
                    <option value="PACK">PACK</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Stock Status
                </label>

                <select v-model="form.stock_status" :class="inputClass">
                  <option value="in_stock">In Stock</option>
                  <option value="out_of_stock">Out of Stock</option>
                  <option value="pre_order">Pre-order</option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Stock Quantity
                </label>

                <input
                  v-model="form.stock_quantity"
                  type="number"
                  :class="inputClass"
                  placeholder="5000"
                />
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-gray-200 bg-white p-6">
            <h2 class="mb-6 text-lg font-semibold text-gray-900">SEO</h2>

            <div class="space-y-2">
              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Meta Title
                </label>

                <input
                  v-model="form.meta_title"
                  type="text"
                  :class="inputClass"
                  placeholder="Premium Dried Mango Supplier..."
                />

                <p class="mt-1 text-right text-xs text-gray-400">
                  {{ form.meta_title.length }}/60
                </p>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Meta Description
                </label>

                <textarea
                  v-model="form.meta_description"
                  rows="5"
                  :class="inputClass"
                  placeholder="Write a search-friendly description..."
                />

                <p class="mt-1 text-right text-xs text-gray-400">
                  {{ form.meta_description.length }}/160
                </p>
              </div>

              <div>
                <label class="mb-2 block text-sm font-medium text-gray-700">
                  Meta Keywords
                </label>

                <textarea
                  v-model="form.meta_keywords"
                  rows="4"
                  :class="inputClass"
                  placeholder="dried mango, mango exporter, wholesale..."
                />

                <p class="mt-1 text-xs text-gray-400">
                  Separate keywords using commas.
                </p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </form>
  </main>
</template>
