const navEmail = document.querySelector('.nav-email');
const menuEmail = document.querySelector('.menu-email');//el query para indicar que elemento se va a modificar

const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

const carrritoIcon = document.querySelector('.nav-cart');
const menuCarrito = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleMenuEmail)//el addevent es cuando haga click(evento) , se ejecuta algo(funcion)
burguerMenu.addEventListener('click', toggleMobileMenu)
carrritoIcon.addEventListener('click', toggleMenuCarrito)

function toggleMenuEmail(){
    
    const menuCarritoClosed = menuCarrito.classList.contains('inactive')//si esta cerrado el carrito es porque tiene inactive, lo mismo con la de email y mobile

    if(!menuCarritoClosed){
        menuCarrito.classList.add('inactive')//si el menu carrito no esta cerrado , pone la clase inactive y lo cierra para abrir el email y asi con los otros
    }

    menuEmail.classList.toggle('inactive')
}

function toggleMobileMenu(){

    const menuCarritoClosed = menuCarrito.classList.contains('inactive')

    if(!menuCarritoClosed){
        menuCarrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')
}
function toggleMenuCarrito(){

    const mobileMenuClosed = mobileMenu.classList.contains('inactive')
    const menuEmailClosed = menuEmail.classList.contains('inactive')//aca toca cerrar ambos por el email en el desktop

    if(!mobileMenuClosed){// el signo de exclamacionn es not, mobile
        mobileMenu.classList.add('inactive')
    }
    if(!menuEmailClosed){//desktop
        menuEmail.classList.add('inactive')
    }

    menuCarrito.classList.toggle('inactive')
}