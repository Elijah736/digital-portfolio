<template>
  <nav class="navbar">
    <div class="navbar-container">

  <RouterLink to="/" class="logo">
    ELIJAH<span>.</span>
  </RouterLink>

  <div class="nav-links" :class="{ open: menuOpen }">
    <RouterLink to="/" @click="menuOpen = false">Home</RouterLink>
    <RouterLink to="/about" @click="menuOpen = false">About Me</RouterLink>
    <RouterLink to="/projects" @click="menuOpen = false">Projects</RouterLink>
    <RouterLink to="/contact" @click="menuOpen = false">Contact</RouterLink>

    <RouterLink to="/contact" class="nav-button" @click="menuOpen = false">
      Let's Talk
    </RouterLink>
  </div>

  <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle navigation">
    <span></span>
    <span></span>
    <span></span>
  </button>

</div>

  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)
</script>

<style scoped>
.navbar {
  background: #8B1E2D;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(139, 30, 45, 0.25);
}

.navbar-container {
  max-width: 1200px;
  height: 78px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  color: #ffffff;
  text-decoration: none;
  font-size: 25px;
  font-weight: 800;
  letter-spacing: 2px;
}

.logo span {
  color: crimson;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-links a {
  position: relative;
  color: #b5b5b5;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: 0.3s ease;
}

.nav-links a:not(.nav-button)::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  background: #d1c5c7;
  transition: 0.3s ease;
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-links a.router-link-active {
  color: #ffffff;
}

.nav-links a.router-link-active::after {
  width: 100%;
}

.nav-button {
  padding: 11px 21px;
  border-radius: 7px;
  color: #ffffff !important;
  background: #8f202d;
  border: 1px solid #8B1E2D;
  transition: 0.3s ease;
}

.nav-button:hover {
  background: #A92538;
  border-color: #A92538;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 30, 45, 0.3);
}

.nav-button::after {
  display: none !important;
}

.hamburger {
  display: none;
  width: 42px;
  height: 42px;
  padding: 9px;
  border: 1px solid #333333;
  border-radius: 7px;
  background: #1a1a1a;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  margin: 5px 0;
  background: #ffffff;
  transition: 0.3s ease;
}

@media (max-width: 768px) {
  .navbar-container {
    height: 70px;
    padding: 0 20px;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;

    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0;

    padding: 20px;
    background: #111111;
    border-bottom: 1px solid rgba(139, 30, 45, 0.3);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    padding: 15px 10px;
  }

  .nav-links a:not(.nav-button)::after {
    display: none;
  }

  .nav-button {
    margin-top: 10px;
    text-align: center;
  }

  .hamburger {
    display: block;
  }
}
</style>
