// Skrýt tlačítko při načtení stránky
document.getElementById("scrollToTop").style.display = "none";

window.onscroll = function() {
    const scrollToTopButton = document.getElementById("scrollToTop");
    // Kontrola, zda je uživatel posunut více než 100px od vrchu
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = "block"; // Zobrazit tlačítko
    } else {
        scrollToTopButton.style.display = "none"; // Skrýt tlačítko, pokud je na začátku
    }
};

// Funkce pro scrollování nahoru
document.getElementById("scrollToTop").onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};
