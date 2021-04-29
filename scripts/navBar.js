const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
let menuOpn = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpn) {
        menuBtn.classList.add('open');
        navList.style.display = "flex";
        menuOpn = true;
    }else{
        menuBtn.classList.remove('open');
        navList.style.display = "none";
        menuOpn = false;
    }
})


const arrow = document.querySelector('.arrow');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 70) {
        arrow.classList.remove('hidden');
    }else{
        arrow.classList.add('hidden');
    }
}
arrow.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})