<!-- src/components/Login.vue -->
<template>
  <div class="relative flex flex-col justify-center min-h-screen overflow-hidden">
    <div class="w-full p-6 m-auto bg-white rounded shadow-lg ring-2 ring-blue-800/50 lg:max-w-md">
      <h1 class="text-3xl font-semibold text-center text-blue-700">Login</h1>

      <form class="mt-6" @submit.prevent="login">
        <div>
          <label for="email" class="block text-sm text-gray-800">Email</label>
          <input id="email" v-model="email" type="email"
            class="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
        </div>
        <div class="mt-4">
          <div>
            <label for="password" class="block text-sm text-gray-800">Password</label>
            <input v-model="password" type="password" class="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
          </div>
          <a href="#" class="text-xs text-gray-600 hover:underline">Forget Password?</a>
          <div class="mt-6">
            <button :disabled="loading"
              class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 disabled:opacity-50">
              {{ loading ? 'Logging in...' : 'Login' }}
            </button>

          </div>
        </div>
      </form>
      <p class="mt-8 text-xs font-light text-center text-gray-700">
        Don't have an account?
        <router-link to="/register" class="font-medium text-blue-600 hover:underline">Sign up</router-link>
      </p>
      <p v-if="error" class="text-red-500 text-sm mt-2">{{ error }}</p>
    </div>
  </div>
</template>
  

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { logIn } from '../firebase/auth'; // Adjust the path according to your project structure

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const loading = ref(false);
    const error = ref('');
    const router = useRouter();
    const route = useRoute();

    const login = async () => {
      loading.value = true;
      error.value = '';
      try {
        await logIn(email.value, password.value);
        // Redirect after successful login
        const redirect = route.query.redirect || '/';
        router.push(redirect);
      } catch (e) {
        error.value = e.message;
      } finally {
        loading.value = false;
      }
    };

    return { email, password, login, loading, error };
  },
};
</script>

<style scoped></style>