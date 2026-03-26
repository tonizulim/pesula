// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const burger = document.querySelector('.nav__burger');
const mobileMenu = document.getElementById('mobile-menu');

burger.addEventListener('click', () => {
  const isOpen = !mobileMenu.hidden;
  mobileMenu.hidden = isOpen;
  burger.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
  });
});

// Smooth scroll offset for sticky nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.service-card, .how__step, .contact-card, .about__content, .about__image').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
