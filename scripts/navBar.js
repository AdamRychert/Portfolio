const nav = document.querySelector('.nav__list');
const burger = document.querySelector('.burger');
burger.addEventListener('click',() => {
    nav.classList.toggle('hidden');
})

const arrow = document.querySelector('.arrow');

window.onscroll = function (){
    if (document.documentElement.scrollTop > 90) {
        arrow.classList.remove('hidden');
      } 
}
arrow.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
    arrow.classList.add('hidden');
})