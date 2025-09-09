// Mobile menu toggle
document.querySelector('.navbar button').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.fixed.w-full.bg-gray-900');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }

        // Hide mobile menu if it's open
        const mobileMenu = document.querySelector('.fixed.w-full.bg-gray-900');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Initialize slideshow
$(document).ready(function(){
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

// Animate elements on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate__animated:not(.animate__fadeIn)');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top < window.innerHeight - 100) {
            if (element.classList.contains('animate__fadeInLeft') || 
                element.classList.contains('animate__fadeInRight') ||
                element.classList.contains('animate__fadeInUp')) {
                element.style.opacity = '1';
                element.style.transform = 'translate(0)';
            }
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load
