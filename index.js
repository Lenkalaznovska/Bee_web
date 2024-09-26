// Scroll to Top Functionality
const scrollToTopBtn = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopBtn.style.display = 'block';

        // Change button style based on position
        if (window.scrollY + scrollToTopBtn.offsetHeight > document.body.offsetHeight - 100) {
            scrollToTopBtn.classList.add('footer-active'); // Match footer color
        } else {
            scrollToTopBtn.classList.remove('footer-active'); // Revert to default
        }
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
