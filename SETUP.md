# Setup Guide - Musa Hiqma Portfolio

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Content

#### Images
Add your images to the following directories:

**Hero & About Images:**
- `public/images/hero-portrait.jpg` - Main hero section image
- `public/images/about-portrait.jpg` - About page portrait

**Modeling Portfolio:**
- `public/images/modeling/model-1.jpg`
- `public/images/modeling/model-2.jpg`
- `public/images/modeling/model-3.jpg`
- ... (add as many as you want)

**Social Media Projects:**
- `public/images/social/project-1.jpg`
- `public/images/social/project-2.jpg`
- `public/images/social/project-3.jpg`

#### Audio Files
Add voice-over demos to:
- `public/audio/demo-1.mp3`
- `public/audio/demo-2.mp3`
- `public/audio/demo-3.mp3`
- `public/audio/demo-4.mp3`

### 3. Run Development Server
```bash
npm run dev
```

The site will open at `http://localhost:9000` (or another port if 9000 is busy)

### 4. Build for Production
```bash
npm run build
```

The production files will be in `dist/spa/` directory.

## Customization Tips

### Update Contact Information
All contact info is already set in `ContactPage.vue`:
- Email: hiqmatmusa555@gmail.com
- Phone: 0903363780809127679128
- Instagram: @hiqmahlitla

### Change Colors
Edit `src/css/app.scss` to change the color scheme:
```scss
:root {
  --primary-color: #1e1b4b;      // Dark blue
  --accent-color: #a78bfa;       // Purple
  --accent-neon: #c4b5fd;        // Light purple
}
```

### Update Content
- **Home Page**: `src/pages/HomePage.vue`
- **About Page**: `src/pages/AboutPage.vue`
- **Services**: `src/pages/ServicesPage.vue`
- **Portfolio**: `src/pages/PortfolioPage.vue`
- **Contact**: `src/pages/ContactPage.vue`

### Add More Skills
In `HomePage.vue`, find the `skills` array and add more:
```javascript
const skills = [
  {
    icon: 'fas fa-star',
    title: 'Your Skill',
    description: 'Description here'
  }
]
```

### Add More Portfolio Items
In `PortfolioPage.vue`, add to the arrays:
- `modelingImages` - for modeling photos
- `socialProjects` - for social media work
- `voiceProjects` - for voice-over demos

## Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Import project in Vercel
3. Build command: `npm run build`
4. Output directory: `dist/spa`

### Deploy to Netlify
1. Push code to GitHub
2. Import project in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/spa`

## Image Optimization Tips

1. **Use WebP format** for better performance
2. **Compress images** before uploading (use TinyPNG or similar)
3. **Recommended sizes:**
   - Hero portrait: 800x1000px
   - Modeling images: 800-1200px width
   - Social media screenshots: 1200px width

## Audio File Tips

1. **Format**: MP3 (best compatibility)
2. **Bitrate**: 128-192 kbps (good quality, small size)
3. **Length**: 30-60 seconds for demos
4. **File size**: Keep under 5MB per file

## Troubleshooting

### Port already in use
If port 9000 is busy, Quasar will automatically use another port.

### Images not showing
1. Make sure images are in `public/` directory
2. Check file names match exactly (case-sensitive)
3. Clear browser cache

### Build errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

## Support

For questions or issues:
- Email: hiqmatmusa555@gmail.com
- Instagram: @hiqmahlitla

## Next Steps

1. ✅ Install dependencies
2. ✅ Add your images and audio files
3. ✅ Test locally with `npm run dev`
4. ✅ Customize content and colors
5. ✅ Build for production
6. ✅ Deploy to Vercel or Netlify

Good luck with your portfolio! 🚀
