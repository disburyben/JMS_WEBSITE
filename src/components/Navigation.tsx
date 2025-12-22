export const Navigation = () => (
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
)

export const MobileMenu = () => (
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
