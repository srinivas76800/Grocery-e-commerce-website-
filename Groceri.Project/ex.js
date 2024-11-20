// Food items data
const foodItems = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Pizza", price: 8.99 },
    { id: 3, name: "Sushi", price: 12.99 },
    { id: 4, name: "Pasta", price: 7.49 },
];

// Elements
const foodList = document.getElementById('food-list');
const cartItems = document.getElementById('cart-items');
const checkoutButton = document.getElementById('checkout-button');

// Cart
let cart = [];

// Render food items
function renderFoodItems() {
    foodItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.name} - $${item.price.toFixed(2)} 
                        <button onclick="addToCart(${item.id})">Add to Cart</button>`;
        foodList.appendChild(li);
    });
}

// Add item to cart
function addToCart(itemId) {
    const item = foodItems.find(f => f.id === itemId);
    cart.push(item);
    renderCart();
}

// Render cart items
function renderCart() {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = ${item.name} - $${item.price.toFixed(2)};
        cartItems.appendChild(li);
        total += item.price;
    });
    const totalLi = document.createElement('li');
    totalLi.innerHTML = <strong>Total: $${total.toFixed(2)}</strong>;
    cartItems.appendChild(totalLi);
}

// Checkout
checkoutButton.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart = []; // Empty the cart
        renderCart(); // Update cart display
    }
});

// Initialize food items display
renderFoodItems();