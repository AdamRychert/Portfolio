const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');
let menuOpn = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpn) {
        menuBtn.classList.add('open');
        navList.style.display = "flex";
        menuOpn = true;
    } else {
        menuBtn.classList.remove('open');
        navList.style.display = "none";
        menuOpn = false;
    }
})


navList.addEventListener('click', () => {
    menuBtn.classList.remove('open');
    navList.style.display = "none";
    menuOpn = false;
})

const arrow = document.querySelector('.arrow');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 90) {
        arrow.classList.remove('hidden');
    }
}
arrow.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    arrow.classList.add('hidden');
})