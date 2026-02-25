# 🔧 Troubleshooting Guide

Common issues and solutions for your portfolio website.

---

## 🚫 Installation Issues

### Problem: "npm is not recognized"
**Cause:** Node.js is not installed or not in PATH

**Solution:**
1. Download Node.js from https://nodejs.org/
2. Install the LTS version
3. Restart your terminal/command prompt
4. Verify: `node --version` and `npm --version`

---

### Problem: "npm install" fails
**Cause:** Network issues, corrupted cache, or permission errors

**Solution 1 - Clear cache:**
```bash
npm cache clean --force
npm install
```

**Solution 2 - Delete and reinstall:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Solution 3 - Use different registry:**
```bash
npm install --registry=https://registry.npmjs.org/
```

---

### Problem: Permission denied errors (Mac/Linux)
**Cause:** Insufficient permissions

**Solution:**
```bash
sudo npm install
```

Or fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

---

## 🖥️ Development Server Issues

### Problem: Port 9000 already in use
**Cause:** Another application is using port 9000

**Solution 1 - Quasar will auto-select another port**
Just proceed, it will use 9001, 9002, etc.

**Solution 2 - Specify a different port:**
```bash
npm run dev -- --port 3000
```

**Solution 3 - Kill the process using port 9000:**
Windows:
```bash
netstat -ano | findstr :9000
taskkill /PID <PID> /F
```

Mac/Linux:
```bash
lsof -ti:9000 | xargs kill -9
```

---

### Problem: "Cannot find module" errors
**Cause:** Missing dependencies

**Solution:**
```bash
npm install
```

If still failing:
```bash
rm -rf node_modules package-lock.json
npm install
```

---

### Problem: Hot reload not working
**Cause:** File watcher issues

**Solution 1 - Restart dev server:**
```bash
# Stop server (Ctrl+C)
npm run dev
```

**Solution 2 - Increase file watchers (Linux):**
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

---

## 🖼️ Image Issues

### Problem: Images not showing
**Cause:** Wrong path, missing files, or case sensitivity

**Solution 1 - Check file location:**
Images must be in `public/images/` folder:
```
public/
  images/
    hero-portrait.jpg
    about-portrait.jpg
    modeling/
      model-1.jpg
    social/
      project-1.jpg
```

**Solution 2 - Check file names (case-sensitive):**
```javascript
// In code: model-1.jpg
// File must be: model-1.jpg (not Model-1.jpg or MODEL-1.JPG)
```

**Solution 3 - Clear browser cache:**
- Chrome: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Or open DevTools → Network → Disable cache

**Solution 4 - Check image paths in code:**
```javascript
// Correct:
src="/images/modeling/model-1.jpg"

// Wrong:
src="images/modeling/model-1.jpg"  // Missing leading slash
src="/public/images/model-1.jpg"   // Don't include 'public'
```

---

### Problem: Images load slowly
**Cause:** Large file sizes

**Solution:**
1. Compress images using:
   - TinyPNG.com
   - Squoosh.app
   - ImageOptim (Mac)
2. Target size: Under 500KB per image
3. Use WebP format when possible
4. Resize to appropriate dimensions:
   - Hero: 800x1000px
   - Portfolio: 800-1200px width

---

## 🎵 Audio Issues

### Problem: Audio files not playing
**Cause:** Wrong format, missing files, or browser compatibility

**Solution 1 - Check file format:**
Use MP3 format for best compatibility:
```
public/
  audio/
    demo-1.mp3  ✅
    demo-2.mp3  ✅
```

**Solution 2 - Check file paths:**
```javascript
// Correct:
audio="/audio/demo-1.mp3"

// Wrong:
audio="audio/demo-1.mp3"  // Missing leading slash
```

**Solution 3 - Test in different browsers:**
- Chrome
- Firefox
- Safari
- Edge

**Solution 4 - Check file size:**
Keep audio files under 10MB

**Solution 5 - Verify audio encoding:**
- Format: MP3
- Bitrate: 128-192 kbps
- Sample rate: 44.1 kHz

---

## 🎨 Styling Issues

### Problem: Styles not applying
**Cause:** CSS not loading or specificity issues

**Solution 1 - Check SCSS syntax:**
Make sure there are no syntax errors in `src/css/app.scss`

**Solution 2 - Clear cache and rebuild:**
```bash
# Stop dev server
rm -rf .quasar
npm run dev
```

**Solution 3 - Check scoped styles:**
In Vue components, use `scoped` attribute:
```vue
<style lang="scss" scoped>
/* Your styles */
</style>
```

---

### Problem: Colors not changing
**Cause:** CSS variables not updating

**Solution:**
1. Edit `src/css/app.scss`
2. Save the file
3. Wait for hot reload
4. Hard refresh browser (Ctrl+Shift+R)

---

## 📱 Mobile/Responsive Issues

### Problem: Layout broken on mobile
**Cause:** Missing responsive styles

**Solution:**
Check breakpoints in component styles:
```scss
@media (max-width: 768px) {
  .your-class {
    // Mobile styles
  }
}
```

---

### Problem: Text too small on mobile
**Cause:** Fixed font sizes

**Solution:**
Use responsive font sizes:
```scss
// Instead of:
font-size: 16px;

// Use:
font-size: clamp(14px, 4vw, 16px);
```

---

## 🏗️ Build Issues

### Problem: Build fails
**Cause:** Various compilation errors

**Solution 1 - Check for errors:**
```bash
npm run build
```
Read error messages carefully

**Solution 2 - Clean build:**
```bash
rm -rf dist .quasar node_modules
npm install
npm run build
```

**Solution 3 - Check Node version:**
```bash
node --version
```
Should be v14 or higher

---

### Problem: Build succeeds but site doesn't work
**Cause:** Incorrect base path or routing mode

**Solution:**
Check `quasar.config.js`:
```javascript
build: {
  vueRouterMode: 'hash', // Use 'hash' for static hosting
}
```

---

## 🌐 Deployment Issues

### Problem: 404 errors after deployment
**Cause:** Routing mode incompatible with hosting

**Solution:**
Use hash mode in `quasar.config.js`:
```javascript
vueRouterMode: 'hash'
```

Or configure server redirects for history mode.

---

### Problem: Images/assets not loading after deployment
**Cause:** Incorrect asset paths

**Solution:**
Ensure all paths start with `/`:
```javascript
// Correct:
src="/images/hero.jpg"

// Wrong:
src="images/hero.jpg"
```

---

### Problem: Site works locally but not on Vercel/Netlify
**Cause:** Build configuration

**Solution for Vercel:**
- Build command: `npm run build`
- Output directory: `dist/spa`
- Framework: Quasar

**Solution for Netlify:**
- Build command: `npm run build`
- Publish directory: `dist/spa`

---

## 📧 Contact Form Issues

### Problem: Form not submitting
**Cause:** Frontend-only implementation

**Note:** The current form is frontend-only (no backend).

**Solution for real submissions:**

**Option 1 - Use Formspree:**
```vue
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2 - Use Netlify Forms:**
Add `netlify` attribute:
```vue
<form netlify>
```

**Option 3 - Use EmailJS:**
Install and configure EmailJS service

---

### Problem: Form validation not working
**Cause:** Missing rules

**Solution:**
Check validation rules in ContactPage.vue:
```javascript
:rules="[val => !!val || 'Field is required']"
```

---

## 🔍 SEO Issues

### Problem: Site not appearing in Google
**Cause:** Not indexed yet

**Solution:**
1. Submit sitemap to Google Search Console
2. Wait 1-2 weeks for indexing
3. Share on social media for backlinks

---

### Problem: Wrong preview on social media
**Cause:** Missing or incorrect Open Graph tags

**Solution:**
Check `index.html` has correct meta tags:
```html
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your Description">
<meta property="og:image" content="Your Image URL">
```

Test with:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator

---

## ⚡ Performance Issues

### Problem: Slow page load
**Cause:** Large assets, unoptimized code

**Solution:**
1. Compress images (under 500KB each)
2. Use WebP format
3. Enable lazy loading (already implemented)
4. Minify code (automatic in production build)
5. Use CDN for hosting

---

### Problem: Animations laggy
**Cause:** Too many animations or heavy effects

**Solution:**
1. Reduce animation complexity
2. Use CSS transforms instead of position changes
3. Use `will-change` CSS property sparingly
4. Test on lower-end devices

---

## 🖱️ Browser Compatibility Issues

### Problem: Site looks different in Safari
**Cause:** Safari-specific CSS issues

**Solution:**
Add vendor prefixes:
```scss
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
```

---

### Problem: Site doesn't work in Internet Explorer
**Cause:** IE doesn't support modern JavaScript

**Solution:**
IE is no longer supported. Recommend users upgrade to:
- Chrome
- Firefox
- Edge
- Safari

---

## 🆘 Still Having Issues?

### Debug Steps:
1. Check browser console for errors (F12)
2. Check network tab for failed requests
3. Try in incognito/private mode
4. Test in different browser
5. Clear all caches
6. Restart dev server
7. Reinstall dependencies

### Get Help:
- Check documentation files
- Search error message on Google
- Check Quasar docs: https://quasar.dev
- Check Vue docs: https://vuejs.org

### Contact:
- Email: hiqmatmusa555@gmail.com
- Instagram: @hiqmahlitla

---

## 📝 Useful Commands

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Format code
npm run format

# Clear cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install

# Check versions
node --version
npm --version
```

---

## 🎯 Prevention Tips

1. **Always test locally before deploying**
2. **Keep dependencies updated**
3. **Use version control (Git)**
4. **Backup your work regularly**
5. **Test on multiple devices**
6. **Monitor browser console**
7. **Compress assets before adding**
8. **Follow naming conventions**

---

**Most issues can be solved by:**
1. Restarting the dev server
2. Clearing cache
3. Reinstalling dependencies
4. Checking file paths

**Good luck! 🚀**
