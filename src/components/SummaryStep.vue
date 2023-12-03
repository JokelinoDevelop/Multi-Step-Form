<template>
  <div>
    <h1 class="text-2xl font-[700] text-marineBlue">Finishing up</h1>
    <p class="mt-2 max-w-[30ch] text-lg text-coolGray">Double-check everything looks OK before confirming.</p>

    <div class="mt-6 bg-magnolia p-4 rounded-lg"> <!-- Summary Card-->
      <div class="flex items-center justify-between"> <!-- Plan -->
        <div>
          <p class="text-marineBlue font-[700]">{{ store.selectedPlan.name }} ({{ store.isChecked ? 'Yearly' : 'Monthly'
          }})</p>
          <a href="#" @click.prevent="store.currentStep = 1"
            class="underline text-coolGray font-[500] hover:text-purplishBlue transition-all duration-200">Change</a>
        </div>
        <p class="text-marineBlue font-[700]">${{ store.isChecked ? store.selectedPlan.yearly : store.selectedPlan.monthly
        }}/{{ store.isChecked ? 'yr' : 'mo' }}</p>
      </div>

      <hr class="my-4">

      <ul class="grid gap-3"> <!-- Addons -->
        <li v-for="addon in store.chosenAddons" :key="addon.name" class="flex items-center justify-between">
          <p class="text-coolGray">{{ addon.name }}</p>
          <span class="text-marineBlue font-[500]">+${{ store.isChecked ? addon.yearly : addon.monthly }}/{{
            store.isChecked ? 'yr' : 'mo' }}</span>
        </li>
      </ul>

    </div>

    <div class="flex items-center justify-between px-4 pt-4 mt-3">
      <p class="text-coolGray font-[500]">Total (per {{ store.isChecked ? 'year' : 'month' }})</p>
      <span class="font-[700] text-purplishBlue">${{ store.total }}/{{ store.isChecked ? 'yr' : 'mo' }}</span>
    </div>
  </div>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore';

const store = useFormStore()

</script>
