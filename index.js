document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".text-container");
  const scrollToTopButton = document.getElementById("scrollToTop");
  const orderForm = document.getElementById("order-form");

  const options = {
    root: null,
    threshold: 0.1, // Aktivuje se, když 10% sekce je viditelných
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("section-visible"); // Přidá třídu pro zobrazení
        observer.unobserve(entry.target); // Přestane sledovat
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach((section) => {
    observer.observe(section); // Sleduje sekce
  });

  // Scroll to top button functionality
  window.addEventListener("scroll", () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  scrollToTopButton.addEventListener("click", () => {
    scrollToTopButton.style.transform = "scale(1.0)"; // Resetování scale pro kliknutí
    scrollToTopButton.style.transition = "transform 0.5s"; // Přechod na tlačítku
    scrollToTopButton.style.transform = "scale(1.2)"; // Zvětšení při kliknutí

    // Plynulý pohyb nahoru
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Plynulý scroll
    });
  });

  // Odeslání formuláře
  orderForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Zabránění výchozímu chování odeslání
    alert('Objednávka byla odeslána!'); // Oznámení po odeslání
    orderForm.reset(); // Resetování formuláře po odeslání
  });
});
