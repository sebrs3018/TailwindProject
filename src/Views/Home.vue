<script setup>
import { functionalSvg } from '../components/functionalSvg'
</script>
<template>
  <functionalSvg />
  <button
    class="rounded-lg border-2 bg-violet-500 p-2 text-sky-50 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
  >
    <router-link to="/tailwind-states">Tailwind states</router-link>
  </button>
  <button
    class="rounded-lg border-2 bg-violet-500 p-2 text-sky-50 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
  >
    <router-link to="/media-and-feature-queries">Media And Feature Queries</router-link>
  </button>
  <button
    class="rounded-lg border-2 bg-violet-500 p-2 text-sky-50 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
  >
    <router-link to="/function-and-directives">Function and directives</router-link>
  </button>
  <button
    class="rounded-lg border-2 bg-violet-500 p-2 text-sky-50 hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
  >
    <router-link to="/floating-label-demo">Floating label demo</router-link>
  </button>
</template>
