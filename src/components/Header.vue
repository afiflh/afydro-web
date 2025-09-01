<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80">
    <div class="flex justify-between items-center p-4 container mx-auto text-white">
      <!-- Logo -->
      <div class="flex items-center space-x-4">
        <img src="../assets/img/logo.png" alt="Afydro" class="w-14" />
        <span class="font-bold">AFYDRO</span>
      </div>
  
      <!-- Hamburger button (hanya muncul di mobile) -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden focus:outline-none hamburger-btn"
      >
      <!-- Icon hamburger -->
      <svg
        v-if="!isOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 hamburger-icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
  
      <!-- Icon close -->
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 close-icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
  
      <!-- Menu (desktop) -->
      <nav class="hidden md:flex space-x-6">
        <router-link to="/" class="hover:text-yellow-500">Beranda</router-link>
        <router-link to="/galeri" class="hover:text-yellow-500">Galeri</router-link>
        <router-link to="/tentang" class="hover:text-yellow-500">Tentang Kami</router-link>
        <router-link to="/kontak" class="hover:text-yellow-500">Kontak</router-link>
        <router-link to="/login" class="hover:text-yellow-500">Masuk/Daftar</router-link>
      </nav>
    </div>

    <!-- Menu (mobile dropdown) -->
    <transition name="slide-down">
      <div
        v-if="isOpen"
        class="md:hidden bg-black bg-opacity-90 text-white px-4 pb-4 space-y-2 mobile-menu"
      >
        <router-link 
          to="/" 
          class="block hover:text-yellow-500 menu-item"
          @click="isOpen = false"
        >
          Beranda
        </router-link>
        <router-link 
          to="/galeri" 
          class="block hover:text-yellow-500 menu-item"
          @click="isOpen = false"
        >
          Galeri
        </router-link>
        <router-link 
          to="/tentang" 
          class="block hover:text-yellow-500 menu-item"
          @click="isOpen = false"
        >
          Tentang Kami
        </router-link>
        <router-link 
          to="/kontak" 
          class="block hover:text-yellow-500 menu-item"
          @click="isOpen = false"
        >
          Kontak
        </router-link>
        <router-link 
          to="/login" 
          class="block hover:text-yellow-500 menu-item"
          @click="isOpen = false"
        >
          Masuk/Daftar
        </router-link>
      </div>
    </transition>
  </header>
</template>
  
<script setup>
  import { ref } from "vue";
  
  const isOpen = ref(false);
</script>
  
<style>
  .container {
    max-width: 1200px;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  /* Hamburger button animation */
  .hamburger-btn {
    transition: transform 0.3s ease;
  }

  .hamburger-btn:hover {
    transform: scale(1.1);
  }

  /* Icon animations */
  .hamburger-icon {
    transition: transform 0.3s ease;
  }

  .close-icon {
    animation: rotateIn 0.3s ease;
  }

  @keyframes rotateIn {
    from {
      transform: rotate(-90deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
  }

  /* Mobile menu slide down animation */
  .slide-down-enter-active {
    transition: all 0.4s ease-out;
  }

  .slide-down-leave-active {
    transition: all 0.3s ease-in;
  }

  .slide-down-enter-from {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-down-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }

  .slide-down-enter-to,
  .slide-down-leave-from {
    transform: translateY(0);
    opacity: 1;
  }

  /* Menu items stagger animation */
  .menu-item {
    transition: all 0.2s ease;
    padding: 8px 0;
  }

  .menu-item:hover {
    transform: translateX(8px);
    padding-left: 12px;
  }

  /* Mobile menu backdrop */
  .mobile-menu {
    backdrop-filter: blur(5px);
  }
</style>