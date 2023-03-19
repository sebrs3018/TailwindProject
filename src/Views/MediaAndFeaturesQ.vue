<script setup></script>
<template>
  <div class="m-5 flex flex-col">
    <h2 class="pt-2 text-2xl">Media and feature queries</h2>

    <h4 class="mt-4 mb-1 text-lg">Responsive breakpoints</h4>
    <p>We can apply all the following breakpoint in ALL the utility classes</p>
    <p>Syntax: [breakpoint-prefix]:[utility-class]</p>
    <p class="mt-2">E.g:</p>
    <p>md:w-32 lg:w-48</p>
    <table class="mt-5">
      <thead class="">
        <th
          class="text-left first:pr-5"
          :key="`th_${index}`"
          v-for="(colName, index) in ['Breakpoint prefix', 'Minimum width', 'CSS']"
          v-html="colName"
        ></th>
      </thead>
      <tbody>
        <tr
          :key="`tr_${index}`"
          v-for="(bp, index) in [
            {
              breakpointPrefix: 'sm',
              minimumWidth: '640px',
              CSS: '@media (min-width: 640px) { ... }'
            },
            {
              breakpointPrefix: 'md',
              minimumWidth: '768px',
              CSS: '@media (min-width: 768px) { ... }'
            },
            {
              breakpointPrefix: 'lg',
              minimumWidth: '1024px',
              CSS: '@media (min-width: 1024px) { ... }'
            },
            {
              breakpointPrefix: 'xl',
              minimumWidth: '1280px',
              CSS: '@media (min-width: 1280px) { ... }'
            },
            {
              breakpointPrefix: '2xl',
              minimumWidth: '1536px',
              CSS: '@media (min-width: 1536px) { ... }'
            }
          ]"
        >
          <td>
            {{ bp.breakpointPrefix }}
          </td>
          <td>
            {{ bp.minimumWidth }}
          </td>
          <td>
            {{ bp.CSS }}
          </td>
        </tr>
      </tbody>
    </table>

    <p class="mt-5">If we want to target a range we can use the modifier max-[breakpoint-prefix]</p>
    <p>The available breakpoints are in the following table</p>
    <p class="mt-2">E.g:</p>
    <p>md:max-xl:flex //Targeting from 768px to 1280px</p>
    <table class="mt-5">
      <thead>
        <th
          class="text-left first:pr-5"
          :key="`modifier_${index}`"
          v-for="(colName, index) in ['Modifier', 'Media Query']"
          v-html="colName"
        />
      </thead>
      <tbody>
        <tr
          :key="`modifier_${index}`"
          v-for="(modifier, index) in [
            {
              modifier: 'max-sm',
              mediaQuery: '@media not all and (min-width: 640px) { ... }'
            },
            {
              modifier: 'max-md',
              mediaQuery: '@media not all and (min-width: 768px) { ... }'
            },
            {
              modifier: 'max-lg',
              mediaQuery: '@media not all and (min-width: 1024px) { ... }'
            },
            {
              modifier: 'max-xl',
              mediaQuery: '@media not all and (min-width: 1280px) { ... }'
            },
            {
              modifier: 'max-2xl',
              mediaQuery: '@media not all and (min-width: 1536px) { ... }'
            }
          ]"
        >
          <td>
            {{ modifier.modifier }}
          </td>
          <td>
            {{ modifier.mediaQuery }}
          </td>
        </tr>
      </tbody>
    </table>

    <p class="mt-5">
      In this example we render 3 columns when the viewport is less than md breakpoint, from md to
      lg we render 4 columns and from lg on we render 6 columns
    </p>
    <div class="mt-5 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      <div v-for="n in 10" class="m-2 h-10 w-10 bg-green-600" />
    </div>

    <h4 class="mt-5 mb-1 text-lg">Prefers color scheme</h4>
    <p>
      If you want to synchronize your UI with the system theme, you can use the
      <span class="text-blue-400">dark</span> modifier
    </p>
    <div
      class="mt-4 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-900"
    >
      <div>
        <span
          class="inline-flex items-center justify-center rounded-md bg-indigo-500 p-2 shadow-lg"
        >
          <svg
            class="h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          ></svg>
        </span>
      </div>
      <h3 class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white">
        Writes Upside-Down
      </h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
        The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even
        works in outer space.
      </p>
    </div>
    <h4 class="mt-5 mb-1 text-lg">Prefers reduced motion</h4>
    <p>
      To synchronize the visual effects of the UI with the ones of the system, we can use the
      <span class="text-blue-400">motion-reduced</span> modifier
    </p>

    <button
      type="button"
      class="flex w-36 items-center justify-center rounded-lg bg-indigo-500 p-2"
      disabled
    >
      <svg
        class="-ml-1 mr-3 h-5 w-5 animate-spin text-white motion-reduce:hidden"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      Processing...
    </button>
    <h4 class="mt-5 mb-1 text-lg">Prefers contrast</h4>
    <p>
      In case the user requested less contrast we can use the
      <span class="text-blue-400">contrast-less</span> modifier
    </p>
    <p>
      If he requested more contrast we can use the
      <span class="text-blue-400">contrast-more</span> modifier
    </p>
    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Social Security Number</span>
        <input
          class="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
        />
        <p class="mt-2 text-sm text-slate-600 opacity-30 contrast-more:opacity-100">
          We need this to steal your identity.
        </p>
      </label>
    </form>
  </div>
</template>
