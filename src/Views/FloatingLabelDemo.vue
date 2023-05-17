<script setup lang="ts"></script>
<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="flex h-[485px] w-[592px] flex-col items-center p-5">
      <picture
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
      <button class="my-5 w-full rounded-2xl border border-periwinkle p-2 text-sm" type="button">
        <img
          height="24"
          width="24"
          src="https://cdn.wk-cdn.it/2023.6.5/_ui/img/Icons/Social/signin/google.svg"
          alt="Google"
          class="inline-block"
        />
        <span class="ml-2">Accedi con Google</span>
      </button>
      <p
        class="relative w-full text-center font-semibold before:absolute before:left-0 before:top-3 before:h-[1px] before:w-[40%] before:bg-slate-300 after:absolute after:right-0 after:top-3 after:h-[1px] after:w-[40%] after:bg-slate-300"
      >
        oppure
      </p>
      <form class="w-full justify-center">
        <div class="relative mt-3">
          <input
            id="email"
            type="email"
            placeholder="Email"
            class="h-10 w-full border-b-2 border-gray-300 text-eerie-black focus:border-w-blue focus:outline-none"
          />
        </div>
        <div class="relative mt-3">
          <input
            id="password"
            type="password"
            placeholder="Password"
            class="h-10 w-full border-b-2 border-gray-300 text-eerie-black focus:border-w-blue focus:outline-none"
          />
        </div>
        <p class="my-5 text-sm text-w-blue">Password dimenticata?</p>
        <button class="h-10 w-full rounded-3xl bg-w-blue text-white" type="submit">Accedi</button>
      </form>
    </div>
  </div>
</template>
