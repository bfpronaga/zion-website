# Zion Website - Next.js MVP

Modern homepage prototypes for シオンとの架け橋 (A Bridge between Zion and Japan) built with Next.js 16 and TypeScript.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
zion-website/
├── app/
│   ├── components/      # Reusable React components
│   ├── modern/          # Modern version page
│   │   ├── page.tsx
│   │   └── modern.css
│   ├── original/        # Original structure page
│   │   └── page.tsx
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── docs/                # Project documentation
├── public/              # Static assets
└── next.config.ts       # Next.js configuration
```

## 🎨 Pages

- **`/`** - Landing page with links to both versions
- **`/modern`** - Modern redesigned homepage with reordered content
- **`/original`** - Homepage maintaining original content structure

## 🛠️ Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Noto Sans JP & Playfair Display

## 🌐 Deployment to Vercel

### Method 1: Connect GitHub Repository

1. Push this repository to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure build settings
6. Click "Deploy"

### Method 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts to deploy.

## 🎯 Key Features

### Modern Version (`/modern`)
- **Split hero section** with Jerusalem imagery
- **Animated entrance effects** (respects `prefers-reduced-motion`)
- **Social proof stats** (2,000+ subscribers, 20 years history)
- **Reordered content hierarchy** for better UX
- **Embedded YouTube videos**
- **Event calendar**
- **Newsletter signup form**

### Original Version (`/original`)
- **Maintains exact original content order**
- **Refined modern styling**
- **Original announcements and structure**
- **Consistent brand colors and fonts**

## 🎨 Design System

### Colors
- Primary Blue: `#1a2b4a`
- Accent Blue: `#4a9fd8`
- Coral: `#ff6b6b`
- Gold: `#d4a574`

### Typography
- **Body**: Noto Sans JP (300, 400, 500, 700)
- **Headings**: Playfair Display (600, 700)

## 📝 Environment Variables

No environment variables required for MVP. For future API integrations, create `.env.local`:

```bash
# Future CMS API keys
# MICROCMS_API_KEY=your_api_key_here
# MICROCMS_SERVICE_DOMAIN=your_domain
```

## 🔗 Next Steps

1. **Content Management**: Integrate with microCMS or Newt headless CMS
2. **Form Integration**: Connect newsletter signup to email service
3. **Analytics**: Add Google Analytics or Vercel Analytics
4. **SEO**: Implement dynamic meta tags per page
5. **i18n**: Add English language support
6. **API Routes**: Create backend endpoints for form submissions

## 📚 Documentation

See additional documentation in the `docs/` folder:
- `PROJECT_OVERVIEW.md` - Overall project strategy
- `CMS_COMPARISON.md` - Headless CMS evaluation
- `CURRENT_SITE_ANALYSIS.md` - Technical analysis of existing site
- `UIUX_REVIEW.md` - UI/UX evaluation report

## 🤝 Contributing

This is a client project. For internal team members:
1. Create a feature branch
2. Make changes
3. Test locally with `npm run dev`
4. Build to verify: `npm run build`
5. Create pull request

## 📄 License

Private project for シオンとの架け橋 (A Bridge between Zion and Japan)

---

Built with ❤️ using Next.js
