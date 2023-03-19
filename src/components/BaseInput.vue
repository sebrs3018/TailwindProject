<script>
// use normal <script> to declare options
export default {
  inheritAttrs: false
}
</script>
<script setup>
import { useAttrs } from 'vue'

const props = defineProps({
  label: String
})
const attrs = useAttrs()
</script>
<template>
  <div class="relative" :class="attrs.class">
    <input
      :type="attrs.type"
      :placeholder="attrs.placeholder"
      :required="attrs.required"
      class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus invalid:focus:border-rose-600 placeholder:invisible"
    />
    <!-- Pointer-events-none remove the possibility of the user to interact with the label so it won't catch any input event. So, it won't cover the input allowing it be be selectable-->
    <label
      class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-required:after:content-['*'] peer-required:after:ml-0.5 peer-required:after:text-red-500 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-400 peer-focus:text-sm focus:text-red pointer-events-none"
      v-html="label"
    />
  </div>
</template>
