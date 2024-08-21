document.addEventListener("DOMContentLoaded", function() {
    // Typing Effect
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');
    const textArray = ["AJ INSTITUTE Video Portal"];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            cursorElement.classList.add('typing');
            typedTextElement.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            cursorElement.classList.remove('typing');
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            cursorElement.classList.add('typing');
            typedTextElement.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            cursorElement.classList.remove('typing');
            textArrayIndex = (textArrayIndex + 1) % textArray.length;
            setTimeout(type, typingDelay + 500);
        }
    }

    if (textArray.length) setTimeout(type, newTextDelay + 250);

    // Preloader and Progress Bar
    const preloader = document.getElementById('preloader');
    const progressBar = document.querySelector('.progress-bar');
    const progressText = document.querySelector('.progress-text');
    let progress = 0;

    function updateProgressBar() {
        progress++;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`;

        if (progress < 100) {
            setTimeout(updateProgressBar, 20);
        } else {
            setTimeout(function() {
                preloader.style.opacity = '0';
                setTimeout(function() {
                    preloader.style.display = 'none';
                    document.getElementById('content-container').style.display = 'block';
                }, 500);
            }, 500);
        }
    }

    updateProgressBar();

    // Tab Functionality
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            tabs.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            tab.classList.add('active');
            tabContents[index].classList.add('active');
        });
    });

    // Password Validation
    const loginButton = document.querySelector('button');
    const passwordField = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginButton.addEventListener('click', function() {
        const password = passwordField.value;
        if (password === "YourSecurePassword") { // Change this to your actual password
            document.getElementById('login-container').style.display = 'none';
            document.getElementById('content-container').style.display = 'block';
        } else {
            errorMessage.textContent = "Incorrect password. Please try again.";
        }
    });
});
