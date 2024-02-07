<template>
    <div class="max-w-6xl mx-auto p-5 bg-white">
      <h1 class="text-center my-5 text-black">Welcome to the Magia da Terra App!</h1>
      <div class="flex flex-wrap -mx-4">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4"
          v-for="(item, index) in pages"
          :key="index"
        >
          <router-link
            :to="item.link"
            class="h-full block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
          >
            <div class="p-6 text-center">
              <h5 class="text-lg font-semibold">{{ item.page }}</h5>
              <p class="mt-2 text-sm text-gray-600">{{ item.description }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        pages: [
          {
            page: "Login",
            link: "/login",
            description: "Login Page.",
          },
          {
            page: "Register",
            link: "/register",
            description: "Register a new user",
          },
        ],
      };
    },
  };
  </script>
  