// index.js
document.addEventListener("DOMContentLoaded", function() {
    const cookieConsent = document.getElementById("cookieConsent");
    const acceptCookies = document.getElementById("acceptCookies");
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Zkontroluj, zda byly cookies již přijaty
    if (!localStorage.getItem("cookiesAccepted")) {
        cookieConsent.style.display = "block"; // Zobraz banner
    }

    // Přijmout cookies
    acceptCookies.addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieConsent.style.display = "none"; // Skryj banner
    });

    // Zobrazit tlačítko "Scroll to Top" při skrolování
    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block"; // Zobraz tlačítko
        } else {
            scrollToTopButton.style.display = "none"; // Skryj tlačítko
        }
    });

    // Přidat funkci skrolování na tlačítko
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
