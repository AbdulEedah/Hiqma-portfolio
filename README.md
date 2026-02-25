# Musa Hiqma Oyiza - Portfolio Website

A premium, glassmorphism-style portfolio website showcasing professional modeling, social media management, and voice-over services.

## Features

- ✨ Premium glassmorphism UI design
- 📱 Fully responsive across all devices
- 🎨 Smooth animations and transitions
- 🖼️ Image gallery with lightbox
- 🎵 Audio player for voice-over demos
- 📧 Contact form with validation
- 🚀 Optimized for performance (Lighthouse 90+)

## Tech Stack

- **Framework**: Quasar Framework (Vue 3)
- **Styling**: SCSS with custom glassmorphism effects
- **Icons**: Font Awesome 6
- **Fonts**: Playfair Display & Poppins
- **Build Tool**: Vite

## Project Structure

```
├── src/
│   ├── layouts/
│   │   └── MainLayout.vue       # Main layout with header & footer
│   ├── pages/
│   │   ├── HomePage.vue         # Landing page
│   │   ├── AboutPage.vue        # About section
│   │   ├── ServicesPage.vue     # Services offered
│   │   ├── PortfolioPage.vue    # Portfolio showcase
│   │   ├── ContactPage.vue      # Contact information & form
│   │   └── ErrorNotFound.vue    # 404 page
│   ├── router/
│   │   └── index.js             # Vue Router configuration
│   ├── css/
│   │   └── app.scss             # Global styles
│   ├── App.vue                  # Root component
│   └── main.js                  # Application entry point
├── index.html                   # HTML template
├── package.json                 # Dependencies
└── quasar.config.js            # Quasar configuration
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Pages

### Home
- Hero section with professional portrait
- Quick bio
- Core competencies showcase
- Modeling gallery
- Social media stats
- Voice-over demos
- Testimonials section
- Call-to-action

### About
- Professional biography
- Skill progress bars
- Mission statement
- Core values

### Services
- Modeling services
- Social media management
- Voice-over services
- Work process
- Why choose section

### Portfolio
- Filterable portfolio (All/Modeling/Social/Voice)
- Image gallery with lightbox
- Social media project showcases
- Voice-over demo players

### Contact
- Contact information
- Email, phone, Instagram links
- Contact form with validation
- Quick navigation links

## Customization

### Adding Images
Place your images in the `public/images/` directory:
- `/images/hero-portrait.jpg` - Hero section portrait
- `/images/about-portrait.jpg` - About page portrait
- `/images/modeling/` - Modeling portfolio images
- `/images/social/` - Social media project screenshots

### Adding Audio Files
Place voice-over demos in `public/audio/`:
- `/audio/demo-1.mp3`
- `/audio/demo-2.mp3`
- etc.

### Color Customization
Edit CSS variables in `src/css/app.scss`:
```scss
:root {
  --primary-color: #1e1b4b;
  --accent-color: #a78bfa;
  --accent-neon: #c4b5fd;
}
```

## Performance Optimization

- WebP image format support
- Lazy loading for images
- Minified CSS & JS
- Optimized fonts loading
- Smooth animations with CSS transforms

## SEO

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph tags
- Structured data (Person schema)
- Optimized page titles and descriptions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Deployment

### Vercel
```bash
npm run build
# Deploy dist/spa folder to Vercel
```

### Netlify
```bash
npm run build
# Deploy dist/spa folder to Netlify
```

## Contact Information

- **Email**: hiqmatmusa555@gmail.com
- **Phone**: 0903 363 7808 / 0912 767 9128
- **Instagram**: [@hiqmahlitla](https://www.instagram.com/hiqmahlitla?igsh=MXVuZmFrbnV1OW1jYQ==)

## License

© 2024 Musa Hiqma Oyiza. All rights reserved.
