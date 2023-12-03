<template>
  <div class="flex items-center justify-center gap-6 bg-magnolia py-4 mt-7 rounded-lg">
    <p class="text-coolGray font-[700] transition-all duration-400" :class="{ 'text-marineBlue': !store.isChecked }">Monthly
    </p>
    <div @click="store.toggleCheckbox" class="cursor-pointer relative inline-block w-12 h-6 bg-marineBlue rounded-full p-1">
      <input type="checkbox" class="absolute opacity-0 w-0 h-0" v-model="store.isChecked" />
      <span class="slider absolute block h-4 w-4 rounded-full bg-white shadow-md transform duration-300 ease-in-out"
        :class="{ 'translate-x-[1.4rem]': store.isChecked }"></span>
    </div>
    <p class="text-coolGray font-[700] transition-all duration-400" :class="{ 'text-marineBlue': store.isChecked }">Yearly</p>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore.js'

const store = useFormStore()


</script>

