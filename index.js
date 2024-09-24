// Show the button when scrolling down 100px
window.onscroll = function () {
  const scrollToTopButton = document.querySelector(".scroll-to-top");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
};

// Smooth scroll to the top when the button is clicked
document.querySelector(".scroll-to-top").onclick = function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
