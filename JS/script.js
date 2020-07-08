//Burger icon and menu handler

//Menu show
const burgerMenu = document.querySelector('.burger-icon');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    burgerMenu.classList.toggle('burgerMover')

})

//Scroll on click

const seeMoreButton = document.querySelector('button.see-more');
const sectionTopPositions = [...document.querySelectorAll
    ('section')].map((element) => element.offsetTop);
const mainButton = document.querySelector('.main-button');
const navItems = [...document.querySelectorAll('ul>li')];

const newTab = [];

//see more button handler function

const scrollFromSeeMore = function () {

    $('body, html').animate({
        scrollTop: sectionTopPositions[1] - 100,
    }, 400);

}

//main button handler function

const scrollToMain = () => {
    $('body, html').animate({
        scrollTop: sectionTopPositions[0],
    }, 400);
}

// navigation handler function 

const scrollFromNav = function () {

    nav.classList.remove('active');
    burgerMenu.classList.remove('burgerMover');

    switch (this.textContent) {
        case "About":
            $('body, html').animate({
                scrollTop: sectionTopPositions[1] - 100,
            }, 400);
            break;

        case "Skills":
            $('body, html').animate({
                scrollTop: sectionTopPositions[2] - 100,
            }, 400);
            break;

        case "Contact":
            $('body, html').animate({
                scrollTop: sectionTopPositions[4],
            }, 400);
            break;
    }
}

//Events for elements

seeMoreButton.addEventListener('click', scrollFromSeeMore);
mainButton.addEventListener('click', scrollToMain);

navItems.forEach((item) => {
    item.addEventListener('click', scrollFromNav)
})

//Slide elements on scroll

AOS.init();














