document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.text-container');
    const scrollToTopButton = document.getElementById('scrollToTop');

    const options = {
        root: null,
        threshold: 0.1, // Aktivuje se, když 10% sekce je viditelných
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible'); // Přidá třídu pro zobrazení
                observer.unobserve(entry.target); // Přestane sledovat
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach(section => {
        observer.observe(section); // Sleduje sekce
    });

    // Scroll to top button functionality
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener('click', () => {
        document.body.scrollTop = 0; // Pro Safari
        document.documentElement.scrollTop = 0; // Pro Chrome, Firefox, IE a Opera
    });
});
