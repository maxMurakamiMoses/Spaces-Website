const menu = document.querySelector('#mobile-menu') /*Targeting the mobile menu in the index.html*/
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){ /*If clicked run the animations*/
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
