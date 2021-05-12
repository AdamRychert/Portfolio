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

function getMailData(e){
    e.preventDefault();
    const sender = document.querySelector('input[name=email]');
    const subject = document.querySelector('input[name=temat]');
    const content = document.querySelector('textarea[name=content]');

    sendMail(sender.value, subject.value, content.value);
    sender.value = '';
    subject.value ='';
    content.value ='';
}

function sendMail(sender, subject, content){
    Email.send({
        SecureToken : "5ab51c26-2955-4ff7-b759-e2afcc9149cd",
        To : 'kontakt@adamrychert.pl',
        From : `${sender}`,
        Subject : `${subject}`,
        Body : `${content}`
    }).then(
    message => alert("wyslano pomyslnie")
    );
}

form.addEventListener('submit', getMailData);
contactBtn.addEventListener('click', openContact);
closeBtn.addEventListener('click', closeContact);
form.addEventListener('submit', closeContact);
