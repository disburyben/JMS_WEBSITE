# Complete Setup Guide for JMS Motorsport 88

## ✅ What's Already Done

- ✅ React application built and tested locally
- ✅ Deployed to Vercel: https://jms-motorsport-88-hpm9b2o8r-bens-projects-b856bee1.vercel.app
- ✅ Git repository initialized
- ✅ GitHub repository created: https://github.com/disburyben/jms-motorsport-88
- ✅ Code pushed to GitHub
- ✅ Environment variables configured locally

---

## 🔧 Steps to Complete Setup

### 1. Connect Vercel to GitHub (for Auto-Deployment)

This enables automatic deployments whenever you push to GitHub.

**Steps:**
1. Go to https://vercel.com/bens-projects-b856bee1/jms-motorsport-88/settings/git
2. Click on **"Connect Git Repository"**
3. Select **GitHub** as your Git provider
4. Choose the repository: **disburyben/jms-motorsport-88**
5. Click **"Connect"**

Once connected, every push to the `main` branch will automatically deploy!

---

### 2. Add Environment Variables to Vercel

Your app needs Supabase credentials to work properly.

**Steps:**
1. Go to https://vercel.com/bens-projects-b856bee1/jms-motorsport-88/settings/environment-variables
2. Add the following variables:

   **Variable 1:**
   - **Key**: `VITE_SUPABASE_PROJECT_ID`
   - **Value**: `qtgusfvncorjcxcayofg`
   - **Environment**: Production, Preview, Development (check all)

   **Variable 2:**
   - **Key**: `VITE_SUPABASE_ANON_KEY`
   - **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0Z3VzZnZuY29yamN4Y2F5b2ZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE1NTI1MjUsImV4cCI6MjA3NzEyODUyNX0.yoH0J69cMjxOtxnXV1BarYzyA5hZbmuZ_2boWUV1SE4`
   - **Environment**: Production, Preview, Development (check all)

3. Click **"Save"** for each variable

4. **Redeploy** the project to apply the new environment variables:
   - Go to https://vercel.com/bens-projects-b856bee1/jms-motorsport-88
   - Click on the latest deployment
   - Click **"Redeploy"** → **"Redeploy"**

---

### 3. Verify Supabase Backend is Working

Your app uses Supabase for:
- Contact form submissions
- Merchandise store email signups
- Admin dashboard data exports

**Check Supabase Status:**
1. Go to https://supabase.com/dashboard/project/qtgusfvncorjcxcayofg
2. Verify that:
   - The project is active
   - Edge Functions are deployed
   - Database is accessible

**If Supabase project doesn't exist or needs setup:**
1. Go to https://supabase.com
2. Sign in or create an account
3. Create a new project or access existing project: `qtgusfvncorjcxcayofg`
4. The edge function should be at: `make-server-e359eb76`

---

### 4. Add Custom Domain (Optional)

**Steps:**
1. Go to https://vercel.com/bens-projects-b856bee1/jms-motorsport-88/settings/domains
2. Click **"Add"**
3. Enter your domain (e.g., `jmsmotorsport88.com`)
4. Follow the DNS configuration instructions
5. Vercel will automatically provision SSL certificate

---

### 5. WordPress.com Integration Options

You have several options to integrate with WordPress.com:

#### Option A: Embed via iFrame (Simple)
Add this to a WordPress page/post:
```html
<iframe src="https://jms-motorsport-88-hpm9b2o8r-bens-projects-b856bee1.vercel.app" width="100%" height="1000px" frameborder="0"></iframe>
```

#### Option B: Link from WordPress Menu
1. In WordPress admin, go to **Appearance** → **Menus**
2. Add a **Custom Link**:
   - URL: `https://jms-motorsport-88-hpm9b2o8r-bens-projects-b856bee1.vercel.app`
   - Link Text: `Racing Team`
3. Save menu

#### Option C: WordPress Widget
1. Go to **Appearance** → **Widgets**
2. Add a **Text/HTML Widget**
3. Add a link or button:
```html
<a href="https://jms-motorsport-88-hpm9b2o8r-bens-projects-b856bee1.vercel.app" class="button">
  Visit JMS Motorsport 88
</a>
```

#### Option D: Full Integration (Advanced)
Use WordPress REST API to fetch data from your Supabase backend and display it on WordPress pages. This requires custom development.

---

## 🔗 Important URLs

- **Live Site**: https://jms-motorsport-88-hpm9b2o8r-bens-projects-b856bee1.vercel.app
- **GitHub Repository**: https://github.com/disburyben/jms-motorsport-88
- **Vercel Dashboard**: https://vercel.com/bens-projects-b856bee1/jms-motorsport-88
- **Admin Panel**: Add `?admin=true` to your URL (e.g., `https://your-site.com?admin=true`)

---

## 📋 Testing Checklist

After completing setup, test these features:

- [ ] Homepage loads correctly
- [ ] Navigation works on all devices (mobile, tablet, desktop)
- [ ] Contact form submits successfully
- [ ] Email signup form in Store section works
- [ ] Admin panel is accessible with `?admin=true`
- [ ] Admin can export contacts and signups as CSV
- [ ] All images load properly
- [ ] Sponsor links open in new tabs
- [ ] Responsive design works on mobile devices

---

## 🛠️ Making Updates

### To Update the Website:

1. **Edit files locally** in `/Users/benjamindisbury/Downloads/JMS_Motorsport_88`
2. **Test locally**: Run `npm run dev`
3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. **Push to GitHub**:
   ```bash
   git push origin main
   ```
5. **Vercel will automatically deploy** (if GitHub connection is set up)

### Quick Deploy Without GitHub:
```bash
npx vercel --prod
```

---

## 🆘 Troubleshooting

### Contact Form Not Working
- Check Supabase project is active
- Verify environment variables in Vercel
- Check browser console for errors

### Images Not Loading
- All images are in `src/assets/` and should work
- Check browser console for 404 errors

### Admin Panel Shows No Data
- Ensure contact form and email signups have been submitted
- Check Supabase dashboard for data
- Verify Edge Function is deployed

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (18+)

---

## 📞 Support Resources

- **Vercel Docs**: https://vercel.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **GitHub Issues**: https://github.com/disburyben/jms-motorsport-88/issues
- **React Documentation**: https://react.dev

---

## 🚀 Next Steps

1. ✅ Complete Vercel-GitHub connection
2. ✅ Add environment variables to Vercel
3. ✅ Test the live site thoroughly
4. 🔲 Add custom domain (optional)
5. 🔲 Set up WordPress integration
6. 🔲 Share the site with your team!

---

**Created by**: Claude Code
**Date**: November 5, 2025
