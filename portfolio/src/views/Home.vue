<script setup>
import removebg from '../assets/removed.bg.png'
</script>

<template>
  <section class="home">
    <div class="home-content">
      <p class="intro">WELCOME TO MY PORTFOLIO</p>

      <h1>Hi, I'm Elijah Lategan</h1>

      <p class="description">
        I'm an aspiring web developer passionate about building engaging
        digital experiences and continuously growing my skills.
      </p>
      <button class="CV">Download CV <i class="fa-solid fa-download"></i></button>
    </div>

    <div class="rightside">
      <img :src="removebg" alt="Elijah">
    </div>
  </section>
</template>

<style scoped>
.home {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 60px 5%;
  color: white;
  box-sizing: border-box;
}

.home-content {
  width: 43%;
  max-width: 700px;
}

.rightside {
  width: 59%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.rightside img {
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: contain;

  /* border: 5px solid #8B1E2D;
  border-radius: 25px;
  padding: 10px;
  background: #ffffff;

  box-shadow:
    12px 12px 0 #8B1E2D,
    20px 20px 0 rgba(139, 30, 45, 0.15);

  transition: 0.3s ease; */
}

/* .rightside img:hover {
  transform: translate(-5px, -5px);

  box-shadow:
    18px 18px 0 #8B1E2D,
    28px 28px 0 rgba(139, 30, 45, 0.15);
} */

.intro {
  margin-bottom: 15px;
  color: #8B1E2D;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

h1 {
  margin: 0 0 20px;
  color: #111111;
  font-size: 52px;
  font-weight: 800;
}

.description {
  max-width: 600px;
  color: #555555;
  font-size: 18px;
  line-height: 1.8;
}

.CV {
  word-spacing: 20%;
  padding: 11px 21px;
  border-radius: 7px;
  color: #ffffff !important;
  background: #8f202d;
  border: 1px solid #8B1E2D;
  transition: 0.3s ease;
}

.CV:hover {
  cursor: pointer;
  background: #A92538;
  border-color: #A92538;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(139, 30, 45, 0.3);
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    padding: 70px 25px;
  }

  .home-content {
    width: 100%;
  }

  .rightside {
    width: 100%;
  }

  .rightside img {
    width: 80%;
  }

  h1 {
    font-size: 38px;
  }
}
</style>