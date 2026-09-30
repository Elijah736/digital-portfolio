<template>
<div class="aboutsection">
    <div class="num1">
        <h1>A little about me.</h1><br>
        <p>
            I am an aspiring web developer who grew up in Lotus River.
            I have been passionate about technology for as long as I can remember.<br> I strive to continuously grow my skills and improve my understanding of the fields I am currently working in.
            I am always looking for <br> opportunities to learn, challenge myself, and become a better developer.
        </p>
    </div>
    <hr class="horizontal-line"><br><br><br>
    <div class="num2">
        <h3>frontend</h3><br><br>
        <div class="frontend">
            <div class="frontend-cards">
                <h3 class="html">HTML <span><></span></h3>
            </div>
            <div class="frontend-cards">
                <h3 class="css">CSS <span>#</span></h3>
            </div>
            <div class="frontend-cards">
                <h3 class="javascript">Javascript <span>JS</span></h3>
            </div>
            <div class="frontend-cards">
                <h3 class="vue">Vue.js</h3>
            </div>
        </div><br><br><br>

        <hr class="horizontal-line"><br><br><br>
        <h3>backend</h3><br><br>
        <div class="frontend">
            <div class="frontend-cards">
                <h3 class="">node.js</h3>
            </div>
        </div><br><br><br>

        <hr class="horizontal-line"><br><br><br>
        <h3>database</h3><br><br>
        <div class="frontend">
            <div class="frontend-cards">
                <h3 class="">MySQL</h3>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.aboutsection{
    padding: 20px;
}

.num1{
    margin-top: 50px;
    margin-bottom: 50px;
}

.num1 h1{
  margin: 0 0 20px;
  color: #111111;
  font-size: 52px;
}

.num1 p{
    font-weight: 400;
    word-spacing: 20%;
}

.horizontal-line{
    width: 90%;
    color: rgb(169, 169, 169);
}

.num2{
    justify-content: center;
    text-align: center;
}

.num2 h3{
    font-weight: 700;
}

.frontend{
    display: flex;
    justify-content: center;
    gap: 20px;
}

.frontend-cards{
  width: 300px;
  border: 5px solid #8B1E2D;
  border-radius: 25px;
  padding: 10px;
  background: #ffffff;
  box-shadow:
    12px 12px 0 #8B1E2D,
    20px 20px 0 rgba(139, 30, 45, 0.15);
  transition: 0.3s ease;
}

.frontend-cards:hover{
  transform: translate(-5px, -5px);
  box-shadow:
    18px 18px 0 #8B1E2D,
    28px 28px 0 rgba(139, 30, 45, 0.15);
}

.html span{
    color: rgb(243, 101, 12);
    font-weight: 800;
}

.css span{
    color: rgb(15, 161, 240);
    font-weight: 800;
}

.javascript span{
    color: rgb(187, 187, 2);
    font-weight: 800;
}
</style>