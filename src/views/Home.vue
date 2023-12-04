<template>
  <div class="bg-magnolia flex flex-col  relative"
    :class="{ 'h-screen justify-center items-center': windowWidth > 1000, 'h-full': windowWidth < 1000 }">
    <picture v-if="windowWidth < 1000">
      <img src="@/assets/images/bg-sidebar-mobile.svg" alt="" class="w-full max-h-[20rem] object-cover relative">
    </picture>

    <div class="max-w-[65rem]"
      :class="{ '-translate-y-[8rem]': windowWidth <= 380, '-translate-y-[10rem]': windowWidth <= 500 && windowWidth > 380, '-translate-y-[13rem]': windowWidth <= 620 && windowWidth > 500, '-translate-y-[16rem]': windowWidth <= 1000 && windowWidth > 620 }">
      <Form />
    </div>


    <div class="w-full bg-white " v-if="store.currentStep < 4 && windowWidth < 1000">
      <NavButtons />
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Form from '@/components/Form.vue';
import NavButtons from '@/components/NavButtons.vue'
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

