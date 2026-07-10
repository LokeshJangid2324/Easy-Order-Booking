let products = [
  
  {
    name: "Shoes",
    price: "₹999",
    image: "shoes.jpeg"
  },
  {
    name: "Watch",
    price: "₹1499",
    image: "watch.jpeg"
  },
  {
    name: "T-Shirt",
    price: "₹499",
    image: "tshirt.jpeg"
  },
  {
    name: "shirt",
    price: "₹267",
    image: "shirt.jpeg"
  }
];

function render() {
  const catalog = document.getElementById("catalog");
  catalog.innerHTML = "";

  products.forEach(p => {
    catalog.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <div class="price">${p.price}</div>
        <button onclick="alert('Order placed')">Buy Now</button>
        <button onclick="buyNow('${p.name}', '${p.price}')">Buy Now</button>
      </div>
    `;
  });
}

render();

function buyNow(name, price) {
    let phone = "917737449178"; 

    let message =
`New Order

Product: ${name}
Price: ${price}

Please confirm this order.`;

    let url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
}
