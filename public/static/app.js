// JMS Motorsport Shop - Frontend JavaScript

// Cart Management
class ShoppingCart {
  constructor() {
    this.items = this.loadCart()
    this.updateCartCount()
  }

  loadCart() {
    const cart = localStorage.getItem('jms_cart')
    return cart ? JSON.parse(cart) : []
  }

  saveCart() {
    localStorage.setItem('jms_cart', JSON.stringify(this.items))
    this.updateCartCount()
  }

  addItem(product, size, quantity = 1) {
    const existingItem = this.items.find(
      item => item.id === product.id && item.size === size
    )

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      this.items.push({
        ...product,
        size,
        quantity
      })
    }

    this.saveCart()
    this.showNotification('Item added to cart!', 'success')
  }

  removeItem(productId, size) {
    this.items = this.items.filter(
      item => !(item.id === productId && item.size === size)
    )
    this.saveCart()
  }

  updateQuantity(productId, size, quantity) {
    const item = this.items.find(
      item => item.id === productId && item.size === size
    )
    if (item) {
      item.quantity = quantity
      if (item.quantity <= 0) {
        this.removeItem(productId, size)
      } else {
        this.saveCart()
      }
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0)
  }

  updateCartCount() {
    const cartCountEl = document.getElementById('cart-count')
    if (cartCountEl) {
      const count = this.getItemCount()
      cartCountEl.textContent = count
      cartCountEl.style.display = count > 0 ? 'flex' : 'none'
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div')
    notification.className = `fixed top-24 right-4 glass-card p-4 rounded-lg shadow-lg z-50 ${
      type === 'success' ? 'border-green-500' : 
      type === 'error' ? 'border-red-500' : 
      'border-blue-500'
    } border-l-4`
    notification.innerHTML = `
      <div class="flex items-center space-x-3">
        <i class="fas fa-${type === 'success' ? 'check-circle text-green-500' : 
                          type === 'error' ? 'exclamation-circle text-red-500' : 
                          'info-circle text-blue-500'} text-xl"></i>
        <span>${message}</span>
      </div>
    `

    document.body.appendChild(notification)

    // Animate in
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.3s ease-out'
    }, 10)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideInRight 0.3s ease-out reverse'
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  clear() {
    this.items = []
    this.saveCart()
  }
}

// Initialize cart
const cart = new ShoppingCart()

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn')
  const mobileMenu = document.getElementById('mobile-menu')
  const mobileMenuClose = document.getElementById('mobile-menu-close')
  const mobileMenuOverlay = document.getElementById('mobile-menu-overlay')

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden')
    })

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
      })
    }

    if (mobileMenuOverlay) {
      mobileMenuOverlay.addEventListener('click', () => {
        mobileMenu.classList.add('hidden')
      })
    }
  }

  // Update cart count on page load
  cart.updateCartCount()
})

// Add to Cart function (for product pages)
function addToCart(productId, productName, price, size, image) {
  const product = {
    id: productId,
    name: productName,
    price: price,
    image_front: image
  }
  
  cart.addItem(product, size, 1)
}

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

// Parallax effect for smoke background
document.addEventListener('mousemove', (e) => {
  const smokeBg = document.querySelector('.smoke-bg')
  if (smokeBg) {
    const x = e.clientX / window.innerWidth
    const y = e.clientY / window.innerHeight
    smokeBg.style.transform = `translate(${x * 20}px, ${y * 20}px)`
  }
})
