<script setup>
import { ref, onMounted } from 'vue'
import BaseInput from '../components/BaseInput.vue'

const theDialog = ref()

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
        class="max-w-xs rounded-lg bg-violet-500 p-2 text-white hover:bg-violet-600 focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
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
          class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none"
        />
      </label>
      <label class="block pt-2">
        <span class="block text-sm font-medium text-slate-700">Email<sup>*</sup></span>
        <!-- Using form state modifiers, the classes can be identical for every input -->
        <input
          type="email"
          value=""
          required
          class="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder-slate-400 shadow-sm invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
        />
      </label>
      <button type="submit" class="mt-2 rounded-md bg-blue-500 p-2 text-white">Save changes</button>
    </form>
    <div class="pt-5">
      <h4 class="text-lg">Styling based on parent state (group-{modifier})</h4>
      <p>The modifiers can be any state as: hover, active, focus...</p>
      <a
        href="#"
        class="group mx-auto mt-4 block max-w-xs space-y-3 rounded-lg bg-white p-6 shadow-lg ring-1 ring-slate-900/5 hover:bg-sky-500 hover:ring-sky-500"
      >
        <div class="flex items-center space-x-3">
          <h3 class="text-sm font-semibold text-slate-900 group-hover:text-white">New project</h3>
        </div>
        <p class="text-sm text-slate-500 group-hover:text-white group-active:text-red-600">
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
          class="group/item relative my-2 max-w-md p-2 hover:bg-slate-100"
        >
          <div>
            <a :href="person.url">{{ person.name }}</a>
            <p>{{ person.title }}</p>
          </div>
          <a
            class="group/edit hidden rounded-xl px-3 py-1 hover:bg-slate-200 group-hover/item:absolute group-hover/item:right-3 group-hover/item:top-4 group-hover/item:block"
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
      <div class="not-published group border border-red-400 p-2">
        <span
          >The visible child is not shown since the selector we are providing is
          group-[.is-published]</span
        >
        <div class="invisible group-[.is-published]:visible">Published</div>
      </div>
      <div class="is-published group">
        <div class="hidden group-[.is-published]:block">Published</div>
      </div>
    </div>
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
          <p class="invisible mt-2 text-sm text-pink-600 peer-invalid:visible">
            Please provide a valid email address.
          </p>
        </label>
        <BaseInput class="mt-5" type="password" placeholder="Password" label="Password" />
      </form>
      <h4 class="mt-5 text-lg">Before, after and placeholder</h4>
      <p>We can set ::before and ::after content by using after and before modifiers</p>
      <p>Similarly, we can style the ::placeholder by using the placeholder modifier</p>
      <BaseInput class="mt-4" type="text" required placeholder="Username" label="Username" />
    </div>
    <h4 class="mt-5 text-lg">File input buttons</h4>
    <p>Yes, you guessed it, there is also a file modifier</p>
    <form class="mt-5 flex items-center space-x-6">
      <div class="shrink-0">
        <img
          class="h-16 w-16 rounded-full object-cover"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
          alt="Current profile photo"
        />
      </div>
      <label class="block">
        <span class="sr-only">Choose profile photo</span>
        <input
          type="file"
          class="block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100"
        />
      </label>
    </form>
    <h4 class="mt-5 text-lg">List markers</h4>
    <p>
      We can style the bullets or numbers by using the
      <span class="text-blue-400">marker</span> modifier
    </p>
    <p>
      It's important to keep in mind that the <span class="text-blue-400">marker</span> modifier is
      inheritable so we can place it in the ul element to style its children
    </p>
    <ul role="list" class="mt-5 list-disc space-y-3 pl-5 text-slate-400 marker:text-sky-500">
      <li>5 cups chopped Porcini mushrooms</li>
      <li>1/2 cup of olive oil</li>
      <li>3lb of celery</li>
    </ul>
    <h4 class="mt-5 text-lg">Highlighted text</h4>
    <p>
      To style the text selection you can use the following modifier:
      <span class="text-blue-400">selection</span>
    </p>
    <p>It's inheritable so we can place it on the parent container</p>
    <div class="mt-2 selection:bg-fuchsia-300 selection:text-fuchsia-900">
      <p>
        So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed
        on, and as I made my way past the breakers a strange calm came over me. I don't know if it
        was divine intervention or the kinship of all living things but I tell you Jerry at that
        moment, I <em>was</em> a marine biologist.
      </p>
      <h4 class="mt-5 text-lg">First-line and first-letter</h4>
      <p>
        To modify the first letter we use the
        <span class="text-blue-400">first-letter</span> modifier
      </p>
      <p>
        To modify the first line we use the <span class="text-blue-400">first-line</span> modifier
      </p>
      <p
        class="mt-2 first-letter:float-left first-letter:mr-3 first-letter:text-7xl first-letter:font-bold first-letter:text-slate-400 first-line:uppercase first-line:tracking-widest"
      >
        Well, let me tell you something, funny boy. Y'know that little stamp, the one that says "New
        York Public Library"? Well that may not mean anything to you, but that means a lot to me.
        One whole hell of a lot.
      </p>
      <h4 class="mt-5 text-lg">Dialog backdrops</h4>
      <p>
        We can style the backdrop of a dialog by using the modifier
        <span class="text-blue-400">backdrop</span>
      </p>
      <dialog ref="theDialog" class="backdrop:bg-red-300 backdrop:opacity-50">
        <form method="dialog">
          <p>
            <label
              >Favorite animal:
              <select>
                <option value="default">Choose…</option>
                <option>Brine shrimp</option>
                <option>Red panda</option>
                <option>Spider monkey</option>
              </select>
            </label>
          </p>
          <div class="mt-5">
            <button class="mr-4 rounded-md bg-slate-400 px-3 py-1" value="cancel">Cancel</button>
            <button class="rounded-md bg-slate-400 px-3 py-1" id="confirmBtn" value="default">
              Confirm
            </button>
          </div>
        </form>
      </dialog>
      <button
        id="showDialog"
        class="mt-5 rounded-lg bg-violet-500 px-4 py-2 text-white"
        @click.stop="theDialog.showModal()"
      >
        Show the dialog
      </button>
    </div>
    <h2 class="pt-2 text-2xl">Attribute selectors</h2>
  </div>
</template>
