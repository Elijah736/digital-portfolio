<script setup>
import { ref, onMounted } from 'vue'

import moderntech1 from '../assets/moderntech1.png'
import moderntech2 from '../assets/moderntech2.png'
import moderntech3 from '../assets/moderntech3.png'

import charlie1 from '../assets/charlie1.png'
import charlie2 from '../assets/charlie2.png'
import charlie3 from '../assets/charlie3.png'

const repositories = ref([])
const loading = ref(true)
const error = ref('')

const username = 'Elijah736'

const skills = [
  { name: 'Problem Solving', level: 82 },
  { name: 'HTML & CSS', level: 88 },
  { name: 'JavaScript', level: 78 },
  { name: 'Vue.js', level: 76 },
  { name: 'PHP', level: 70 },
  { name: 'SQL', level: 72 },
  { name: 'Git & GitHub', level: 80 },
  { name: 'Responsive Design', level: 84 }
]

const getRepositoryDescription = (repo) => {
  if (repo.description) return repo.description

  const name = repo.name.toLowerCase()

  if (name.includes('portfolio')) {
    return 'A personal web portfolio showcasing my projects, technical skills and development experience.'
  }

  if (name.includes('hr')) {
    return 'A web application focused on managing employee information, HR processes and workplace activities.'
  }

  if (name.includes('frontend')) {
    return 'A frontend development project focused on building responsive and interactive user interfaces.'
  }

  if (name.includes('backend')) {
    return 'A backend development project focused on APIs, server-side logic and data management.'
  }

  if (name.includes('sql') || name.includes('database')) {
    return 'A database-focused project involving SQL queries, data management and relational database concepts.'
  }

  if (repo.language === 'JavaScript') {
    return 'A JavaScript development project focused on building functionality, interactivity and problem-solving skills.'
  }

  if (repo.language === 'Vue') {
    return 'A Vue.js application focused on creating responsive components and interactive user experiences.'
  }

  if (repo.language === 'PHP') {
    return 'A PHP development project focused on server-side functionality, application logic and database interaction.'
  }

  if (repo.language === 'Python') {
    return 'A Python development project focused on programming concepts, data processing and application logic.'
  }

  return 'A development project created while building my programming, problem-solving and software development skills.'
}

const getRepositories = async () => {
  try {
    loading.value = true
    error.value = ''

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
    )

    if (!response.ok) {
      throw new Error('Unable to load repositories')
    }

    const data = await response.json()

    repositories.value = data
      .filter(repo => !repo.fork)
      .slice(0, 10)
      .map(repo => ({
        ...repo,
        projectDescription: getRepositoryDescription(repo)
      }))
  } catch (err) {
    error.value = 'Unable to load my GitHub repositories right now.'
    console.error(err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getRepositories()
})
</script>

<template>
  <div class="projects-page">

    <!-- HERO -->

    <section class="projects-hero">
      <div class="hero-content">
        <p class="section-label">03 MY PROJECTS</p>

        <h1>Things I've <span>built.</span></h1>

        <p class="hero-text">
          A collection of projects and applications I've worked on while
          developing my skills in web development, problem solving and
          software development.
        </p>

        <a href="https://github.com/Elijah736" target="_blank" rel="noopener noreferrer" class="github-profile-button">
          <span>VIEW MY GITHUB</span>
          <span class="github-arrow">→</span>
        </a>
      </div>

      <div class="hero-decoration">
        <div class="orbit orbit-one"></div>
        <div class="orbit orbit-two"></div>
        <div class="orbit orbit-three"></div>
        <div class="orbit-dot dot-one"></div>
        <div class="orbit-dot dot-two"></div>
        <div class="orbit-dot dot-three"></div>
      </div>
    </section>

    <!-- MODERNTECH -->

    <section class="featured-project">
      <div class="project-number">01</div>

      <div class="project-content">
        <p class="section-label">MAJOR PROJECT</p>

        <h2>ModernTech <span>HR Portal.</span></h2>

        <p class="project-description">
          A web-based HR management system created for ModernTech Solutions
          to centralise important employee and HR processes in one platform.
        </p>

        <div class="project-role">
          <span>MY ROLE</span>
          <strong>Attendance Page</strong>
        </div>

        <div class="project-details">
          <div>
            <span>TECHNOLOGIES</span>
            <p>HTML5 · CSS3 · JavaScript · Bootstrap · GitHub</p>
          </div>

          <div>
            <span>KEY FEATURES</span>
            <p>Attendance tracking · Responsive UI · Employee management · HR dashboard integration</p>
          </div>
        </div>

        <p class="project-contribution">
          My contribution focused on developing the Attendance Page and
          creating a clean, responsive interface for managing and viewing
          employee attendance information.
        </p>

        <a href="https://github.com/leratoyapi/moderntech-hr-portal" target="_blank" rel="noopener noreferrer" class="project-link">
          VIEW PROJECT ON GITHUB
          <span>→</span>
        </a>
      </div>

      <div class="project-images">
        <div class="image-main">
          <img :src="moderntech1" alt="ModernTech HR Portal">
        </div>

        <div class="image-small image-small-one">
          <img :src="moderntech2" alt="ModernTech attendance page">
        </div>

        <div class="image-small image-small-two">
          <img :src="moderntech3" alt="ModernTech HR Portal page">
        </div>
      </div>
    </section>

    <!-- MODERNTECH INFORMATION -->

    <section class="project-info-section">
      <div class="info-block">
        <span>01 / OVERVIEW</span>
        <h3>Centralising <strong>HR processes.</strong></h3>
      </div>

      <div class="info-block">
        <span>02 / MY CONTRIBUTION</span>
        <p>
          Worked as part of a development team where I was responsible for
          the Attendance Page. I focused on presenting attendance information
          clearly while maintaining the overall design and responsiveness
          of the application.
        </p>
      </div>

      <div class="info-block">
        <span>03 / WHAT I LEARNED</span>
        <p>
          This project helped me improve my understanding of responsive
          frontend development, working within a team, Git workflows and
          building interfaces around real-world business requirements.
        </p>
      </div>
    </section>

    <!-- TEAM CHARLIE -->

    <section class="featured-project charlie-project">
      <div class="project-number">02</div>

      <div class="project-content">
        <p class="section-label">MAJOR PROJECT</p>

        <h2>Team <span>Charlie.</span></h2>

        <p class="project-description">
          A full-stack news analytics dashboard that collects articles from
          online sources, processes information and presents the results
          through an interactive dashboard.
        </p>

        <div class="project-role">
          <span>MY ROLE</span>
          <strong>Dashboard & Debugging</strong>
        </div>

        <div class="project-details">
          <div>
            <span>TECHNOLOGIES</span>
            <p>Vue 3 · Python · Flask · Axios · Three.js · BeautifulSoup</p>
          </div>

          <div>
            <span>KEY FEATURES</span>
            <p>News collection · Search · Filtering · Statistics · Interactive dashboard</p>
          </div>
        </div>

        <p class="project-contribution">
          My contribution focused on the dashboard and debugging side of
          the project, helping create an interface where users could
          interact with collected news information and view useful
          statistics.
        </p>

        <a href="https://github.com/Maiesha7-7Moohan/Team-Charlie" target="_blank" rel="noopener noreferrer" class="project-link">
          VIEW PROJECT ON GITHUB
          <span>→</span>
        </a>
      </div>

      <div class="project-images">
        <div class="image-main">
          <img :src="charlie1" alt="Team Charlie dashboard">
        </div>

        <div class="image-small image-small-one">
          <img :src="charlie2" alt="Team Charlie project">
        </div>

        <div class="image-small image-small-two">
          <img :src="charlie3" alt="Team Charlie dashboard">
        </div>
      </div>
    </section>

    <!-- TEAM CHARLIE INFORMATION -->

    <section class="project-info-section charlie-info">
      <div class="info-block">
        <span>01 / OVERVIEW</span>
        <h3>Turning news into <strong>useful data.</strong></h3>
      </div>

      <div class="info-block">
        <span>02 / MY CONTRIBUTION</span>
        <p>
          I worked on the dashboard and debugging side of the project,
          helping create an interface where users could interact with
          collected news information and view useful statistics.
        </p>
      </div>

      <div class="info-block">
        <span>03 / WHAT I LEARNED</span>
        <p>
          This project gave me experience working with a full-stack
          application, connecting frontend components with backend
          functionality and troubleshooting issues across different parts
          of a system.
        </p>
      </div>
    </section>

    <!-- GITHUB REPOSITORIES -->

    <section class="repositories-section">
      <div class="repositories-header">
        <div>
          <p class="section-label">MORE OF MY WORK</p>
          <h2>My GitHub <span>repositories.</span></h2>
        </div>

        <a href="https://github.com/Elijah736" target="_blank" rel="noopener noreferrer" class="github-button">
          VIEW GITHUB
          <span>→</span>
        </a>
      </div>

      <p class="repositories-intro">
        A selection of other projects and repositories I've worked on while
        learning, experimenting and developing my technical skills.
      </p>

      <div v-if="loading" class="loading-container">
        <div class="loading-circle"></div>
        <p>Loading repositories...</p>
      </div>

      <div v-else-if="error" class="error-container">
        <p>{{ error }}</p>
        <button @click="getRepositories">TRY AGAIN</button>
      </div>

      <div v-else class="repository-grid">
        <article
          v-for="(repo, index) in repositories"
          :key="repo.id"
          class="repository-card"
          :style="{ '--delay': `${index * 0.05}s` }"
        >
          <div class="repository-top">
            <div class="repository-folder">
              <i class="fa-regular fa-folder"></i>
            </div>

            <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="repository-external" title="View on GitHub">
              <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>

          <h3>{{ repo.name }}</h3>

          <p class="repository-description">
            {{ repo.projectDescription }}
          </p>

          <div class="repository-bottom">
            <span v-if="repo.language">
              <i class="language-dot"></i>
              {{ repo.language }}
            </span>

            <span>
              <i class="fa-regular fa-star"></i>
              {{ repo.stargazers_count }}
            </span>

            <span>
              <i class="fa-solid fa-code-fork"></i>
              {{ repo.forks_count }}
            </span>
          </div>

          <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="repository-link">
            VIEW PROJECT
            <span>→</span>
          </a>
        </article>
      </div>
    </section>

    <!-- SKILLS -->

    <section class="skills-section">
      <div class="skills-header">
        <p class="section-label">SKILLS & STRENGTHS</p>

        <h2>What I'm <span>developing.</span></h2>

        <p>
          Skills I've developed through projects, coursework and hands-on
          experience while continuing to grow as a developer.
        </p>
      </div>

      <div class="skills-container">
        <div class="skills-introduction">
          <div class="skills-number">08</div>

          <h3>Always <span>learning.</span></h3>

          <p>
            I'm constantly improving my technical abilities and learning how
            to approach problems in a more structured and effective way.
          </p>
        </div>

        <div class="skills-list">
          <div v-for="skill in skills" :key="skill.name" class="skill-item">
            <div class="skill-info">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>

            <div class="skill-bar">
              <div class="skill-progress" :style="{ width: `${skill.level}%` }"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->

    <section class="projects-end">
      <div class="end-circle">
        <span>+</span>
      </div>

      <p class="section-label">ALWAYS LEARNING</p>

      <h2>More projects. <span>More to learn.</span></h2>

      <p>
        I'm constantly building new projects, experimenting with different
        technologies and improving my development skills.
      </p>

      <a href="https://github.com/Elijah736" target="_blank" rel="noopener noreferrer" class="github-bottom-link">
        VISIT MY GITHUB
        <span>→</span>
      </a>
    </section>

  </div>
</template>

<style scoped>

.projects-page {
  width: 100%;
  background: #ffffff;
  color: #222222;
  overflow: hidden;
}

.projects-hero {
  min-height: 72vh;
  position: relative;
  display: flex;
  align-items: center;
  padding: 100px 9%;
  overflow: hidden;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 720px;
}

.section-label {
  color: #8b1e2d;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.projects-hero h1 {
  font-size: clamp(4rem, 8vw, 8rem);
  line-height: 0.92;
  margin: 0;
  font-weight: 800;
  letter-spacing: -5px;
}

.projects-hero h1 span,
.featured-project h2 span,
.repositories-header h2 span,
.skills-header h2 span,
.skills-introduction h3 span,
.projects-end h2 span {
  display: block;
  color: #8b1e2d;
}

.hero-text {
  max-width: 620px;
  margin-top: 35px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: #666666;
}

.github-profile-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 35px;
  padding: 15px 24px;
  background: #8b1e2d;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 2px;
  transition: 0.3s ease;
}

.github-profile-button:hover {
  background: #222222;
  transform: translateY(-3px);
}

.github-arrow {
  font-size: 1.2rem;
}

.hero-decoration {
  position: absolute;
  right: -120px;
  top: 50%;
  transform: translateY(-50%);
  width: 550px;
  height: 550px;
}

.orbit {
  position: absolute;
  border: 1px solid rgba(139, 30, 45, 0.25);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.orbit-one {
  width: 250px;
  height: 250px;
  animation: rotateOrbit 12s linear infinite;
}

.orbit-two {
  width: 380px;
  height: 380px;
  animation: rotateOrbit 18s linear infinite reverse;
}

.orbit-three {
  width: 510px;
  height: 510px;
  animation: rotateOrbit 25s linear infinite;
}

.orbit-dot {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #8b1e2d;
  border-radius: 50%;
}

.dot-one {
  top: 20%;
  left: 50%;
}

.dot-two {
  top: 60%;
  left: 8%;
}

.dot-three {
  bottom: 15%;
  right: 25%;
}


/* FEATURED PROJECTS */

.featured-project {
  min-height: 90vh;
  padding: 120px 9%;
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 80px;
  align-items: center;
  position: relative;
}

.charlie-project {
  background: #f8f8f8;
}

.project-number {
  position: absolute;
  top: 50px;
  right: 9%;
  font-size: 7rem;
  font-weight: 800;
  color: #eeeeee;
  line-height: 1;
}

.project-content {
  position: relative;
  z-index: 2;
}

.featured-project h2 {
  font-size: clamp(3.5rem, 6vw, 6rem);
  line-height: 0.9;
  letter-spacing: -4px;
  margin: 0;
  font-weight: 800;
}

.project-description {
  max-width: 520px;
  color: #666666;
  line-height: 1.8;
  margin-top: 30px;
}

.project-role {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 30px;
}

.project-role span {
  color: #999999;
  font-size: 0.65rem;
  letter-spacing: 2px;
  font-weight: 700;
}

.project-role strong {
  font-size: 0.9rem;
}

.project-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  max-width: 560px;
  margin-top: 30px;
}

.project-details span {
  color: #999999;
  font-size: 0.62rem;
  letter-spacing: 2px;
  font-weight: 700;
}

.project-details p {
  color: #555555;
  font-size: 0.78rem;
  line-height: 1.7;
  margin: 8px 0 0;
}

.project-contribution {
  max-width: 560px;
  color: #777777;
  font-size: 0.82rem;
  line-height: 1.8;
  margin-top: 25px;
  padding-left: 18px;
  border-left: 2px solid #8b1e2d;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 35px;
  color: #222222;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 2px;
  font-weight: 700;
}

.project-link span {
  color: #8b1e2d;
  font-size: 1.2rem;
  transition: 0.3s ease;
}

.project-link:hover span {
  transform: translateX(7px);
}

.project-images {
  position: relative;
  min-height: 560px;
}

.image-main {
  position: absolute;
  width: 75%;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.12);
}

.image-main img,
.image-small img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-small {
  position: absolute;
  width: 34%;
  height: 180px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.image-small-one {
  right: 0;
  top: 8%;
}

.image-small-two {
  right: 5%;
  bottom: 5%;
}


/* PROJECT INFORMATION */

.project-info-section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  padding: 80px 9%;
  background: #222222;
  color: #ffffff;
}

.charlie-info {
  background: #8b1e2d;
}

.info-block > span {
  color: #aaaaaa;
  font-size: 0.62rem;
  letter-spacing: 2px;
  font-weight: 700;
}

.charlie-info .info-block > span {
  color: #e8c8cd;
}

.info-block h3 {
  margin: 20px 0 0;
  font-size: 2rem;
  line-height: 1.1;
  font-weight: 700;
}

.info-block h3 strong {
  color: #8b1e2d;
}

.charlie-info .info-block h3 strong {
  color: #ffffff;
}

.info-block p {
  color: #bbbbbb;
  font-size: 0.82rem;
  line-height: 1.8;
  margin: 20px 0 0;
}

.charlie-info .info-block p {
  color: #f3dfe2;
}


/* GITHUB REPOSITORIES */

.repositories-section {
  padding: 120px 9%;
  background: #f8f8f8;
}

.repositories-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 30px;
}

.repositories-header h2 {
  margin: 0;
  font-size: clamp(3rem, 6vw, 6rem);
  line-height: 0.9;
  font-weight: 800;
  letter-spacing: -4px;
}

.github-button {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 15px 23px;
  background: #8b1e2d;
  color: #ffffff;
  text-decoration: none;
  font-size: 0.68rem;
  letter-spacing: 2px;
  font-weight: 700;
  transition: 0.3s ease;
}

.github-button:hover {
  background: #222222;
  transform: translateY(-3px);
}

.github-button span {
  font-size: 1.1rem;
}

.repositories-intro {
  max-width: 600px;
  color: #777777;
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 0 0 55px;
}

.repository-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.repository-card {
  min-height: 285px;
  padding: 27px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: cardAppear 0.6s ease forwards;
  animation-delay: var(--delay);
  transition: 0.35s ease;
}

.repository-card:hover {
  transform: translateY(-7px);
  border-color: rgba(139, 30, 45, 0.35);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.repository-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
}

.repository-folder {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7e9eb;
  color: #8b1e2d;
  font-size: 1.1rem;
}

.repository-external {
  color: #999999;
  transition: 0.3s ease;
}

.repository-external:hover {
  color: #8b1e2d;
  transform: translate(3px, -3px);
}

.repository-card h3 {
  margin: 0 0 12px;
  font-size: 1.15rem;
  line-height: 1.2;
  word-break: break-word;
}

.repository-description {
  min-height: 72px;
  margin: 0;
  color: #777777;
  font-size: 0.82rem;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.repository-bottom {
  display: flex;
  gap: 18px;
  margin-top: auto;
  padding-top: 20px;
  margin-bottom: 18px;
}

.repository-bottom span {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #777777;
  font-size: 0.7rem;
  font-weight: 600;
}

.language-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #8b1e2d;
}

.repository-link {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #eeeeee;
  padding-top: 15px;
  color: #222222;
  text-decoration: none;
  font-size: 0.65rem;
  letter-spacing: 1.7px;
  font-weight: 700;
}

.repository-link span {
  color: #8b1e2d;
  font-size: 1.1rem;
  transition: 0.3s ease;
}

.repository-link:hover span {
  transform: translateX(7px);
}

.loading-container,
.error-container {
  min-height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #777777;
  text-align: center;
}

.loading-circle {
  width: 42px;
  height: 42px;
  border: 3px solid #eeeeee;
  border-top-color: #8b1e2d;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

.error-container button {
  border: none;
  padding: 12px 20px;
  background: #8b1e2d;
  color: #ffffff;
  cursor: pointer;
}


/* SKILLS */

.skills-section {
  padding: 130px 9%;
  background: #ffffff;
}

.skills-header {
  max-width: 850px;
  margin-bottom: 80px;
}

.skills-header h2 {
  margin: 0;
  font-size: clamp(3.5rem, 7vw, 7rem);
  line-height: 0.9;
  letter-spacing: -5px;
  font-weight: 800;
}

.skills-header h2 span {
  display: block;
  color: #8b1e2d;
}

.skills-header > p:last-child {
  max-width: 550px;
  margin-top: 30px;
  color: #777777;
  line-height: 1.8;
}

.skills-container {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 100px;
}

.skills-introduction {
  position: relative;
}

.skills-number {
  color: #eeeeee;
  font-size: 8rem;
  font-weight: 800;
  line-height: 0.8;
  letter-spacing: -8px;
}

.skills-introduction h3 {
  margin: -5px 0 25px;
  font-size: 3rem;
  line-height: 1;
  letter-spacing: -2px;
}

.skills-introduction h3 span {
  color: #8b1e2d;
}

.skills-introduction p {
  max-width: 420px;
  color: #777777;
  line-height: 1.8;
  font-size: 0.9rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 27px;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
  font-size: 0.78rem;
  font-weight: 700;
}

.skill-info span:last-child {
  color: #8b1e2d;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: #eeeeee;
}

.skill-progress {
  height: 100%;
  background: #8b1e2d;
}


/* FINAL SECTION */

.projects-end {
  min-height: 65vh;
  padding: 120px 9%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.end-circle {
  width: 90px;
  height: 90px;
  border: 2px solid #8b1e2d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 45px;
  position: relative;
}

.end-circle::after {
  content: '';
  position: absolute;
  width: 120px;
  height: 120px;
  border: 1px solid rgba(139, 30, 45, 0.25);
  border-radius: 50%;
  animation: pulseCircle 2.5s ease-in-out infinite;
}

.end-circle span {
  color: #8b1e2d;
  font-size: 1.5rem;
  font-weight: 700;
}

.projects-end h2 {
  font-size: clamp(3rem, 7vw, 7rem);
  line-height: 0.95;
  margin: 0;
  font-weight: 800;
  letter-spacing: -5px;
}

.projects-end h2 span {
  display: block;
  color: #8b1e2d;
}

.projects-end > p:not(.section-label) {
  max-width: 550px;
  color: #666666;
  line-height: 1.8;
  margin-top: 35px;
}

.github-bottom-link {
  display: inline-flex;
  align-items: center;
  gap: 15px;
  margin-top: 30px;
  color: #222222;
  text-decoration: none;
  font-size: 0.75rem;
  letter-spacing: 2px;
  font-weight: 700;
}

.github-bottom-link span {
  color: #8b1e2d;
  font-size: 1.3rem;
  transition: 0.3s ease;
}

.github-bottom-link:hover span {
  transform: translateX(8px);
}


/* ANIMATIONS */

@keyframes rotateOrbit {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes cardAppear {
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulseCircle {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.15);
    opacity: 0;
  }
}


/* TABLET */

@media (max-width: 1050px) {
  .repository-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .featured-project {
    grid-template-columns: 1fr;
  }

  .project-images {
    min-height: 500px;
  }

  .project-info-section {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .project-details {
    grid-template-columns: 1fr;
  }

  .skills-container {
    gap: 60px;
  }

  .projects-hero {
    padding: 90px 7%;
  }

  .repositories-section,
  .skills-section,
  .projects-end {
    padding-left: 7%;
    padding-right: 7%;
  }

  .hero-decoration {
    right: -220px;
    opacity: 0.5;
  }
}


/* MOBILE */

@media (max-width: 700px) {
  .projects-hero {
    min-height: auto;
    padding: 100px 7% 80px;
  }

  .projects-hero h1 {
    font-size: 4rem;
    letter-spacing: -3px;
  }

  .hero-text {
    font-size: 0.95rem;
  }

  .hero-decoration {
    right: -300px;
    opacity: 0.2;
  }

  .featured-project {
    padding: 90px 7%;
  }

  .featured-project h2 {
    font-size: 4rem;
  }

  .project-number {
    font-size: 5rem;
    top: 35px;
    right: 7%;
  }

  .project-images {
    min-height: 350px;
  }

  .image-small {
    height: 120px;
  }

  .project-info-section {
    padding: 70px 7%;
  }

  .repositories-section {
    padding: 80px 7%;
  }

  .repositories-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
  }

  .repositories-header h2 {
    font-size: 3.8rem;
  }

  .repository-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .skills-section {
    padding: 80px 7%;
  }

  .skills-header {
    margin-bottom: 60px;
  }

  .skills-header h2 {
    font-size: 4rem;
    letter-spacing: -3px;
  }

  .skills-container {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .skills-number {
    font-size: 6rem;
  }

  .skills-introduction h3 {
    font-size: 2.5rem;
  }

  .projects-end {
    min-height: 60vh;
    padding: 90px 7%;
  }

  .projects-end h2 {
    font-size: 4rem;
    letter-spacing: -3px;
  }
}

</style>