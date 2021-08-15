const Strings = [{
        currentLang: "PL",
        // nav: document.querySelectorAll('[data-ttt-nav]'),
        // headers: document.querySelectorAll('[data-ttt-headings]'),
        components: [
            document.querySelectorAll('[data-ttt-nav]'), //nav text
            document.querySelectorAll('[data-ttt-headings]'), // headings text
            document.querySelectorAll('[data-ttt-projects]'), //all text from project section
            document.querySelectorAll('[data-ttt-education]'), //all text from section about education
            document.querySelectorAll('[data-ttt-about]'), //about section
            document.querySelectorAll('[data-ttt-cnt]'), //contact form
            document.querySelectorAll('[data-ttt-ftr]') //footer
        ]
    },
    {
        lang: "PL",
        components: [
                ["PROJEKTY", "WYKSZTAŁCENIE", "KONTAKT", "O MNIE"],
                ["ROZWIJAJĄCY SIĘ PROGRAMISTA", "STUDENT INFORMATYKI"],
                ["PROJEKTY I UMIEJĘTNOŚCI", "Mój Github", "TO PORTFOLIO", "ZOBACZ KOD", "SZKOLNY PROJEKT", "ZOBACZ KOD", "ZOBACZ KOD"],
                ["WYKSZTAŁCENIE", "Uniwersytet Kardynała Stefana Wyszyńskiego w Warszawie", "Kierunek: Informatyka", "15 października 2020 r. -> w trakcie", 'Powiatowy Zespół Szkół nr 2 im. Bohaterskiej Załogi ORP "Orzeł" w Wejherowie ', 'Technikum, kierunek -> Informatyka', '1 września 2016 r. - 12 kwietnia 2020 r.', ' Uzyskany dyplom technika informatyka'],
                [
                    "KILKA SŁÓW O MNIE", '"Jak to portfolio może się wyróżnić na tle innych?", "Co ciekawego mogę o sobie napisać?" - takie myśli towarzyszyły mi podczas tworzenia tego tekstu i wtedy przypomniałem sobie o powyższym cytacie. Postaram się więc być tak szczerym, jak tylko to możliwe.', "IT - pasja czy pogoń za pieniądzem", "Dokonując wyboru następnej szkoły nie kierowałem się niczym szczególnym - ot usłyszałem, że programerka to fajny zawód, w którym można dobrze zarobić. Dopiero parę lat póżniej stało się to dla mnie pasją. Uwielbiam programistyczne community, podejmowanie się i rozwiązywanie nowych problemów, pracę przy komputerze i to, że mogę w jakiś sposób rozwijać się artystycznie (zawsze lubiłem malować) poprzez tworzenie grafiki, czy estetycznie wyglądającej strony internetowej",
                    "Moje hobby (pomijając programowanie)", "Dobra książka, dobry film i dobra muzyka...", "Oczywiście jest to żart, którego umieszczenia w swoim CV raczej się wystrzegam. Choć faktem jest, że kocham książki i czytam od dzieciaka. Lubię rysować, choć strasznie tą pasję zaniedbałem w ostatnich latach na rzecz nauki. Ciekawią mnie też niektóre aspekty psychologii. Parę lat temu byłem też miłośnikiem siłowni choć i z tego zrezygnowałem na rzecz przygotowań do matury (ale na pewno jeszcze wrócę do ćwiczeń!).", "Technikum zamiast liceum!?", "Głównym powodem była chęć otrzymania zawodu (co mi się udało). Technikum wydawało mi się również opcją ciekawszą, kusiło ciekawymi przedmiotami i wiedzą praktyczną, możliwością poznania podstaw technicznych informatyki. Częściowo się to spełniło, częściowo nie... Na chwilę obecną nie jestem pewien, czy był to dobry wybór. Liceum z pewnością ma sporo zalet np. lepiej przygotowuje do matury i tego faktycznie mi w technikum brakowało, choć mogę narzekać tylko na swoje własne lenistwo, w końcu to, że czegoś nie uczą w szkole nie oznacza, że nie można się tego nauczyć samemu. Gdybym jednak zdecydował się na liceum, możliwe że nigdy nie rozpącząłbym mojej informatycznej przygody."
                ],
                ["Napisz do mnie!", "Twój e-mail", "Temat", "Wiadomość", "Wyślij", "Pobierz moje CV"],
                ["Moje CV!", "Kliknij aby pobrać"]
            ]
            // nav: ["PROJEKTY", "WYKSZTAŁCENIE", "KONTAKT", "O MNIE"],
            // headers: ["ROZWIJAJĄCY SIĘ PROGRAMISTA", "STUDENT INFORMATYKI"]
    },
    {
        lang: "ENG",
        components: [
                ["PROJECTS", "EDUCATION", "CONTACT", "ABOUT ME"],
                ["ASPIRING PROGRAMMER", "COMPUTER SCIENCE STUDENT"],
                ["PROJECTS AND SKILLS", "My Github", "THIS PORTFOLIO", "CHECK CODE", "SCHOOL PROJECT", "CHECK CODE", "CHECK CODE"],
                ['EDUCATION', 'University of Cardinal Stefan Wyszyński in Warsaw ', 'Major: Computer Science ', '15 October 2020. - > in progress ', 'District Complex of Schools No.2 named after the Heroic Crew of ORP "Orzeł" in Wejherowo ', 'Technical secondary school, major - > Informatics ', '1 September 2016 - 12 April 2020 ', 'Obtained IT technician diploma'],
                [
                    "A FEW WORDS ABOUT ME", '"How can this portfolio stand out from the others?", "What interesting things can I write about myself?" - such thoughts accompanied me while creating this text and then I remembered the above quote. I will try to be as honest as possible', 'IT - passion or chase for money', `When I was choosing my next school, I was not guided by anything special - I just heard that programming is a cool profession in which you can earn good money. It wasn't until a few years later that it became a passion for me. I love the programming community, taking on and solving new problems, working at the computer, and the fact that I can somehow develop myself artistically (I've always liked painting) by creating graphics or an aesthetically pleasing website`,
                    "My hobbies (programming aside)", "A good book, a good movie and good music...", "Of course this is a joke that I rather shy away from putting in my CV. Although the fact is that I love books and have been reading since I was a kid. I like drawing, although I have neglected this passion in recent years in favour of studying. I am also interested in some aspects of psychology. A few years ago, I was also a fan of the gym, although I gave it up in order to prepare for my secondary school exams (but I will surely return to exercising!)", "Technical school instead of high school!?", "The main reason was the desire to get a job (which I managed to do). Technical school also seemed to me a more interesting option, tempting with interesting subjects and practical knowledge, the opportunity to learn the technical basics of computer science. This was partly true, partly not... At the moment I am not sure if it was a good choice. High school certainly has a lot of advantages, e.g. it prepares you better for the secondary school exams, which is what I really missed at technikum, although I can only complain about my own laziness, after all, just because they don't teach you something at school doesn't mean you can't learn it yourself. However, had I decided to go to high school, it is possible that I would never have started my IT adventure."
                ],
                [
                    "Write to me", "Your e-mail", "Subject", "Content", "Send", "Download my CV"
                ],
                ["My CV", "Click to download"]
            ]
            // nav: ["PROJECTS", "EDUCATION", "CONTACT", "ABOUT ME"],
            // headers: ["ASPIRING PROGRAMMER", "COMPUTER SCIENCE STUDENT"]
    }
]

function switcher(e) {
    const selectedLang = e.srcElement.innerText; //eng or pl  -> variable with selected language (option) from 'select' element

    const source = Strings[0];
    const plStr = Strings[1];
    const engStr = Strings[2];

    //changing language
    if (selectedLang == "ENG") {

        let j = 0;
        for (let component of source.components) { //through all elements of components table
            for (let i = 0; i < component.length; ++i) { //thorught all texts inside component
                component[i].innerHTML = engStr.components[j][i]; //change of text
            }
            ++j;
        }
        // change of lang in main object
        source.currentLang = "ENG";
        //change of lang attr for html element
        document.documentElement.setAttribute('lang', 'eng');
        return 0;
    }

    //checking if lang needs to be changed from eng to pl
    if (source.currentLang == "ENG") {
        let j = 0;
        for (let component of source.components) {
            for (let i = 0; i < component.length; ++i) {
                component[i].innerHTML = plStr.components[j][i];
            }
            ++j;
        }
        source.currentLang = "PL";
        //set the website lang
        document.documentElement.setAttribute('lang', 'pl');
    }

}

const langSwitch = document.querySelectorAll('option');
//looking for click on option
langSwitch.forEach(option => option.addEventListener('click', switcher));