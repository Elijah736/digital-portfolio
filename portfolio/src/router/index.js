import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: {
      template: `
        <main style="padding: 100px; text-align: center;">
          <h1>My Digital Portfolio</h1>
          <p>Welcome to my portfolio.</p>
        </main>
      `
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router