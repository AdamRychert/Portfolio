const Strings = [{
        currentLang: "PL",
        nav: document.querySelectorAll('[data-ttt-nav]'),
        headers: document.querySelectorAll('[data-ttt-headings]')
    },
    {
        lang: "PL",
        nav: ["PROJEKTY", "WYKSZTAŁCENIE", "KONTAKT", "O MNIE"],
        headers: ["ROZWIJAJĄCY SIĘ PROGRAMISTA", "STUDENT INFORMATYKI"]
    },
    {
        lang: "ENG",
        nav: ["PROJECTS", "EDUCATION", "CONTACT", "ABOUT ME"],
        headers: ["ASPIRING PROGRAMMER", "COMPUTER SCIENCE STUDENT"]
    }
]

function switcher(e) {
    const selectedLang = e.srcElement.innerText; //eng or pl 

    const source = Strings[0];
    const plStr = Strings[1];
    const engStr = Strings[2];

    //changing language
    if (selectedLang == "ENG") {
        //site-headers
        for (let i = 0; i < plStr.nav.length; ++i) {
            source.nav[i].innerHTML = engStr.nav[i];
        }
        for (let i = 0; i < plStr.headers.length; ++i) {
            source.headers[i].innerHTML = engStr.headers[i];
        }
        source.currentLang = "ENG";
        document.documentElement.setAttribute('lang', 'eng');
        return 0;
    }

    //checking if lang needs to be changed from eng to pl
    if (source.currentLang == "ENG") {
        for (let i = 0; i < plStr.nav.length; ++i) {
            source.nav[i].innerHTML = plStr.nav[i];
        }
        //site-headers
        for (let i = 0; i < plStr.headers.length; ++i) {
            source.headers[i].innerHTML = plStr.headers[i];
        }
        source.currentLang = "PL";
        //set the website lang
        document.documentElement.setAttribute('lang', 'pl');
    }
}

const langSwitch = document.querySelectorAll('option');
langSwitch.forEach(option => option.addEventListener('click', switcher));