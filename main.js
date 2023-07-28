const navEmail = document.querySelector('.nav-email')
const menuEmail = document.querySelector('.menu-email')

const mobileMenu = document.querySelector('.mobile-menu')
const burguerMenu = document.querySelector('.burguerMenu')

navEmail.addEventListener('click', toggleMenuEmail)
burguerMenu.addEventListener('click', toggleMobileMenu)

function toggleMenuEmail(){
    menuEmail.classList.toggle('inactive')
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}