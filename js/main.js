const navigator = document.querySelector('.nav-links');
const hamburgerIcon = document.querySelector('.hamburger');
const navOpen = document.querySelector('.nav-open');
const navClose = document.querySelector('#nav-close');
const navListEl = document.querySelectorAll('.nav-list');

hamburgerIcon.addEventListener('click', () => {
  navigator.style.right = '0';
});

navClose.addEventListener('click', () => {
  navigator.style.right = '-100%';
});

navListEl.forEach((el) => {
  el.addEventListener('click', () => {
    navigator.style.right = '-100%';
  });
});
const faqs = document.querySelectorAll('.faq-item');
faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('show');
    faq.classList.toggle('arrow-rotate');
  });
});
