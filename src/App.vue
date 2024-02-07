<template>
  <div class="flex flex-col min-h-screen w-full">
    <Navbar class="w-full" />
    <main class="flex-grow mt-2 w-full">
      <router-view class="w-full"/>
    </main>
    <!-- Optional: Footer Component Here -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from './components/Navbar.vue';




const INACTIVITY_TIMEOUT = 15 * 60 * 1000; // 15 minutes in milliseconds
let inactivityTimer;

const router = useRouter();


// Check if a user is logged in
const isUserLoggedIn = ref(localStorage.getItem('auth_token') !== null);

// Reset the inactivity timer whenever there's any activity
const resetTimer = () => {
  if (!isUserLoggedIn.value) {
    return; // Exit early if no user is logged in
  }

  clearTimeout(inactivityTimer);
  inactivityTimer = setTimeout(logoutDueToInactivity, INACTIVITY_TIMEOUT);
};

const logoutDueToInactivity = () => {
  alert('Logging out due to inactivity');
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  router.push('/login');
};

// Watch for any activity on the window to reset the inactivity timer
onMounted(() => {
  // Initialize the inactivity timer only if a user is logged in
  if (isUserLoggedIn.value) {
    window.addEventListener('mousemove', resetTimer, false);
    window.addEventListener('mousedown', resetTimer, false);
    window.addEventListener('keypress', resetTimer, false);
    window.addEventListener('touchmove', resetTimer, false);
    window.addEventListener('scroll', resetTimer, false);
    
    // Initialize the inactivity timer when the component mounts
    resetTimer();
  }
});

// Clean up event listeners to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('mousemove', resetTimer, false);
  window.removeEventListener('mousedown', resetTimer, false);
  window.removeEventListener('keypress', resetTimer, false);
  window.removeEventListener('touchmove', resetTimer, false);
  window.removeEventListener('scroll', resetTimer, false);
});

</script>