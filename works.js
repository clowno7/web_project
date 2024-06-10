// scripts.js

// Function to navigate to a different page
function navigateTo(url) {
    window.location.href = url;
}

// Add event listeners to the navbar links
document.getElementById('homepage').addEventListener('click', function() {
    navigateTo('homepage.html');
});

document.getElementById('about-us').addEventListener('click', function() {
    navigateTo('about.html');
});

document.getElementById('service').addEventListener('click', function() {
    navigateTo('service.html');
});

document.getElementById('contact-us').addEventListener('click', function() {
    navigateTo('contact.html');
});

document.getElementById('blog-news').addEventListener('click', function() {
    navigateTo('blog.html');
});

document.getElementById('careers').addEventListener('click', function() {
    navigateTo('careers.html');
});

// Add event listeners to the footer links
document.getElementById('footer-home').addEventListener('click', function() {
    navigateTo('homepage.html');
});

document.getElementById('footer-about-us').addEventListener('click', function() {
    navigateTo('about.html');
});

document.getElementById('footer-services').addEventListener('click', function() {
    navigateTo('services.html');
});

document.getElementById('footer-contact-us').addEventListener('click', function() {
    navigateTo('contact.html');
});

document.getElementById('footer-careers').addEventListener('click', function() {
    navigateTo('careers.html');
});

document.getElementById('footer-it-consulting').addEventListener('click', function() {
    navigateTo('it-consulting.html');
});

document.getElementById('footer-saas-solutions').addEventListener('click', function() {
    navigateTo('saas-solutions.html');
});

document.getElementById('footer-corporate-seminars').addEventListener('click', function() {
    navigateTo('corporate-seminars.html');
});

document.getElementById('footer-industrial-training').addEventListener('click', function() {
    navigateTo('industrial-training.html');
});
