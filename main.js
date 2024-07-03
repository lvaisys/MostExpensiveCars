document.querySelector('.courier-prime a[href="#contact"]').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#contactDialog').style.display = 'flex';
});

document.querySelector('#closeDialog').addEventListener('click', () => {
    document.querySelector('#contactDialog').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.querySelector('#contactDialog')) {
        document.querySelector('#contactDialog').style.display = 'none';
    }
});

document.querySelector('#contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Form submitted!');
    document.querySelector('#contactDialog').style.display = 'none';
});
