# Vercel Deployment Guide

## 🚀 Deploy to Vercel (5-Minute Setup)

Your Next.js project has been pushed to GitHub and is ready to deploy!

### Step 1: Sign in to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"** or **"Log In"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Your Project

1. Once logged in, click **"Add New..."** → **"Project"**
2. Select **"Import Git Repository"**
3. Find and select **`bfpronaga/zion-website`**
4. Click **"Import"**

### Step 3: Configure Project (Auto-Detected)

Vercel will automatically detect your Next.js configuration:

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

✅ **No changes needed** - these are already configured correctly!

### Step 4: Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for the build to complete
3. You'll see a success screen with your live URL!

### Step 5: View Your Site

You'll get URLs like:
- **Production**: `https://zion-website.vercel.app`
- **Preview URL**: `https://zion-website-[hash].vercel.app`

---

## 📱 What You'll See

### Main Landing Page
`https://your-site.vercel.app/`
- Clean landing page with two options

### Modern Version
`https://your-site.vercel.app/modern`
- Modern redesigned homepage
- Hero section with Jerusalem image
- Animated entrance effects
- Reordered content for better UX

### Original Version
`https://your-site.vercel.app/original`
- Maintains original content structure
- Modern styling applied
- All original announcements and sections

---

## 🔧 Optional: Custom Domain

### Add Your Own Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add your domain (e.g., `new.zion-jpn.or.jp`)
4. Follow DNS configuration instructions
5. Vercel provides automatic HTTPS certificates!

---

## 🔄 Automatic Deployments

Every time you push to GitHub:
- **`master` branch** → Automatically deploys to production
- **Other branches** → Create preview deployments

### Update Your Site

```bash
# Make changes locally
npm run dev  # Test locally

# Commit and push
git add .
git commit -m "Update homepage content"
git push origin master

# Vercel automatically deploys! ✨
```

---

## 📊 Vercel Features You Get

✅ **Automatic HTTPS** - Secure by default
✅ **Global CDN** - Fast worldwide
✅ **Auto Scaling** - Handles traffic spikes
✅ **Analytics** - Built-in performance metrics
✅ **Preview Deployments** - Test before production
✅ **Instant Rollbacks** - One-click undo
✅ **Zero Configuration** - Works out of the box

---

## 🎯 Next Steps After Deployment

### 1. Share Preview Links
```
Production: https://your-site.vercel.app
Modern: https://your-site.vercel.app/modern
Original: https://your-site.vercel.app/original
```

### 2. Test on Mobile
- Open on your phone
- Check responsive design
- Test all interactions

### 3. Enable Analytics (Optional)
1. Go to project dashboard
2. Click "Analytics" tab
3. Enable Vercel Analytics (free tier available)

### 4. Future Enhancements
- Connect headless CMS (microCMS/Newt)
- Add newsletter form integration
- Implement contact forms
- Add more pages

---

## 🆘 Troubleshooting

### Build Failed?
- Check the build logs in Vercel dashboard
- Most common: Missing dependencies (already handled)
- Environment variables needed (none for MVP)

### Images Not Loading?
- Vercel automatically optimizes images
- Unsplash images work without configuration
- For custom images, add to `/public` folder

### Site Looks Different?
- Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
- Check if all CSS files deployed correctly
- View in incognito mode

---

## 📞 Support Resources

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **GitHub Repo**: [github.com/bfpronaga/zion-website](https://github.com/bfpronaga/zion-website)

---

**Ready to deploy? It takes just 2 minutes! 🚀**

Visit: [vercel.com/new](https://vercel.com/new)
