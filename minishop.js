const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 }
];

const cartItems = [];

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsDiv.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cartItems.push(product);
}

function displayCart() {
    const cartModal = document.getElementById('cartModal');
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';
    cartItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
    cartModal.style.display = 'block';
}

document.getElementById('cartBtn').addEventListener('click', displayCart);

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('cartModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('cartModal')) {
        document.getElementById('cartModal').style.display = 'none';
    }
});

displayProducts();