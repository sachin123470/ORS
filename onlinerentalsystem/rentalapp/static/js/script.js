document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('auth-modal');
    const loginLink = document.getElementById('login-link');
    const closeBtn = document.querySelector('.close');
    const tabs = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const switchTabs = document.querySelectorAll('.switch-tab');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const contactForm = document.getElementById('contact-form');

//code update 1
// redirect user into contact page
const contactPageLink = document.getElementById('contact-page-link');
if (contactPageLink) {
    contactPageLink.addEventListener('click', () => {
        window.location.href = "/contact/";
    });
}

//code update 2 
// pop up user to login/registration modal after clicking view details(only if not logged in or registered)

    // Open modal on login/register link click
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';  // show the modal
    });

    // Close modal on close button click
    closeBtn.addEventListener('click', () => modal.style.display = 'none');

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) modal.style.display = 'none';
    });

    // Tab switching logic
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Switch tabs via links (e.g., "Register now" or "Login")
    switchTabs.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabName = link.getAttribute('data-tab');
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            document.querySelector(`.tab-link[data-tab="${tabName}"]`).classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Login form submission
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = e.submitter.getAttribute('data-role');
        const username = loginForm.querySelector('input[type="text"]').value;
        alert(`Logged in as ${role === 'owner' ? 'Property Owner' : 'Tenant'} with username: ${username}`);
        modal.style.display = 'none';
    });

    // Register form submission
    // registerForm.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     const password = registerForm.querySelector('input[placeholder="Password"]').value;
    //     const confirmPassword = registerForm.querySelector('input[placeholder="Confirm Password"]').value;
    //     if (password !== confirmPassword) {
    //         alert('Passwords do not match!');
    //         return;
    //     }
    //     alert('Account created successfully!');
    //     modal.style.display = 'none';
    //     registerForm.reset();
    // });

    // Register form submission with role-based redirect
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const password = registerForm.querySelector('input[placeholder="Password"]').value;
    const confirmPassword = registerForm.querySelector('input[placeholder="Confirm Password"]').value;
    const roleSelect = registerForm.querySelector('select');
    const selectedRole = roleSelect ? roleSelect.value : '';

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (selectedRole === 'owner') {
        // Redirect to Property Owner registration page
        window.location.href = '/property-owner/';
    } else if (selectedRole === 'tenant') {
        // Proceed with regular registration flow for tenant
        alert('Tenant account created successfully!');
        modal.style.display = 'none';
        registerForm.reset();
    } else {
        alert('Please select a valid role.');
    }
});


    // Contact form submission (only on contactUs.html)
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});