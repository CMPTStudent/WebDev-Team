// JS for swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });

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

// function removeFromCart(id) {
//   const itemIndex = cart.findIndex(item => item.id === id);

//   if (itemIndex > -1) {
//       cart.splice(itemIndex, 1);
//   }}