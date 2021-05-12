const contactBtn = document.querySelector('#contact');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.contact__btn');
const form = document.querySelector('.form');
const body = document.querySelector('body');
function openContact(){
    body.style.overflow = 'hidden';
    overlay.style.transform = `scale(1)`;
    window.setTimeout(function() {
    overlay.style.backgroundColor = `rgba(48, 48, 48, 0.85)`;
    },230);
}
function closeContact(){
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
    window.setTimeout(function() {
    overlay.style.transform = `scale(0)`;
    },500);
    body.style.overflow = 'scroll';
    body.style.overflowX = 'hidden';
}

contactBtn.addEventListener('click', openContact);
closeBtn.addEventListener('click', closeContact);
form.addEventListener('submit', closeContact);
