<script>
import Header from './components/Header.vue'
import Footer from './components/footer.vue'

export default {
  components: { Header, Footer },
  computed: {
    shouldShowLayout() {
      // Cek apakah route saat ini memiliki meta hideLayout
      return !this.$route.meta.hideLayout
    }
  }
}
</script>

<template>
  <div class="relative">
    <!-- Header hanya tampil jika bukan halaman login/register -->
    <Header 
      v-if="shouldShowLayout" 
      class="absolute top-0 left-0 right-0 z-10" 
    />

    <router-view />

    <!-- Footer hanya tampil jika bukan halaman login/register -->
    <Footer v-if="shouldShowLayout" />
  </div>
</template>