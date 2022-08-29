const menuOpen = document.querySelector('#menu_open');
const menuClose = document.querySelector('#menu_close');
const mobileNavBar = document.querySelector('#mobile_navbar');

//Return checks for elements in DOM
function isElement(elem) {
    if (elem) {
        console.log(`${elem.id} button exists!`)
    }
}

isElement(menuOpen);
isElement(menuClose);
isElement(mobileNavBar);

menuOpen.addEventListener('click', function () {
    mobileNavBar.classList.remove('tw-hidden');
}, true)

menuClose.addEventListener('click', function () {
    mobileNavBar.classList.add('tw-hidden');
})


