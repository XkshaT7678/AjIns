function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = '110085'; // Set your password here

    if (password === correctPassword) {
        const loginContainer = document.getElementById('login-container');
        const contentContainer = document.getElementById('content-container');
        
        // Add fade-out animation to the login container
        loginContainer.classList.add('fade-out');
        
        // Delay the display of the content container until the fade-out is complete
        setTimeout(function() {
            loginContainer.style.display = 'none';
            contentContainer.style.display = 'block';
            contentContainer.classList.add('fade-in');
        }, 1000); // Duration of the fade-out (1s in this case)
    } else {
        document.getElementById('error-message').textContent = 'Incorrect password. Please try again.';
    }
}

function openTab(evt, className) {
    const currentContent = document.querySelector('.tab-content:not(.hidden)');
    
    // Add fade-out to the current visible tab
    if (currentContent) {
        currentContent.classList.remove('fade-in');
        currentContent.classList.add('fade-out');

        setTimeout(function() {
            currentContent.style.display = 'none';
            currentContent.classList.remove('fade-out');
            currentContent.classList.add('hidden');
            
            const tabLinks = document.getElementsByClassName('tab-link');
            for (let i = 0; i < tabLinks.length; i++) {
                tabLinks[i].className = tabLinks[i].className.replace(' active', '');
            }

            const newContent = document.getElementById(className);
            newContent.style.display = 'block';
            newContent.classList.add('fade-in');
            evt.currentTarget.className += ' active';
        }, 500); // Adjust the duration as needed
    }
}

// Set default tab to open on page load
document.addEventListener('DOMContentLoaded', function() {
    const firstTabContent = document.getElementById('class9');
    firstTabContent.style.display = 'block';
    firstTabContent.classList.add('fade-in');
});
