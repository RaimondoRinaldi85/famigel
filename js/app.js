const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const navLinks = ul.querySelectorAll('a');

burger.addEventListener('click', (e) => {
    e.stopPropagation();
    burger.classList.toggle('show-x');
    ul.classList.toggle('show');
});

document.addEventListener('click', (e) => {
    const isClickInsideMenu = ul.contains(e.target);
    const isClickOnBurger = burger.contains(e.target);

    if (!isClickInsideMenu && !isClickOnBurger) {
        burger.classList.remove('show-x');
        ul.classList.remove('show');
    }
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('show-x');
        ul.classList.remove('show');
    });
});
