const burgerButton = document.getElementById('burgerButton');
const burgerNav = document.getElementById('burgerNav');
const navLinks = document.querySelectorAll('.aboutUsNav, .contactUsNav');

function toggleNav() {
  burgerNav.classList.toggle('navHidden');
  burgerNav.classList.toggle('navVisible');
}

burgerButton.addEventListener('click', toggleNav);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (burgerNav.classList.contains('navVisible')) {
      toggleNav();
    }
  });
});