<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const errorMessage = ref('')
const successMessage = ref('')
const sending = ref(false)

const sendMessage = async () => {
    errorMessage.value = ''
    successMessage.value = ''

    if (!name.value || !email.value || !message.value) {
        errorMessage.value = 'Please fill in all the fields.'
        return
    }

    if (!email.value.includes('@')) {
        errorMessage.value = 'Please enter a valid email address.'
        return
    }

    sending.value = true

    try {
        const formData = new FormData()

        formData.append('form-name', 'contact')
        formData.append('name', name.value)
        formData.append('email', email.value)
        formData.append('message', message.value)

        const response = await fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams(formData).toString()
        })

        if (!response.ok) {
            throw new Error('Failed to submit form')
        }

        successMessage.value =
            'Message sent successfully! I will get back to you soon.'

        name.value = ''
        email.value = ''
        message.value = ''

    } catch (error) {
        console.error(error)

        errorMessage.value =
            'Something went wrong. Please try again or contact me directly.'
    } finally {
        sending.value = false
    }
}
</script>

<template>
    <div class="contact-page">

        <!-- BACKGROUND DECORATION -->

        <div class="background-decoration decoration-one"></div>
        <div class="background-decoration decoration-two"></div>

        <div class="background-dot dot-one"></div>
        <div class="background-dot dot-two"></div>
        <div class="background-dot dot-three"></div>


        <!-- HERO -->

        <section class="contact-hero">

            <div class="contact-intro">

                <p class="section-label">
                    GET IN TOUCH
                </p>

                <h1>
                    Let's talk<span>.</span>
                </h1>

                <p>
                    Have a question, want to work together, or just want to say hello?
                    Feel free to send me a message. I'm always open to connecting
                    with new people and opportunities.
                </p>

                <div class="intro-line"></div>

            </div>

        </section>


        <!-- CONTACT CONTENT -->

        <section class="contact-content">


            <!-- CONTACT INFORMATION -->

            <div class="contact-information">

                <p class="section-label">
                    CONTACT DETAILS
                </p>

                <h2>
                    Get in <span>touch.</span>
                </h2>

                <p class="information-text">
                    Whether you have a project in mind, want to discuss an
                    opportunity, or simply want to connect, you can reach me
                    using any of the options below.
                </p>


                <!-- EMAIL -->

                <a
                    href="mailto:elijahlategan3@gmail.com"
                    class="contact-card"
                >

                    <div class="contact-icon">
                        <i class="fa-solid fa-envelope"></i>
                    </div>

                    <div class="contact-card-content">
                        <span>EMAIL</span>
                        <strong>
                            elijahlategan3@gmail.com
                        </strong>
                    </div>

                    <div class="contact-card-arrow">
                        →
                    </div>

                </a>


                <!-- PHONE -->

                <a
                    href="tel:+27664282857"
                    class="contact-card"
                >

                    <div class="contact-icon">
                        <i class="fa-solid fa-phone"></i>
                    </div>

                    <div class="contact-card-content">
                        <span>PHONE</span>
                        <strong>
                            066 428 2857
                        </strong>
                    </div>

                    <div class="contact-card-arrow">
                        →
                    </div>

                </a>


                <!-- WHATSAPP -->

                <a
                    href="https://wa.me/27664282857"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-card"
                >

                    <div class="contact-icon">
                        <i class="fa-brands fa-whatsapp"></i>
                    </div>

                    <div class="contact-card-content">
                        <span>WHATSAPP</span>
                        <strong>
                            Chat with me
                        </strong>
                    </div>

                    <div class="contact-card-arrow">
                        ↗
                    </div>

                </a>


                <!-- AVAILABILITY -->

                <div class="availability">

                    <div class="status-dot"></div>

                    <div>
                        <strong>
                            Available for opportunities
                        </strong>

                        <span>
                            South Africa · GMT+2
                        </span>
                    </div>

                </div>

            </div>


            <!-- CONTACT FORM -->

            <div class="contact-form-wrapper">

                <div class="form-top">

                    <div>

                        <p class="form-number">
                            01
                        </p>

                        <h3>
                            Send me a message.
                        </h3>

                    </div>

                    <div class="form-decoration">
                        <i class="fa-solid fa-paper-plane"></i>
                    </div>

                </div>


                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    class="contact-form"
                    @submit.prevent="sendMessage"
                >

                    <!-- NETLIFY FORM NAME -->

                    <input
                        type="hidden"
                        name="form-name"
                        value="contact"
                    >


                    <!-- HONEYPOT -->

                    <div
                        class="honeypot"
                        aria-hidden="true"
                    >

                        <label>
                            Don't fill this out:

                            <input
                                name="bot-field"
                                tabindex="-1"
                                autocomplete="off"
                            >

                        </label>

                    </div>


                    <!-- NAME -->

                    <div class="form-group">

                        <label for="name">
                            Name and Lastname
                        </label>

                        <input
                            id="name"
                            v-model="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                        >

                    </div>


                    <!-- EMAIL -->

                    <div class="form-group">

                        <label for="email">
                            Email
                        </label>

                        <input
                            id="email"
                            v-model="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>


                    <!-- MESSAGE -->

                    <div class="form-group">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            v-model="message"
                            name="message"
                            class="message-box"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                    </div>


                    <!-- ERROR MESSAGE -->

                    <div
                        v-if="errorMessage"
                        class="message-alert error-alert"
                    >

                        <i class="fa-solid fa-circle-exclamation"></i>

                        <span>
                            {{ errorMessage }}
                        </span>

                    </div>


                    <!-- SUCCESS MESSAGE -->

                    <div
                        v-if="successMessage"
                        class="message-alert success-alert"
                    >

                        <i class="fa-solid fa-circle-check"></i>

                        <span>
                            {{ successMessage }}
                        </span>

                    </div>


                    <!-- SEND BUTTON -->

                    <button
                        type="submit"
                        class="send-button"
                        :disabled="sending"
                    >

                        <span v-if="!sending">
                            Send Message
                        </span>

                        <span v-else>
                            Sending...
                        </span>

                        <i
                            v-if="!sending"
                            class="fa-solid fa-paper-plane"
                        ></i>

                        <i
                            v-else
                            class="fa-solid fa-spinner spinner"
                        ></i>

                    </button>

                </form>

            </div>

        </section>


        <!-- BOTTOM CTA -->

        <section class="contact-bottom">

            <div class="bottom-circle">
                <span>+</span>
            </div>

            <p class="section-label">
                HAVE A PROJECT IN MIND?
            </p>

            <h2>
                Let's build something
                <span>great together.</span>
            </h2>

            <p class="bottom-description">
                I'm always interested in learning, collaborating and
                working on new ideas.
            </p>

            <a
                href="mailto:elijahlategan3@gmail.com"
                class="bottom-email"
            >
                elijahlategan3@gmail.com

                <span>
                    →
                </span>
            </a>

        </section>

    </div>
</template>


<style scoped>

.contact-page {
    width: 100%;
    min-height: 100vh;
    background: #ffffff;
    color: #222222;
    overflow: hidden;
    position: relative;
}


/* BACKGROUND DECORATION */

.background-decoration {
    position: absolute;
    border: 1px solid rgba(139, 30, 45, 0.12);
    border-radius: 50%;
    pointer-events: none;
}

.decoration-one {
    width: 420px;
    height: 420px;
    top: 100px;
    right: -220px;
    animation: rotateDecoration 20s linear infinite;
}

.decoration-two {
    width: 250px;
    height: 250px;
    bottom: 300px;
    left: -150px;
    animation: rotateDecoration 15s linear infinite reverse;
}

.background-dot {
    position: absolute;
    width: 9px;
    height: 9px;
    background: #8B1E2D;
    border-radius: 50%;
    pointer-events: none;
}

.dot-one {
    top: 160px;
    right: 15%;
    animation: pulseDot 2.5s ease-in-out infinite;
}

.dot-two {
    top: 55%;
    left: 7%;
    animation: pulseDot 3s ease-in-out infinite;
}

.dot-three {
    bottom: 180px;
    right: 8%;
    animation: pulseDot 2s ease-in-out infinite;
}


/* HERO */

.contact-hero {
    padding: 90px 8% 55px;
    position: relative;
    z-index: 2;
}

.contact-intro {
    max-width: 850px;
    margin: 0 auto;
    text-align: center;
}

.section-label {
    margin: 0 0 15px;
    color: #8B1E2D;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 3px;
}

.contact-intro h1 {
    margin: 0;
    color: #111111;
    font-size: clamp(4rem, 8vw, 7rem);
    line-height: 0.9;
    font-weight: 800;
    letter-spacing: -5px;
}

.contact-intro h1 span {
    color: #8B1E2D;
}

.contact-intro > p:not(.section-label) {
    max-width: 650px;
    margin: 30px auto 0;
    color: #666666;
    font-size: 17px;
    line-height: 1.8;
}

.intro-line {
    width: 70px;
    height: 3px;
    margin: 35px auto 0;
    background: #8B1E2D;
}


/* MAIN CONTENT */

.contact-content {
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 40px 8% 110px;
    box-sizing: border-box;

    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 80px;

    position: relative;
    z-index: 2;
}


/* CONTACT INFORMATION */

.contact-information {
    padding-top: 20px;
}

.contact-information h2 {
    margin: 0;
    color: #111111;
    font-size: clamp(3rem, 5vw, 5rem);
    line-height: 0.95;
    font-weight: 800;
    letter-spacing: -3px;
}

.contact-information h2 span {
    display: block;
    color: #8B1E2D;
}

.information-text {
    max-width: 430px;
    margin: 30px 0 35px;
    color: #777777;
    font-size: 15px;
    line-height: 1.8;
}


/* CONTACT CARDS */

.contact-card {
    display: flex;
    align-items: center;
    gap: 16px;

    width: 100%;
    max-width: 470px;

    padding: 18px;
    margin-bottom: 13px;

    box-sizing: border-box;

    background: #ffffff;
    border: 1px solid #eeeeee;

    text-decoration: none;
    color: #222222;

    transition: 0.35s ease;
}

.contact-card:hover {
    transform: translateX(8px);
    border-color: rgba(139, 30, 45, 0.35);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.07);
}

.contact-icon {
    width: 45px;
    height: 45px;
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #f8e9ec;
    color: #8B1E2D;

    font-size: 17px;
}

.contact-card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
}

.contact-card-content span {
    color: #999999;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
}

.contact-card-content strong {
    color: #222222;
    font-size: 13px;
    word-break: break-word;
}

.contact-card-arrow {
    margin-left: auto;
    color: #8B1E2D;
    font-size: 20px;
    transition: 0.3s ease;
}

.contact-card:hover .contact-card-arrow {
    transform: translate(4px, -3px);
}


/* AVAILABILITY */

.availability {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 30px;
}

.status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #3ca66b;
    box-shadow: 0 0 0 5px rgba(60, 166, 107, 0.12);
    animation: statusPulse 2s infinite;
}

.availability div:last-child {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.availability strong {
    font-size: 12px;
    color: #333333;
}

.availability span {
    font-size: 11px;
    color: #999999;
}


/* FORM */

.contact-form-wrapper {
    padding: 38px;

    background: #ffffff;
    border: 3px solid #8B1E2D;
    border-radius: 20px;

    box-shadow:
        12px 12px 0 #8B1E2D,
        20px 20px 0 rgba(139, 30, 45, 0.1);

    position: relative;
}

.form-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    margin-bottom: 30px;
}

.form-number {
    margin: 0 0 8px;
    color: #8B1E2D;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 2px;
}

.form-top h3 {
    margin: 0;
    color: #111111;
    font-size: 28px;
    font-weight: 800;
}

.form-decoration {
    width: 52px;
    height: 52px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #8B1E2D;
    background: #f8e9ec;

    border-radius: 50%;

    animation: planeFloat 3s ease-in-out infinite;
}


/* CONTACT FORM */

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 22px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: #222222;
    font-size: 13px;
    font-weight: 700;
}

.contact-form input,
.message-box {
    width: 100%;
    box-sizing: border-box;

    padding: 14px 16px;

    color: #222222;
    background: #f7f7f7;

    border: 2px solid #d9d9d9;
    border-radius: 10px;

    font-family: inherit;
    font-size: 14px;

    transition: 0.3s ease;
}

.contact-form input {
    height: 50px;
}

.message-box {
    min-height: 170px;
    resize: vertical;
}

.contact-form input::placeholder,
.message-box::placeholder {
    color: #999999;
}

.contact-form input:focus,
.message-box:focus {
    outline: none;
    border-color: #8B1E2D;
    background: #ffffff;
    box-shadow: 0 0 0 4px rgba(139, 30, 45, 0.08);
}


/* HONEYPOT */

.honeypot {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
}


/* ALERTS */

.message-alert {
    display: flex;
    align-items: center;
    gap: 9px;

    padding: 12px 15px;

    border-radius: 8px;

    font-size: 13px;
    line-height: 1.5;
}

.error-alert {
    color: #8B1E2D;
    background: #f9ebed;
    border: 1px solid #efd1d5;
}

.success-alert {
    color: #28764b;
    background: #edf8f1;
    border: 1px solid #ccebd8;
}


/* BUTTON */

.send-button {
    align-self: flex-start;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    padding: 14px 24px;

    color: #ffffff;
    background: #8f202d;

    border: 1px solid #8B1E2D;
    border-radius: 8px;

    font-family: inherit;
    font-size: 14px;
    font-weight: 700;

    cursor: pointer;

    transition: 0.3s ease;
}

.send-button:hover:not(:disabled) {
    background: #A92538;
    border-color: #A92538;
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(139, 30, 45, 0.3);
}

.send-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.send-button i {
    font-size: 13px;
}

.spinner {
    animation: spin 0.8s linear infinite;
}


/* BOTTOM CTA */

.contact-bottom {
    min-height: 60vh;
    padding: 100px 8%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background: #111111;
    color: #ffffff;

    position: relative;
    overflow: hidden;
}

.contact-bottom::before {
    content: '';

    position: absolute;

    width: 500px;
    height: 500px;

    border: 1px solid rgba(139, 30, 45, 0.3);
    border-radius: 50%;

    right: -250px;
    top: 50%;

    transform: translateY(-50%);

    animation: rotateDecoration 25s linear infinite;
}

.bottom-circle {
    width: 70px;
    height: 70px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 35px;

    border: 2px solid #8B1E2D;
    border-radius: 50%;

    position: relative;
}

.bottom-circle::after {
    content: '';

    position: absolute;

    width: 95px;
    height: 95px;

    border: 1px solid rgba(139, 30, 45, 0.4);
    border-radius: 50%;

    animation: pulseCircle 2.5s ease-in-out infinite;
}

.bottom-circle span {
    color: #8B1E2D;
    font-size: 25px;
}

.contact-bottom h2 {
    max-width: 850px;

    margin: 0;

    font-size: clamp(3.5rem, 7vw, 7rem);
    line-height: 0.92;

    font-weight: 800;
    letter-spacing: -5px;

    position: relative;
    z-index: 2;
}

.contact-bottom h2 span {
    display: block;
    color: #8B1E2D;
}

.bottom-description {
    max-width: 500px;

    margin: 30px 0 0;

    color: #999999;

    font-size: 15px;
    line-height: 1.8;

    position: relative;
    z-index: 2;
}

.bottom-email {
    display: inline-flex;
    align-items: center;
    gap: 15px;

    width: fit-content;

    margin-top: 35px;

    color: #ffffff;
    text-decoration: none;

    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;

    position: relative;
    z-index: 2;

    transition: 0.3s ease;
}

.bottom-email span {
    color: #8B1E2D;
    font-size: 22px;
    transition: 0.3s ease;
}

.bottom-email:hover {
    color: #8B1E2D;
}

.bottom-email:hover span {
    transform: translateX(7px);
}


/* ANIMATIONS */

@keyframes rotateDecoration {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

@keyframes pulseDot {
    0%,
    100% {
        transform: scale(1);
        opacity: 0.5;
    }

    50% {
        transform: scale(1.6);
        opacity: 1;
    }
}

@keyframes statusPulse {
    0%,
    100% {
        box-shadow: 0 0 0 5px rgba(60, 166, 107, 0.12);
    }

    50% {
        box-shadow: 0 0 0 9px rgba(60, 166, 107, 0.03);
    }
}

@keyframes planeFloat {
    0%,
    100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-5px) rotate(5deg);
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

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}


/* TABLET */

@media (max-width: 1000px) {

    .contact-content {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .contact-information {
        max-width: 650px;
    }

    .contact-card {
        max-width: 100%;
    }

}


/* MOBILE */

@media (max-width: 768px) {

    .contact-hero {
        padding: 70px 25px 40px;
    }

    .contact-intro h1 {
        font-size: 4rem;
        letter-spacing: -3px;
    }

    .contact-intro > p:not(.section-label) {
        font-size: 15px;
    }

    .contact-content {
        padding: 30px 25px 90px;
        gap: 55px;
    }

    .contact-information h2 {
        font-size: 3.5rem;
    }

    .contact-form-wrapper {
        padding: 25px;

        box-shadow:
            7px 7px 0 #8B1E2D,
            12px 12px 0 rgba(139, 30, 45, 0.1);
    }

    .form-top h3 {
        font-size: 23px;
    }

    .form-decoration {
        width: 45px;
        height: 45px;
    }

    .send-button {
        width: 100%;
    }

    .contact-bottom {
        min-height: 55vh;
        padding: 80px 25px;
    }

    .contact-bottom h2 {
        font-size: 4rem;
        letter-spacing: -3px;
    }

    .bottom-email {
        font-size: 12px;
        word-break: break-all;
    }

    .decoration-one {
        right: -300px;
    }

    .decoration-two {
        left: -180px;
    }

}

</style>
