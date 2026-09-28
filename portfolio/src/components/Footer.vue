<template>
  <footer class="portfolio-footer">
    <div class="footer-container">

      <div class="footer-brand">
        <h2>ELIJAH<span>.</span></h2>
        <p>IT Student • Developer • Problem Solver</p>
        <p class="footer-description">
          Building digital experiences and solving real-world problems
          through technology.
        </p>
      </div>

      <div class="footer-section">
        <h3>Quick Links</h3>

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="footer-section">
        <h3>Connect</h3>

        <a href="#" target="_blank">GitHub</a>
        <a href="#" target="_blank">LinkedIn</a>
        <a href="mailto:your@email.com">Email</a>
      </div>

    </div>

    <div class="footer-line"></div>

    <div class="footer-bottom">
      <p>© 2026 Elijah Lategan. All rights reserved.</p>
      <p>Built with <span>Vue.js</span> ♥</p>
    </div>
  </footer>
</template>

<style scoped>
.portfolio-footer {
  background: #8B1E2D;
  font-family: "Plus Jakarta Sans", sans-serif;
  color: white;
  padding: 60px 8% 25px;
  margin-top: 80px;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 60px;
}

.footer-brand h2 {
  font-size: 28px;
  letter-spacing: 2px;
  margin: 0 0 12px;
}

.footer-brand h2 span {
  color: crimson;
}

.footer-brand p {
  color: white;
  margin: 8px 0;
}

.footer-description {
  max-width: 400px;
  line-height: 1.7;
  font-size: 14px;
}

.footer-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-section h3 {
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
}

.footer-section a {
  color: white;
  text-decoration: none;
  transition: 0.3s ease;
}

.footer-section a:hover {
  color: crimson;
  transform: translateX(5px);
}

.footer-line {
  height: 1px;
  background: #c4c3c3;
  max-width: 1200px;
  margin: 45px auto 20px;
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 13px;
}

.footer-bottom span {
  color: rgb(19, 8, 11);
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
}
</style>