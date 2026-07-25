const BASE_URL = "https://dummyjson.com";


export async function getProducts(limit = 8) {

    try {

        const response = await fetch(
            `${BASE_URL}/products?limit=${limit}`
        );


        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }


        const data = await response.json();


        return data.products;


    } catch(error) {

        console.error(error);

        return [];

    }

}




export async function getCategories() {

    try {

        const response = await fetch(
            `${BASE_URL}/products/categories`
        );


        if (!response.ok) {
            throw new Error("Failed to fetch categories");
        }


        return await response.json();


    } catch(error) {

        console.error(error);

        return [];

    }

}




export async function getProductById(id) {

    try {

        const response = await fetch(
            `${BASE_URL}/products/${id}`
        );


        if (!response.ok) {
            throw new Error("Product Not Found");
        }


        return await response.json();


    } catch(error) {

        console.error(error);

        return null;

    }

}




export async function getProductsByCategory(category) {

    try {

        const response = await fetch(
            `${BASE_URL}/products/category/${category}`
        );


        if (!response.ok) {
            throw new Error("Category Not Found");
        }


        const data = await response.json();


        return data.products;


    } catch(error) {

        console.error(error);

        return [];

    }

}




export async function searchProducts(keyword) {

    try {

        const response = await fetch(
            `${BASE_URL}/products/search?q=${keyword}`
        );


        if (!response.ok) {
            throw new Error("Search Failed");
        }


        const data = await response.json();


        return data.products;


    } catch(error) {

        console.error(error);

        return [];

    }

}

export async function getElectronicProducts(){

    try{

        const categories = [
            "smartphones",
            "laptops",
            "tablets",
            "mobile-accessories"
        ];


        const requests = categories.map(category =>
            fetch(`${BASE_URL}/products/category/${category}`)
            .then(res => res.json())
        );


        const results = await Promise.all(requests);


        return results.flatMap(
            result => result.products
        );


    }catch(error){

        console.error(error);

        return [];

    }

}

