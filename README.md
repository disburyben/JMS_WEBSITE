# JMS Motorsport Official Store

Modern, minimalist e-commerce website for JMS Motorsport featuring glassmorphism design, smokey overlays, and premium merchandise catalog.

## 🏎️ Project Overview

**Name**: JMS Motorsport Shop  
**Purpose**: Official online merchandise store for Car #88 sprintcar racing team  
**Design**: Modern minimalist with racing vibes, glassmorphism effects, and smokey overlays  
**Tech Stack**: Hono + Cloudflare Pages + TypeScript + Tailwind CSS

## 🌐 URLs

**Development**: https://3000-ihzma7rxafy1tjyr0p7uh-ad490db5.sandbox.novita.ai  
**Production**: (To be deployed)  
**GitHub**: (To be pushed)

## ✨ Completed Features

### 🏠 Homepage
- Hero section with gradient text and racing stripe animation
- Smokey background with floating blur effects
- Glassmorphism navigation bar (sticky)
- Featured products showcase (3 products)
- Racing heritage section with feature cards
- Responsive footer with social links
- Mobile-friendly hamburger menu

### 🛍️ Shop Page
- Full product catalog display
- Category filtering (All Products, T-Shirts, Hoodies)
- Glassmorphism product cards with hover effects
- Product images with color badges
- Direct links to product details
- Consistent navigation and footer

### 📦 Product Detail Pages
- Large product image viewer
- Front/back image toggle
- Product information (name, description, price, color)
- Size selector (interactive buttons)
- Add to cart functionality with size validation
- Product details cards (quality, shipping, returns)
- Breadcrumb navigation back to shop

### 🛒 Shopping Cart
- Cart items display with images
- Quantity adjustment (+ / - buttons)
- Remove item functionality
- Real-time subtotal calculation
- Order summary sidebar
- Empty cart state handling
- LocalStorage persistence
- Cart badge counter in navigation

### 🎨 Design Features
- **Glassmorphism**: Frosted glass effect cards with backdrop blur
- **Smokey Overlays**: Animated floating smoke gradients
- **Red Glow Effects**: Racing-themed button and element highlights
- **Gradient Text**: Smooth white-to-red gradient on headings
- **Racing Stripe**: Animated stripe effect on hero title
- **Smooth Animations**: Fade-in, slide-in effects throughout
- **Custom Scrollbar**: Red-themed scrollbar styling

## 📋 Functional Entry URIs

### Pages
- `GET /` - Homepage with hero and featured products
- `GET /shop` - Product catalog page
- `GET /shop?category=tshirt` - Filtered T-shirts
- `GET /shop?category=hoodie` - Filtered hoodies
- `GET /product/:id` - Product detail page (IDs: 1-5)
- `GET /cart` - Shopping cart page
- `GET /racing` - Racing section (coming soon)
- `GET /about` - About page (coming soon)
- `GET /contact` - Contact page (coming soon)

### Static Assets
- `/static/style.css` - Custom CSS with glassmorphism
- `/static/app.js` - Cart management and frontend logic

## 🗄️ Data Architecture

### Product Data Model
```typescript
{
  id: number
  name: string
  description: string
  price: number
  color: string
  image_front: string (URL)
  image_back: string (URL)
  sizes: string[] (e.g., ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'])
  category: 'tshirt' | 'hoodie'
}
```

### Cart Data Model (LocalStorage)
```typescript
{
  items: [{
    id: number
    name: string
    price: number
    color: string
    image_front: string
    size: string
    quantity: number
  }]
}
```

### Current Products
1. **Racing Car T-Shirt (Black)** - $45.00
2. **Racing Car T-Shirt (White)** - $45.00
3. **Motorsport Pack T-Shirt (Black)** - $45.00
4. **Motorsport Pack T-Shirt (White)** - $45.00
5. **Racing Car Hoodie (Black)** - $75.00

### Storage Services
- **Current**: LocalStorage for cart data (client-side)
- **Future**: Cloudflare D1 for products, orders, customer data

## 📱 User Guide

### Shopping
1. **Browse Products**: Visit `/shop` to see all merchandise
2. **Filter by Category**: Click T-Shirts or Hoodies buttons
3. **View Details**: Click "View Details" on any product
4. **Select Size**: Choose your size from available options
5. **Add to Cart**: Click "Add to Cart" button
6. **View Cart**: Click cart icon in navigation
7. **Adjust Quantity**: Use +/- buttons in cart
8. **Checkout**: Click "Proceed to Checkout" (coming soon)

### Navigation
- **Desktop**: Use top navigation bar
- **Mobile**: Tap hamburger menu (☰) for navigation
- **Cart Badge**: Shows number of items in cart
- **Footer Links**: Quick access to all sections

## 🚀 Development

### Requirements
- Node.js 18+
- npm or yarn
- PM2 (pre-installed in sandbox)

### Installation
```bash
cd /home/user/webapp
npm install
```

### Local Development
```bash
# Build project
npm run build

# Start with PM2
pm2 start ecosystem.config.cjs

# Test
curl http://localhost:3000
```

### Available Scripts
- `npm run dev` - Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to Cloudflare Pages
- `npm run clean-port` - Kill process on port 3000

## 🎯 Features Not Yet Implemented

### High Priority
- [ ] Checkout process and payment integration
- [ ] Order confirmation and email notifications
- [ ] User authentication and accounts
- [ ] Admin panel for product management

### Medium Priority
- [ ] Racing section with live data
- [ ] About page with team information
- [ ] Contact form with email integration
- [ ] Product search functionality
- [ ] Wishlist/favorites feature

### Low Priority
- [ ] Product reviews and ratings
- [ ] Size guide modal
- [ ] Newsletter subscription
- [ ] Social media feed integration
- [ ] Blog/news section

## 🔄 Recommended Next Steps

1. **Deploy to Cloudflare Pages**
   - Set up Cloudflare API key
   - Create Cloudflare Pages project
   - Deploy production build
   - Configure custom domain

2. **Add Database (Cloudflare D1)**
   - Create D1 database for products
   - Add migration scripts
   - Move product data from hardcoded to DB
   - Add order tracking system

3. **Implement Checkout**
   - Integrate Stripe or PayPal
   - Create checkout flow
   - Add shipping calculator
   - Send order confirmations

4. **Build Racing Section**
   - Integrate race data API
   - Create race schedule page
   - Add results and standings
   - Display statistics

5. **Add Content Pages**
   - About page with team history
   - Contact form with email service
   - Racing achievements gallery
   - Sponsor showcase

## 🚢 Deployment Status

- **Platform**: Cloudflare Pages
- **Status**: ⏳ Ready to Deploy
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

## 🛠️ Technical Details

### Framework & Libraries
- **Backend**: Hono 4.11.1
- **Runtime**: Cloudflare Workers
- **Build Tool**: Vite 6.3.5
- **CSS Framework**: Tailwind CSS (CDN)
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Orbitron, Inter (Google Fonts)
- **HTTP Client**: Axios 1.6.0

### Design System
- **Primary Color**: Red (#E31E24)
- **Background**: Black (#000000)
- **Glass Background**: rgba(255, 255, 255, 0.05)
- **Glass Border**: rgba(255, 255, 255, 0.1)
- **Typography**: Orbitron (headings), Inter (body)

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Notes

- Cart data persists in browser LocalStorage
- Product images hosted on GenSpark CDN
- Responsive design optimized for mobile and desktop
- Glassmorphism effects require modern browser support
- PM2 manages development server in sandbox

## 🔗 Contact

**Email**: sales@jmsmotorsport.com.au  
**Location**: 6 Cochranes Road, Moorabbin, Victoria, 3189

---

**Last Updated**: 2024-12-22  
**Version**: 1.0.0  
**License**: Proprietary
