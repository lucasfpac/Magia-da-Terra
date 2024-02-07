<template>
  <nav class="bg-blue-500 p-4 sticky top-0 z-50">
    <div class="container mx-auto flex justify-between items-center">
      <router-link to="/" class="navbar-brand text-white text-2xl font-bold">Magia da Terra</router-link>

      <div>
        <button class="bg-white text-blue-500 py-2 px-4 rounded-lg" @click="login">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
// import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
    name: 'Navbar',
  setup() {
    const router = useRouter();

    const login = () => {
      console.log('Login button clicked');
      // Programmatically navigate to the '/login' route
      router.push('/login');
    };

    return {
      login,
    };
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
