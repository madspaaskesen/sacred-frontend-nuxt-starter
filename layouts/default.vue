<template>
  <div>
    <header class="bg-base-200 shadow px-6 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-xl font-bold">Sacred-AI ✨</NuxtLink>
      <nav class="flex gap-4">
        <NuxtLink to="/" class="link link-hover">Home</NuxtLink>
        <NuxtLink to="/contact" class="link link-hover">Contact</NuxtLink>
      </nav>
    </header>
    <main class="min-h-[80vh] px-4"><slot /></main>
    <footer class="bg-base-200 text-center py-6 text-sm text-gray-500">
      © 2025 Sacred-AI. All rights reserved.
    </footer>
  </div>
</template>
