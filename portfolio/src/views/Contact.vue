```vue
<template>
    <div class="contact-form-container">

        <div class="contact-intro">
            <p class="section-label">GET IN TOUCH</p>
            <h1>Contact Me</h1>
            <p>
                Have a question, want to work together, or just want to say hello?
                Feel free to send me a message.
            </p>
        </div>

        <div class="contact-form">

            <div class="form-group">
                <label for="name">Name and Lastname</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                >
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                >
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea
                    id="message"
                    class="message-box"
                    placeholder="Write your message here..."
                ></textarea>
            </div>

            <button type="submit" class="send-button">
                Send Message
                <i class="fa-solid fa-paper-plane"></i>
            </button>

        </div>

    </div>
</template>

<style scoped>

.contact-form-container {
    width: 100%;
    min-height: calc(100vh - 100px);
    padding: 70px 8%;
    box-sizing: border-box;
}

/* INTRO */

.contact-intro {
    max-width: 700px;
    margin: 0 auto 40px;
    text-align: center;
}

.section-label {
    margin-bottom: 10px;
    color: #8B1E2D;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 3px;
}

.contact-intro h1 {
    margin: 0 0 15px;
    color: #111111;
    font-size: 52px;
    font-weight: 800;
}

.contact-intro p:last-child {
    margin: 0;
    color: #666666;
    font-size: 17px;
    line-height: 1.7;
}

/* FORM */

.contact-form {
    max-width: 650px;
    margin: 0 auto;
    padding: 40px;

    display: flex;
    flex-direction: column;
    gap: 24px;

    background: #ffffff;
    border: 3px solid #8B1E2D;
    border-radius: 20px;

    box-shadow:
        10px 10px 0 #8B1E2D,
        17px 17px 0 rgba(139, 30, 45, 0.12);
}

/* FORM GROUP */

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    color: #222222;
    font-size: 15px;
    font-weight: 700;
}

/* INPUTS */

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
    font-size: 15px;

    transition: 0.3s ease;
}

.contact-form input {
    height: 50px;
}

.message-box {
    min-height: 160px;
    resize: vertical;
}

/* PLACEHOLDER */

.contact-form input::placeholder,
.message-box::placeholder {
    color: #999999;
}

/* FOCUS */

.contact-form input:focus,
.message-box:focus {
    outline: none;
    border-color: #8B1E2D;
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(139, 30, 45, 0.1);
}

/* BUTTON */

.send-button {
    align-self: flex-start;

    padding: 13px 22px;

    color: #ffffff;
    background: #8f202d;

    border: 1px solid #8B1E2D;
    border-radius: 8px;

    font-size: 15px;
    font-weight: 700;

    cursor: pointer;
    transition: 0.3s ease;
}

.send-button i {
    margin-left: 8px;
}

.send-button:hover {
    background: #A92538;
    border-color: #A92538;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 30, 45, 0.3);
}

/* MOBILE */

@media (max-width: 768px) {

    .contact-form-container {
        padding: 50px 25px;
    }

    .contact-intro h1 {
        font-size: 40px;
    }

    .contact-intro p:last-child {
        font-size: 16px;
    }

    .contact-form {
        padding: 25px;
        box-shadow:
            7px 7px 0 #8B1E2D,
            12px 12px 0 rgba(139, 30, 45, 0.12);
    }

    .send-button {
        width: 100%;
    }
}
</style>
