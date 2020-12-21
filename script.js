// Navigation button

let toggleNavStatus = false;

let getToggle = document.querySelector(".btn-toggle-nav")

let toggleNav = function () {

    let getMainText = document.querySelector(".main-text");
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getMainText.style.opacity = "0";
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "98vw";
        getSidebarTitle.style.opacity = "1";

        let arrayLenght = getSidebarLinks.length;
        for (let index = 0; index < arrayLenght; index++) {
            getSidebarLinks[index].style.opacity = "1";
        }
        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getMainText.style.a
        getMainText.style.opacity = "1";
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLenght = getSidebarLinks.length;
        for (let index = 0; index < arrayLenght; index++) {
            getSidebarLinks[index].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}

getToggle.addEventListener("mouseover", toggleNav);

// BG color change

const body = document.querySelector('body')
const mainText = document.querySelector('.main-text')
const colorOrange = document.querySelector('.nav-sidebar li:nth-child(2)')
const colorBlue = document.querySelector('.nav-sidebar li:nth-child(3)')
const colorGreen = document.querySelector('.nav-sidebar li:nth-child(4)')
const colorPurple = document.querySelector('.nav-sidebar li:nth-child(5)')
const colorYellow = document.querySelector('.nav-sidebar li:nth-child(6)')

const bgOrange = () => {
    body.removeAttribute('class')
    body.classList.add('bg-orange');
    mainText.innerHTML = "Orange"
    toggleNav();
};
colorOrange.addEventListener("click", bgOrange)

const bgBlue = () => {
    body.removeAttribute('class')
    body.classList.add('bg-blue');
    mainText.innerHTML = "Blue"
    toggleNav();
};
colorBlue.addEventListener("click", bgBlue)

const bgGreen = () => {
    body.removeAttribute('class')
    body.classList.add('bg-green');
    mainText.innerHTML = "Green"
    toggleNav();
};
colorGreen.addEventListener("click", bgGreen)

const bgPurple = () => {
    body.removeAttribute('class')
    body.classList.add('bg-purple');
    mainText.innerHTML = "Purple"
    toggleNav();
};
colorPurple.addEventListener("click", bgPurple)

const bgYellow = () => {
    body.removeAttribute('class')
    body.classList.add('bg-yellow');
    mainText.innerHTML = "Yellow"
    toggleNav();
};
colorYellow.addEventListener("click", bgYellow)
