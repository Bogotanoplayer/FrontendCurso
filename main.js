const navEmail = document.querySelector('.nav-email');
const menuEmail = document.querySelector('.menu-email');//el query para indicar que elemento se va a modificar en html

const burguerMenu = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

const carrritoIcon = document.querySelector('.nav-cart');
const menuCarrito = document.querySelector('#shopping-cart-menu')

const cardsContainer = document.querySelector('.cards-container')

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

const productList = [];// creo un array para crear los productos y no hardcodear html y escalable
productList.push({//cada producto tiene 3 propiedades
    name: 'Miata',
    price: 5000 ,
    image: 'https://i.postimg.cc/jj5MrymS/miata.jpg'
});
productList.push({
    name: 'Vbucks',
    price: 800 ,
    image: 'https://i.postimg.cc/Y2LWbG1G/image-2023-08-03-203054587.png'
});
productList.push({
    name: 'Man',
    price: 30000 ,
    image: 'https://i.postimg.cc/rppdWKVp/image-2023-08-03-203146548.png'
});

/* <div class="product-cards">
                <img src="https://i.postimg.cc/jj5MrymS/miata.jpg" alt="car">
                <div class="product-info">
                    <div>
                        <p>$5,000</p>
                        <p>Miata</p>
                    </div>
                
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="addC">
                    </figure>
                </div>
            </div> */
            
function renderProducts(array){//una funcion para crear productos a base de un array
    for(product of array){// a cada producto le va a crear todo  el html
        const productCards = document.createElement('div');//aca creo usando el document.createElement cada etiqueta de html por ejemplo el div de productCards, siguiendo el orden de la tarjeta original
        productCards.classList.add('product-cards');// aca con el classList.add agrego la clase para el css
        
    
        const img = document.createElement('img');
        img.setAttribute('src', product.image);// aca usnado el setAttribute pongo el src de la imagen usando la propiedad del array image
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
       
    
        const infoDiv = document.createElement('div');
        
    
        const infoPrice = document.createElement('p');
        infoPrice.innerText = '$' + product.price // aca usando innerText agrego con concatenacion la propiedad del array price
        
    
        const infoName = document.createElement('p');
        infoName.innerText = product.name;
    
        const infoFigure = document.createElement('figure');
    
        const infoImage = document.createElement('img');
        infoImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productCards.append(img, productInfo);// aca usando append agrego esos elementos creados a los padres segun html
        productInfo.append(infoDiv, infoFigure);
        infoDiv.append(infoPrice, infoName);
        infoFigure.appendChild(infoImage);
    
        cardsContainer.appendChild(productCards);//aca meto todo con el append al cardContainer que cree con el queryselector para agruegarlo al html
    
    }
}
renderProducts(productList);//uso la funcion de arriba con el parametro productList para crear los productos de la web