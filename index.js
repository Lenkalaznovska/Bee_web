window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Zobrazit tlačítko
    } else {
        scrollToTopButton.style.display = "none"; // Skrýt tlačítko
    }
};

// Funkce pro scrollování nahoru
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
