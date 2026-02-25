# 📁 Project Structure

## Complete File Tree

```
portfolio/
│
├── 📄 index.html                    # Main HTML template
├── 📄 package.json                  # Dependencies & scripts
├── 📄 quasar.config.js             # Quasar configuration
├── 📄 .eslintrc.js                 # Code linting rules
├── 📄 .prettierrc                  # Code formatting rules
├── 📄 .gitignore                   # Git ignore rules
│
├── 📚 Documentation/
│   ├── README.md                   # Project overview
│   ├── QUICK_START.md             # Quick start guide
│   ├── INSTALLATION.md            # Complete installation guide
│   ├── SETUP.md                   # Setup & customization guide
│   └── PROJECT_STRUCTURE.md       # This file
│
├── 📂 src/                         # Source code
│   │
│   ├── 📄 main.js                 # Application entry point
│   ├── 📄 App.vue                 # Root component
│   │
│   ├── 📂 layouts/                # Layout components
│   │   └── MainLayout.vue         # Main layout (header, footer, navigation)
│   │
│   ├── 📂 pages/                  # Page components
│   │   ├── HomePage.vue           # Landing page
│   │   ├── AboutPage.vue          # About section
│   │   ├── ServicesPage.vue       # Services offered
│   │   ├── PortfolioPage.vue      # Portfolio showcase
│   │   ├── ContactPage.vue        # Contact information & form
│   │   └── ErrorNotFound.vue      # 404 error page
│   │
│   ├── 📂 router/                 # Routing configuration
│   │   └── index.js               # Vue Router setup
│   │
│   └── 📂 css/                    # Stylesheets
│       └── app.scss               # Global styles & variables
│
└── 📂 public/                      # Static assets
    │
    ├── 📂 images/                 # Image files
    │   ├── hero-portrait.jpg      # Hero section portrait
    │   ├── about-portrait.jpg     # About page portrait
    │   │
    │   ├── 📂 modeling/           # Modeling portfolio
    │   │   ├── model-1.jpg
    │   │   ├── model-2.jpg
    │   │   └── ...
    │   │
    │   └── 📂 social/             # Social media projects
    │       ├── project-1.jpg
    │       ├── project-2.jpg
    │       └── ...
    │
    ├── 📂 audio/                  # Audio files
    │   ├── demo-1.mp3             # Voice-over demo 1
    │   ├── demo-2.mp3             # Voice-over demo 2
    │   └── ...
    │
    └── 📂 icons/                  # Favicon & icons
        └── favicon.ico
```

---

## 📄 Key Files Explained

### Configuration Files

**package.json**
- Lists all dependencies
- Defines npm scripts (dev, build, lint)
- Project metadata

**quasar.config.js**
- Quasar framework configuration
- Build settings
- Plugin configuration

**index.html**
- Main HTML template
- Meta tags for SEO
- Font imports
- App mounting point

### Source Code

**src/main.js**
- Application entry point
- Quasar initialization
- Router setup
- Global plugins

**src/App.vue**
- Root Vue component
- Router view container

### Layouts

**MainLayout.vue**
- Header with navigation
- Mobile menu drawer
- Footer with social links
- Wraps all pages

### Pages

**HomePage.vue**
- Hero section with portrait
- Quick bio
- Core competencies (6 skills)
- Modeling showcase (masonry grid)
- Social media stats
- Voice-over demos
- Testimonials placeholder
- Call-to-action

**AboutPage.vue**
- Banner with title
- Professional biography
- Skill progress bars (6 skills)
- Mission statement
- Core values (4 values)
- CTA section

**ServicesPage.vue**
- Banner section
- 3 service cards:
  - Modeling Services
  - Social Media Management
  - Voice-Over Services
- Work process (4 steps)
- Why choose me (6 reasons)
- CTA section

**PortfolioPage.vue**
- Banner section
- Filter tabs (All/Modeling/Social/Voice)
- Modeling gallery with lightbox
- Social media project cards
- Voice-over demo players
- CTA section

**ContactPage.vue**
- Banner section
- Contact information cards
- Social media links
- Contact form with validation
- Quick navigation links

**ErrorNotFound.vue**
- 404 error page
- Back to home button

### Styles

**app.scss**
- CSS variables (colors, spacing)
- Glassmorphism utilities
- Global animations
- Responsive breakpoints
- Custom scrollbar
- Typography settings

---

## 🎨 Design System

### Colors
```scss
Primary: #1e1b4b (Deep Indigo)
Secondary: #312e81 (Midnight Blue)
Accent: #a78bfa (Soft Purple)
Accent Neon: #c4b5fd (Neon Lilac)
Text Primary: #ffffff (White)
Text Secondary: #e5e7eb (Light Gray)
```

### Typography
- **Headings**: Playfair Display (serif, bold)
- **Body**: Poppins (sans-serif, regular)

### Components
- **Glass Cards**: Frosted glass effect with blur
- **Buttons**: Rounded with gradient backgrounds
- **Animations**: Fade-in-up, float, smooth transitions

---

## 🔄 Data Flow

```
User visits URL
    ↓
index.html loads
    ↓
main.js initializes app
    ↓
Router determines page
    ↓
MainLayout wraps page
    ↓
Page component renders
    ↓
Data displays from component
```

---

## 📱 Responsive Breakpoints

```scss
Mobile:    320px - 767px
Tablet:    768px - 1023px
Desktop:   1024px - 1439px
Large:     1440px+
```

---

## 🎯 Component Hierarchy

```
App.vue
└── MainLayout.vue
    ├── Header (Navigation)
    ├── Router View
    │   ├── HomePage
    │   ├── AboutPage
    │   ├── ServicesPage
    │   ├── PortfolioPage
    │   ├── ContactPage
    │   └── ErrorNotFound
    └── Footer (Social Links)
```

---

## 🚀 Build Process

```
Development:
npm run dev → Vite dev server → Hot reload

Production:
npm run build → Vite build → Optimized files → dist/spa/
```

---

## 📦 Dependencies

### Core
- **Vue 3**: JavaScript framework
- **Quasar**: UI component framework
- **Vue Router**: Page routing
- **Pinia**: State management

### Build Tools
- **Vite**: Build tool & dev server
- **ESLint**: Code linting
- **Prettier**: Code formatting

### UI/UX
- **Font Awesome 6**: Icons
- **Google Fonts**: Typography
- **SCSS**: Styling

---

## 🎨 Customization Points

### Easy to Change
- Colors (app.scss)
- Text content (page components)
- Images (public/images/)
- Audio files (public/audio/)
- Contact info (ContactPage.vue)

### Moderate Changes
- Add new pages (create .vue file + add route)
- Add new sections (edit page components)
- Change layout (edit MainLayout.vue)

### Advanced Changes
- Add backend integration
- Add authentication
- Add database
- Add CMS

---

## 📊 Performance Features

✅ Lazy loading images
✅ Code splitting
✅ Minified CSS/JS
✅ Optimized fonts
✅ Smooth animations
✅ Responsive images
✅ Efficient routing

---

## 🔒 SEO Features

✅ Meta tags
✅ Open Graph tags
✅ Semantic HTML
✅ Alt text for images
✅ Structured data
✅ Mobile-friendly
✅ Fast loading

---

## 📞 Pre-configured Contact Info

✅ Email: hiqmatmusa555@gmail.com
✅ Phone 1: 0903363780809127679128
✅ Instagram: @hiqmahlitla

All links are clickable and functional!

---

**Need to modify something? Check the file path above! 📍**
