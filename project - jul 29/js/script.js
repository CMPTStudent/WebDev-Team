// Sample JavaScript for interactive features

// Function to add item to cart
function addToCart(productId) {
    // Normally you would handle adding items to cart here
    let productName = `Product ${productId}`;
    let cartItems = document.getElementById('cartItems');
    let li = document.createElement('li');
    li.textContent = productName;
    cartItems.appendChild(li);
}

// Function for checkout process (dummy function)
function checkout() {
    alert('Redirecting to checkout page...');
    // Actual checkout process would be implemented here
}
