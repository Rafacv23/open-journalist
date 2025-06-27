<script lang="ts" setup>
import posts from "../assets/mocks/post.json"

const props = defineProps<{
  sectionTitle: string
}>()

//TODO: fetch posts from backend and then group them by section

const groupedPosts = posts.filter(
  (post) => post.section === props.sectionTitle.toLowerCase() && post.important
)
</script>

<template>
  <section class="bg-card rounded-lg p-4 sticky top-36 mb-8 h-fit">
    <h3 class="text-lg mb-4">Lo más destacado en {{ sectionTitle }}</h3>
    <div class="grid grid-cols-1 gap-4">
      <ul>
        <li
          v-for="post of groupedPosts"
          :key="post.title"
          class="border-b-accent border-b"
        >
          <NuxtLink :to="post.url" class="block">
            <h3
              class="mb-4 w-fit text-xl font-bold hover:text-accent transition-colors duration-150"
            >
              {{ post.title }}
            </h3>
            <div class="flex items-center justify-between text-secondary">
              <h5>{{ post.author }}</h5>
              <p>{{ post.pub_date }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>
