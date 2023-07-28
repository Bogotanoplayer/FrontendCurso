const navEmail = document.querySelector('.nav-email')
const menuEmail = document.querySelector('.menu-email')

navEmail.addEventListener('click', toggleMenuEmail)

function toggleMenuEmail(){
    menuEmail.classList.toggle('inactive')
}