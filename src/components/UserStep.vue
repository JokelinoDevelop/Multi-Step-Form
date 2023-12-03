<template>
  <div>
    <h1 class="text-2xl font-[700] text-marineBlue">Personal Info</h1>
    <p class="mt-2 max-w-[30ch] text-lg text-coolGray">Please provide your name, email address, and phone number</p>

    <div class="mt-6 flex flex-col gap-4"> <!-- User Inputs -->
      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <label for="name" class="text-marineBlue font-[500]">Name</label>
          <ErrorSpan v-if="store.user.errors.name">{{ store.user.errors.name }}</ErrorSpan>
        </div>

        <input type="text" name="name" placeholder="e.g.Stephen King"
          class="w-full border border-lightGray py-2 pl-4 rounded-md"
          :class="{ 'border-strawberryRed': store.user.errors.name }" v-model="store.user.name"
          @change="store.validateName()">
      </div>

      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <label for="name" class="text-marineBlue font-[500]">Email Address</label>
          <ErrorSpan v-if="store.user.errors.email">{{ store.user.errors.email }}</ErrorSpan>
        </div>

        <input type="email" name="name" placeholder="e.g.stephenking@lorem.com"
          class="w-full border border-lightGray py-2 pl-4 rounded-md"
          :class="{ 'border-strawberryRed': store.user.errors.email }" v-model="store.user.email"
          @change="store.validateEmail()">

      </div>

      <div class="flex flex-col gap-1">
        <div class="flex items-center justify-between">
          <label for="name" class="text-marineBlue font-[500]">Phone Number</label>
          <ErrorSpan v-if="store.user.errors.phoneNumber">{{ store.user.errors.phoneNumber }}</ErrorSpan>
        </div>

        <input type="text" name="name" placeholder="e.g.+75 123 456"
          class="w-full border border-lightGray py-2 pl-4 rounded-md"
          :class="{ 'border-strawberryRed': store.user.errors.phoneNumber }" v-model.trim="store.user.phoneNumber"
          @change="store.validatePhoneNumber()">
      </div>
    </div>

  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore';
import ErrorSpan from '@/components/ErrorSpan.vue';

const store = useFormStore()


</script>

