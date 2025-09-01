<template>
    <div class="bg">
        <div class="content">
            <div class="login-box bg-[#1C1C1C] p-8 rounded-xl border border-yellow-500 shadow-md relative fade-in">
                <!-- Close Button -->
                <button
                    @click="goToHome"
                    class="absolute top-4 right-4 text-red-500 hover:text-red-400 transition-colors duration-200 cursor-pointer"
                    title="Kembali ke Beranda"
                >
                    <XMarkIcon class="w-6 h-6" />
                </button>

                <!-- Logo -->
                <div class="flex items-center justify-center mb-10 p-6">
                    <img src="../assets/img/logo.png" alt="Afydro" class="w-24" />
                    <span class="font-extrabold text-2xl text-white ml-2">AFYDRO</span>
                </div>

                <!-- Profile Icon with Text -->
                <div class="flex flex-col mb-6">
                    <div class="flex items-center">
                        <UserIcon class="w-[30px] h-[30px] text-white" />
                        <span class="ml-2 text-white font-normal">Sign Up</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-2">Buat akun baru untuk bergabung dengan kami.</p>
                </div>

                <form>
                    <!-- Nama Lengkap -->
                    <div class="mb-4">
                        <input
                            type="text"
                            id="namaLengkap"
                            class="w-full px-4 py-2 border border-[#717171] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                            placeholder="Masukkan nama lengkap"
                            required
                        />
                    </div>

                    <!-- Username -->
                    <div class="mb-4">
                        <input
                            type="text"
                            id="username"
                            class="w-full px-4 py-2 border border-[#717171] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                            placeholder="Masukkan username"
                            required
                        />
                    </div>

                    <!-- Email -->
                    <div class="mb-4">
                        <input
                            type="email"
                            id="email"
                            class="w-full px-4 py-2 border border-[#717171] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                            placeholder="Masukkan email"
                            required
                        />
                    </div>

                    <!-- Password -->
                    <div class="mb-2 relative">
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            id="password"
                            v-model="password"
                            class="w-full px-4 py-2 border border-[#717171] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                            placeholder="Masukkan password"
                            required
                        />
                        <button
                            type="button"
                            @click="togglePassword"
                            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-300"
                        >
                            <EyeIcon v-if="!showPassword" class="w-5 h-5" />
                            <EyeSlashIcon v-else class="w-5 h-5" />
                        </button>
                    </div>

                    <!-- Additional Text -->
                    <div class="mb-6">
                        <p class="text-xs text-gray-400">Sudah punya akun? 
                            <router-link to="/login" class="text-blue-400 underline hover:text-blue-300">Masuk</router-link> di sini.
                        </p>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition"
                    >
                        Sign Up
                    </button>
                </form>

                <!-- Divider -->
                <div class="my-6 flex items-center">
                    <hr class="flex-1 border-gray-600">
                    <span class="px-4 text-gray-400 text-xs">atau daftar dengan</span>
                    <hr class="flex-1 border-gray-600">
                </div>

                <!-- Google Login Button -->
                <div class="flex justify-center">
                    <button
                        type="button"
                        class="bg-white rounded-full p-3 hover:bg-gray-100 transition-colors duration-200 shadow-md cursor-pointer"
                        title="Daftar dengan Google"
                    >
                        <!-- Google Logo SVG -->
                        <svg class="w-6 h-6" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { UserIcon, EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/vue/24/solid';

export default {
    components: {
        UserIcon,
        EyeIcon,
        EyeSlashIcon,
        XMarkIcon,
    },
    data() {
        return {
            password: '',
            showPassword: false,
        };
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        goToHome() {
            this.$router.push('/');
        },
    },
};
</script>

<style scoped>
.bg {
    min-height: 100vh;
    width: 100vw;
    background-image: url('../assets/banner.png'); /* Ganti dengan gambar latar belakang Anda */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
}

.login-box {
    max-width: 400px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6); /* Shadow lebih terlihat */
    
    /* Hide scrollbar for webkit browsers (Chrome, Safari, Edge) */
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
}

.login-box::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

@media (max-width: 640px) {
    .login-box {
        width: 90%; /* Lebar card lebih kecil pada tampilan mobile */
    }
}

input::placeholder {
    color: #717171;
    font-size: 0.75rem; /* Ukuran font diperkecil lagi (12px) */
}

/* Fade in animation */
.fade-in {
    animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>