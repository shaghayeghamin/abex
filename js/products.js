import {  getElectronicProducts ,searchProducts } from "./api.js";

import {
    addToCart,
    toggleWishlist,
    isInWishlist,
    getCartCount
} from "./storage.js";

const offerCards = document.querySelectorAll(".offer-card");


export async function renderProducts() {


    const products = await getElectronicProducts();


    offerCards.forEach((card,index)=>{


        const product = products[index];


        if(!product) return;



        const image = card.querySelector(".offer-image img");

        const title = card.querySelector(".offer-info h3");

        const price = card.querySelector(".offer-info strong");



        image.src = product.thumbnail;

        image.alt = product.title;


        title.textContent = product.title;


        price.textContent =
        `${product.price.toLocaleString()} $`;

        offerCards.forEach((card,index)=>{


    const product = products[index];


    if(!product) return;



    const image = card.querySelector(".offer-image img");

    const title = card.querySelector(".offer-info h3");

    const price = card.querySelector(".offer-info strong");



    image.src = product.thumbnail;

    title.textContent = product.title;

    price.textContent =
    `${product.price.toLocaleString()} $`;


    const cartBtn = card.querySelector(".cart-btn");

    cartBtn.onclick = ()=>{


    addToCart(product);

    window.dispatchEvent(new Event("cartUpdated"));


    alert("محصول به سبد خرید اضافه شد");


};




    const wishBtn = card.querySelector(".wishlist");

    const icon = wishBtn.querySelector("i");



    updateWishlistIcon(icon, product.id);



    wishBtn.onclick = ()=>{


        toggleWishlist(product);


        updateWishlistIcon(
            icon,
            product.id
        );


    };



});


    });



}

function updateWishlistIcon(icon,id){


    if(isInWishlist(id)){


        icon.classList.remove("fa-regular");

        icon.classList.add("fa-solid");


    }else{


        icon.classList.remove("fa-solid");

        icon.classList.add("fa-regular");


    }


}

export async function searchRender(keyword){


    const products = await searchProducts(keyword);



    offerCards.forEach((card,index)=>{


        const product = products[index];


        if(!product){

            card.style.display="none";

            return;

        }


        card.style.display="block";


        card.querySelector(".offer-image img").src =
        product.thumbnail;


        card.querySelector(".offer-info h3").textContent =
        product.title;


        card.querySelector(".offer-info strong").textContent =
        product.price + " $";


    });


}


function updateCartCount(){

    const cartCount = document.querySelector(".cart-count");

    if(cartCount){

        cartCount.textContent = getCartCount();

    }

}


