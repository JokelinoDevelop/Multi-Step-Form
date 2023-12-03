<template>
  <div>
    <ul class="flex relative gap-6 mb-10"
      :class="{ 'flex-col p-6': windowWidth > 1000, 'justify-center': windowWidth < 1000 }">
      <li v-for="step in steps" :key="step" class="flex items-center gap-3">
        <p class="border border-white w-9 text-center py-[0.3rem] rounded-full font-[700] cursor-pointer transition-all
        duration-300"
          :class="{ 'bg-lightBlue text-marineBlue': store.currentStep === step.num - 1, ' text-white': !(store.currentStep === step.num - 1) }">
          {{ step.num }}
        </p>
        <div v-if="windowWidth > 1000"> <!-- Step Info-->
          <p class="text-coolGray text-sm font-[700]">STEP {{ step.num }}</p>
          <h3 class="text-white font-[500] text-md">{{ step.name }}</h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFormStore } from '@/stores/formStore.js'

const steps = [
  {
    num: 1,
    name: 'YOUR INFO',
  },
  {
    num: 2,
    name: 'SELECT PLAN',
  },
  {
    num: 3,
    name: 'ADD-ONS',
  },
  {
    num: 4,
    name: 'SUMMARY',
  },
]

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
