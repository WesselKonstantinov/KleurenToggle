// Define a function that closes the menu
const toggleMenu = document.querySelector('.nav__toggle-menu');
const closeMenu = () => toggleMenu.removeAttribute('open');

/*
    Define a function that extracts and returns the color name
    from the second class present on an element (e.g. nav__item--red)
*/
const getColorName = element => {
    const colorClass = element.classList[1];
    const colorName = colorClass.slice(11);
    return colorName;
};

/*
    Define a function that changes the background color of the whole page
    by replacing the second class (e.g. body--green)
*/
const body = document.querySelector('.body');
const changeBackgroundColor = (e) => {
    const color = getColorName(e.target);
    const colorClass = `body--${color}`;
    body.classList.replace(body.classList[1], colorClass);
}

// Attach an event listener to each nav item
const navItems = document.querySelectorAll('.nav__item');
navItems.forEach(navItem => {
    navItem.addEventListener('click', (e) => {
        changeBackgroundColor(e);
        closeMenu();
    });
});