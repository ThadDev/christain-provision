// Lucide icons
lucide.createIcons();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Simple scroll animation
const elements = document.querySelectorAll('.glass');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('opacity-100', 'translate-y-0');
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => {
  el.classList.add('opacity-0', 'translate-y-10', 'transition', 'duration-700');
  observer.observe(el);
});