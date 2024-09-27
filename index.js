document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const scrollToTopButton = document.getElementById("scrollToTop");

    // Kontrola viditelnosti sekcí
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    observer.unobserve(entry.target); // Odstranění pozorování po zobrazení
                }
            });
        },
        { threshold: 0.1 } // Aktivace, když je 10% sekce viditelné
    );

    sections.forEach((section) => {
        observer.observe(section);
    });

    // Scroll to top button
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
