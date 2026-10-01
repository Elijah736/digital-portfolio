<template>
  <div class="aboutsection">

    <div class="num1">
      <p class="section-label">ABOUT ME</p>

      <h1>A little about me.</h1>

      <p class="about-text">
        I am an aspiring web developer who grew up in Lotus River.
        I have been passionate about technology for as long as I can remember.
        I strive to continuously grow my skills and improve my understanding
        of the fields I am currently working in.
        <br><br>
        I am always looking for opportunities to learn, challenge myself,
        and become a better developer. I enjoy building things, solving
        problems, and exploring new technologies that help me improve my skills.
      </p>
    </div>

    <hr class="horizontal-line">

    <!-- MY JOURNEY -->

    <div class="journey">

      <p class="section-label">MY JOURNEY</p>

      <h2>How I got here.</h2>

      <p class="journey-intro">
        My journey into technology has been about learning, experimenting,
        and continuously improving my skills.
      </p>

      <div class="timeline">

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <span>2025</span>

            <h3>Started My Development Journey</h3>

            <p>
              I began developing my programming knowledge and learning the
              fundamentals of web development and software development.
            </p>
          </div>

        </div>

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <span>2026</span>

            <h3>Expanding My Skills</h3>

            <p>
              I continued building my knowledge by working with technologies
              such as JavaScript, Vue.js, SQL, Node.js and Express.
            </p>
          </div>

        </div>

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <span>2026</span>

            <h3>Working on Real Projects</h3>

            <p>
              I started applying what I learned by working on projects that
              allowed me to gain experience with frontend, backend and
              database development.
            </p>
          </div>

        </div>

        <div class="timeline-item">

          <div class="timeline-dot"></div>

          <div class="timeline-content">
            <span>Today</span>

            <h3>Continuing to Grow</h3>

            <p>
              I am continuing to improve my skills, work on new projects
              and learn more about the technology industry as I work towards
              becoming a professional developer.
            </p>
          </div>

        </div>

      </div>

    </div>

    <hr class="horizontal-line">

    <!-- MY SKILLS -->

    <div class="num2">

      <p class="section-label">MY SKILLS</p>

      <h2>What I work with.</h2>

      <div class="skill-section">
        <h3>Frontend</h3>

        <div class="frontend">

          <div class="frontend-cards">
            <h3 class="html">
              HTML
              <span>&lt;&gt;</span>
            </h3>
            <p>Building the structure and foundation of web pages.</p>
          </div>

          <div class="frontend-cards">
            <h3 class="css">
              CSS
              <span>#</span>
            </h3>
            <p>Creating responsive layouts and styling user interfaces.</p>
          </div>

          <div class="frontend-cards">
            <h3 class="javascript">
              Javascript
              <span>JS</span>
            </h3>
            <p>Adding functionality and interaction to web applications.</p>
          </div>

          <div class="frontend-cards">
            <h3 class="vue">
              Vue.js
            </h3>
            <p>Building modern and interactive frontend applications.</p>
          </div>

        </div>
      </div>

      <hr class="horizontal-line">

      <div class="skill-section">
        <h3>Backend</h3>

        <div class="frontend">

          <div class="frontend-cards">
            <h3>Node.js</h3>
            <p>Developing server-side applications and APIs.</p>
          </div>

        </div>
      </div>

      <hr class="horizontal-line">

      <div class="skill-section">
        <h3>Database</h3>

        <div class="frontend">

          <div class="frontend-cards">
            <h3>MySQL</h3>
            <p>Working with relational databases and structured data.</p>
          </div>

        </div>
      </div>

    </div>
  </div>
  <hr class="horizontal-line">
  <div class="goals-section">

    <div class="goals-container">

        <p class="section-label">MY GOALS</p>

        <h2>My future plans</h2>

        <p class="goals-text">
            My goal is to become a highly skilled and versatile developer with a strong understanding of different programming languages,
            technologies, and IT concepts. I want to continuously expand my knowledge, strengthen my problem-solving abilities, and stay 
            open to learning new technologies.<br><br>
            I hope to build meaningful projects, challenge myself with new opportunities, and continue developing both my technical and 
            professional skills. Ultimately, I want to become a well-rounded IT professional who can confidently adapt to new technologies 
            and solve real-world problems.
        </p>

    </div>

  </div>
</template>

<style scoped>
.aboutsection {
  width: 100%;
  padding: 70px 8%;
  box-sizing: border-box;
}

/* ABOUT SECTION */

.num1 {
  max-width: 1000px;
  margin: 0 auto 70px;
}

.section-label {
  margin-bottom: 12px;
  color: #8B1E2D;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 3px;
}

.num1 h1 {
  margin: 0 0 25px;
  color: #111111;
  font-size: 52px;
  font-weight: 800;
}

.about-text {
  max-width: 900px;
  margin: 0;
  color: #555555;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 400;
}

/* DIVIDER */

.horizontal-line {
  width: 90%;
  margin: 0 auto 70px;
  border: 0;
  border-top: 1px solid #d6d6d6;
}

/* MY JOURNEY */

.journey {
  max-width: 1000px;
  margin: 0 auto 70px;
}

.journey .section-label {
  text-align: center;
}

.journey h2 {
  margin: 0 0 15px;
  color: #111111;
  font-size: 38px;
  font-weight: 800;
  text-align: center;
}

.journey-intro {
  max-width: 650px;
  margin: 0 auto 55px;
  color: #555555;
  font-size: 17px;
  line-height: 1.7;
  text-align: center;
}

/* TIMELINE */

.timeline {
  position: relative;
  max-width: 850px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 14px;
  top: 0;
  width: 3px;
  height: 100%;
  background: #8B1E2D;
}

.timeline-item {
  position: relative;
  display: flex;
  gap: 30px;
  margin-bottom: 45px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  width: 28px;
  height: 28px;
  flex-shrink: 0;
  box-sizing: border-box;
  background: #8B1E2D;
  border: 5px solid #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 0 3px #8B1E2D;
  z-index: 1;
}

.timeline-content {
  width: 100%;
  padding: 25px 30px;
  box-sizing: border-box;

  background: #ffffff;

  border: 3px solid #8B1E2D;
  border-radius: 20px;

  box-shadow:
    10px 10px 0 #8B1E2D,
    16px 16px 0 rgba(139, 30, 45, 0.12);

  transition: 0.3s ease;
}

.timeline-content:hover {
  transform: translate(-5px, -5px);

  box-shadow:
    15px 15px 0 #8B1E2D,
    23px 23px 0 rgba(139, 30, 45, 0.12);
}

.timeline-content span {
  color: #8B1E2D;
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 2px;
}

.timeline-content h3 {
  margin: 8px 0 12px;
  color: #111111;
  font-size: 23px;
  font-weight: 800;
}

.timeline-content p {
  margin: 0;
  color: #666666;
  font-size: 15px;
  line-height: 1.7;
}

/* SKILLS */

.num2 {
  text-align: center;
}

.num2 h2 {
  margin: 0 0 55px;
  color: #111111;
  font-size: 38px;
  font-weight: 800;
}

.skill-section {
  margin-bottom: 70px;
}

.skill-section > h3 {
  margin-bottom: 35px;
  color: #111111;
  font-size: 24px;
  font-weight: 700;
  text-transform: capitalize;
}

/* SKILL CARDS */

.frontend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.frontend-cards {
  width: 240px;
  min-height: 150px;
  padding: 25px;
  box-sizing: border-box;

  border: 4px solid #8B1E2D;
  border-radius: 20px;

  background: #ffffff;

  box-shadow:
    10px 10px 0 #8B1E2D,
    16px 16px 0 rgba(139, 30, 45, 0.12);

  transition: 0.3s ease;
}

.frontend-cards:hover {
  transform: translate(-5px, -5px);

  box-shadow:
    15px 15px 0 #8B1E2D,
    23px 23px 0 rgba(139, 30, 45, 0.12);
}

.frontend-cards h3 {
  margin: 0 0 15px;
  color: #111111;
  font-size: 22px;
  font-weight: 800;
}

.frontend-cards p {
  margin: 0;
  color: #666666;
  font-size: 14px;
  line-height: 1.6;
}

/* LANGUAGE SYMBOLS */

.html span {
  color: rgb(243, 101, 12);
  font-weight: 800;
  margin-left: 5px;
}

.css span {
  color: rgb(15, 161, 240);
  font-weight: 800;
  margin-left: 5px;
}

.javascript span {
  color: rgb(187, 187, 2);
  font-weight: 800;
  margin-left: 5px;
}




/* Goals section */

.goals-section{
    max-width: 1000px;
    margin: 0 auto 70px;
}


.goals-container{
    justify-content: center;
    text-align: center;
}


.goals-container h2{
  margin: 0 0 25px;
  color: #111111;
  font-size: 52px;
  font-weight: 800;
}


.goals-text{
  text-align: center;
  max-width: 1200px;
  color: #555555;
  font-size: 18px;
  line-height: 1.8;
  font-weight: 400;
}







/* MOBILE */

@media (max-width: 768px) {
  .goals-section {
    padding: 50px 25px;
  }

   .goals-container {
    margin-bottom: 50px;
   }

   .goals-container h2 {
    font-size: 30px;
   }

   .goals-text {
    font-size: 16px;
    line-height: 1.7;
   }

  .aboutsection {
    padding: 50px 25px;
  }

  .num1 {
    margin-bottom: 50px;
  }

  .num1 h1 {
    font-size: 40px;
  }

  .about-text {
    font-size: 16px;
    line-height: 1.7;
  }

  .horizontal-line {
    width: 100%;
    margin-bottom: 50px;
  }

  /* JOURNEY */

  .journey {
    margin-bottom: 50px;
  }

  .journey h2 {
    font-size: 30px;
  }

  .journey-intro {
    font-size: 16px;
    margin-bottom: 45px;
  }

  .timeline {
    margin-left: 0;
  }

  .timeline::before {
    left: 12px;
  }

  .timeline-item {
    gap: 20px;
    margin-bottom: 35px;
  }

  .timeline-dot {
    width: 25px;
    height: 25px;
  }

  .timeline-content {
    padding: 20px;
  }

  .timeline-content h3 {
    font-size: 20px;
  }

  .timeline-content p {
    font-size: 14px;
  }

  /* SKILLS */

  .num2 h2 {
    font-size: 30px;
    margin-bottom: 40px;
  }

  .frontend {
    gap: 25px;
  }

  .frontend-cards {
    width: 100%;
    max-width: 350px;
  }

  .skill-section {
    margin-bottom: 55px;
  }
}
</style>