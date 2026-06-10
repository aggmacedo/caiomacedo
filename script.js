document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       Scroll Observer for Scroll-Triggered Animations
       ========================================================================== */
    const animCards = document.querySelectorAll('.card:not(.animate-fade-in-up)');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animCards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    /* ==========================================================================
       Smooth Scroll Offset adjustment for CTAs
       ========================================================================== */
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    smoothLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

});
