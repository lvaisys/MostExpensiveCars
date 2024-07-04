const burgerButton = document.getElementById('burgerButton');
const burgerNav = document.getElementById('burgerNav');
const navLinks = document.querySelectorAll('.aboutUsNav, .contactUsNav');
const body = document.body;

function toggleNav() {
  burgerNav.classList.toggle('navHidden');
  burgerNav.classList.toggle('navVisible');
  body.classList.toggle('noScroll');
}

burgerButton.addEventListener('click', toggleNav);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (burgerNav.classList.contains('navVisible')) {
      toggleNav();
    }
  });
});