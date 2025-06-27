<script setup lang="ts">
const links = [
  {
    name: "Videojuegos",
    path: "/videojuegos",
  },
  {
    name: "Deportes",
    path: "/deportes",
  },
  {
    name: "Cine",
    path: "/cine",
  },
  {
    name: "Libros",
    path: "/libros",
  },
]
</script>

<template>
  <header class="bg-blue-500 py-4 flex items-center justify-between">
    <h1>Open Journalist</h1>
    <nav>
      <ul class="flex items-center gap-4">
        <li v-for="link of links" :key="link.path">
          <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
