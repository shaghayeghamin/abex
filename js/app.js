import { renderProducts } from "./products.js";
import { startSlider } from "./slider.js";
import { searchRender } from "./products.js";
import {addToCart,toggleWishlist,isInWishlist,getCartCount,getCart} from "./storage.js";

document.addEventListener("DOMContentLoaded", init);


async function init() {

    localStorage.removeItem("cart");

    startSlider();

    await renderProducts();

    updateCartCount();

    setupCart();

    setupCategoryButton();

    setupCategories();

    const searchIcon =
document.querySelector(".search-icon");


const searchBox =
document.querySelector(".search-box");


const searchInput =
document.querySelector(".search-box input");



searchIcon.onclick = ()=>{

    searchBox.style.display="block";
    console.log("search clicked");

};



searchInput.addEventListener("keyup",(event)=>{


    if(event.key === "Enter"){


        searchRender(
            searchInput.value
        );


    }


});

}




function updateCartCount(){

    const cartCount =
    document.querySelector(".cart-count");


    if(!cartCount) return;


    cartCount.textContent = getCartCount();

}




function setupCart(){


    const cartIcon =
    document.querySelector(".cart-icon");


    const dropdown =
    document.querySelector(".cart-dropdown");



    if(!cartIcon || !dropdown)
        return;



    cartIcon.addEventListener("click",(event)=>{


        event.stopPropagation();


        renderCart();


        dropdown.classList.toggle("show");


    });



}





function renderCart(){


    const dropdown =
    document.querySelector(".cart-dropdown");


    const cart =
    getCart();



    dropdown.innerHTML="";



    if(cart.length === 0){

        dropdown.innerHTML =
        "<p>سبد خرید خالی است</p>";

        return;

    }



    cart.forEach(product=>{


        const item =
        document.createElement("div");


        item.className="cart-product";



        item.innerHTML=`

            <img src="${product.image}">


            <span>
                ${product.title}
            </span>


            <b>
                ${product.quantity}
            </b>

        `;



        dropdown.appendChild(item);


    });


}

window.addEventListener(
    "cartUpdated",
    updateCartCount
);

function setupCategoryButton(){

    const btn = document.querySelector(".show-products");


    if(!btn) return;


    btn.onclick = ()=>{

        window.location.href = "categoy.html";

    };

}


function setupCategories(){

    const categories =
    document.querySelectorAll(".product");


    categories.forEach(category=>{


        category.onclick = ()=>{


            const name =
            category.dataset.category;


            window.location.href =
            `categoy.html?category=${name}`;


        };


    });

}








