// ===========================
//  MOBILE MENU TOGGLE
// ===========================
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

// Create mobile nav element
const mobileNav = document.createElement('div');
mobileNav.classList.add('mobile-nav');
mobileNav.id = 'mobileNav';

// Clone nav links into mobile nav
const navItems = ['home', 'about', 'creations', 'gallery', 'reviews', 'contact'];
const navLabels = ['Home', 'About', 'Creations', 'Gallery', 'Reviews', 'Contact'];

navItems.forEach((item, i) => {
  const link = document.createElement('a');
  link.href = `#${item}`;
  link.textContent = navLabels[i];
  mobileNav.appendChild(link);
});

// Insert mobile nav after header
document.querySelector('header').after(mobileNav);

// Toggle menu open/close
menuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
  const icon = menuBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close mobile menu when a link is clicked
mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    const icon = menuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  });
});

// ===========================
//  CLOSE MENU ON RESIZE
// ===========================
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    mobileNav.classList.remove('open');
    const icon = menuBtn.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-xmark');
  }
});

// ===========================
//  ACTIVE NAV LINK ON SCROLL
// ===========================
const sections = document.querySelectorAll('section[id]');

const observerOptions = {
  root: null,
  rootMargin: '-30% 0px -60% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ===========================
//  SCROLL-REVEAL ANIMATION
// ===========================
const revealElements = document.querySelectorAll(
  '.card, .feature-item, .review, .gallery-item, .stat'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(25px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  revealObserver.observe(el);
});

// ===========================
//  NAVBAR SHADOW ON SCROLL
// ===========================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.boxShadow = '0 4px 25px rgba(0,0,0,0.15)';
  } else {
    header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
  }
});