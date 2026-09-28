<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="site-wrapper">
    <NavBar />

<main class="content-area">
  <RouterView />
</main>

<Footer />

  </div>
</template>

<style>
.site-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content-area {
  flex: 1;
  background: #ffffff;
}
</style>
