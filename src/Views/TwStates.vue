<script setup>
import { ref } from 'vue'
import BaseInput from '../components/BaseInput.vue'

const people = ref([
  {
    name: 'Jane Cooper',
    title: 'Regional Paradigm Technician',
    email: 'a@hotmail.com',
    phone: 3333333333
  },
  {
    name: 'Cody Fisher',
    title: 'Product Directives Officer',
    email: 'b@hotmail.com',
    phone: 3333333333
  },
  {
    name: 'Leonard Krashner',
    title: 'Senior Designer',
    email: 'c@hotmail.com',
    phone: 3333333333
  },
  {
    name: 'Emily Selman',
    title: 'VP, Hardware Engineering',
    email: 'd@hotmail.com',
    phone: 3333333333
  },
  {
    name: 'Anna Roberts',
    title: 'Chief Strategy Officer',
    email: 'es@hotmail.com',
    phone: 3333333333
  }
])
</script>
<template>
  <div class="flex flex-col p-5">
    <h2 class="text-2xl">Pseudo classes</h2>
    <div class="pl-4 pt-2">
      <h4 class="text-lg">Hover, focus and active</h4>
      <p>Syntax: [state]:[class]</p>
      <button
        class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2 max-w-xs text-white"
      >
        Save changes
      </button>
    </div>
    <h4 class="text-lg">First, last and even</h4>
    <table>
      <thead>
        <th
          class="text-left"
          v-for="(columnName, index) in ['Name', 'Title', 'Email']"
          :key="`th_${index}`"
        >
          {{ columnName }}
        </th>
      </thead>
      <tbody>
        <!-- Use a white background for odd rows, and slate-50 for even rows -->
        <tr class="odd:bg-white even:bg-slate-50" v-for="(row, index) in people">
          <td>{{ row.name }}</td>
          <td>{{ row.title }}</td>
          <td>{{ row.email }}</td>
        </tr>
      </tbody>
    </table>
    <h4 class="text-lg">Form states</h4>
    <form>
      <label class="block">
        <span class="block text-sm font-medium text-slate-700">Username</span>
        <!-- Using form state modifiers, the classes can be identical for every input -->
        <input
          type="text"
          value="tbone"
          disabled
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <label class="block pt-2">
        <span class="block text-sm font-medium text-slate-700">Email<sup>*</sup></span>
        <!-- Using form state modifiers, the classes can be identical for every input -->
        <input
          type="email"
          value=""
          required
          class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <button type="submit" class="bg-blue-500 text-white mt-2 p-2 rounded-md">Save changes</button>
    </form>
    <div class="pt-5">
      <h4 class="text-lg">Styling based on parent state (group-{modifier})</h4>
      <p>The modifiers can be any state as: hover, active, focus...</p>
      <a
        href="#"
        class="mt-4 group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div class="flex items-center space-x-3">
          <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
        </div>
        <p class="text-slate-500 group-hover:text-white group-active:text-red-600 text-sm">
          Create a new project from a variety of starting templates.
        </p>
      </a>
      <h4 class="text-lg">Differentiating nested groups</h4>
      <p>
        In order to differentite multiple parent groups, we can give them an id with the following
        syntax: group/[id]
      </p>
      <p>To refer to them from the children: group-[modifier]/[id]:[class]</p>
      <ul role="list">
        <li
          v-for="(person, index) in people"
          :key="`li_${index}`"
          class="group/item my-2 p-2 hover:bg-slate-100 max-w-md relative"
        >
          <div>
            <a :href="person.url">{{ person.name }}</a>
            <p>{{ person.title }}</p>
          </div>
          <a
            class="px-3 py-1 rounded-xl group/edit hidden hover:bg-slate-200 group-hover/item:block group-hover/item:absolute group-hover/item:right-3 group-hover/item:top-4"
            :href="`tel:${person.phone}`"
          >
            <span class="group-hover/edit:text-gray-700">Call</span>
          </a>
        </li>
      </ul>
      <h4 class="text-lg">Arbitrary groups</h4>
      <p>
        In case we don't know in advance what is the id of the parent group, we can provide an
        arbitrary selector with the following syntax:
      </p>
      <p>group-[selector]</p>
      <div class="group not-published border-red-400 border p-2">
        <span
          >The visible child is not shown since the selector we are providing is
          group-[.is-published]</span
        >
        <div class="invisible group-[.is-published]:visible">Published</div>
      </div>
      <div class="group is-published">
        <div class="hidden group-[.is-published]:block">Published</div>
      </div>
    </div>
    <!-- TODO: keep going from https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state -->
    <h2 class="pt-2 text-2xl">Pseudo elements</h2>
    <div class="">
      <h4 class="text-lg">Styling based on sibling state (peer-{modifier})</h4>
      <p>
        In case we need to differentiate the peers, we can use the same syntax of the parent
        modifier: peer-[modifier]/[id]
      </p>
      <p>
        We can style the sibling (iff they are AFTER the sibling we set the peer class) and also use
        the states!
      </p>
      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input type="email" class="peer border px-2" required />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <BaseInput class="mt-5" type="password" placeholder="Password" label="Password" />
      </form>
      <h4 class="text-lg mt-5">Before, after and placeholder</h4>
      <p>We can set ::before and ::after content by using after and before modifiers</p>
      <p>Similarly, we can style the ::placeholder by using the placeholder modifier</p>
      <BaseInput class="mt-4" type="text" required placeholder="Username" label="Username" />
    </div>
    <h4 class="text-lg mt-5">File input buttons</h4>
    <p>Yes, you guessed it, there is also a file modifier</p>
    <form class="flex items-center space-x-6 mt-5">
      <div class="shrink-0">
        <img
          class="h-16 w-16 object-cover rounded-full"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
          alt="Current profile photo"
        />
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </form>
    <h4 class="text-lg mt-5">List markers</h4>
    <p>
      We can style the bullets or numbers by using the
      <span class="text-blue-400">marker</span> modifier
    </p>
    <p>
      It's important to keep in mind that the <span class="text-blue-400">marker</span> modifier is
      inheritable so we can place it in the ul element to style its children
    </p>
    <ul role="list" class="marker:text-sky-500 list-disc pl-5 space-y-3 text-slate-400 mt-5">
      <li>5 cups chopped Porcini mushrooms</li>
      <li>1/2 cup of olive oil</li>
      <li>3lb of celery</li>
    </ul>
    <h2 class="pt-2 text-2xl">Media and feature queries</h2>
    <h2 class="pt-2 text-2xl">Attribute selectors</h2>
  </div>
</template>
