<template>
  <section id="galeri" class="min-h-screen py-10 mt-24">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Galeri Produk</h2>
      </div>
    </div>
    
    <!-- Promo Section -->
    <div class="bg-black w-full rounded-t-3xl">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Promo</h3>
          <div class="flex space-x-2">
            <!-- Page Indicators for Promo -->
            <div class="flex space-x-1">
              <div 
                v-for="page in totalPromoPages" 
                :key="page"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentPromoPage === page ? 'bg-yellow-500' : 'bg-gray-600'"
              ></div>
            </div>
          </div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>
        
        <div class="relative">
          <div class="overflow-hidden">
            <!-- Animated Container for Promo -->
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${(currentPromoPage - 1) * 100}%)` }">
              <div 
                v-for="page in totalPromoPages" 
                :key="`promo-page-${page}`"
                class="flex w-full flex-shrink-0 space-x-3 sm:space-x-6"
              >
                <div 
                  v-for="(product, index) in getPromoProductsForPage(page)" 
                  :key="product.id"
                  class="flex-shrink-0 bg-gray-100 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                  :class="isMobile ? 'w-[118px]' : 'w-64'"
                >
                  <div class="relative">
                    <img 
                      :src="product.image" 
                      :alt="product.name"
                      class="w-full object-cover rounded-t-lg sm:rounded-t-xl transition-all duration-300"
                      :class="isMobile ? 'h-30' : 'h-60'"
                    />
                    <div class="absolute top-1 sm:top-3 left-1 sm:left-3 bg-blue-500 text-white rounded-full font-semibold transition-all duration-300" :class="isMobile ? 'px-1 py-0.5 text-[8px]' : 'px-3 py-1 text-sm'">
                      {{ isMobile ? product.discount.replace('SALE ', '').replace(' OFF', '') : product.discount }}
                    </div>
                  </div>
                  <div class="p-1 sm:p-1 text-center flex-1 flex flex-col justify-between">
                    <h4 class="font-semibold text-gray-800 mb-1 leading-tight transition-all duration-300" :class="isMobile ? 'text-[8px]' : 'text-base'">{{ product.name }}</h4>
                    <div class="flex flex-col sm:flex-row items-center justify-center space-y-0 sm:space-y-0 sm:space-x-2">
                      <span class="font-bold text-red-500 transition-all duration-300" :class="isMobile ? 'text-[9px]' : 'text-lg'">{{ product.salePrice }}</span>
                      <span class="text-gray-500 line-through transition-all duration-300" :class="isMobile ? 'text-[8px]' : 'text-sm'">{{ product.originalPrice }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Arrow Right Icon for Promo -->
          <button 
            @click="nextPromoPage"
            class="absolute top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg transition-all duration-300 z-10 flex items-center justify-center"
            :class="isMobile ? 'right-1' : 'right-48'"
            :style="{ 
              width: isMobile ? '24px' : '40px',
              height: isMobile ? '24px' : '40px'
            }"
          >
            <ChevronRightIcon :class="isMobile ? 'h-3 w-3' : 'h-6 w-6'" />
          </button>
        </div>
      </div>
    </div>

    <!-- Baru Section -->
    <div class="bg-black w-full -mb-10 pb-0">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Baru</h3>
          <div class="flex space-x-2">
            <!-- Page Indicators for Baru -->
            <div class="flex space-x-1">
              <div 
                v-for="page in totalBaruPages" 
                :key="page"
                class="w-2 h-2 rounded-full transition-all duration-300"
                :class="currentBaruPage === page ? 'bg-yellow-500' : 'bg-gray-600'"
              ></div>
            </div>
          </div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>

        <div class="relative">
          <div class="overflow-hidden">
            <!-- Animated Container for Baru -->
            <div class="flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${(currentBaruPage - 1) * 100}%)` }">
              <div 
                v-for="page in totalBaruPages" 
                :key="`baru-page-${page}`"
                class="flex w-full flex-shrink-0 space-x-3 sm:space-x-6"
              >
                <div 
                  v-for="(product, index) in getBaruProductsForPage(page)" 
                  :key="product.id"
                  class="flex-shrink-0 bg-gray-100 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                  :class="isMobile ? 'w-[118px]' : 'w-64'"
                >
                  <div class="relative">
                    <img 
                      :src="product.image" 
                      :alt="product.name"
                      class="w-full object-cover rounded-t-lg sm:rounded-t-xl transition-all duration-300"
                      :class="isMobile ? 'h-30' : 'h-60'"
                    />
                    <div class="absolute top-1 sm:top-3 left-1 sm:left-3 bg-green-500 text-white rounded-full font-semibold transition-all duration-300" :class="isMobile ? 'px-1 py-0.5 text-[8px]' : 'px-3 py-1 text-sm'">
                      NEW
                    </div>
                  </div>
                  <div class="p-1 sm:p-4 text-center flex-1 flex flex-col justify-between">
                    <h4 class="font-semibold text-gray-800 mb-1 sm:mb-2 leading-tight transition-all duration-300" :class="isMobile ? 'text-[8px]' : 'text-base'">{{ product.name }}</h4>
                    <div class="font-bold text-gray-800 transition-all duration-300" :class="isMobile ? 'text-[9px]' : 'text-lg'">{{ product.price }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Arrow Right Icon for Baru Section -->
          <button 
            @click="nextBaruPage"
            class="absolute top-1/2 transform -translate-y-1/2 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full shadow-lg transition-all duration-300 z-10 flex items-center justify-center"
            :class="isMobile ? 'right-1' : 'right-48'"
            :style="{ 
              width: isMobile ? '24px' : '40px',
              height: isMobile ? '24px' : '40px'
            }"
          >
            <ChevronRightIcon :class="isMobile ? 'h-3 w-3' : 'h-6 w-6'" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'
import Produk1Diskon from '../assets/img/produk1diskon.png'
import Produk2Diskon from '../assets/img/produk2diskon.png'
import Produk3Diskon from '../assets/img/produk3diskon.png'
import Produk4Diskon from '../assets/img/produk4diskon.png'
import Produk5Diskon from '../assets/img/produk5diskon.png'
import Produk6Diskon from '../assets/img/produk6diskon.png'
import Produk7Diskon from '../assets/img/produk7diskon.png'
import Produk8Diskon from '../assets/img/produk8diskon.png'
import Produk9Diskon from '../assets/img/produk9diskon.png'
import Produk1Baru from '../assets/img/produk1baru.png'
import Produk2Baru from '../assets/img/produk2baru.png'
import Produk3Baru from '../assets/img/produk3baru.png'
import Produk4Baru from '../assets/img/produk4baru.png'
import Produk5Baru from '../assets/img/produk5baru.png'
import Produk6Baru from '../assets/img/produk6baru.png'
import Produk7Baru from '../assets/img/produk7baru.png'
import Produk8Baru from '../assets/img/produk8baru.png'
import Produk9Baru from '../assets/img/produk9baru.png'

export default {
  name: 'Galeri',
  components: {
    ChevronRightIcon
  },
  data() {
    return {
      windowWidth: 0,
      currentPromoPage: 1,
      currentBaruPage: 1,
      isAnimating: false,
      promoProducts: [
        // Halaman 1
        {
          id: 1,
          name: 'Botol Afydro 1 ( 250ml )',
          image: Produk1Diskon,
          discount: 'SALE 20% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 100.000'
        },
        {
          id: 2,
          name: 'Botol Afydro 2 ( 250ml )',
          image: Produk2Diskon,
          discount: 'SALE 15% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 106.250'
        },
        {
          id: 3,
          name: 'Botol Afydro 3 ( 250ml )',
          image: Produk3Diskon,
          discount: 'SALE 25% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 93.750'
        },
        // Halaman 2
        {
          id: 4,
          name: 'Botol Afydro 4 ( 500ml )',
          image: Produk4Diskon,
          discount: 'SALE 30% OFF',
          originalPrice: 'Rp 200.000',
          salePrice: 'Rp 140.000'
        },
        {
          id: 5,
          name: 'Botol Afydro 5 ( 500ml )',
          image: Produk5Diskon,
          discount: 'SALE 25% OFF',
          originalPrice: 'Rp 180.000',
          salePrice: 'Rp 135.000'
        },
        {
          id: 6,
          name: 'Botol Afydro 6 ( 500ml )',
          image: Produk6Diskon,
          discount: 'SALE 35% OFF',
          originalPrice: 'Rp 220.000',
          salePrice: 'Rp 143.000'
        },
        // Halaman 3
        {
          id: 7,
          name: 'Botol Afydro Special 1 ( 750ml )',
          image: Produk7Diskon,
          discount: 'SALE 40% OFF',
          originalPrice: 'Rp 300.000',
          salePrice: 'Rp 180.000'
        },
        {
          id: 8,
          name: 'Botol Afydro Special 2 ( 750ml )',
          image: Produk8Diskon,
          discount: 'SALE 45% OFF',
          originalPrice: 'Rp 350.000',
          salePrice: 'Rp 192.500'
        },
        {
          id: 9,
          name: 'Botol Afydro Special 3 ( 750ml )',
          image: Produk9Diskon,
          discount: 'SALE 50% OFF',
          originalPrice: 'Rp 400.000',
          salePrice: 'Rp 200.000'
        }
      ],
      baruProducts: [
        // Halaman 1
        {
          id: 10,
          name: 'Botol Afydro New 1',
          image: Produk1Baru,
          price: 'Rp 150.000'
        },
        {
          id: 11,
          name: 'Botol Afydro New 2',
          image: Produk2Baru,
          price: 'Rp 175.000'
        },
        {
          id: 12,
          name: 'Botol Afydro New 3',
          image: Produk3Baru,
          price: 'Rp 200.000'
        },
        // Halaman 2
        {
          id: 13,
          name: 'Botol Afydro Elite 1',
          image: Produk4Baru,
          price: 'Rp 225.000'
        },
        {
          id: 14,
          name: 'Botol Afydro Elite 2',
          image: Produk5Baru,
          price: 'Rp 250.000'
        },
        {
          id: 15,
          name: 'Botol Afydro Elite 3',
          image: Produk6Baru,
          price: 'Rp 275.000'
        },
        // Halaman 3
        {
          id: 16,
          name: 'Botol Afydro Ultimate 1',
          image: Produk7Baru,
          price: 'Rp 300.000'
        },
        {
          id: 17,
          name: 'Botol Afydro Ultimate 2',
          image: Produk8Baru,
          price: 'Rp 325.000'
        },
        {
          id: 18,
          name: 'Botol Afydro Ultimate 3',
          image: Produk9Baru,
          price: 'Rp 350.000'
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 640
    },
    itemsPerPage() {
      return this.isMobile ? 2 : 3
    },
    totalPromoPages() {
      return Math.ceil(this.promoProducts.length / this.itemsPerPage)
    },
    totalBaruPages() {
      return Math.ceil(this.baruProducts.length / this.itemsPerPage)
    },
    currentPromoProducts() {
      const startIndex = (this.currentPromoPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.promoProducts.slice(startIndex, endIndex)
    },
    currentBaruProducts() {
      const startIndex = (this.currentBaruPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.baruProducts.slice(startIndex, endIndex)
    }
  },
  mounted() {
    this.updateWindowWidth()
    window.addEventListener('resize', this.updateWindowWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateWindowWidth)
  },
  methods: {
    updateWindowWidth() {
      this.windowWidth = window.innerWidth
    },
    getPromoProductsForPage(page) {
      const startIndex = (page - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.promoProducts.slice(startIndex, endIndex)
    },
    getBaruProductsForPage(page) {
      const startIndex = (page - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.baruProducts.slice(startIndex, endIndex)
    },
    nextPromoPage() {
      if (!this.isAnimating) {
        this.isAnimating = true
        
        // Loop back to first page if at the end
        if (this.currentPromoPage >= this.totalPromoPages) {
          this.currentPromoPage = 1
        } else {
          this.currentPromoPage++
        }
        
        // Reset animation state after transition
        setTimeout(() => {
          this.isAnimating = false
        }, 500)
      }
    },
    nextBaruPage() {
      if (!this.isAnimating) {
        this.isAnimating = true
        
        // Loop back to first page if at the end
        if (this.currentBaruPage >= this.totalBaruPages) {
          this.currentBaruPage = 1
        } else {
          this.currentBaruPage++
        }
        
        // Reset animation state after transition
        setTimeout(() => {
          this.isAnimating = false
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
/* Slide Animation */
.slide-enter-active, .slide-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-to, .slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Ensure smooth height transitions */
.relative {
  min-height: 290px;
}

@media (max-width: 640px) {
  .relative {
    min-height: 140px;
  }
}

/* Hide scrollbar */
.overflow-x-hidden {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-x-hidden::-webkit-scrollbar {
  display: none;
}
</style>