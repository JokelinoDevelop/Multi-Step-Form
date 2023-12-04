import { reactive, ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ArcadeIcon from '@/assets/images/icon-arcade.svg'
import AdvancedIcon from '@/assets/images/icon-advanced.svg'
import ProIcon from '@/assets/images/icon-pro.svg'

export const useFormStore = defineStore('form', () => {
  const selectedPlan = ref(null)
  const chosenAddons = ref([])
  const planError = ref(false)
  const planFirstLoad = ref(true)
  const currentStep = ref(0)
  const isChecked = ref(false)

  const toggleCheckbox = () => {
    isChecked.value = !isChecked.value
  }

  function nextStep() {
    switch (currentStep.value) {
      case 0:
        if (validateAll()) {
          currentStep.value++
        }
        break
      case 1:
        // eslint-disable-next-line no-case-declarations
        const plan = validatePlan()
        if (plan) {
          currentStep.value++
        }
        break
      case 2:
      case 3:
        currentStep.value++
        break
    }
  }

  function prevStep() {
    if (currentStep.value === 1) {
      planFirstLoad.value = true
    }
    currentStep.value--
  }

  const user = reactive({
    name: '',
    email: '',
    phoneNumber: '',
    errors: {
      name: '',
      email: '',
      phoneNumber: ''
    }
  })

  function validateName() {
    if (user.name.length === 0) {
      user.errors.name = 'This field is required!'
      return false
    }
    if (user.name.length < 3) {
      user.errors.name = 'The username is invalid!'
      return
    }
    user.errors.name = ''
    return true
  }

  function validateEmail() {
    if (user.email.length === 0) {
      user.errors.email = 'This field is required'
      return false
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(user.email)) {
      user.errors.email = 'The email address is invalid!'
      return false
    }
    user.errors.email = ''
    return true
  }

  function validatePhoneNumber() {
    if (user.phoneNumber.length === 0) {
      user.errors.phoneNumber = 'This field is required'
      return false
    }
    const validationRegex = /^\d{8}$/
    user.errors.phoneNumber = validationRegex.test(user.phoneNumber)
      ? ''
      : 'Write a correct phone number!'
    return user.errors.phoneNumber ? false : true
  }

  function validateAll() {
    return validateName() && validateEmail() && validatePhoneNumber()
  }

  const plans = [
    {
      name: 'Arcade',
      monthly: 9,
      yearly: 90,
      icon: ArcadeIcon
    },
    {
      name: 'Advanced',
      monthly: 12,
      yearly: 120,
      icon: AdvancedIcon
    },
    {
      name: 'Pro',
      monthly: 15,
      yearly: 150,
      icon: ProIcon
    }
  ]

  const addons = [
    {
      name: 'Online Service',
      title: 'Access to multiplayer games',
      monthly: 1,
      yearly: 10
    },
    {
      name: 'Larger Storage',
      title: 'Extra 1TB of cloud save',
      monthly: 2,
      yearly: 20
    },
    {
      name: 'Customizable profile',
      title: 'Custom theme on your profile',
      monthly: 2,
      yearly: 20
    }
  ]

  function selectPlan(plan) {
    selectedPlan.value = plan
    planError.value = false
  }

  function validatePlan() {
    if (planFirstLoad.value) {
      planFirstLoad.value = false
      return false
    }
    if (selectedPlan.value) {
      planError.value = false
      return true
    }
    planError.value = true
    return false
  }

  function putAddon(addon) {
    if (chosenAddons.value.includes(addon)) {
      chosenAddons.value = chosenAddons.value.filter((item) => item !== addon)
      return
    }
    chosenAddons.value.push(addon)
  }

  const total = computed(() => {
    let planTotal = isChecked.value ? selectedPlan.value.yearly : selectedPlan.value.monthly

    let addonsTotal = chosenAddons.value.reduce((accumulator, addon) => {
      return accumulator + (isChecked.value ? addon.yearly : addon.monthly)
    }, 0)

    return planTotal + addonsTotal
  })

  return {
    selectedPlan,
    planError,
    planFirstLoad,
    user,
    plans,
    addons,
    chosenAddons,
    currentStep,
    isChecked,
    total,
    selectPlan,
    putAddon,
    validateName,
    validateEmail,
    validatePhoneNumber,
    validatePlan,
    validateAll,
    prevStep,
    nextStep,
    toggleCheckbox
  }
})
