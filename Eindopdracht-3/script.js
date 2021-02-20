// Sla de body, het toggle menu en de nav-items op in een variabele
const body = document.querySelector('.body');
const toggleMenu = document.querySelector('.nav__toggle-menu');
const navItems = document.querySelectorAll('.nav__item');

// Definieer functies die de achtergrondkleur veranderen
const changeBackgroundColorToGrey = () => {
    body.classList.remove('body--red', 'body--purple', 'body--orange', 'body--green');
};

const changeBackgroundColorToRed = () => {
    body.classList.add('body--red');
    body.classList.remove('body--purple', 'body--orange', 'body--green');
};

const changeBackgroundColorToOrange = () => {
    body.classList.add('body--orange');
    body.classList.remove('body--red', 'body--purple', 'body--green');
};

const changeBackgroundColorToPurple = () => {
    body.classList.add('body--purple');
    body.classList.remove('body--red', 'body--orange', 'body--green');
};

const changeBackgroundColorToGreen = () => {
    body.classList.add('body--green');
    body.classList.remove('body--red', 'body--orange', 'body--purple');
};

// Definieer een functie die het toggle menu sluit 
const foldMenu = () => toggleMenu.removeAttribute('open');

// Voeg een event listener toe aan alle nav-items
navItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
        // Bij een klik verandert de achtergrondkleur naar de kleur in kwestie
        if (navItem.classList.contains('nav__item--grey')) {
            changeBackgroundColorToGrey();
        } else if (navItem.classList.contains('nav__item--red')) {
            changeBackgroundColorToRed();
        } else if (navItem.classList.contains('nav__item--orange')) {
            changeBackgroundColorToOrange();
        } else if (navItem.classList.contains('nav__item--purple')) {
            changeBackgroundColorToPurple();
        } else if (navItem.classList.contains('nav__item--green')) {
            changeBackgroundColorToGreen();
        };

        // Ook klapt het menu weer dicht
        foldMenu();
    });
});