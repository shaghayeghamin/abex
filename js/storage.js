


export function getCart(){

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}



export function addToCart(product){

    const cart = getCart();


    const existingProduct = cart.find(
        item => item.id === product.id
    );


    if(existingProduct){

        existingProduct.quantity++;

    } else {


        cart.push({

            id: product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail,
            quantity: 1

        });

    }


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


}




export function removeFromCart(id){

    const cart = getCart();


    const updatedCart = cart.filter(
        item => item.id !== id
    );


    localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
    );

}







export function getWishlist(){

    return JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

}





export function toggleWishlist(product){


    const wishlist = getWishlist();


    const index = wishlist.findIndex(
        item => item.id === product.id
    );



    if(index !== -1){

        wishlist.splice(index,1);

    } else {


        wishlist.push({

            id: product.id,
            title: product.title,
            price: product.price,
            image: product.thumbnail

        });

    }



    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );


}





export function isInWishlist(id){

    const wishlist = getWishlist();


    return wishlist.some(
        item => item.id === id
    );

}

export function getCartCount(){

    const cart = getCart();


    return cart.reduce(
        (total,item)=> total + item.quantity,
        0
    );

}