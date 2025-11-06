# JMS Motorsport AI Dashboard - Deployment Guide

## 🚀 Ready to Deploy!

Your AI-driven racing dashboard is built, tested, and ready for production deployment.

## ✅ Pre-Deployment Checklist

- [x] Production build successful (965.80 KB main bundle)
- [x] All dependencies installed and configured
- [x] Dashboard components fully integrated
- [x] Code committed to main branch
- [x] Documentation complete

## 📦 What's Deployed

### Main Website
- Professional racing team landing page
- Race schedule and results
- Driver profiles
- Sponsor showcase
- Merchandise store
- Contact form

### AI Dashboard (NEW! ✨)
- 9 comprehensive dashboard sections
- Real-time performance analytics
- AI-powered race strategy engine
- Competitor analysis and tracking
- Team management interface
- Data export functionality

**Access:** Add `?dashboard=true` to your URL

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

#### A. Via GitHub Integration (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Import `disburyben/jms-motorsport-88`
5. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`
6. Add environment variables (if needed):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
7. Click "Deploy"

**Result:** Your site will be live at `https://jms-motorsport-88.vercel.app` (or custom domain)

#### B. Via Vercel CLI
```bash
# Install Vercel CLI (already done in this environment)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

### Option 2: Netlify

#### Via GitHub Integration
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect to GitHub and select `disburyben/jms-motorsport-88`
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click "Deploy site"

#### Via Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod --dir=build
```

### Option 3: Other Hosting Providers

#### Static Hosting (Cloudflare Pages, GitHub Pages, etc.)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `build` directory** to your hosting provider

#### VPS/Traditional Hosting

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Upload `build` directory** via FTP/SFTP to your web root

3. **Configure web server** (Apache/Nginx) for SPA routing:

**Nginx config:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

**Apache `.htaccess`:**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔧 Environment Variables

If using Supabase or external services, set these environment variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Important:** Prefix all environment variables with `VITE_` for Vite to expose them to your application.

## 🌍 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain: `www.jmsmotorsport.com.au`
3. Configure DNS records as instructed
4. Vercel handles SSL automatically

### DNS Records
```
A     @     76.76.21.21 (Vercel IP)
CNAME www   cname.vercel-dns.com
```

## 📱 Post-Deployment Testing

### Test Checklist
- [ ] Main site loads: `https://www.jmsmotorsport.com.au/`
- [ ] Dashboard accessible: `https://www.jmsmotorsport.com.au/?dashboard=true`
- [ ] Admin panel works: `https://www.jmsmotorsport.com.au/?admin=true`
- [ ] All images load correctly
- [ ] Contact form submits successfully
- [ ] Data exports function properly
- [ ] Mobile responsiveness verified
- [ ] All charts and visualizations render
- [ ] Navigation works smoothly

### Performance Check
```bash
# Run Lighthouse audit
npx lighthouse https://www.jmsmotorsport.com.au --view

# Check bundle size
npm run build -- --mode production
```

## 🔐 Security Considerations

### Before Going Live
1. **Review Environment Variables**
   - Ensure no secrets in code
   - Use `.env` files properly
   - Never commit sensitive data

2. **Add Authentication** (for dashboard)
   ```typescript
   // Recommended: Add auth check
   if (isDashboard && !isAuthenticated) {
     return <LoginPage />;
   }
   ```

3. **Enable HTTPS**
   - Vercel/Netlify handle this automatically
   - For custom hosting, use Let's Encrypt

4. **Configure CORS** (if using external APIs)
   ```typescript
   // In your API configuration
   cors: {
     origin: 'https://www.jmsmotorsport.com.au',
     credentials: true
   }
   ```

## 📊 Monitoring & Analytics

### Add Analytics (Optional)
```typescript
// Google Analytics
// Add to index.html <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

// Vercel Analytics
npm install @vercel/analytics
// Add to main.tsx: import { inject } from '@vercel/analytics';
```

### Performance Monitoring
- **Vercel:** Built-in Analytics
- **Netlify:** Built-in Analytics
- **Google Analytics:** Custom setup
- **Sentry:** Error tracking

## 🚨 Troubleshooting

### Build Failures
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json build
npm install
npm run build
```

### 404 Errors on Refresh
- Configure SPA routing (see VPS section above)
- Add `vercel.json` or `netlify.toml` with rewrites

### Images Not Loading
- Check asset paths in build
- Verify `vite.config.ts` base URL
- Ensure images are in `src/assets`

### Dashboard Not Showing
- Verify URL parameter: `?dashboard=true`
- Check browser console for errors
- Ensure all components imported correctly

## 🎯 Quick Deploy Command

**For Vercel (if logged in):**
```bash
vercel --prod
```

**For Netlify (if logged in):**
```bash
netlify deploy --prod --dir=build
```

## 📞 Support

If you encounter any issues during deployment:

1. Check build logs for errors
2. Review this guide's troubleshooting section
3. Verify all environment variables are set
4. Ensure DNS records are properly configured

## ✨ You're Ready!

Your complete AI-driven racing dashboard is production-ready. Choose your deployment method above and go live!

**Recommended:** Start with Vercel GitHub integration for the easiest deployment experience.
