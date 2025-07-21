function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Efecto de aparición al hacer scroll
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('section, .servicio');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
