let cart = [];

function addToCart(button) {
    let product = button.parentElement;
    let name = product.getAttribute("data-name");
    let price = parseFloat(product.getAttribute("data-price"));
    
    cart.push({ name, price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalPrice = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");
    
    cartList.innerHTML = "";
    let sum = 0;
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        
        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function() {
            removeFromCart(index);
        };
        
        li.appendChild(removeButton);
        cartList.appendChild(li);
        sum += item.price;
    });
    
    totalPrice.textContent = sum;
    cartCount.textContent = cart.length;
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}
