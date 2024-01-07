<script setup lang="ts">
import { ref, reactive } from 'vue'
const darkMode = ref(false)
const darkModeLabel = ref('Light')
const emailEl = ref<HTMLInputElement | null>(null)
const passwordEl = ref<HTMLInputElement | null>(null)

const formState = reactive<{
  email: {
    value: string
    selector: string
  }
  password: {
    value: string
    selector: string
  }
}>({
  email: {
    value: '',
    selector: 'email'
  },
  password: {
    value: '',
    selector: 'password'
  }
})

const toggleDarkMode = () => {
  //Toggling!
  darkMode.value = !darkMode.value
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
    darkModeLabel.value = 'Light'
  } else {
    document.documentElement.classList.remove('dark')
    darkModeLabel.value = 'Dark'
  }
}
const submit = () => {
  for (const e of [formState.email, formState.password]) {
    const { value, selector } = e
    const el = document.getElementById(selector) as HTMLInputElement
    console.log({ el, value })
    if (!value.trim()) {
      el.setCustomValidity('nope')
      return
    }
    el.setCustomValidity('')
  }
}
</script>
<template>
  <button
    class="absolute top-3 left-3 rounded-xl border border-gray-400 py-1 px-8 dark:text-white"
    @click.stop="toggleDarkMode"
  >
    {{ darkModeLabel }}
  </button>
  <div class="flex h-full w-full items-center justify-center dark:bg-rich-black">
    <div class="flex h-[485px] w-[592px] flex-col items-center rounded-2xl border p-5 shadow-lg">
      <picture class="dark:brightness-0 dark:invert"
        ><source
          media="(max-width: 567px)"
          srcset="https://cdn.wk-cdn.it/2023.6.5/_ui/img/WikiLogo/Logo-wikicasa.svg"
          height="auto"
          width="195" />
        <source
          media="(min-width: 568px)"
          srcset="https://cdn.wk-cdn.it/2023.6.5/_ui/img/WikiLogo/Logo-wikicasa.svg"
          height="auto"
          width="235" />
        <img
          src="https://cdn.wk-cdn.it/2023.6.5/_ui/img/WikiLogo/Logo-wikicasa.svg"
          height="55"
          width="auto"
          alt="wikicasa logo"
      /></picture>
      <!-- Dark mode button -->
      <button class="my-5 w-full rounded-2xl border border-periwinkle p-2 text-sm" type="button">
        <img
          height="24"
          width="24"
          src="https://cdn.wk-cdn.it/2023.6.5/_ui/img/Icons/Social/signin/google.svg"
          alt="Google"
          class="inline-block"
        />
        <span class="ml-2 dark:text-white">Accedi con Google</span>
      </button>
      <p
        class="relative w-full text-center font-semibold before:absolute before:left-0 before:top-3 before:h-[1px] before:w-[40%] before:bg-slate-300 after:absolute after:right-0 after:top-3 after:h-[1px] after:w-[40%] after:bg-slate-300 dark:text-white"
      >
        oppure
      </p>
      <form class="w-full justify-center" @submit.prevent.stop="submit">
        <!-- Email input -->
        <div class="relative mt-3">
          <input
            ref="emailEl"
            id="email"
            type="email"
            v-model="formState.email.value"
            @input="emailEl?.setCustomValidity('')"
            placeholder="mock"
            class="peer h-10 w-full border-b-2 border-gray-300 text-eerie-black placeholder-transparent invalid:border-fleery-rose focus:border-w-blue focus:outline-none focus:invalid:border-fleery-rose dark:bg-rich-black dark:text-white"
          />
          <label
            for="email"
            class="pointer-events-none absolute -top-3.5 left-0 text-sm text-gray-900 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900 dark:text-gray-200 dark:peer-focus:text-gray-200"
            >Email</label
          >
        </div>
        <!-- Password input -->
        <div class="relative mt-9 pt-3">
          <input
            ref="passwordEl"
            id="password"
            type="password"
            v-model="formState.password.value"
            @input="passwordEl?.setCustomValidity('')"
            placeholder="mock"
            class="peer h-10 w-full border-b-2 border-gray-300 text-eerie-black placeholder-transparent focus:border-w-blue focus:outline-none dark:bg-rich-black dark:text-white"
          />
          <label
            for="password"
            class="pointer-events-none absolute -top-3.5 left-0 text-sm text-gray-900 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-900 dark:text-gray-200 dark:peer-focus:text-gray-200"
            >Password</label
          >
        </div>
        <p class="my-5 text-sm text-w-blue">Password dimenticata?</p>
        <button
          class="h-10 w-full rounded-3xl bg-w-blue font-semibold text-white dark:bg-white dark:text-w-blue"
          type="submit"
        >
          Accedi
        </button>
      </form>
    </div>
  </div>
</template>
