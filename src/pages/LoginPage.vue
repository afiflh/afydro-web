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
                        <span class="ml-2 text-white font-normal">Sign In</span>
                    </div>
                    <p class="text-xs text-gray-400 mt-2">Silakan masuk untuk melanjutkan ke akun anda.</p>
                </div>

                <form>
                    <div class="mb-4">
                        <input
                            type="email"
                            id="email"
                            class="w-full px-4 py-2 border border-[#717171] rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm"
                            placeholder="Masukkan email"
                            required
                        />
                    </div>
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
                        <p class="text-xs text-gray-400">Lupa kata sandi?</p>
                        <p class="text-xs text-gray-400">Belum punya akun? 
                            <router-link to="/register" class="text-blue-400 underline hover:text-blue-300">Daftar</router-link> di sini.
                        </p>
                    </div>

                    <button
                        type="submit"
                        class="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition"
                    >
                        Sign in
                    </button>
                </form>
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
    height: 100vh;
    width: 100vw;
    background-image: url('../assets/banner.png'); /* Ganti dengan gambar latar belakang Anda */
    background-size: cover;
    background-position: center;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.login-box {
    max-width: 400px;
    width: 100%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.6); /* Shadow lebih terlihat */
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