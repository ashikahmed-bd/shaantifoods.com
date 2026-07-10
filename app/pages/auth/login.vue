<script setup>
const authStore = useAuthStore();
const toast = useToast();

const form = reactive({
  email: "info@shaantifoods.com",
  password: "password",
});

const submit = async () => {
  const response = await authStore.login(form);
  toast.add({
    title: response.message,
  });
  setTimeout(() => {
    navigateTo("/dashboard");
  }, 1500);
};
</script>

<template>
  <main class="bg-gray-100 px-4 py-8">
    <div class="max-w-md mx-auto bg-white rounded-2xl p-8">
      <div class="text-center mb-6">
        <h1 class="text-3xl font-bold text-green-600">Shanti Food</h1>
        <p class="text-gray-500 text-sm mt-1">Sign in to your account</p>
      </div>

      <form @submit.prevent="submit" class="space-y-4">
        <div>
          <label class="text-sm text-gray-600">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full px-4 py-3 border border-border rounded focus:outline-none"
          />
        </div>

        <div>
          <label class="text-sm text-gray-600">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            class="w-full px-4 py-3 border border-border rounded focus:outline-none"
          />
        </div>

        <div class="flex items-center justify-between text-sm">
          <label class="flex items-center gap-2 text-gray-600">
            <input type="checkbox" class="accent-green-500" />
            Remember me
          </label>

          <a href="#" class="text-green-600 hover:underline">
            Forgot password?
          </a>
        </div>

        <BaseButton :loading="authStore.loading" class="w-full">
          Sign In
        </BaseButton>
      </form>

      <p class="text-center text-sm text-gray-500 mt-6">
        Don’t have an account?
        <a href="#" class="text-green-600 font-medium hover:underline">
          Sign up
        </a>
      </p>
    </div>
  </main>
</template>
