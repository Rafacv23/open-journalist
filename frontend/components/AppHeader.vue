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
  <header
    class="bg-card px-2 md:px-0 fixed max-w-4xl top-0 left-0 right-0 mx-auto backdrop-blur-xl bg-card/70 py-4"
  >
    <div
      class="flex items-center justify-between md:flex-col md:justify-center"
    >
      <h1 class="md:text-4xl font-bold">The Open Journalist</h1>
      <nav class="md:mt-4">
        <ul class="flex items-center md:justify-around gap-4 md:gap-8">
          <li v-for="link of links" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="hover:underline decoration-accent underline-offset-2"
              >{{ link.name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
