<template>
  <section id="galeri" class="min-h-screen py-10 mt-24">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Galeri Produk</h2>
      </div>
    </div>
    
    <!-- Perusahaan Section -->
    <div class="bg-black w-full rounded-t-3xl">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <!-- Header Section -->
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Perusahaan</h3>
          <div class="flex space-x-2"></div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>

        <!-- Content Section -->
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:-space-x-22">
          <!-- Gambar Perusahaan -->
          <div class="flex-shrink-0 w-full md:w-1/2">
            <img 
              src="../assets/about-us.png" 
              alt="Perusahaan" 
              class="rounded-lg shadow-lg w-[412px] object-cover"
            />
          </div>
          <!-- Deskripsi Perusahaan -->
          <div class="text-white w-full md:w-1/2 text-center md:text-left">
            <span class="font-bold leading-relaxed mb-4">
              AFYDRO
            </span>
            <span>
              adalah perusahaan yang berfokus pada inovasi dan kualitas produk botol air minum. 
              Kami hadir untuk menyediakan solusi hidrasi yang stylish, fungsional, dan tahan lama bagi gaya hidup modern Anda. 
              Dengan komitmen pada material terbaik dan desain yang ergonomis, 
              setiap botol Afydro dirancang untuk memenuhi kebutuhan harian Anda, 
              mulai dari berbagai pilihan warna dan ukuran hingga fitur ketahanan yang menjamin produk kami siap menemani setiap petualangan.
            </span>
            <span class="block mt-4">
              Selain itu, Afydro juga berkomitmen untuk mendukung keberlanjutan lingkungan dengan menghadirkan produk yang ramah lingkungan. 
              Kami percaya bahwa setiap langkah kecil dapat memberikan dampak besar, sehingga kami menggunakan bahan-bahan yang dapat didaur ulang 
              dan proses produksi yang efisien. Dengan fokus pada inovasi berkelanjutan, kami terus berupaya menciptakan produk yang tidak hanya 
              memenuhi kebutuhan pelanggan, tetapi juga memberikan kontribusi positif bagi planet ini. Bergabunglah dengan kami dalam perjalanan 
              menuju masa depan yang lebih hijau dan lebih baik.
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lokasi Section -->
    <div class="bg-black w-full -mb-10 -mt-10 pb-0">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Lokasi</h3>
          <div class="flex space-x-2"></div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>

        <!-- Content -->
        <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          <!-- Peta Interaktif -->
          <div class="flex-shrink-0 w-full md:w-[420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.608497764798!2d112.63062917580463!3d-7.966620994257778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd629c6c2b2c4f7%3A0x4027a76e3530d50!2sMalang%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1690000000000!5m2!1sen!2sid"
              width="100%"
              height="300"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg shadow-lg"
            ></iframe>
          </div>

          <!-- Informasi Lokasi -->
          <div class="text-white w-full md:w-1/2 space-y-6">
            <!-- Alamat -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <ChevronRightIcon class="w-6 h-6 text-yellow-500 mt-0.5" />
              </div>
              <div class="flex-1 min-h-[60px] sm:min-h-[50px]">
                <h4 class="font-bold text-lg mb-2">Alamat</h4>
                <p class="text-sm sm:text-base leading-relaxed">Jl. Contoh No. 123, Malang, Jawa Timur, Indonesia</p>
              </div>
            </div>

            <!-- Jam Operasional -->
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <ChevronRightIcon class="w-6 h-6 text-yellow-500 mt-0.5" />
              </div>
              <div class="flex-1 min-h-[60px] sm:min-h-[50px]">
                <h4 class="font-bold text-lg mb-2">Jam Operasional</h4>
                <div class="text-sm sm:text-base leading-relaxed space-y-1">
                  <p>Senin - Jumat: 08.00 - 17.00</p>
                  <p>Sabtu: 09.00 - 14.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ChevronRightIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'Galeri',
  components: {
    ChevronRightIcon
  },
  data() {
    return {
      windowWidth: 0,
      promoProducts: [
        {
          id: 1,
          name: 'Botol Afydro 1 ( 250ml )',
          image: 'https://i.imghippo.com/files/pS8722WIw.png',
          discount: 'SALE 20% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 100.000'
        },
        {
          id: 2,
          name: 'Botol Afydro 2 ( 250ml )',
          image: 'https://i.imghippo.com/files/VCVF6518vw.png',
          discount: 'SALE 15% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 106.250'
        },
        {
          id: 3,
          name: 'Botol Afydro 3 ( 250ml )',
          image: 'https://i.imghippo.com/files/uQd1542o.png',
          discount: 'SALE 25% OFF',
          originalPrice: 'Rp 125.000',
          salePrice: 'Rp 93.750'
        }
      ],
      baruProducts: [
        {
          id: 5,
          name: 'Botol Afydro New',
          image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400',
          price: 'Rp 150.000'
        },
        {
          id: 6,
          name: 'Botol Afydro New',
          image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400',
          price: 'Rp 175.000'
        },
        {
          id: 7,
          name: 'Botol Afydro New',
          image: 'https://images.unsplash.com/photo-1556947230-919d5c28b1d5?w=400',
          price: 'Rp 200.000'
        }
      ]
    }
  },
  computed: {
    isMobile() {
      return this.windowWidth < 640
    },
    filteredPromoProducts() {
      return this.isMobile ? this.promoProducts.slice(0, 2) : this.promoProducts
    },
    filteredBaruProducts() {
      return this.isMobile ? this.baruProducts.slice(0, 2) : this.baruProducts
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
    scrollPromoRight() {
      if (this.$refs.promoContainer) {
        const scrollDistance = this.isMobile ? 125 : 280
        
        this.$refs.promoContainer.scrollBy({
          left: scrollDistance,
          behavior: 'smooth'
        })
      }
    },
    scrollBaruRight() {
      if (this.$refs.baruContainer) {
        const scrollDistance = this.isMobile ? 125 : 280
        
        this.$refs.baruContainer.scrollBy({
          left: scrollDistance,
          behavior: 'smooth'
        })
      }
    }
  }
}
</script>