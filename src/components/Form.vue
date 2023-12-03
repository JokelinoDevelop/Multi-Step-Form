<template>
  <div>
    <ButtonsStep v-if="windowWidth < 1000" />

    <form class="bg-white mx-6 px-6 pb-12 shadow-md rounded-lg"
      :class="{ 'grid grid-cols-11 grid-rows-6 h-[35rem] w-[60rem] gap-4 pt-3 pl-3 pb-3': windowWidth > 1000 }">
      <ButtonsStep v-if="windowWidth > 1000" :class="'rounded-lg col-start-1 col-end-4 row-start-1 row-end-7'"
        style="background-image: url('../src/assets/images/bg-sidebar-desktop.svg')" />
      <component :is="components[store.currentStep]" :class="'pt-6 col-start-5 col-end-11 row-start-1 row-end-4'" />
      <NavButtons v-if="windowWidth > 1000 && store.currentStep < 4"
        class='col-start-5 col-end-11 row-start-6 row-end-7' />
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ButtonsStep from '@/components/ButtonsStep.vue';
import UserStep from '@/components/UserStep.vue';
import PlansStep from '@/components/PlansStep.vue';
import AddonsStep from '@/components/AddonsStep.vue';
import SummaryStep from '@/components/SummaryStep.vue';
import ThankYouStep from '@/components/ThankYouStep.vue';
import NavButtons from '@/components/NavButtons.vue'

import { useFormStore } from '@/stores/formStore.js'

const store = useFormStore()

const components = [
  UserStep,
  PlansStep,
  AddonsStep,
  SummaryStep,
  ThankYouStep
]

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