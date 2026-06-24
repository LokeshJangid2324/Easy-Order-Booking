const form = document.getElementById("orderForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name=document.getElementById("name").value;
const phone=document.getElementById("phone").value;
const address=document.getElementById("address").value;
const city=document.getElementById("city").value;
const state=document.getElementById("state").value;
const pincode=document.getElementById("pincode").value;
const product=document.getElementById("product").value;
const quantity=document.getElementById("quantity").value;
const notes=document.getElementById("notes").value;
const payment=document.getElementById("payment").value;
const utr=document.getElementById("utr").value;
const amount=document.getElementById("amount").value;

alert("✅ Order Submitted Successfully");

let message=
`🛒 Easy Order Booking

👤 Name: ${name}

📞 Phone: ${phone}

🏠 Address: ${address}

🏙 City: ${city}

📍 State: ${state}

📮 Pincode: ${pincode}

📦 Product: ${product}

🔢 Quantity: ${quantity}

💳 Payment: ${payment}

💰 Amount: ${amount}

🔖 UTR: ${utr}

📝 Notes: ${notes}`;



window.open(
`https://wa.me/917737449178?text=${encodeURIComponent(message)}`,
"_blank"
  );

 


});