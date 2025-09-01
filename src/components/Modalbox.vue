<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-6 rounded-lg w-1/2">
      <h2 class="text-xl font-bold mb-4">Modal Box</h2>
      <p>Ini adalah konten modal sementara.</p>
      <button @click="$emit('close')" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Tutup</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isOpen']
}
</script>
