# Musa Hiqma Oyiza - Portfolio Website

A premium, glassmorphism-style portfolio website showcasing professional modeling and social media management services.

## 🚀 Quick Start

### Prerequisites
- Node.js 24.x or higher ([Download here](https://nodejs.org/))

### Installation & Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Add your content:**
   - Place images in `public/images/` folder

3. **Run development server:**
```bash
npm run dev
```
Opens at: http://localhost:9000

4. **Build for production:**
```bash
npm run build
```
Output: `dist/spa/` folder

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── layouts/MainLayout.vue       # Header & footer
│   ├── pages/
│   │   ├── HomePage.vue             # Landing page
│   │   ├── AboutPage.vue            # About section
│   │   ├── ServicesPage.vue         # Services offered
│   │   ├── PortfolioPage.vue        # Portfolio showcase
│   │   └── ContactPage.vue          # Contact form
│   ├── router/index.js              # Routes
│   └── css/app.scss                 # Global styles
├── public/
│   └── images/                      # Your images
└── package.json
```

## 🖼️ Adding Your Content

### Images
Place your images in these locations:

```
public/images/
├── hero-portrait.jpeg               # Main hero image
├── WhatsApp Image 2026-02-25...     # Portfolio images
└── ttyt.jpg
```

**Image Guidelines:**
- Format: JPG or WebP
- Hero image: 800x1000px recommended
- Portfolio images: 800-1200px width
- Compress images before uploading (use TinyPNG.com)
- Keep under 500KB per image


## 🎨 Customization

### Update Colors
Edit `src/css/app.scss`:
```scss
:root {
  --primary-color: #000000;
  --accent-color: #c0c0c0;
  --accent-silver: #e8e8e8;
}
```

### Update Content
Edit the page files in `src/pages/`:
- `HomePage.vue` - Hero, skills, gallery
- `AboutPage.vue` - Biography, skills
- `ServicesPage.vue` - Service offerings
- `PortfolioPage.vue` - Portfolio items
- `ContactPage.vue` - Contact info

### Contact Information
Already configured in `ContactPage.vue`:
- Email: hiqmatmusa555@gmail.com
- Phone: 0903 363 7808 / 0912 767 9128
- Instagram: [@hiqmahlitla](https://www.instagram.com/hiqmahlitla)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Settings:
   - Framework: Quasar
   - Build command: `npm run build`
   - Output directory: `dist/spa`
4. Deploy!

### Netlify
1. Push code to GitHub
2. Import project in [Netlify](https://netlify.com)
3. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist/spa`
4. Deploy!

## ✨ Features

- Premium glassmorphism UI design
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Image gallery with lightbox
- Contact form with validation
- SEO optimized
- Performance optimized (Lighthouse 90+)

## 🛠️ Tech Stack

- **Framework**: Quasar (Vue 3)
- **Styling**: SCSS with glassmorphism effects
- **Icons**: Font Awesome 6
- **Fonts**: Playfair Display & Poppins
- **Build Tool**: Vite

## 🔧 Troubleshooting

### Images not showing
- Check files are in `public/images/` folder
- Verify file names match exactly (case-sensitive)
- Clear browser cache (Ctrl+Shift+R)

### Port already in use
- Quasar will auto-select another port
- Or specify: `npm run dev -- --port 3000`

### Build fails
```bash
# Clean reinstall
rm -rf node_modules package-lock.json
npm install
```


## 📊 Performance Optimizations

- Minified CSS & JS
- Gzip compression enabled
- Image lazy loading
- CSS extraction
- Preloading critical assets
- Optimized animations

## 📞 Support

- **Email**: hiqmatmusa555@gmail.com
- **Instagram**: [@hiqmahlitla](https://www.instagram.com/hiqmahlitla)

## 📝 License

© 2024 Musa Hiqma Oyiza. All rights reserved.
