<template>
  <div>
    <h1 class="text-2xl font-[700] text-marineBlue" :class="{ 'text-3xl': windowWidth > 1000 }">Select your plan</h1>
    <p class="mt-2 max-w-[30ch] text-lg text-coolGray" :class="{ 'max-w-[50ch]': windowWidth > 1000 }">You have the option
      of monthly or yearly billing</p>

    <div class="mt-6 flex gap-4 w-full"
      :class="{ 'flex-row justify-between': windowWidth > 1000, 'flex-col': windowWidth < 1000 }">
      <div v-for="plan in store.plans" :key="plan.name" @click="store.selectPlan(plan)"
        :class="{ 'bg-magnolia border-purplishBlue': store.selectedPlan === plan, 'flex-col': windowWidth > 1000 }"
        class="flex flex-1 gap-4 p-4 border border-lightGray rounded-lg cursor-pointer transition-all duration-300">
        <img :src="plan.icon" alt="" class="w-12" :class="{ 'w-10 mb-6': windowWidth > 1000 }">
        <div>
          <h3 class="font-[700] text-marineBlue tracking-wider">{{ plan.name }}</h3>
          <p class="text-coolGray">${{ store.isChecked ? plan.yearly : plan.monthly }}/<span>{{ store.isChecked ? 'yr' :
            'mo'
          }}</span></p>
          <span v-if="store.isChecked" class="text-marineBlue font-[500] text-sm ">2 months free</span>
        </div>
      </div>
    </div>

    <ErrorSpan v-if="store.planError">
      <p class="pl-4 mt-4 tracking-wide">- You must select a plan</p>
    </ErrorSpan>

    <ToggleCard />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFormStore } from '@/stores/formStore';
import ErrorSpan from '@/components/ErrorSpan.vue'
import ToggleCard from '@/components/ToggleCard.vue';

const store = useFormStore()

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
