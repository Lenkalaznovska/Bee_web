document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.text-container');

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
});
