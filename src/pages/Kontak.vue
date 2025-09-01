<template>
  <section id="galeri" class="min-h-screen py-10 mt-24">
    <div class="container mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold mb-6 text-gray-800">Kontak</h2>
      </div>
    </div>
    
    <!-- Sosmed Section -->
    <div class="bg-black w-full rounded-t-3xl">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <!-- Header Section -->
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Sosial Media</h3>
          <div class="flex space-x-2"></div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>

        <!-- Content Section -->
        <div class="flex flex-col md:flex-row items-start justify-between">
          <!-- Konten di sebelah kiri -->
          <div class="flex-shrink-0">
            <div class="flex flex-col space-y-8">
              <!-- Instagram -->
              <a href="https://instagram.com/afydro" target="_blank" 
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">Instagram</h4>
                  <p class="text-gray-300">@afydro_official</p>
                </div>
              </a>

              <!-- Facebook -->
              <a href="https://facebook.com/afydro" target="_blank" 
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">Facebook</h4>
                  <p class="text-gray-300">Afydro Indonesia</p>
                </div>
              </a>

              <!-- YouTube -->
              <a href="https://youtube.com/@afydro" target="_blank" 
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-red-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <svg class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">YouTube</h4>
                  <p class="text-gray-300">Afydro Channel</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Social Media Stats & CTA di sebelah kanan -->
          <div class="text-white w-full md:w-1/2 mt-8 md:mt-0">
            <!-- Stats Section -->
            <div class="mb-8">
              <h4 class="text-xl font-bold text-yellow-500 mb-4">Ikuti Perjalanan Kami</h4>
              <p class="text-gray-300 mb-6">
                Bergabunglah dengan komunitas Afydro dan dapatkan update terbaru tentang produk, tips hidrasi, dan gaya hidup sehat.
              </p>

              <!-- Social Stats -->
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-500">15K+</div>
                  <div class="text-sm text-gray-400">Followers</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-500">500+</div>
                  <div class="text-sm text-gray-400">Posts</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-yellow-500">1K+</div>
                  <div class="text-sm text-gray-400">Reviews</div>
                </div>
              </div>
            </div>

            <!-- Call to Action -->
            <div class="bg-gray-900 rounded-lg p-6 border border-yellow-500/20 min-h-[280px] flex flex-col justify-between">
              <h5 class="font-bold text-lg mb-2">Tetap Terhubung</h5>
              <p class="text-gray-300 text-sm mb-4">
                Follow media sosial kami untuk mendapatkan:
              </p>
              <ul class="text-gray-300 text-sm space-y-1 list-disc list-inside">
                <li>Tips hidrasi dan kesehatan</li>
                <li>Promo dan diskon eksklusif</li>
                <li>Behind the scenes produksi</li>
                <li>Review dari customer</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Kontak Section -->
    <div class="bg-black w-full -mb-10 -mt-10 pb-0">
      <div class="container mx-auto px-3 sm:px-6 py-12">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-xl sm:text-2xl font-bold text-yellow-500">Hubungi Kami</h3>
          <div class="flex space-x-2"></div>
        </div>

        <div class="border-[0.5px] border-yellow-500 mb-6"></div>

        <!-- Content -->
        <div class="flex flex-col lg:flex-row items-start justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          <!-- Contact Info di sebelah kiri -->
          <div class="flex-shrink-0 w-full md:w-1/2">
            <div class="flex flex-col space-y-8">
              <!-- Telepon -->
              <a href="tel:+628123456789" 
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <PhoneIcon class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">Telepon</h4>
                  <p class="text-gray-300">+62 812-3456-789</p>
                  <p class="text-sm text-gray-400">Senin - Jumat: 08.00 - 17.00</p>
                </div>
              </a>

              <!-- WhatsApp -->
              <a href="https://wa.me/628123456789" target="_blank"
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-green-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <!-- WhatsApp SVG Icon -->
                  <svg class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.786"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">WhatsApp</h4>
                  <p class="text-gray-300">+62 812-3456-789</p>
                  <p class="text-sm text-gray-400">Chat langsung dengan tim kami</p>
                </div>
              </a>

              <!-- Email -->
              <a href="mailto:info@afydro.com" 
                 class="inline-flex items-center space-x-4 text-white hover:text-yellow-500 transition-colors duration-300 group w-fit">
                <div class="w-16 h-16 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                  <EnvelopeIcon class="w-8 h-8 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <h4 class="font-bold text-lg group-hover:text-yellow-500 transition-colors duration-300">Email</h4>
                  <p class="text-gray-300">info@afydro.com</p>
                  <p class="text-sm text-gray-400">Respon dalam 24 jam</p>
                </div>
              </a>
            </div>
          </div>

          <!-- Form Kritik dan Saran di sebelah kanan -->
          <div class="text-white w-full md:w-1/2">
            <div class="bg-gray-900 rounded-lg p-6 border border-yellow-500/20 min-h-[280px] flex flex-col justify-between">
              <h4 class="text-xl font-bold text-yellow-500 mb-4">Kritik & Saran</h4>
              <p class="text-gray-300 text-sm mb-6">
                Masukan Anda sangat berharga untuk pengembangan produk dan layanan kami.
              </p>

              <form class="space-y-4">
                <!-- Pesan -->
                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    id="message" 
                    rows="4"
                    class="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-colors duration-300 resize-none"
                    placeholder="Tulis kritik, saran, atau masukan Anda di sini..."
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit"
                  class="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/outline'
</script>