const burgerButton = document.getElementById('burgerButton');
const burgerNav = document.getElementById('burgerNav');

burgerButton.addEventListener('click', () => {
    if (burgerNav.classList.contains('navHidden')) {
        burgerNav.classList.remove('navHidden');
        burgerNav.classList.add('navVisible');
    } else {
        burgerNav.classList.remove('navVisible');
        burgerNav.classList.add('navHidden');
    }
});