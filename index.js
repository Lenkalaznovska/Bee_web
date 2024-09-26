// Smooth scroll to top functionality
const scrollToTopButton = document.querySelector('.scroll-to-top');

scrollToTopButton.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
