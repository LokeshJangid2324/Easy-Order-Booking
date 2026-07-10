let products = [
    {
        img:"T-Shirt.jpeg",
        name:"Samsung Galaxy Mobile",
        rating:"4.5 ⭐",
        price:"₹15,999",
        old:"₹19,999",
        discount:"20% OFF"
    },
    {
        img:"watch.jpeg",
        name:"HP Laptop",
        rating:"4.3 ⭐",
        price:"₹45,999",
        old:"₹55,999",
        discount:"18% OFF"
    }
];


let catalog = document.getElementById("catalog");


products.forEach(product => {

    catalog.innerHTML += `

    <div class="product">

        <img src="${product.img}">

        <div class="product-info">

            <h2>${product.name}</h2>

            <span class="rating">
                ${product.rating}
            </span>


            <div class="price">
                ${product.price}

                <span class="old-price">
                    ${product.old}
                </span>

                <span class="discount">
                    ${product.discount}
                </span>
            </div>


            <p class="delivery">
                Free Delivery | 7 days replacement
            </p>


            <button>
                Add to Cart
            </button>

        </div>

    </div>

    `;

});