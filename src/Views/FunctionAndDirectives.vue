<script setup></script>
<template>
    <h2>Reusting utility classes</h2>
    <p>We can create a class made up by multiple utility classes</p>
    <p>To apply the utilty classes we use <span class="text-rose-500">@apply</span></p>
    <p>Then, to create a new component using the new class, we use the directive <span class="text-rose-500">@layer components</span> </p>
    <p class=" mt-5">The following button is created by using a custom class made up of multiple other utiliy classes</p>

    <button class="btn-primary">
        Save changes
    </button>
</template>