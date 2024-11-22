<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <a href="https://github.com/FjellOverflow" target="_blank">
      <img src="/fjelloverflow.svg" class="logo" alt="FjellOverflow logo" />
    </a>
  </div>
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

<style>
.logo {
  height: 12em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #81a1c1);
}
</style>
