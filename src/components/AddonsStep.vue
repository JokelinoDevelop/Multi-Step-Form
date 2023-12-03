<template>
  <div>
    <h1 class="text-2xl font-[700] text-marineBlue">Pick add-ons</h1>
    <p class="mt-2 max-w-[30ch] text-lg text-coolGray">Add-ons help enhance your gaming experience</p>

    <div class="mt-6 flex flex-col gap-4">
      <div v-for="addon in store.addons" :key="addon.name" @click="store.putAddon(addon)"
        :class="{ 'bg-alabaster border-purplishBlue': store.chosenAddons.includes(addon) }"
        class="flex items-center justify-between p-4 bg-white border border-lightGray rounded-lg cursor-pointer transition-all duration-300">
        <div class="flex items-center gap-4">
          <div
            class="border border-coolGray rounded-md w-6 h-6 flex items-center justify-center transition-all duration-300"
            :class="{ 'bg-purplishBlue': store.chosenAddons.includes(addon) }">
            <img src="@/assets/images/icon-checkmark.svg" alt="" class="object-cover">
          </div>

          <div>
            <h3 class="font-[700] text-marineBlue tracking-wider">{{ addon.name }}</h3>
            <p class="text-coolGray">{{ addon.title }}</p>
          </div>
        </div>


        <div>
          <p class="text-purplishBlue font-[500]">+${{ store.isChecked ? addon.yearly : addon.monthly }}/<span>{{
            store.isChecked ?
            'yr' :
            'mo'
          }}</span></p>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore'

const store = useFormStore()


</script>

<style scoped>
.bg-with-image {
  /* Add your background image property here */
  background-image: url('@/assets/images/icon-checkmark.svg');
  /* Add other styles as needed */
}
</style>