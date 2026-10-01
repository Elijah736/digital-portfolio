<script setup>
import removebg from '../assets/removed.bg.png'
</script>

<template>
  <section class="home">

    <div class="home-content">

      <div class="intro-row">
        <span class="intro-number">01</span>
        <p class="intro">WELCOME TO MY PORTFOLIO</p>
      </div>

      <h1>
        Hi, I'm
        <span>Elijah Lategan</span>
      </h1>

      <div class="title-line"></div>

      <p class="description">
        I'm an aspiring web developer passionate about building engaging
        digital experiences and continuously growing my skills.
      </p>

      <div class="skills">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Vue.js</span>
      </div>

      <div class="buttons">
        <!-- <button class="CV">
          Download CV
          <i class="fa-solid fa-download"></i>
        </button> -->

        <a href="/contact" class="contact-btn">
          Contact Me
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

    </div>

    <div class="rightside">

      <div class="decorative-circle circle-one"></div>
      <div class="decorative-circle circle-two"></div>

      <div class="orbit">
        <span></span>
      </div>

      <div class="image-glow"></div>

      <div class="image-container">
        <img :src="removebg" alt="Elijah">
      </div>

      <div class="floating-number">
        01
      </div>

    </div>

  </section>
</template>

<style scoped>

.home {
  display: flex;
  gap: 30px;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  min-height: 100%;

  padding: 50px 7%;

  box-sizing: border-box;
  color: white;

  overflow: hidden;
}

/* LEFT SIDE */

.home-content {
  width: 48%;
  max-width: 700px;

  animation: slideInLeft 0.9s ease forwards;
}

.intro-row {
  display: flex;
  align-items: center;
  gap: 12px;

  margin-bottom: 15px;
}

.intro {
  margin: 0;

  color: #8B1E2D;

  font-size: 14px;
  font-weight: 700;
  letter-spacing: 2px;
}

.intro-number {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border: 2px solid #8B1E2D;
  border-radius: 50%;

  color: #8B1E2D;

  font-size: 11px;
  font-weight: 800;

  animation: pulseNumber 2.5s ease-in-out infinite;
}

h1 {
  margin: 0 0 15px;

  color: #111111;

  font-size: 56px;
  line-height: 1.1;
  font-weight: 800;
}

h1 span {
  color: #8B1E2D;
}

.title-line {
  width: 70px;
  height: 4px;

  margin-bottom: 22px;

  border-radius: 10px;

  background: #8B1E2D;
}

.description {
  max-width: 600px;

  margin-bottom: 25px;

  color: #555555;

  font-size: 18px;
  line-height: 1.8;
}

/* SKILLS */

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-bottom: 30px;
}

.skills span {
  padding: 7px 13px;

  border: 1px solid #e1c4c9;
  border-radius: 20px;

  color: #8B1E2D;

  background: #fff7f8;

  font-size: 13px;
  font-weight: 600;

  transition: 0.3s ease;
}

.skills span:hover {
  color: white;
  background: #8B1E2D;

  transform: translateY(-3px);
}

/* BUTTONS */

.buttons {
  display: flex;
  align-items: center;
  gap: 15px;
}

/* .CV {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 12px 21px;

  border-radius: 7px;

  color: #ffffff !important;
  background: #8f202d;

  border: 1px solid #8B1E2D;

  font-size: 14px;
  font-weight: 600;

  transition: 0.3s ease;
} */

/* .CV:hover {
  cursor: pointer;

  background: #A92538;
  border-color: #A92538;

  transform: translateY(-3px);

  box-shadow:
    0 8px 20px rgba(139, 30, 45, 0.3);
}

.CV i {
  transition: 0.3s ease;
}

.CV:hover i {
  transform: translateY(3px);
} */

.contact-btn {
  display: flex;
  align-items: center;
  gap: 9px;

  padding: 12px 21px;

  border: 1px solid #d9d9d9;
  border-radius: 7px;

  color: #333333;

  background: white;

  text-decoration: none;

  font-size: 14px;
  font-weight: 600;

  transition: 0.3s ease;
}

.contact-btn:hover {
  border-color: #8B1E2D;
  color: #8B1E2D;

  transform: translateY(-3px);
}

.contact-btn i {
  transition: 0.3s ease;
}

.contact-btn:hover i {
  transform: translateX(4px);
}


/* RIGHT SIDE */

.rightside {
  width: 52%;
  min-height: 500px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  animation: slideInRight 1s ease forwards;
}

/* IMAGE */

.image-container {
  position: relative;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
}

.rightside img {
  width: 100%;
  max-width: 700px;

  height: auto;

  object-fit: contain;

  position: relative;
  z-index: 3;
}


/* RED GLOW */

.image-glow {
  position: absolute;

  width: 360px;
  height: 360px;

  border-radius: 50%;

  background: rgba(139, 30, 45, 0.08);

  filter: blur(5px);

  animation: pulseGlow 4s ease-in-out infinite;
}


/* ORBIT */

.orbit {
  position: absolute;

  width: 430px;
  height: 430px;

  border: 1px solid rgba(139, 30, 45, 0.25);

  border-radius: 50%;

  z-index: 1;

  animation: rotateOrbit 15s linear infinite;
}

.orbit span {
  position: absolute;

  width: 13px;
  height: 13px;

  top: -6px;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 50%;

  background: #8B1E2D;

  box-shadow:
    0 0 0 6px rgba(139, 30, 45, 0.08),
    0 0 20px rgba(139, 30, 45, 0.35);
}


/* DECORATIVE CIRCLES */

.decorative-circle {
  position: absolute;

  border-radius: 50%;

  border: 1px solid rgba(139, 30, 45, 0.15);

  z-index: 0;
}

.circle-one {
  width: 300px;
  height: 300px;

  animation: pulseCircle 4s ease-in-out infinite;
}

.circle-two {
  width: 500px;
  height: 500px;

  border-color: rgba(139, 30, 45, 0.08);

  animation: pulseCircle 5s ease-in-out infinite reverse;
}


/* FLOATING 01 */

.floating-number {
  position: absolute;

  right: 5%;
  bottom: 12%;

  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 55px;
  height: 55px;

  border-radius: 50%;

  color: white;

  background: #8B1E2D;

  font-size: 15px;
  font-weight: 800;

  box-shadow:
    8px 8px 0 rgba(139, 30, 45, 0.15);

  animation: floatingNumber 3s ease-in-out infinite;
}


/* ANIMATIONS */

@keyframes slideInLeft {

  from {
    opacity: 0;
    transform: translateX(-40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }

}

@keyframes slideInRight {

  from {
    opacity: 0;
    transform: translateX(40px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }

}


@keyframes pulseGlow {

  0% {
    transform: scale(0.9);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }

  100% {
    transform: scale(0.9);
    opacity: 0.5;
  }

}

@keyframes pulseCircle {

  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.05);
    opacity: 1;
  }

  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }

}

@keyframes rotateOrbit {

  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }

}

@keyframes pulseNumber {

  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }

}

@keyframes floatingNumber {

  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0);
  }

}


/* MOBILE */

@media (max-width: 900px) {

  .home {
    flex-direction: column;

    padding: 50px 25px;

    gap: 20px;
  }

  .home-content {
    width: 100%;
    text-align: center;
  }

  .intro-row {
    justify-content: center;
  }

  .title-line {
    margin-left: auto;
    margin-right: auto;
  }

  .description {
    margin-left: auto;
    margin-right: auto;
  }

  .skills {
    justify-content: center;
  }

  .buttons {
    justify-content: center;
  }

  .rightside {
    width: 100%;
    min-height: 400px;
  }

  .rightside img {
    width: 80%;
  }

  .orbit {
    width: 350px;
    height: 350px;
  }

  .circle-one {
    width: 250px;
    height: 250px;
  }

  .circle-two {
    width: 400px;
    height: 400px;
  }

}

@media (max-width: 600px) {

  h1 {
    font-size: 40px;
  }

  .description {
    font-size: 16px;
  }

  .buttons {
    flex-direction: column;
  }

  .CV,
  .contact-btn {
    width: 100%;
    justify-content: center;
  }

  .rightside {
    min-height: 330px;
  }

  .rightside img {
    width: 90%;
  }

  .orbit {
    width: 290px;
    height: 290px;
  }

  .circle-one {
    width: 210px;
    height: 210px;
  }

  .circle-two {
    width: 330px;
    height: 330px;
  }

  .floating-number {
    right: 2%;
    bottom: 5%;
  }

}

</style>