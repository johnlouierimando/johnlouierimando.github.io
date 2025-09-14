// Menu toggle
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'flex';
    menu.style.flexDirection = 'column';
  });
}// Toggle mobile navigation with animation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth <= 640) {
        menu.style.display = 'none';
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Footer year
document.getElementById('yr').textContent = new Date().getFullYear();

// Contact form
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name) return formMsg.innerHTML = '<span class="error">Enter your name.</span>';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return formMsg.innerHTML = '<span class="error">Invalid email.</span>';
  if (!message) return formMsg.innerHTML = '<span class="error">Message cannot be empty.</span>';

  formMsg.innerHTML = '<span class="success">Message sent — thank you! (demo)</span>';
  form.reset();
});

// Dark/Light Mode Toggle with fade + localStorage
const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
  modeToggle.textContent = '☀️';
} else {
  modeToggle.textContent = '🌙';
}

// Toggle mode
modeToggle.addEventListener('click', () => {
  body.classList.add('fade'); // add fade class
  setTimeout(() => body.classList.remove('fade'), 600); // remove after animation

  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    modeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'light');
  } else {
    modeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'dark');
  }
});
