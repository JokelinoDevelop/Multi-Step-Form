<template>
  <div>
    <div class="flex flex-col items-center justify-center gap-6 py-12" :class="{ 'py-20': windowWidth > 1000 }">
      <img src="@/assets/images/icon-thank-you.svg" alt="" class="w-16">
      <h1 class="text-marineBlue font-[700] text-3xl">Thank you!</h1>
      <p class="max-w-[34ch] text-center text-lg text-coolGray font-[500]"
        :class="{ 'max-w-[50ch]': windowWidth > 1000 }">
        Thanks for confirming your subscription!
        We hope you have fun using our platform. If you ever need support,
        please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useFormStore } from '@/stores/formStore';

const store = useFormStore();

const formData = {
  user: {
    name: store.user.name,
    email: store.user.email,
    phoneNumber: store.user.phoneNumber,
  },
  selectedPlan: store.selectedPlan,
  chosenAddons: store.chosenAddons,
  billingFrequency: store.isChecked ? 'yearly' : 'monthly',
  total: store.total,
};

const windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  console.log(formData);
  alert("You've got the info in the console!")
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
