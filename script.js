function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'yourpassword'; // Set your password here

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

// Set default tab to open on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('class9').style.display = 'block';
});
