<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <LatestPosts sectionTitle="Videojuegos" />
      <TopPosts sectionTitle="Videojuegos" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <LatestPosts sectionTitle="Deportes" />
      <TopPosts sectionTitle="Deportes" />
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <LatestPosts sectionTitle="Cine" />
      <TopPosts sectionTitle="Cine" />
    </div>
  </div>
</template>
