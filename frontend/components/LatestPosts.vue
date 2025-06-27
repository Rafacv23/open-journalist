<script lang="ts" setup>
import posts from "../assets/mocks/post.json"

const props = defineProps<{ sectionTitle: string }>()

const groupedPosts = posts.filter(
  (post) => post.section === props.sectionTitle.toLowerCase()
)
</script>

<template>
  <section class="p-4 md:col-span-3">
    <h3 class="text-accent text-xl font-semibold mb-6">
      Lo último en {{ sectionTitle }}
    </h3>

    <ul class="space-y-6">
      <li
        v-for="post in groupedPosts"
        :key="post.title"
        class="border-b border-b-secondary pb-4"
      >
        <NuxtLink
          :to="post.url"
          class="block hover:bg-muted/30 rounded-lg p-2 transition-colors duration-200"
        >
          <div class="flex flex-col md:flex-row gap-4">
            <img
              :src="post.image"
              alt="Imagen de un videojuego"
              class="w-full md:w-48 h-32 object-cover rounded-lg shadow-sm"
            />

            <div class="flex flex-col justify-between">
              <h3
                class="text-lg md:text-xl font-bold text-primary hover:underline decoration-accent underline-offset-2"
              >
                {{ post.title }}
              </h3>
              <div
                class="flex items-center justify-between text-sm text-secondary mt-2"
              >
                <h5 class="text-accent">{{ post.author }}</h5>
                <p>{{ post.pub_date }}</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
