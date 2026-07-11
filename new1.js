let products = [
    {
        img:"tshirt.jpg",
        name:"Trendint Soft Fabric T-Shirt",
        rating:"4.5 ⭐",
        price:"₹399",
        old:"₹499",
        discount:"20% OFF"
    },
    {
        img:"watch.jpeg",
        name:"Primiuem Water proof Watch ",
        rating:"4.3 ⭐",
        price:"₹999",
        old:"₹1199",
        discount:"18% OFF"
    },
    {
        img:"earbuds.jpeg",
        name:"Bluthouth Earbuds",
        rating:"4.2 ⭐",
        price:"₹999",
        old:"₹1,499",
        discount:"33% OFF"
    },
    {
        img:"shirt.jpeg",
        name:"Cotton Shirt",
        rating:"4.0 ⭐",
        price:"₹267",
        old:"₹499",
        discount:"45% OFF"
    },
    
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

            <button onclick="Buy Now('${product.img}','${product.Name}','${product.price}')">
            Buy Noy
            </button>
            <button onclick="alert('Added To Cart')">
                Add to Cart
            </button>

        </div>

    </div>

    `;

});

render();

function BuyNow(image, name, price) {
    let phone = "917737449178";
    let message = `New Order\n
    I am interested in buying this product.\n
    Item Details:
    \n${image}\n
    Product: ${name}\n
    Price: ${price}\n
    \nPlease confirm this order.`;
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
