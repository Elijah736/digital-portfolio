<template>
  <footer class="portfolio-footer">

    <div class="footer-glow"></div>

    <div class="footer-container">

      <!-- BRAND -->

      <div class="footer-brand">

        <div class="brand-title">
          <h2>ELIJAH<span>.</span></h2>
          <div class="brand-line"></div>
        </div>

        <p class="brand-role">
          IT Student • Developer • Problem Solver
        </p>

        <p class="footer-description">
          Building digital experiences and solving real-world problems
          through technology.
        </p>

        <div class="availability">
          <span class="status-dot"></span>
          <span>Available for opportunities</span>
        </div>

      </div>


      <!-- QUICK LINKS -->

      <div class="footer-section">

        <h3>Quick Links</h3>

        <RouterLink to="/">
          Home
        </RouterLink>

        <RouterLink to="/about">
          About
        </RouterLink>

        <RouterLink to="/projects">
          Projects
        </RouterLink>

        <RouterLink to="/contact">
          Contact
        </RouterLink>

      </div>


      <!-- CONNECT -->

      <div class="footer-section">

        <h3>Connect</h3>

        <a
          href="https://github.com/Elijah736"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/elijah-lategan-446238357/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>

        <a href="mailto:elijahlategan3@gmail.com">
          Email
          <i class="fa-solid fa-envelope"></i>
        </a>

      </div>


      <!-- CONTACT -->

      <div class="footer-section contact-section">

        <h3>Contact Me</h3>

        <a href="tel:+27664282857">
          <i class="fa-solid fa-phone"></i>
          066 428 2857
        </a>

        <a
          href="https://wa.me/27664282857"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa-brands fa-whatsapp"></i>
          WhatsApp
        </a>

        <a href="mailto:elijahlategan3@gmail.com">
          <i class="fa-solid fa-paper-plane"></i>
          Send me a message
        </a>

      </div>

    </div>


    <!-- FOOTER LINE -->

    <div class="footer-line"></div>


    <!-- BOTTOM -->

    <div class="footer-bottom">

      <p>
        © 2026 Elijah Lategan. All rights reserved.
      </p>

      <div class="footer-built">
        <span>Built with</span>

        <span class="vue-text">
          Vue.js
        </span>

        <span class="heart">
          ♥
        </span>
      </div>

    </div>

  </footer>
</template>


<style scoped>

.portfolio-footer {
  position: relative;
  overflow: hidden;

  background: #8B1E2D;

  font-family: "Plus Jakarta Sans", sans-serif;
  color: #ffffff;

  padding: 75px 8% 25px;

  margin-top: 80px;
}


/* BACKGROUND EFFECT */

.footer-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  right: -250px;
  top: -300px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;

  pointer-events: none;
}

.footer-glow::after {
  content: '';

  position: absolute;

  width: 350px;
  height: 350px;

  top: 75px;
  left: 75px;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50%;
}


/* CONTAINER */

.footer-container {
  position: relative;
  z-index: 2;

  max-width: 1200px;
  margin: 0 auto;

  display: grid;

  grid-template-columns:
    2fr
    1fr
    1fr
    1.3fr;

  gap: 55px;
}


/* BRAND */

.footer-brand h2 {
  margin: 0;

  color: #ffffff;

  font-size: 32px;
  font-weight: 800;

  letter-spacing: 3px;
}

.footer-brand h2 span {
  color: crimson;
}

.brand-title {
  display: flex;
  align-items: center;
  gap: 18px;
}

.brand-line {
  width: 45px;
  height: 2px;

  background: #ffffff;

  opacity: 0.5;
}

.brand-role {
  margin: 15px 0 0;

  color: #f3d9dd;

  font-size: 13px;
  font-weight: 600;
}

.footer-description {
  max-width: 390px;

  margin: 18px 0 25px;

  color: #f0dce0;

  font-size: 14px;

  line-height: 1.8;
}


/* AVAILABILITY */

.availability {
  display: flex;
  align-items: center;
  gap: 10px;

  font-size: 11px;
  color: #f3d9dd;
}

.status-dot {
  width: 9px;
  height: 9px;

  background: #55d98b;

  border-radius: 50%;

  box-shadow:
    0 0 0 4px rgba(85, 217, 139, 0.12);

  animation: pulseStatus 2s infinite;
}


/* SECTIONS */

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-section h3 {
  margin: 0 0 12px;

  color: #ffffff;

  font-size: 14px;
  font-weight: 800;

  letter-spacing: 1.5px;

  text-transform: uppercase;
}


/* LINKS */

.footer-section a {
  width: fit-content;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: #f5e4e7;

  text-decoration: none;

  font-size: 13px;

  transition: 0.3s ease;
}

.footer-section a:hover {
  color: #ffffff;

  transform: translateX(6px);
}

.footer-section a i {
  font-size: 10px;

  opacity: 0;

  transform: translateX(-5px);

  transition: 0.3s ease;
}

.footer-section a:hover i {
  opacity: 1;
  transform: translateX(0);
}


/* CONTACT SECTION */

.contact-section a {
  color: #f5e4e7;
}

.contact-section a i {
  width: 18px;

  opacity: 0.9;

  transform: none;

  color: #ffffff;
}

.contact-section a:hover i {
  opacity: 1;
  transform: none;
}


/* FOOTER LINE */

.footer-line {
  position: relative;
  z-index: 2;

  height: 1px;

  background: rgba(255, 255, 255, 0.25);

  max-width: 1200px;

  margin: 55px auto 20px;
}


/* BOTTOM */

.footer-bottom {
  position: relative;
  z-index: 2;

  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 20px;

  color: #f2dfe2;

  font-size: 11px;
}

.footer-bottom p {
  margin: 0;
}


/* BUILT WITH */

.footer-built {
  display: flex;
  align-items: center;
  gap: 6px;
}

.vue-text {
  color: #ffffff;
  font-weight: 700;
}

.heart {
  color: #222222;

  font-size: 16px;

  animation: heartBeat 1.8s ease-in-out infinite;
}


/* BACK TO TOP */

.back-to-top {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  color: #ffffff;

  text-decoration: none;

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 1.5px;

  transition: 0.3s ease;
}

.back-to-top span {
  font-size: 17px;

  transition: 0.3s ease;
}

.back-to-top:hover {
  color: #222222;
}

.back-to-top:hover span {
  transform: translateY(-4px);
}


/* ANIMATIONS */

@keyframes pulseStatus {

  0%,
  100% {
    box-shadow:
      0 0 0 4px rgba(85, 217, 139, 0.12);
  }

  50% {
    box-shadow:
      0 0 0 8px rgba(85, 217, 139, 0.03);
  }

}

@keyframes heartBeat {

  0%,
  100% {
    transform: scale(1);
  }

  15% {
    transform: scale(1.15);
  }

  30% {
    transform: scale(1);
  }

}


/* TABLET */

@media (max-width: 1050px) {

  .footer-container {
    grid-template-columns:
      1.5fr
      1fr
      1fr;
  }

  .contact-section {
    grid-column: span 3;
  }

}


/* MOBILE */

@media (max-width: 768px) {

  .portfolio-footer {
    padding: 60px 25px 25px;

    margin-top: 50px;
  }

  .footer-container {
    grid-template-columns: 1fr;

    gap: 38px;
  }

  .contact-section {
    grid-column: auto;
  }

  .footer-brand h2 {
    font-size: 28px;
  }

  .footer-line {
    margin-top: 45px;
  }

  .footer-bottom {
    flex-direction: column;

    text-align: center;

    gap: 15px;
  }

  .back-to-top {
    order: -1;
  }

  .footer-glow {
    right: -350px;
  }

}

</style>
