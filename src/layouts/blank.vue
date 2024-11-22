<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <h1>{{ route.meta.title }}</h1>
  <div class="navigation">
    <RouterLink to="/">
      <h2>Home</h2>
    </RouterLink>
    <RouterLink to="/about">
      <h2>About</h2>
    </RouterLink>
  </div>

  <RouterView />
</template>
