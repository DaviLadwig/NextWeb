const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// menu hamburguer
 const hamburger = document.getElementById("hamburger");
    const nav = document.querySelector("nav");
    const overlay = document.getElementById("overlay");

    const toggleMenu = () => {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", toggleMenu);