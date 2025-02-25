// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function goToSlide(n) {
        slider.style.transform = `translateX(-${n * 100}%)`;
        currentSlide = n;
    }

    function nextSlide() {
        if (currentSlide >= slides.length - 1) {
            goToSlide(0);
        } else {
            goToSlide(currentSlide + 1);
        }
    }

    function prevSlide() {
        if (currentSlide <= 0) {
            goToSlide(slides.length - 1);
        } else {
            goToSlide(currentSlide - 1);
        }
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    // Auto slide every 5 seconds
    setInterval(nextSlide, 5000);

    // Mobile menu functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const body = document.body;

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
            body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !menuToggle.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });

    // Close menu when clicking on a link
    const navLinksItems = document.querySelectorAll('.nav-links a');
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
});
