document.addEventListener('DOMContentLoaded', function() {
    // Hide preloader after page load
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
            document.getElementById('login-container').classList.remove('hidden');
        }, 600); // 600ms delay to allow fade-out
    }, 2000); // 2000ms preloader duration

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
