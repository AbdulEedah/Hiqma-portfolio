# Complete Installation Guide

## Prerequisites

You need to install Node.js and npm first.

### Install Node.js (includes npm)

**Windows:**
1. Download Node.js from: https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Run the installer (.msi file)
4. Follow the installation wizard
5. Restart your terminal/command prompt

**Verify Installation:**
```bash
node --version
npm --version
```

You should see version numbers like:
- Node: v18.x.x or higher
- npm: v9.x.x or higher

## Project Setup

### Step 1: Install Dependencies
Open terminal in the project folder and run:
```bash
npm install
```

This will install all required packages (may take 2-5 minutes).

### Step 2: Add Your Content

#### Required Images:
Create these files in the `public/images/` folder:
- `hero-portrait.jpg` - Your main portrait (800x1000px recommended)
- `about-portrait.jpg` - About page portrait (600x800px recommended)

#### Modeling Portfolio:
Add images to `public/images/modeling/`:
- `model-1.jpg`
- `model-2.jpg`
- `model-3.jpg`
- ... (add as many as you want)

#### Social Media Projects:
Add screenshots to `public/images/social/`:
- `project-1.jpg`
- `project-2.jpg`
- `project-3.jpg`

#### Voice-Over Demos:
Add audio files to `public/audio/`:
- `demo-1.mp3`
- `demo-2.mp3`
- `demo-3.mp3`
- `demo-4.mp3`

### Step 3: Run Development Server
```bash
npm run dev
```

The website will open automatically in your browser at `http://localhost:9000`

### Step 4: Test Everything
- Navigate through all pages
- Check that images load correctly
- Test audio players
- Try the contact form
- Test on mobile view (resize browser)

### Step 5: Build for Production
When ready to deploy:
```bash
npm run build
```

Production files will be in `dist/spa/` folder.

## Deployment Options

### Option 1: Vercel (Recommended - Free)

1. **Create GitHub Account** (if you don't have one)
   - Go to https://github.com
   - Sign up for free

2. **Install Git** (if not installed)
   - Download from: https://git-scm.com/
   - Install with default settings

3. **Push Code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

4. **Deploy to Vercel**
   - Go to https://vercel.com
   - Sign up with GitHub
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Quasar
   - Build Command: `npm run build`
   - Output Directory: `dist/spa`
   - Click "Deploy"

Your site will be live in 2-3 minutes!

### Option 2: Netlify (Also Free)

1. Push code to GitHub (same as above)
2. Go to https://netlify.com
3. Sign up with GitHub
4. Click "New site from Git"
5. Choose your repository
6. Build command: `npm run build`
7. Publish directory: `dist/spa`
8. Click "Deploy site"

### Option 3: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload the `dist/spa/` folder to any web hosting:
   - cPanel hosting
   - Shared hosting
   - VPS
   - Any static hosting service

## Customization

### Change Colors
Edit `src/css/app.scss`:
```scss
:root {
  --primary-color: #1e1b4b;    // Main dark color
  --accent-color: #a78bfa;     // Purple accent
  --accent-neon: #c4b5fd;      // Light purple
}
```

### Update Text Content
- **Home**: `src/pages/HomePage.vue`
- **About**: `src/pages/AboutPage.vue`
- **Services**: `src/pages/ServicesPage.vue`
- **Portfolio**: `src/pages/PortfolioPage.vue`
- **Contact**: `src/pages/ContactPage.vue`

### Add More Skills
In `HomePage.vue`, find the `skills` array:
```javascript
const skills = [
  {
    icon: 'fas fa-your-icon',
    title: 'Skill Name',
    description: 'Skill description'
  }
]
```

### Change Fonts
Edit `index.html` to change Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet">
```

Then update in `src/css/app.scss`:
```scss
body {
  font-family: 'Your Font', sans-serif;
}
```

## Troubleshooting

### "npm is not recognized"
- Install Node.js from https://nodejs.org/
- Restart your terminal
- Try again

### Port 9000 already in use
- Quasar will automatically use another port
- Or specify a port: `npm run dev -- --port 3000`

### Images not showing
- Check file paths are correct
- File names are case-sensitive
- Images must be in `public/` folder
- Clear browser cache (Ctrl+Shift+R)

### Build fails
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Audio not playing
- Use MP3 format
- Check file paths
- Test in different browsers
- Ensure files are under 10MB

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress with TinyPNG.com
   - Keep under 500KB per image

2. **Optimize Audio:**
   - Use 128-192 kbps bitrate
   - Keep demos under 60 seconds
   - Compress with Audacity

3. **Test Performance:**
   - Use Google Lighthouse
   - Aim for 90+ score
   - Test on mobile devices

## File Structure
```
portfolio/
├── public/
│   ├── images/
│   │   ├── hero-portrait.jpg
│   │   ├── about-portrait.jpg
│   │   ├── modeling/
│   │   └── social/
│   ├── audio/
│   └── icons/
├── src/
│   ├── layouts/
│   ├── pages/
│   ├── router/
│   ├── css/
│   └── main.js
├── package.json
├── quasar.config.js
└── index.html
```

## Need Help?

**Contact:**
- Email: hiqmatmusa555@gmail.com
- Instagram: @hiqmahlitla

**Resources:**
- Quasar Docs: https://quasar.dev
- Vue.js Docs: https://vuejs.org
- Font Awesome Icons: https://fontawesome.com/icons

## Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Images added to public/images/
- [ ] Audio files added to public/audio/
- [ ] Tested locally (`npm run dev`)
- [ ] Customized content
- [ ] Built for production (`npm run build`)
- [ ] Deployed to hosting
- [ ] Tested live site
- [ ] Shared on social media!

Good luck! 🚀✨
