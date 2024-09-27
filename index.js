// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

// Zobrazení/skrývání tlačítka při scrollování
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Funkce pro scrollování nahoru
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
