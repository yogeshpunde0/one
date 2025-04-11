// Product data
const products = {
    mobiles: [
        {
            id: 'm1',
            title: 'iPhone 15 Pro',
            price: 134900,
            image: 'https://m.media-amazon.com/images/I/81Os1SDWpcL._SL1500_.jpg'
        },
        {
            id: 'm2',
            title: 'Samsung Galaxy S23 Ultra',
            price: 124999,
            image: 'https://m.media-amazon.com/images/I/61RZ0bN0VjL._SL1500_.jpg'
        },
        {
            id: 'm3',
            title: 'OnePlus 11 5G',
            price: 56999,
            image: 'https://m.media-amazon.com/images/I/61amb0CfMGL._SL1500_.jpg'
        },
        {
            id: 'm4',
            title: 'Google Pixel 7 Pro',
            price: 66999,
            image: 'https://m.media-amazon.com/images/I/71Gh9a4zYFL._SL1500_.jpg'
        },
        {
            id: 'm5',
            title: 'Xiaomi 13 Pro',
            price: 79999,
            image: 'https://m.media-amazon.com/images/I/61g+McQpg7L._SL1500_.jpg'
        },
        {
            id: 'm6',
            title: 'Vivo X90 Pro',
            price: 84990,
            image: 'https://m.media-amazon.com/images/I/61QdGZIj5GL._SL1500_.jpg'
        },
        {
            id: 'm7',
            title: 'OPPO Reno 8 Pro',
            price: 45990,
            image: 'https://m.media-amazon.com/images/I/71V+6xJd1IL._SL1500_.jpg'
        },
        {
            id: 'm8',
            title: 'Realme GT Neo 3',
            price: 32999,
            image: 'https://m.media-amazon.com/images/I/61iYVOSWnFL._SL1500_.jpg'
        },
        {
            id: 'm9',
            title: 'Nothing Phone (2)',
            price: 44999,
            image: 'https://m.media-amazon.com/images/I/61fy+u9oqYL._SL1500_.jpg'
        },
        {
            id: 'm10',
            title: 'Motorola Edge 40',
            price: 29999,
            image: 'https://m.media-amazon.com/images/I/61x5mKofQVL._SL1500_.jpg'
        }
    ],
    laptops: [
        {
            id: 'l1',
            title: 'MacBook Pro M2',
            price: 159900,
            image: 'https://m.media-amazon.com/images/I/61L5QgPvgxL._SL1500_.jpg'
        },
        {
            id: 'l2',
            title: 'Dell XPS 13',
            price: 124990,
            image: 'https://m.media-amazon.com/images/I/71w3oJ7a-0L._SL1500_.jpg'
        },
        {
            id: 'l3',
            title: 'HP Spectre x360',
            price: 139990,
            image: 'https://m.media-amazon.com/images/I/71QkYw3vPJL._SL1500_.jpg'
        },
        {
            id: 'l4',
            title: 'Asus ROG Zephyrus G14',
            price: 109990,
            image: 'https://m.media-amazon.com/images/I/71PjAvf1ZLL._SL1500_.jpg'
        },
        {
            id: 'l5',
            title: 'Lenovo ThinkPad X1 Carbon',
            price: 149990,
            image: 'https://m.media-amazon.com/images/I/61nAxyF1wLL._SL1500_.jpg'
        },
        {
            id: 'l6',
            title: 'Acer Predator Helios 300',
            price: 99990,
            image: 'https://m.media-amazon.com/images/I/71--D0NtSkL._SL1500_.jpg'
        },
        {
            id: 'l7',
            title: 'Microsoft Surface Laptop 5',
            price: 119990,
            image: 'https://m.media-amazon.com/images/I/61q6WE9YbAL._SL1500_.jpg'
        },
        {
            id: 'l8',
            title: 'MSI Katana GF66',
            price: 89990,
            image: 'https://m.media-amazon.com/images/I/71qod6xMq2L._SL1500_.jpg'
        },
        {
            id: 'l9',
            title: 'Lenovo IdeaPad Slim 5',
            price: 54990,
            image: 'https://m.media-amazon.com/images/I/71S8qt+K8hL._SL1500_.jpg'
        },
        {
            id: 'l10',
            title: 'HP Pavilion 15',
            price: 62990,
            image: 'https://m.media-amazon.com/images/I/71w3oJ7a-0L._SL1500_.jpg'
        }
    ],
    clothes: [
        {
            id: 'c1',
            title: 'Men\'s Casual Shirt',
            price: 899,
            image: 'https://m.media-amazon.com/images/I/61+Q9Zt+QjL._UL1500_.jpg'
        },
        {
            id: 'c2',
            title: 'Women\'s Floral Dress',
            price: 1299,
            image: 'https://m.media-amazon.com/images/I/71Z+0q9ZJjL._UL1500_.jpg'
        },
        {
            id: 'c3',
            title: 'Men\'s Jeans',
            price: 1499,
            image: 'https://m.media-amazon.com/images/I/81t2j4U-+VL._UL1500_.jpg'
        },
        {
            id: 'c4',
            title: 'Women\'s T-Shirt',
            price: 599,
            image: 'https://m.media-amazon.com/images/I/61+Q9Zt+QjL._UL1500_.jpg'
        },
        {
            id: 'c5',
            title: 'Men\'s Formal Suit',
            price: 3999,
            image: 'https://m.media-amazon.com/images/I/71Z+0q9ZJjL._UL1500_.jpg'
        },
        {
            id: 'c6',
            title: 'Women\'s Denim Jacket',
            price: 1999,
            image: 'https://m.media-amazon.com/images/I/81t2j4U-+VL._UL1500_.jpg'
        },
        {
            id: 'c7',
            title: 'Men\'s Polo T-Shirt',
            price: 799,
            image: 'https://m.media-amazon.com/images/I/61+Q9Zt+QjL._UL1500_.jpg'
        },
        {
            id: 'c8',
            title: 'Women\'s Jumpsuit',
            price: 1599,
            image: 'https://m.media-amazon.com/images/I/71Z+0q9ZJjL._UL1500_.jpg'
        },
        {
            id: 'c9',
            title: 'Men\'s Hoodie',
            price: 1299,
            image: 'https://m.media-amazon.com/images/I/81t2j4U-+VL._UL1500_.jpg'
        },
        {
            id: 'c10',
            title: 'Women\'s Skirt',
            price: 899,
            image: 'https://m.media-amazon.com/images/I/61+Q9Zt+QjL._UL1500_.jpg'
        }
    ]
};

// Shopping cart
let cart = [];

// DOM elements
const mobileProductsContainer = document.getElementById('mobile-products');
const laptopProductsContainer = document.getElementById('laptop-products');
const clothingProductsContainer = document.getElementById('clothing-products');
const cartCountElement = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const totalAmountElement = document.getElementById('total-amount');
const checkoutBtn = document.getElementById('checkout-btn');
const closeModal = document.querySelector('.close');

// Display products
function displayProducts() {
    // Display mobile products
    products.mobiles.forEach(product => {
        const productElement = createProductElement(product);
        mobileProductsContainer.appendChild(productElement);
    });

    // Display laptop products
    products.laptops.forEach(product => {
        const productElement = createProductElement(product);
        laptopProductsContainer.appendChild(productElement);
    });

    // Display clothing products
    products.clothes.forEach(product => {
        const productElement = createProductElement(product);
        clothingProductsContainer.appendChild(productElement);
    });
}

// Create product element
function createProductElement(product) {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <div class="product-info">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">₹${product.price.toLocaleString('en-IN')}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `;
    return productCard;
}

// Add to cart
function addToCart(productId) {
    // Find product in any category
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Update cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Update cart modal
    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
        document.getElementById('cart-total').style.display = 'none';
    } else {
        document.getElementById('cart-total').style.display = 'block';
        let totalAmount = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            totalAmount += itemTotal;

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <p class="cart-item-title">${item.title}</p>
                    <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')} x ${item.quantity} = ₹${itemTotal.toLocaleString('en-IN')}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">&times;</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        totalAmountElement.textContent = totalAmount.toLocaleString('en-IN');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();

    // Add to cart button click
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = e.target.getAttribute('data-id');
            addToCart(productId);
        }

        // Remove item from cart
        if (e.target.classList.contains('remove-item')) {
            const productId = e.target.getAttribute('data-id');
            removeFromCart(productId);
        }

        // Cart icon click
        if (e.target.closest('a[href="#cart"]') || e.target.closest('#cart a')) {
            e.preventDefault();
            cartModal.style.display = 'block';
        }

        // Close modal
        if (e.target === closeModal || e.target === cartModal) {
            cartModal.style.display = 'none';
        }

        // Checkout button
        if (e.target === checkoutBtn) {
            alert('Thank you for your purchase!');
            cart = [];
            updateCart();
            cartModal.style.display = 'none';
        }
    });
});

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartModal.style.display === 'block') {
        cartModal.style.display = 'none';
    }
});
