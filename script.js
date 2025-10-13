const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});

// meni hamburguer
// Toggle do menu mobile
const mhBtn = document.getElementById('mhBtn');
const mhNav = document.getElementById('mhNav');

if (mhBtn && mhNav) {
  mhBtn.addEventListener('click', () => {
    const opened = mhNav.classList.toggle('open');
    mhBtn.classList.toggle('open');
    mhBtn.setAttribute('aria-expanded', opened ? 'true' : 'false');
    mhNav.setAttribute('aria-hidden', opened ? 'false' : 'true');
  });

  // Fechar o menu ao clicar em um link (melhora UX)
  mhNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mhNav.classList.remove('open');
      mhBtn.classList.remove('open');
      mhBtn.setAttribute('aria-expanded', 'false');
      mhNav.setAttribute('aria-hidden', 'true');
    });
  });

  // Fechar com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mhNav.classList.contains('open')) {
      mhNav.classList.remove('open');
      mhBtn.classList.remove('open');
      mhBtn.setAttribute('aria-expanded', 'false');
      mhNav.setAttribute('aria-hidden', 'true');
    }
  });
}

//ondas rodape
// atualiza o ano automaticamente
document.getElementById('year').textContent = new Date().getFullYear();