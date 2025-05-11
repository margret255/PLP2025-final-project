// Products data
const products = [
  {
    id: 1,
    name: "Wooden Coffee Table",
    description: "Scandinavian minimalist design",
    price: 149.99,
    imageUrl: "https://pixabay.com/get/g6cd6c7cb1dfee27587e56d71ffd0dda97b0896210eb0781b27ed5505c024517fdf6ecf2ba18415a392ffdda870458114c253f2b08825192811fe800ed83a7405_1280.jpg",
    category: "Living Room",
    isFeatured: true,
    inStock: true,
    rating: 4.5,
    reviewCount: 24
  },
  {
    id: 2,
    name: "Pendant Light",
    description: "Modern geometric design",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    category: "Living Room",
    isFeatured: true,
    inStock: true,
    rating: 4.0,
    reviewCount: 18
  },
  {
    id: 3,
    name: "Ceramic Vase Set",
    description: "Handcrafted in Portugal",
    price: 79.99,
    imageUrl: "https://pixabay.com/get/g5e1960bb45ca6ad4bbd1fd5bae192b80b90516b28bff24ea96f265516ff8219ceb95860beba3f2d8d30bbd274a04011a97d23fb2f44daedb5b2980ad127793df_1280.jpg",
    category: "Decor",
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 36
  },
  {
    id: 4,
    name: "Plush Throw Blanket",
    description: "Soft cotton blend fabric",
    price: 59.99,
    imageUrl: "https://pixabay.com/get/ge8119e0485d3f31148e74bf03dc43a70067f621df0f0de1217def118f554e2680036492110aba602ae90c7ecc1e49b237e5c5b6639c3065a6cf287b25b3f9083_1280.jpg",
    category: "Bedroom",
    isFeatured: true,
    inStock: true,
    rating: 4.7,
    reviewCount: 42
  },
  {
    id: 5,
    name: "Modern Armchair",
    description: "Comfort meets style",
    price: 349.99,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    category: "Living Room",
    isFeatured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 24
  },
  {
    id: 6,
    name: "Ceramic Dinnerware Set",
    description: "16-piece set in pearl white",
    price: 129.99,
    imageUrl: "https://pixabay.com/get/ge662a38e27a14509eef12f89ecf31b01de5e9285efc1f5ebfa79a8bdf5acc4342290e50581ab173c22c448e671599d99f6809014cbb1ca2c4c9a3e5f6d60f0d0_1280.jpg",
    category: "Kitchen",
    isFeatured: false,
    inStock: true,
    rating: 5.0,
    reviewCount: 36
  },
  {
    id: 7,
    name: "Adjustable Floor Lamp",
    description: "Brass finish with fabric shade",
    price: 179.99,
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    category: "Living Room",
    isFeatured: false,
    inStock: true,
    rating: 4.0,
    reviewCount: 18
  },
  {
    id: 8,
    name: "Nesting Side Tables",
    description: "Set of 2, marble top",
    price: 249.99,
    imageUrl: "https://images.unsplash.com/photo-1499933374294-4584851497cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    category: "Living Room",
    isFeatured: false,
    inStock: true,
    rating: 3.5,
    reviewCount: 12
  },
  {
    id: 9,
    name: "Textured Throw Pillows",
    description: "Set of 3, assorted colors",
    price: 89.99,
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    category: "Bedroom",
    isFeatured: false,
    inStock: true,
    rating: 5.0,
    reviewCount: 42
  },
  {
    id: 10,
    name: "Minimalist Wall Clock",
    description: "Scandinavian design, silent mechanism",
    price: 69.99,
    imageUrl: "https://pixabay.com/get/g9030b1f0ee1067bc04156d81adb6dc89e028f45cfe572530b6fafb3891dd4b49136cf0e87392c70f272260ff79b0489b191dda621752daa21379a5ef93c48e1b_1280.jpg",
    category: "Decor",
    isFeatured: false,
    inStock: true,
    rating: 4.0,
    reviewCount: 29
  },
  {
    id: 11,
    name: "Wooden Serving Tray",
    description: "Solid oak with brass handles",
    price: 79.99,
    imageUrl: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    category: "Kitchen",
    isFeatured: false,
    inStock: true,
    rating: 4.5,
    reviewCount: 15
  },
  {
    id: 12,
    name: "Glass Storage Jars",
    description: "Set of 4, airtight bamboo lids",
    price: 49.99,
    imageUrl: "https://pixabay.com/get/gad6d4abe100b2fb6f912d5599300575b35fd0d622b400b40be72dc5b65d34e164b5f3cc4309e0d71d7687dbf53ba124f816ea8f71958c991758f95b2168eed28_1280.jpg",
    category: "Kitchen",
    isFeatured: false,
    inStock: true,
    rating: 5.0,
    reviewCount: 38
  }
];

// Categories data
const categories = [
  {
    id: 1,
    name: "Living Room",
    imageUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: 30
  },
  {
    id: 2,
    name: "Kitchen",
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: 25
  },
  {
    id: 3,
    name: "Bedroom",
    imageUrl: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    productCount: 20
  }
];

// Cart functionality
class ShoppingCart {
  constructor() {
    this.items = [];
    this.loadCart();
  }

  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity
      });
    }
    
    this.saveCart();
    this.updateCartCount();
    
    // Show notification
    this.showToast(`${product.name} added to cart`);
    
    return this.items;
  }

  // Remove item from cart
  removeItem(productId) {
    const itemIndex = this.items.findIndex(item => item.id === productId);
    
    if (itemIndex !== -1) {
      const removedItem = this.items[itemIndex];
      this.items.splice(itemIndex, 1);
      this.saveCart();
      this.updateCartCount();
      
      // Show notification
      this.showToast(`${removedItem.name} removed from cart`);
    }
    
    return this.items;
  }

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.id === productId);
    
    if (item) {
      if (quantity < 1) {
        return this.removeItem(productId);
      }
      
      item.quantity = quantity;
      this.saveCart();
      this.updateCartCount();
    }
    
    return this.items;
  }

  // Clear cart
  clearCart() {
    this.items = [];
    this.saveCart();
    this.updateCartCount();
    return this.items;
  }

  // Calculate cart totals
  getCartTotals() {
    const subtotal = this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;
    
    return {
      subtotal,
      shipping,
      tax,
      total
    };
  }

  // Save cart to localStorage
  saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  // Load cart from localStorage
  loadCart() {
    const savedCart = localStorage.getItem('cart');
    
    if (savedCart) {
      try {
        this.items = JSON.parse(savedCart);
      } catch (error) {
        console.error('Failed to parse saved cart', error);
        this.items = [];
      }
    }
    
    this.updateCartCount();
  }

  // Update cart count display
  updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
      const itemCount = this.items.reduce((count, item) => count + item.quantity, 0);
      cartCount.textContent = itemCount;
      
      // Hide count if empty
      if (itemCount === 0) {
        cartCount.style.display = 'none';
      } else {
        cartCount.style.display = 'flex';
      }
    }
  }

  // Show toast notification
  showToast(message, type = 'success') {
    // Check if there's already a toast
    let toast = document.querySelector('.toast');
    
    // If no toast exists, create one
    if (!toast) {
      toast = document.createElement('div');
      toast.classList.add('toast');
      document.body.appendChild(toast);
    }
    
    // Set toast type
    toast.className = 'toast';
    toast.classList.add(type);
    
    // Create content
    toast.innerHTML = `
      <span class="toast-icon">
        ${type === 'success' ? 
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>' : 
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>'
        }
      </span>
      <span class="toast-message">${message}</span>
      <span class="toast-close">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </span>
    `;
    
    // Add event listener to close button
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
      toast.classList.remove('show');
      
      // Remove after animation
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    });
    
    // Show toast
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);
    
    // Auto hide after 3 seconds
    setTimeout(() => {
      if (document.body.contains(toast)) {
        toast.classList.remove('show');
        
        // Remove after animation
        setTimeout(() => {
          if (document.body.contains(toast)) {
            document.body.removeChild(toast);
          }
        }, 300);
      }
    }, 3000);
  }
}

// Initialize cart
const cart = new ShoppingCart();

// DOM Utility Functions
function createElement(tag, className, innerHTML) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (innerHTML) element.innerHTML = innerHTML;
  return element;
}

// Mobile menu toggle
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });
  }
}

// Render featured products
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if (!container) return;
  
  const featuredProducts = products.filter(product => product.isFeatured);
  
  featuredProducts.forEach(product => {
    const productCard = createElement('div', 'product-card');
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${product.name}" />
        ${product.isFeatured ? '<span class="featured-badge">Featured</span>' : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart" data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(productCard);
    
    // Add event listener for add to cart button
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
      const productId = parseInt(addToCartBtn.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      
      if (product) {
        cart.addItem(product);
      }
    });
  });
}

// Render featured categories
function renderFeaturedCategories() {
  const container = document.getElementById('featured-categories');
  if (!container) return;
  
  categories.forEach(category => {
    const categoryCard = createElement('div', 'category-card');
    
    categoryCard.innerHTML = `
      <img src="${category.imageUrl}" alt="${category.name}" />
      <div class="category-overlay">
        <h3>${category.name}</h3>
        <p>${category.productCount}+ Products</p>
      </div>
    `;
    
    // Add click event to redirect to shop page with category filter
    categoryCard.addEventListener('click', () => {
      window.location.href = `shop.html?category=${encodeURIComponent(category.name.toLowerCase())}`;
    });
    
    container.appendChild(categoryCard);
  });
}

// Render shop products with filtering
function renderShopProducts() {
  const container = document.getElementById('shop-products');
  if (!container) return;
  
  // Get filter values
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFilter = urlParams.get('category');
  
  const categorySelect = document.getElementById('category-filter');
  const sortSelect = document.getElementById('sort-filter');
  
  // Set initial filter values
  if (categoryFilter && categorySelect) {
    categorySelect.value = categoryFilter;
  }
  
  // Apply filters
  let filteredProducts = [...products];
  
  // Filter by category if needed
  if (categoryFilter) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === categoryFilter.toLowerCase()
    );
  }
  
  // Sort products
  const sortValue = sortSelect ? sortSelect.value : 'featured';
  
  filteredProducts.sort((a, b) => {
    switch (sortValue) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default: // featured
        return b.isFeatured - a.isFeatured;
    }
  });
  
  // Clear container
  container.innerHTML = '';
  
  // Render products
  filteredProducts.forEach(product => {
    const productCard = createElement('div', 'product-card');
    
    productCard.innerHTML = `
      <div class="product-image">
        <img src="${product.imageUrl}" alt="${product.name}" />
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-rating">
          ${renderRatingStars(product.rating)}
          <span class="review-count">(${product.reviewCount})</span>
        </div>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
          <button class="btn btn-primary add-to-cart" data-id="${product.id}">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            Add to Cart
          </button>
        </div>
      </div>
    `;
    
    container.appendChild(productCard);
    
    // Add event listener for add to cart button
    const addToCartBtn = productCard.querySelector('.add-to-cart');
    addToCartBtn.addEventListener('click', () => {
      const productId = parseInt(addToCartBtn.getAttribute('data-id'));
      const product = products.find(p => p.id === productId);
      
      if (product) {
        cart.addItem(product);
      }
    });
  });
  
  // No products message
  if (filteredProducts.length === 0) {
    const noProducts = createElement('div', 'no-products');
    noProducts.innerHTML = `
      <div class="no-products-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
      </div>
      <h3>No products found</h3>
      <p>Try changing the category or search criteria.</p>
    `;
    container.appendChild(noProducts);
  }
  
  // Add event listeners for filter changes
  if (categorySelect) {
    categorySelect.addEventListener('change', () => {
      const category = categorySelect.value;
      
      if (category === 'all') {
        // Remove category param if exists
        urlParams.delete('category');
      } else {
        urlParams.set('category', category);
      }
      
      // Update URL and reload products
      const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
      window.history.pushState({}, '', newUrl);
      renderShopProducts();
    });
  }
  
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      renderShopProducts();
    });
  }
}

// Helper function to render star ratings
function renderRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  let starsHtml = '';
  
  // Full stars
  for (let i = 0; i < fullStars; i++) {
    starsHtml += '<span class="star full-star">★</span>';
  }
  
  // Half star
  if (hasHalfStar) {
    starsHtml += '<span class="star half-star">★</span>';
  }
  
  // Empty stars
  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHtml += '<span class="star empty-star">☆</span>';
  }
  
  return starsHtml;
}

// Render cart items
function renderCartItems() {
  const cartItemsContainer = document.getElementById('cart-items');
  const cartEmptyContainer = document.getElementById('cart-empty');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (!cartItemsContainer) return;
  
  // Clear container
  cartItemsContainer.innerHTML = '';
  
  // Get cart items
  const items = cart.items;
  
  // Show empty cart message if no items
  if (items.length === 0) {
    if (cartEmptyContainer) cartEmptyContainer.style.display = 'block';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  } else {
    if (cartEmptyContainer) cartEmptyContainer.style.display = 'none';
    if (checkoutBtn) checkoutBtn.disabled = false;
  }
  
  // Render each cart item
  items.forEach(item => {
    const cartItemElement = createElement('div', 'cart-item');
    
    cartItemElement.innerHTML = `
      <div class="cart-item-image">
        <img src="${item.imageUrl}" alt="${item.name}" onerror="this.src='https://placehold.co/100x100/gray/white?text=Item'" />
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        <div class="cart-item-quantity">
          <button class="quantity-btn decrement" data-id="${item.id}">-</button>
          <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
          <button class="quantity-btn increment" data-id="${item.id}">+</button>
        </div>
      </div>
      <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
      <div class="cart-item-remove" data-id="${item.id}">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
      </div>
    `;
    
    cartItemsContainer.appendChild(cartItemElement);
    
    // Add event listeners
    const decrementBtn = cartItemElement.querySelector('.decrement');
    const incrementBtn = cartItemElement.querySelector('.increment');
    const quantityInput = cartItemElement.querySelector('.quantity-input');
    const removeBtn = cartItemElement.querySelector('.cart-item-remove');
    
    decrementBtn.addEventListener('click', () => {
      const id = parseInt(decrementBtn.getAttribute('data-id'));
      const currentQuantity = parseInt(quantityInput.value);
      cart.updateQuantity(id, currentQuantity - 1);
      renderCartItems();
      updateCartSummary();
    });
    
    incrementBtn.addEventListener('click', () => {
      const id = parseInt(incrementBtn.getAttribute('data-id'));
      const currentQuantity = parseInt(quantityInput.value);
      cart.updateQuantity(id, currentQuantity + 1);
      renderCartItems();
      updateCartSummary();
    });
    
    quantityInput.addEventListener('change', () => {
      const id = parseInt(quantityInput.getAttribute('data-id'));
      const newQuantity = parseInt(quantityInput.value);
      
      if (newQuantity > 0) {
        cart.updateQuantity(id, newQuantity);
        renderCartItems();
        updateCartSummary();
      } else {
        quantityInput.value = 1;
      }
    });
    
    removeBtn.addEventListener('click', () => {
      const id = parseInt(removeBtn.getAttribute('data-id'));
      cart.removeItem(id);
      renderCartItems();
      updateCartSummary();
    });
  });
}

// Update cart summary
function updateCartSummary() {
  const subtotalElement = document.getElementById('cart-subtotal');
  const shippingElement = document.getElementById('cart-shipping');
  const taxElement = document.getElementById('cart-tax');
  const totalElement = document.getElementById('cart-total');
  
  if (!subtotalElement) return;
  
  const { subtotal, shipping, tax, total } = cart.getCartTotals();
  
  subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
  shippingElement.textContent = `$${shipping.toFixed(2)}`;
  taxElement.textContent = `$${tax.toFixed(2)}`;
  totalElement.textContent = `$${total.toFixed(2)}`;
}

// Render order items on checkout page
function renderOrderItems() {
  const orderItemsContainer = document.getElementById('order-items');
  if (!orderItemsContainer) return;
  
  // Clear container
  orderItemsContainer.innerHTML = '';
  
  // Get cart items
  const items = cart.items;
  
  // Render each order item
  items.forEach(item => {
    const orderItemElement = createElement('div', 'order-item');
    
    orderItemElement.innerHTML = `
      <div class="order-item-image">
        <img src="${item.imageUrl}" alt="${item.name}" onerror="this.src='https://placehold.co/60x60/gray/white?text=Item'" />
      </div>
      <div class="order-item-details">
        <h4 class="order-item-name">${item.name}</h4>
        <div class="order-item-price">
          <span>${item.quantity} x $${item.price.toFixed(2)}</span>
          <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
      </div>
    `;
    
    orderItemsContainer.appendChild(orderItemElement);
  });
}

// Handle checkout form submission
function handleCheckoutSubmit() {
  const checkoutForm = document.getElementById('checkout-form');
  if (!checkoutForm) return;
  
  checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple validation
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    
    if (!firstName || !lastName || !email || !address || !city) {
      cart.showToast('Please fill in all required fields', 'error');
      return;
    }
    
    // Generate random order number
    const orderNumber = `ORD-${new Date().toISOString().slice(0, 10).replace(/-/g, '')}-${Math.floor(1000 + Math.random() * 9000)}`;
    
    // Store order info in localStorage (for demo purposes)
    const orderInfo = {
      orderNumber,
      customerName: `${firstName} ${lastName}`,
      email,
      address,
      items: cart.items,
      totals: cart.getCartTotals(),
      date: new Date().toISOString()
    };
    
    localStorage.setItem('lastOrder', JSON.stringify(orderInfo));
    
    // Clear cart
    cart.clearCart();
    
    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
  });
}

// Render order confirmation
function renderOrderConfirmation() {
  const orderNumberElement = document.getElementById('order-number');
  const customerNameElement = document.getElementById('customer-name');
  
  if (!orderNumberElement) return;
  
  // Get order info from localStorage
  const orderInfo = JSON.parse(localStorage.getItem('lastOrder'));
  
  if (!orderInfo) {
    window.location.href = 'index.html';
    return;
  }
  
  // Display order info
  orderNumberElement.textContent = orderInfo.orderNumber;
  
  if (customerNameElement) {
    customerNameElement.textContent = orderInfo.customerName;
  }
}

// Initialize page based on current URL
function initPage() {
  // Common elements for all pages
  initMobileMenu();
  cart.updateCartCount();
  
  // Determine current page
  const currentPage = window.location.pathname.split('/').pop();
  
  // Init page-specific functions
  if (currentPage === 'index.html' || currentPage === '' || currentPage === '/') {
    renderFeaturedProducts();
    renderFeaturedCategories();
  } else if (currentPage === 'shop.html') {
    renderShopProducts();
  } else if (currentPage === 'cart.html') {
    renderCartItems();
    updateCartSummary();
  } else if (currentPage === 'checkout.html') {
    renderOrderItems();
    updateCartSummary();
    handleCheckoutSubmit();
  } else if (currentPage === 'confirmation.html') {
    renderOrderConfirmation();
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initPage);