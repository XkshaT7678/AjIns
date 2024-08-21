document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after page load
    const preloader = document.getElementById('preloader');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    let progress = 0;

    // Simulate progress
    const progressInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressText.textContent = progress + '%';

        if (progress >= 100) {
            clearInterval(progressInterval);
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    document.getElementById('login-container').classList.remove('hidden');
                }, 600); // 600ms delay to allow fade-out
            }, 300); // small delay after reaching 100%
        }
    }, 20); // Adjust speed as needed, here it's set to complete in 2 seconds

    document.getElementById('class9').style.display = 'block';
});

function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '110085'; // Set your password here

    if (password === correctPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('content-container').style.display = 'block';
    } else {
        document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
    }
}

function openTab(evt, className) {
    const tabContent = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    const tabLinks = document.getElementsByClassName('tab-link');
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(' active', '');
    }

    document.getElementById(className).style.display = 'block';
    evt.currentTarget.className += ' active';
}
