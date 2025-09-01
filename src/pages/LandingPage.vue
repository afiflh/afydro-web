<template>
    <!-- herosection -->
    <section class="relative min-h-[564px] sm:h-[564px] w-full overflow-hidden pt-24">
        <img 
            class="absolute inset-0 w-full h-full object-cover object-top" 
            src="../assets/banner.png" 
            alt="bg" 
        />
        <div class="relative z-10 px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl flex justify-center h-full mt-14">
            <div class="text-center">
                <p class="text-sm sm:text-[15px] text-white font-light">
                    Botol yang didesain secara inovatif untuk gaya hidup modern dan petualangan.
                </p>
                <div class="tracking-tight text-white font-bold text-opacity-70 mt-8 text-center text-3xl sm:text-[48px] flex flex-col items-center">
                    <span>Solusi untuk tempat</span>
                    <span class="text-yellow-500 text-opacity-70 -mt-2 sm:-mt-4">Air Minummu</span>
                </div>
                <div class="flex flex-col items-center">
                    <button class="mt-6 px-6 py-2 w-44 sm:w-[181px] h-12 sm:h-[55px] bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-300 hover:shadow-lg cursor-pointer transition">
                        Beli Sekarang
                    </button>
                    <button class="mt-4 px-4 py-2 w-44 sm:w-[181px] h-12 sm:h-[55px] bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-black hover:shadow-lg cursor-pointer transition">
                        Lihat Lebih Lanjut
                    </button>
                </div> 
            </div>
        </div>
    </section>


    <!-- fitur section -->
    <section id="features">
        <div class="mt-12">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Fitur Unggulan</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 p-8 -mt-8 max-w-6xl mx-auto">
                <!-- Feature 1 -->
                <div class="w-80 h-80 bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 
                transform hover:-translate-y-2 flex flex-col items-center md:flex-row md:items-start md:space-x-4">
                    <div class="w-16 h-16 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/pS8722WIw.png" alt="Banyak Pilihan Warna">
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Banyak pilihan warna</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Botol Afydro hadir dalam beragam pilihan warna cerah yang siap melengkapi setiap gaya dan kepribadianmu.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 2 -->
                <div class="w-80 h-80 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center md:flex-row md:items-start md:space-x-4">
                    <div class="w-16 h-16 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/VCVF6518vw.png" alt="Berbagai ukuran">
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Berbagai ukuran</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Apapun kebutuhanmu, ada ukuran yang tepat. Botol Afydro tersedia dalam berbagai ukuran yang bisa disesuaikan dengan aktivitas harianmu.
                        </p>
                    </div>
                </div>
                
                <!-- Feature 3 -->
                <div class="w-80 h-80 bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center md:flex-row md:items-start md:space-x-4">
                    <div class="w-16 h-16 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/uQd1542o.png" alt="Kuat dan tahan lama">
                    </div>
                    <div>
                        <h3 class="text-2xl font-bold mb-2">Kuat dan tahan lama</h3>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            Dibangun untuk bertahan. Kekuatan dan daya tahannya menjamin ia menjadi teman setia di setiap perjalanan.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- section penghargaan -->
    <section id="awards" class="py-20 bg-black">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl sm:text-4xl lg:text-5xl text-white font-bold mb-4">Penghargaan</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                <!-- Award 1 -->
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
                    <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center mb-6">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/dNei9513jQs.png" alt="Banyak Pilihan Warna">
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-bold mb-4">Top Brand 2016-2020</h3>
                    </div>
                </div>
                <!-- Award 2 -->
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
                    <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center mb-6">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/dNei9513jQs.png" alt="Banyak Pilihan Warna">
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-bold mb-4">Popular Brand Award 2016-2020</h3>
                    </div>
                </div>
                <!-- Award 3 -->
                <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
                    <div class="w-24 h-24 flex-shrink-0 flex items-center justify-center mb-6">
                        <img class="w-full h-full object-cover rounded-lg" src="https://i.imghippo.com/files/dNei9513jQs.png" alt="Banyak Pilihan Warna">
                    </div>
                    <div class="text-center">
                        <h3 class="text-xl font-bold mb-4">Top Inovation 2016-2020</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- section available -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-xl sm:text-4xl lg:text-5xl font-semibold mb-4">Tersedia di</h2>
            </div>
            <div class="flex items-center justify-center">
                <div class="flex flex-col items-center gap-6">
                    <div class="
                      flex flex-col gap-4
                      md:flex-row md:flex-wrap md:justify-center md:max-w-md
                      lg:max-w-none
                    ">
                        <!-- Baris 1: 3 item (tablet) atau 5 item (desktop) -->
                        <div class="flex flex-col gap-4 md:flex-row md:gap-4">
                            <div class="flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Tokopedia</span>
                            </div>
                            <div class="flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Bukalapak</span>
                            </div>
                            <div class="flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Shopee</span>
                            </div>
                          
                        <!-- Desktop: Item 4-5 langsung sejajar -->
                            <div class="hidden lg:flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Lazada</span>
                            </div>
                            <div class="hidden lg:flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Blibli</span>
                            </div>
                        </div>
                      
                        <!-- Baris 2: Hanya untuk tablet (2 item di tengah) -->
                        <div class="flex flex-col gap-4 md:flex-row md:gap-4 lg:hidden">
                            <div class="flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Lazada</span>
                            </div>
                            <div class="flex w-32 h-10 bg-yellow-300 rounded-xl text-center items-center justify-center mx-auto">
                                <span class="font-bold text-black">Blibli</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
/* Jika menggunakan CSS custom, pastikan Inter font ter-load dengan weight yang diperlukan */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

/* Atau jika sudah menggunakan Inter, bisa define custom class */
.font-inter-light {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
}
</style>