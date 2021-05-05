const navBar = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__btn');
const navList = document.querySelector('.nav__list');
const items = document.querySelectorAll('.nav__item')
let menuOpn = false;

function toggleOpen(){
    menuBtn.classList.add('open');
    navList.style.display = "flex";
    window.setTimeout(function() {
        items.forEach(item=>item.classList.toggle('item-open'));
    },30);
    menuOpn = true;
}
function toggleClosed(){
    if(document.body.clientWidth<427){
    window.setTimeout(function() {
        items.forEach(item=>item.classList.toggle('item-open'));
    },30);
    menuBtn.classList.remove('open');
    navList.style.display = "none";
    menuOpn = false;
    }
}

menuBtn.addEventListener('click', () => {
    if (!menuOpn) {
       toggleOpen();
    }else{
       toggleClosed();
    }
})
items.forEach(item => item.addEventListener('click',toggleClosed));


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