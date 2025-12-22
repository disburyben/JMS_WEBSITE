import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Products data
const products = [
  {
    id: 1,
    name: 'Racing Car T-Shirt',
    description: 'Black t-shirt featuring Car 88 racing design with signature',
    price: 45.00,
    color: 'Black',
    image_front: 'https://www.genspark.ai/api/files/s/KWvCMMfR',
    image_back: 'https://www.genspark.ai/api/files/s/L4U6zqzC',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'tshirt'
  },
  {
    id: 2,
    name: 'Racing Car T-Shirt',
    description: 'White t-shirt featuring Car 88 racing design with signature',
    price: 45.00,
    color: 'White',
    image_front: 'https://www.genspark.ai/api/files/s/WuLsW5fV',
    image_back: 'https://www.genspark.ai/api/files/s/yI5I3VzN',
    sizes: ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'tshirt'
  },
  {
    id: 3,
    name: 'Motorsport Pack T-Shirt',
    description: 'Black t-shirt with exclusive motorsport pack design',
    price: 45.00,
    color: 'Black',
    image_front: 'https://www.genspark.ai/api/files/s/jcEG6nAX',
    image_back: 'https://www.genspark.ai/api/files/s/HQL2cMxx',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'tshirt'
  },
  {
    id: 4,
    name: 'Motorsport Pack T-Shirt',
    description: 'White t-shirt with exclusive motorsport pack design',
    price: 45.00,
    color: 'White',
    image_front: 'https://www.genspark.ai/api/files/s/WIcil2ew',
    image_back: 'https://www.genspark.ai/api/files/s/H1pFM683',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'tshirt'
  },
  {
    id: 5,
    name: 'Racing Car Hoodie',
    description: 'Premium black hoodie with Car 88 racing design',
    price: 75.00,
    color: 'Black',
    image_front: 'https://www.genspark.ai/api/files/s/5CKnJrt6',
    image_back: 'https://www.genspark.ai/api/files/s/TD30uH7r',
    sizes: ['S', 'M', 'L', 'XL', '2XL', '3XL'],
    category: 'hoodie'
  }
]

// Homepage
app.get('/', (c) => {
  return c.render(
    <div>
      {/* Smoke Background */}
      <div class="smoke-bg"></div>
      
      {/* Navigation */}
      <nav class="glass-nav fixed top-0 left-0 right-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="/" class="flex items-center space-x-3">
              <div class="text-3xl font-black gradient-text">
                JMS<span class="text-red-600">88</span>
              </div>
            </a>
            
            {/* Navigation Links */}
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-white hover:text-red-600 transition-colors font-medium">Home</a>
              <a href="/shop" class="text-white hover:text-red-600 transition-colors font-medium">Shop</a>
              <a href="/racing" class="text-white hover:text-red-600 transition-colors font-medium">Racing</a>
              <a href="/about" class="text-white hover:text-red-600 transition-colors font-medium">About</a>
              <a href="/contact" class="text-white hover:text-red-600 transition-colors font-medium">Contact</a>
            </div>
            
            {/* Cart Icon */}
            <div class="flex items-center space-x-4">
              <a href="/cart" class="relative p-2 hover:text-red-600 transition-colors">
                <i class="fas fa-shopping-cart text-xl"></i>
                <span class="cart-badge" id="cart-count">0</span>
              </a>
              
              {/* Mobile Menu Button */}
              <button class="md:hidden p-2" id="mobile-menu-btn">
                <i class="fas fa-bars text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section class="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div class="max-w-7xl mx-auto text-center z-10">
          <div class="fade-in breathing">
            <div class="inline-block glass-card px-8 py-4 mb-8" style="border-radius: 50px;">
              <p class="text-red-600 font-medium tracking-wide text-sm">Sprintcar Racing</p>
            </div>
            
            <h1 class="text-6xl md:text-8xl font-semibold mb-8 gradient-text racing-stripe" style="letter-spacing: -2px; line-height: 1.1;">
              JMS Motorsport
            </h1>
            
            <p class="text-xl md:text-2xl text-gray-300 font-light mb-6 max-w-3xl mx-auto" style="line-height: 1.7;">
              Official merchandise and racing gear for <span class="text-red-600 font-medium">Car #88</span>
            </p>
            
            <p class="text-base md:text-lg text-gray-400 font-light mb-16 max-w-2xl mx-auto" style="line-height: 1.9;">
              Premium quality apparel designed for motorsport enthusiasts. Exclusive designs featuring our championship racing heritage.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/shop" class="btn-primary inline-flex items-center space-x-2 red-glow">
                <span>Shop Merchandise</span>
                <i class="fas fa-arrow-right"></i>
              </a>
              
              <a href="/racing" class="btn-glass inline-flex items-center space-x-2">
                <i class="fas fa-flag-checkered"></i>
                <span>View Racing Stats</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <i class="fas fa-chevron-down text-red-600 text-2xl opacity-60"></i>
        </div>
      </section>
      
      {/* Featured Products Section */}
      <section class="relative py-32 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-20">
            <h2 class="text-4xl md:text-6xl font-semibold mb-6" style="letter-spacing: -1px;">
              Featured <span class="text-red-600">Merchandise</span>
            </h2>
            <p class="text-gray-400 text-lg font-light max-w-2xl mx-auto" style="line-height: 1.8;">
              Exclusive JMS Motorsport apparel. Limited edition designs celebrating our racing legacy.
            </p>
          </div>
          
          {/* Product Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.slice(0, 3).map((product) => (
              <div class="glass-card product-card overflow-hidden fade-in" style="padding: 0;">
                <div class="relative aspect-square bg-gradient-to-br from-gray-900 to-black" style="border-radius: 32px 32px 0 0;">
                  <img 
                    src={product.image_front} 
                    alt={product.name}
                    class="w-full h-full object-contain p-10"
                  />
                  <div class="absolute top-6 right-6 glass-card px-4 py-2" style="border-radius: 50px;">
                    <p class="text-xs font-medium">{product.color}</p>
                  </div>
                </div>
                
                <div class="p-8">
                  <h3 class="text-2xl font-semibold mb-3" style="letter-spacing: -0.5px;">{product.name}</h3>
                  <p class="text-gray-400 text-sm font-light mb-6" style="line-height: 1.7;">{product.description}</p>
                  
                  <div class="flex items-center justify-between">
                    <p class="text-3xl font-semibold text-red-600">${product.price.toFixed(2)}</p>
                    <a href={`/product/${product.id}`} class="btn-primary text-sm">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div class="text-center mt-16">
            <a href="/shop" class="btn-glass inline-flex items-center space-x-2">
              <span>View All Products</span>
              <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section class="relative py-32 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="slide-in-left">
              <h2 class="text-4xl md:text-6xl font-semibold mb-8" style="letter-spacing: -1px;">
                Racing <span class="text-red-600">Heritage</span>
              </h2>
              <p class="text-gray-300 text-lg font-light mb-6" style="line-height: 2;">
                JMS Motorsport represents the pinnacle of sprintcar racing excellence. With Car #88 leading the charge, 
                we've built a legacy of speed, precision, and championship-caliber performance.
              </p>
              <p class="text-gray-400 text-base font-light mb-10" style="line-height: 2;">
                Our exclusive merchandise line brings the excitement of the track to your everyday wear. 
                Each piece is designed with the same attention to detail and quality that defines our racing program.
              </p>
              <a href="/about" class="btn-primary inline-flex items-center space-x-2">
                <span>Learn More</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div>
            
            <div class="slide-in-right">
              <div class="glass-card p-10" style="border-radius: 40px;">
                <div class="space-y-8">
                  <div class="flex items-start space-x-5">
                    <div class="text-red-600 text-4xl opacity-80">
                      <i class="fas fa-trophy"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold mb-3" style="letter-spacing: -0.3px;">Championship Racing</h3>
                      <p class="text-gray-400 font-light" style="line-height: 1.8;">Competing at the highest level of sprintcar racing</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-5">
                    <div class="text-red-600 text-4xl opacity-80">
                      <i class="fas fa-tshirt"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold mb-3" style="letter-spacing: -0.3px;">Premium Merchandise</h3>
                      <p class="text-gray-400 font-light" style="line-height: 1.8;">High-quality apparel for motorsport enthusiasts</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-5">
                    <div class="text-red-600 text-4xl opacity-80">
                      <i class="fas fa-users"></i>
                    </div>
                    <div>
                      <h3 class="text-xl font-semibold mb-3" style="letter-spacing: -0.3px;">Passionate Community</h3>
                      <p class="text-gray-400 font-light" style="line-height: 1.8;">Join thousands of dedicated racing fans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer class="relative border-t border-gray-800 py-12 px-4">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 class="text-2xl font-black gradient-text mb-4">JMS<span class="text-red-600">88</span></h3>
              <p class="text-gray-400 text-sm">Official JMS Motorsport merchandise and racing gear.</p>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Shop</h4>
              <ul class="space-y-2 text-gray-400 text-sm">
                <li><a href="/shop" class="hover:text-red-600 transition-colors">All Products</a></li>
                <li><a href="/shop?category=tshirt" class="hover:text-red-600 transition-colors">T-Shirts</a></li>
                <li><a href="/shop?category=hoodie" class="hover:text-red-600 transition-colors">Hoodies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Racing</h4>
              <ul class="space-y-2 text-gray-400 text-sm">
                <li><a href="/racing" class="hover:text-red-600 transition-colors">Race Schedule</a></li>
                <li><a href="/racing#results" class="hover:text-red-600 transition-colors">Results</a></li>
                <li><a href="/racing#stats" class="hover:text-red-600 transition-colors">Statistics</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Connect</h4>
              <div class="flex space-x-4 mb-4">
                <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <p class="text-gray-400 text-sm">sales@jmsmotorsport.com.au</p>
            </div>
          </div>
          
          <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 JMS Motorsport. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Mobile Menu */}
      <div id="mobile-menu" class="fixed inset-0 z-50 hidden">
        <div class="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg" id="mobile-menu-overlay"></div>
        <div class="absolute top-0 right-0 bottom-0 w-64 glass-card border-l border-gray-800 p-6">
          <button class="absolute top-4 right-4 text-2xl" id="mobile-menu-close">
            <i class="fas fa-times"></i>
          </button>
          
          <nav class="mt-12 space-y-4">
            <a href="/" class="block text-lg font-medium hover:text-red-600 transition-colors">Home</a>
            <a href="/shop" class="block text-lg font-medium hover:text-red-600 transition-colors">Shop</a>
            <a href="/racing" class="block text-lg font-medium hover:text-red-600 transition-colors">Racing</a>
            <a href="/about" class="block text-lg font-medium hover:text-red-600 transition-colors">About</a>
            <a href="/contact" class="block text-lg font-medium hover:text-red-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
      
      {/* Scripts */}
      <script src="/static/app.js"></script>
    </div>
  )
})

// Shop Page
app.get('/shop', (c) => {
  const category = c.req.query('category')
  const filteredProducts = category 
    ? products.filter(p => p.category === category)
    : products

  return c.render(
    <div>
      <div class="smoke-bg"></div>
      <Navigation />
      <MobileMenu />
      
      <main class="relative pt-32 pb-24 px-4 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 fade-in">
            <h1 class="text-5xl md:text-6xl font-black mb-6">
              Official <span class="text-red-600">Merchandise</span>
            </h1>
            <p class="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium JMS Motorsport apparel. Exclusive designs celebrating Car #88.
            </p>
          </div>

          {/* Filters */}
          <div class="flex justify-center gap-4 mb-12">
            <a href="/shop" class={`btn-glass px-6 py-3 ${!category ? 'border-red-600' : ''}`}>
              All Products
            </a>
            <a href="/shop?category=tshirt" class={`btn-glass px-6 py-3 ${category === 'tshirt' ? 'border-red-600' : ''}`}>
              T-Shirts
            </a>
            <a href="/shop?category=hoodie" class={`btn-glass px-6 py-3 ${category === 'hoodie' ? 'border-red-600' : ''}`}>
              Hoodies
            </a>
          </div>

          {/* Product Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div class="glass-card product-card overflow-hidden fade-in">
                <div class="relative aspect-square bg-gradient-to-br from-gray-900 to-black">
                  <img 
                    src={product.image_front} 
                    alt={product.name}
                    class="w-full h-full object-contain p-8"
                  />
                  <div class="absolute top-4 right-4 glass-card px-3 py-1">
                    <p class="text-sm font-bold">{product.color}</p>
                  </div>
                </div>
                
                <div class="p-6">
                  <h3 class="text-xl font-bold mb-2">{product.name}</h3>
                  <p class="text-gray-400 text-sm mb-4">{product.description}</p>
                  
                  <div class="flex items-center justify-between">
                    <p class="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</p>
                    <a href={`/product/${product.id}`} class="btn-primary text-sm px-4 py-2">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      <script src="/static/app.js"></script>
    </div>
  )
})

// Product Detail Page
app.get('/product/:id', (c) => {
  const id = parseInt(c.req.param('id'))
  const product = products.find(p => p.id === id)
  
  if (!product) {
    return c.redirect('/shop')
  }

  return c.render(
    <div>
      <div class="smoke-bg"></div>
      <Navigation />
      <MobileMenu />
      
      <main class="relative pt-32 pb-24 px-4 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <a href="/shop" class="inline-flex items-center text-gray-400 hover:text-red-600 transition-colors mb-8">
            <i class="fas fa-arrow-left mr-2"></i>
            Back to Shop
          </a>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div class="space-y-4">
              <div class="glass-card overflow-hidden aspect-square bg-gradient-to-br from-gray-900 to-black">
                <img 
                  src={product.image_front} 
                  alt={product.name}
                  id="main-image"
                  class="w-full h-full object-contain p-8"
                />
              </div>
              
              <div class="grid grid-cols-2 gap-4">
                <button 
                  onclick={`document.getElementById('main-image').src='${product.image_front}'`}
                  class="glass-card overflow-hidden aspect-square bg-gradient-to-br from-gray-900 to-black hover:border-red-600 transition-colors"
                >
                  <img 
                    src={product.image_front} 
                    alt="Front view"
                    class="w-full h-full object-contain p-4"
                  />
                </button>
                <button 
                  onclick={`document.getElementById('main-image').src='${product.image_back}'`}
                  class="glass-card overflow-hidden aspect-square bg-gradient-to-br from-gray-900 to-black hover:border-red-600 transition-colors"
                >
                  <img 
                    src={product.image_back} 
                    alt="Back view"
                    class="w-full h-full object-contain p-4"
                  />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div class="space-y-6">
              <div>
                <div class="inline-block glass-card px-4 py-2 mb-4">
                  <p class="text-sm font-bold text-red-600 uppercase">{product.category}</p>
                </div>
                <h1 class="text-4xl md:text-5xl font-black mb-4">{product.name}</h1>
                <p class="text-gray-400 text-lg mb-6">{product.description}</p>
                <p class="text-4xl font-black text-red-600 mb-8">${product.price.toFixed(2)}</p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 class="text-lg font-bold mb-4">Select Size</h3>
                <div class="grid grid-cols-4 gap-3" id="size-selector">
                  {product.sizes.map((size) => (
                    <button 
                      data-size={size}
                      onclick={`selectSize('${size}')`}
                      class="glass-card py-3 hover:border-red-600 transition-colors font-bold size-btn"
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <p class="text-sm text-gray-400 mt-2" id="size-error" style="display: none; color: #ef4444;">
                  Please select a size
                </p>
              </div>

              {/* Add to Cart */}
              <button 
                onclick={`addToCartFromProduct(${product.id}, '${product.name}', ${product.price}, '${product.image_front}')`}
                class="w-full btn-primary red-glow py-4 text-lg font-bold"
              >
                <i class="fas fa-shopping-cart mr-2"></i>
                Add to Cart
              </button>

              {/* Product Details */}
              <div class="glass-card p-6 space-y-4">
                <div class="flex items-start space-x-3">
                  <i class="fas fa-tshirt text-red-600 text-xl mt-1"></i>
                  <div>
                    <h4 class="font-bold mb-1">Premium Quality</h4>
                    <p class="text-sm text-gray-400">High-quality DTF print on premium fabric</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-shipping-fast text-red-600 text-xl mt-1"></i>
                  <div>
                    <h4 class="font-bold mb-1">Fast Shipping</h4>
                    <p class="text-sm text-gray-400">Free shipping on orders over $100</p>
                  </div>
                </div>
                <div class="flex items-start space-x-3">
                  <i class="fas fa-undo text-red-600 text-xl mt-1"></i>
                  <div>
                    <h4 class="font-bold mb-1">Easy Returns</h4>
                    <p class="text-sm text-gray-400">30-day return policy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <script src="/static/app.js"></script>
      <script dangerouslySetInnerHTML={{__html: `
        let selectedSize = null;

        function selectSize(size) {
          selectedSize = size;
          document.querySelectorAll('.size-btn').forEach(btn => {
            btn.classList.remove('border-red-600');
          });
          event.target.classList.add('border-red-600');
          document.getElementById('size-error').style.display = 'none';
        }

        function addToCartFromProduct(productId, productName, price, image) {
          if (!selectedSize) {
            document.getElementById('size-error').style.display = 'block';
            return;
          }
          
          const product = {
            id: productId,
            name: productName,
            price: price,
            image_front: image,
            color: '${product.color}'
          };
          
          cart.addItem(product, selectedSize, 1);
          
          // Show success message
          setTimeout(() => {
            if (confirm('Item added to cart! View cart now?')) {
              window.location.href = '/cart';
            }
          }, 500);
        }
      `}}>
      </script>
    </div>
  )
})

// Cart Page
app.get('/cart', (c) => {
  return c.render(
    <div>
      <div class="smoke-bg"></div>
      <Navigation />
      <MobileMenu />
      
      <main class="relative pt-32 pb-24 px-4 min-h-screen">
        <div class="max-w-7xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-black mb-12 text-center">
            Shopping <span class="text-red-600">Cart</span>
          </h1>

          <div id="cart-container" class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div class="lg:col-span-2 space-y-4" id="cart-items">
              <div class="text-center text-gray-400 py-12 glass-card">
                <i class="fas fa-shopping-cart text-6xl mb-4 opacity-50"></i>
                <p class="text-xl">Your cart is empty</p>
                <a href="/shop" class="btn-primary inline-block mt-6">
                  Shop Now
                </a>
              </div>
            </div>

            {/* Cart Summary */}
            <div class="lg:col-span-1">
              <div class="glass-card p-6 sticky top-32">
                <h2 class="text-2xl font-bold mb-6">Order Summary</h2>
                
                <div class="space-y-4 mb-6">
                  <div class="flex justify-between text-gray-400">
                    <span>Subtotal:</span>
                    <span id="cart-subtotal">$0.00</span>
                  </div>
                  <div class="flex justify-between text-gray-400">
                    <span>Shipping:</span>
                    <span id="cart-shipping">Calculated at checkout</span>
                  </div>
                  <div class="border-t border-gray-700 pt-4 flex justify-between text-xl font-bold">
                    <span>Total:</span>
                    <span class="text-red-600" id="cart-total">$0.00</span>
                  </div>
                </div>

                <button 
                  onclick="proceedToCheckout()"
                  class="w-full btn-primary red-glow py-4 mb-4"
                  id="checkout-btn"
                  disabled
                >
                  Proceed to Checkout
                </button>

                <a href="/shop" class="block text-center text-gray-400 hover:text-red-600 transition-colors">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      
      <script src="/static/app.js"></script>
      <script dangerouslySetInnerHTML={{__html: `
        function renderCart() {
          const cartItems = cart.items;
          const cartContainer = document.getElementById('cart-items');
          
          if (cartItems.length === 0) {
            cartContainer.innerHTML = \`
              <div class="text-center text-gray-400 py-12 glass-card">
                <i class="fas fa-shopping-cart text-6xl mb-4 opacity-50"></i>
                <p class="text-xl">Your cart is empty</p>
                <a href="/shop" class="btn-primary inline-block mt-6">Shop Now</a>
              </div>
            \`;
            document.getElementById('checkout-btn').disabled = true;
            return;
          }

          document.getElementById('checkout-btn').disabled = false;
          
          cartContainer.innerHTML = cartItems.map(item => \`
            <div class="glass-card p-6 flex gap-6">
              <img src="\${item.image_front}" alt="\${item.name}" class="w-24 h-24 object-contain bg-gray-900 rounded-lg">
              <div class="flex-1">
                <h3 class="text-xl font-bold mb-2">\${item.name}</h3>
                <p class="text-gray-400 text-sm mb-2">Color: \${item.color || 'N/A'}</p>
                <p class="text-gray-400 text-sm mb-4">Size: \${item.size}</p>
                <div class="flex items-center gap-4">
                  <div class="flex items-center gap-3 glass-card px-4 py-2">
                    <button onclick="updateCartQuantity(\${item.id}, '\${item.size}', \${item.quantity - 1})" class="text-gray-400 hover:text-white">
                      <i class="fas fa-minus"></i>
                    </button>
                    <span class="font-bold w-8 text-center">\${item.quantity}</span>
                    <button onclick="updateCartQuantity(\${item.id}, '\${item.size}', \${item.quantity + 1})" class="text-gray-400 hover:text-white">
                      <i class="fas fa-plus"></i>
                    </button>
                  </div>
                  <button onclick="removeFromCart(\${item.id}, '\${item.size}')" class="text-red-600 hover:text-red-400 transition-colors">
                    <i class="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
              <div class="text-right">
                <p class="text-2xl font-bold text-red-600">$\${(item.price * item.quantity).toFixed(2)}</p>
                <p class="text-gray-400 text-sm">$\${item.price.toFixed(2)} each</p>
              </div>
            </div>
          \`).join('');

          updateCartSummary();
        }

        function updateCartSummary() {
          const total = cart.getTotal();
          document.getElementById('cart-subtotal').textContent = '$' + total.toFixed(2);
          document.getElementById('cart-total').textContent = '$' + total.toFixed(2);
        }

        function updateCartQuantity(productId, size, quantity) {
          cart.updateQuantity(productId, size, quantity);
          renderCart();
        }

        function removeFromCart(productId, size) {
          if (confirm('Remove this item from cart?')) {
            cart.removeItem(productId, size);
            renderCart();
          }
        }

        function proceedToCheckout() {
          alert('Checkout functionality coming soon! This would integrate with a payment processor.');
        }

        // Render cart on page load
        document.addEventListener('DOMContentLoaded', () => {
          renderCart();
        });
      `}}>
      </script>
    </div>
  )
})

// Components
const Navigation = () => (
  <nav class="glass-nav fixed top-0 left-0 right-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <a href="/" class="flex items-center space-x-3">
          <div class="text-3xl font-black gradient-text">
            JMS<span class="text-red-600">88</span>
          </div>
        </a>
        
        <div class="hidden md:flex items-center space-x-8">
          <a href="/" class="text-white hover:text-red-600 transition-colors font-medium">Home</a>
          <a href="/shop" class="text-white hover:text-red-600 transition-colors font-medium">Shop</a>
          <a href="/racing" class="text-white hover:text-red-600 transition-colors font-medium">Racing</a>
          <a href="/about" class="text-white hover:text-red-600 transition-colors font-medium">About</a>
          <a href="/contact" class="text-white hover:text-red-600 transition-colors font-medium">Contact</a>
        </div>
        
        <div class="flex items-center space-x-4">
          <a href="/cart" class="relative p-2 hover:text-red-600 transition-colors">
            <i class="fas fa-shopping-cart text-xl"></i>
            <span class="cart-badge" id="cart-count">0</span>
          </a>
          
          <button class="md:hidden p-2" id="mobile-menu-btn">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
)

const MobileMenu = () => (
  <div id="mobile-menu" class="fixed inset-0 z-50 hidden">
    <div class="absolute inset-0 bg-black bg-opacity-90 backdrop-blur-lg" id="mobile-menu-overlay"></div>
    <div class="absolute top-0 right-0 bottom-0 w-64 glass-card border-l border-gray-800 p-6">
      <button class="absolute top-4 right-4 text-2xl" id="mobile-menu-close">
        <i class="fas fa-times"></i>
      </button>
      
      <nav class="mt-12 space-y-4">
        <a href="/" class="block text-lg font-medium hover:text-red-600 transition-colors">Home</a>
        <a href="/shop" class="block text-lg font-medium hover:text-red-600 transition-colors">Shop</a>
        <a href="/racing" class="block text-lg font-medium hover:text-red-600 transition-colors">Racing</a>
        <a href="/about" class="block text-lg font-medium hover:text-red-600 transition-colors">About</a>
        <a href="/contact" class="block text-lg font-medium hover:text-red-600 transition-colors">Contact</a>
      </nav>
    </div>
  </div>
)

const Footer = () => (
  <footer class="relative border-t border-gray-800 py-12 px-4">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 class="text-2xl font-black gradient-text mb-4">JMS<span class="text-red-600">88</span></h3>
          <p class="text-gray-400 text-sm">Official JMS Motorsport merchandise and racing gear.</p>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Shop</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/shop" class="hover:text-red-600 transition-colors">All Products</a></li>
            <li><a href="/shop?category=tshirt" class="hover:text-red-600 transition-colors">T-Shirts</a></li>
            <li><a href="/shop?category=hoodie" class="hover:text-red-600 transition-colors">Hoodies</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Racing</h4>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li><a href="/racing" class="hover:text-red-600 transition-colors">Race Schedule</a></li>
            <li><a href="/racing#results" class="hover:text-red-600 transition-colors">Results</a></li>
            <li><a href="/racing#stats" class="hover:text-red-600 transition-colors">Statistics</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="font-bold mb-4">Connect</h4>
          <div class="flex space-x-4 mb-4">
            <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-red-600 transition-colors text-xl">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
          <p class="text-gray-400 text-sm">sales@jmsmotorsport.com.au</p>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2024 JMS Motorsport. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default app
