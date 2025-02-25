// Get the hamburger menu and the navbar
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('#navbar');

// Toggle the navbar visibility
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

