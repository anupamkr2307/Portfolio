// ========== Mobile menu toggle ==========
const navToggleBtn = document.querySelector('.navbar button');
if (navToggleBtn) {
    navToggleBtn.addEventListener('click', function () {
        const mobileMenu = document.querySelector('.mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('hidden');
        }
    });
}

// ========== Smooth scrolling for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });

            // Hide mobile menu if open
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// ========== Initialize slideshow (Projects Page only) ==========
if (document.querySelector('.slideshow')) {
    $(document).ready(function () {
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
}

// ========== Animate elements on scroll ==========
const animateOnScroll = function () {
    const elements = document.querySelectorAll('.animate__animated');
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight - 100) {
            element.classList.add('animate__fadeInUp'); // default fade in
            element.style.opacity = '1';
            element.style.transform = 'translate(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Run once on load
// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
  