const burgerClose = document.getElementById('burgerClose');

burgerClose.addEventListener('click', toggleBurger())

function toggleBurger() {
    const mobileMenu = document.querySelector('.header__mobileNav');
    mobileMenu.classList.toggle('.active')
}
