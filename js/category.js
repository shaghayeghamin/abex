import { getProductsByCategory } from "./api.js";



const categoryCards = document.querySelectorAll(".product");



const productsContainer = document.querySelector(".category-products");



function createProductCard(product){

    const card = document.createElement("div");

    card.className = "offer-card";


    card.innerHTML = `

        <div class="offer-image">

            <img src="${product.thumbnail}" 
                 alt="${product.title}">

        </div>


        <div class="offer-info">

            <h3>
                ${product.title}
            </h3>


            <strong>
                ${product.price.toLocaleString()} $
            </strong>


            <button class="cart-btn">

                <i class="fa-solid fa-cart-shopping"></i>

                افزودن به سبد خرید

            </button>

        </div>

    `;


    return card;

}




// نمایش محصولات یک دسته
async function showCategoryProducts(category){


    const products = await getProductsByCategory(category);


    productsContainer.innerHTML = "";


    if(products.length === 0){

        productsContainer.innerHTML = `
            <p>
                محصولی در این دسته وجود ندارد
            </p>
        `;

        return;

    }



    products.forEach(product=>{


        const card = createProductCard(product);


        productsContainer.appendChild(card);


    });


}



categoryCards.forEach(card=>{


    card.addEventListener("click",()=>{


        const category = card.dataset.category;


        showCategoryProducts(category);


    });


});


import { getProductsByCategory } from "./api.js";



const params = new URLSearchParams(
    window.location.search
);


const selectedCategory = 
params.get("category");





async function loadCategoryProducts(){

    let products = [];


    if(selectedCategory){

        products = 
        await getProductsByCategory(selectedCategory);

    }


    renderCategoryProducts(products);

}


function renderCategoryProducts(products){


    const container =
    document.querySelector(".category-products");


    container.innerHTML = "";


    products.forEach(product=>{


        const card = document.createElement("div");

        card.className = "offer-card";


        card.innerHTML = `

            <div class="offer-image">

                <img src="${product.thumbnail}">

            </div>


            <div class="offer-info">

                <h3>${product.title}</h3>

                <strong>
                    ${product.price.toLocaleString()} $
                </strong>

            </div>

        `;


        container.appendChild(card);


    });


}


loadCategoryProducts();