<template>
  <div class="flex justify-end gap-4 py-3"
    :class="{ 'justify-between': store.currentStep > 0, 'px-5': windowWidth < 1000 }">
    <button v-if="store.currentStep > 0" class="px-5 py-3 rounded-md font-[500] text-coolGray"
      @click.prevent="store.prevStep()">
      Go Back
    </button>
    <button class="px-5 py-3 rounded-md font-[500] bg-marineBlue text-white"
      :class="{ 'bg-purplishBlue px-6': store.currentStep === 3 }" @click.prevent="store.nextStep()">
      {{ store.currentStep === 3 ? 'Confirm' : 'Next Step' }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFormStore } from '@/stores/formStore';
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
