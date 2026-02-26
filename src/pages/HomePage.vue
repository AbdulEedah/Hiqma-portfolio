<template>
  <q-page class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="container hero-content">
        <div class="hero-grid">
          <div class="hero-text fade-in-up">
            <h1 class="hero-title">Musa Hiqma Oyiza</h1>
            <p class="hero-subtitle gradient-text">Model | Social Media Manager | Voice-Over Artist</p>
            <p class="hero-description">
              Elevating brands through visual storytelling, strategic social growth, and expressive voice performance.
            </p>
            <div class="hero-buttons">
              <q-btn
                unelevated
                rounded
                size="lg"
                class="cta-button primary-btn"
                label="View Portfolio"
                @click="$router.push('portfolio')"
              />
              <q-btn
                outline
                rounded
                size="lg"
                class="cta-button secondary-btn"
                label="Book a Service"
                @click="$router.push('contact')"
              />
            </div>
          </div>
          <div class="hero-image-container animate-float">
            <div class="glass-card hero-image-card">
              <img
                src="/images/hero-portrait.jpeg"
                alt="Musa Hiqma Oyiza - Professional Model"
                class="hero-image"
                loading="eager"
                fetchpriority="high"
                @error="handleImageError"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Bio Section -->
    <section class="section-padding bio-section">
      <div class="container">
        <div class="glass-card bio-card fade-in-up">
          <p class="bio-text">
            Hi, I'm <span class="gradient-text">Hiqma</span> — a professional model, digital brand strategist, 
            and voice-over artist passionate about helping brands grow through visual excellence, 
            structured social media strategy, and impactful voice expression.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Competencies -->
    <section class="section-padding competencies-section">
      <div class="container">
        <h2 class="section-title gradient-text">Core Competencies</h2>
        <div class="competencies-grid">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="glass-card skill-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="skill-icon">
              <i :class="skill.icon"></i>
            </div>
            <h3 class="skill-title">{{ skill.title }}</h3>
            <p class="skill-description">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modeling Showcase -->
    <section class="section-padding showcase-section">
      <div class="container">
        <h2 class="section-title gradient-text">Featured Modeling Work</h2>
        <div class="masonry-grid">
          <div
            v-for="(image, index) in modelingImages"
            :key="index"
            class="masonry-item"
            @click="openLightbox(index)"
          >
            <div class="glass-card image-card">
              <img
                :src="image.src"
                :alt="image.alt"
                loading="lazy"
                @error="handleImageError"
              />
              <div class="image-overlay">
                <i class="fas fa-search-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Media Management -->
    <section class="section-padding social-section">
      <div class="container">
        <h2 class="section-title gradient-text">Social Media Growth & Account Management</h2>
        <div class="stats-grid">
          <div
            v-for="(stat, index) in socialStats"
            :key="index"
            class="glass-card stat-card fade-in-up"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="stat-icon">
              <i :class="stat.icon"></i>
            </div>
            <h3 class="stat-value">{{ stat.value }}</h3>
            <p class="stat-label">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Voice-Over Projects -->
    <section class="section-padding voiceover-section">
      <div class="container">
        <h2 class="section-title gradient-text">Voice-Over Work</h2>
        <div class="voiceover-grid">
          <div
            v-for="(project, index) in voiceoverProjects"
            :key="index"
            class="glass-card voiceover-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="voiceover-icon">
              <i class="fas fa-microphone"></i>
            </div>
            <h3 class="voiceover-title">{{ project.title }}</h3>
            <p class="voiceover-description">{{ project.description }}</p>
            <audio controls class="audio-player">
              <source :src="project.audio" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding testimonials-section">
      <div class="container">
        <h2 class="section-title gradient-text">Client Testimonials</h2>
        <div class="glass-card testimonial-placeholder">
          <i class="fas fa-quote-left quote-icon"></i>
          <p class="placeholder-text">Coming Soon</p>
          <p class="placeholder-subtext">Client reviews will be featured here</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding cta-section">
      <div class="container">
        <div class="glass-card cta-card">
          <h2 class="cta-title">Let's Work Together</h2>
          <p class="cta-description">
            Ready to elevate your brand? Let's create something amazing together.
          </p>
          <div class="cta-buttons">
            <q-btn
              unelevated
              rounded
              size="lg"
              class="cta-button primary-btn"
              label="Contact Me"
              @click="$router.push('/contact')"
            />
            <q-btn
              outline
              rounded
              size="lg"
              class="cta-button secondary-btn"
              label="View Instagram"
              @click="openInstagram"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox Dialog -->
    <q-dialog v-model="lightboxOpen" maximized>
      <q-card class="lightbox-card">
        <q-btn
          icon="close"
          flat
          round
          dense
          v-close-popup
          class="close-btn"
        />
        <q-carousel
          v-model="currentImageIndex"
          animated
          arrows
          infinite
          class="lightbox-carousel"
        >
          <q-carousel-slide
            v-for="(image, index) in modelingImages"
            :key="index"
            :name="index"
            class="lightbox-slide"
          >
            <img :src="image.src" :alt="image.alt" class="lightbox-image" />
          </q-carousel-slide>
        </q-carousel>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'HomePage',
  setup() {
    const lightboxOpen = ref(false)
    const currentImageIndex = ref(0)

    const skills = [
      {
        icon: 'fas fa-comments',
        title: 'Communication Skills',
        description: 'Clear, persuasive, and brand-aligned communication.'
      },
      {
        icon: 'fas fa-clock',
        title: 'Time Management',
        description: 'Efficient project execution and deadline discipline.'
      },
      {
        icon: 'fas fa-users',
        title: 'Teamwork',
        description: 'Strong collaborative approach with brands and creatives.'
      },
      {
        icon: 'fas fa-sync-alt',
        title: 'Adaptability',
        description: 'Ability to adjust tone, strategy, and presentation quickly.'
      },
      {
        icon: 'fas fa-heart',
        title: 'Emotional Intelligence',
        description: 'High audience awareness and interpersonal sensitivity.'
      },
      {
        icon: 'fas fa-microphone-alt',
        title: 'Voice-Over Performance',
        description: 'Professional voice modulation, tone control, and expressive delivery.'
      }
    ]

    const modelingImages = [
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM.jpeg', alt: 'Professional Portrait 1' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM (1).jpeg', alt: 'Professional Portrait 2' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM (2).jpeg', alt: 'Professional Portrait 3' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.30 AM.jpeg', alt: 'Professional Portrait 4' }
    ]

    const socialStats = [
      {
        icon: 'fas fa-chart-line',
        value: '250%+',
        label: 'Followers Growth'
      },
      {
        icon: 'fas fa-fire',
        value: '180%+',
        label: 'Engagement Boost'
      },
      {
        icon: 'fas fa-bullseye',
        value: '95%+',
        label: 'Content Strategy Execution'
      }
    ]

    const voiceoverProjects = [
      {
        title: 'Commercial Voice-Over',
        description: 'Professional brand commercial with engaging tone',
        audio: '/audio/Awwww.mp3.mpeg'
      },
      {
        title: 'Social Media Ad',
        description: 'Dynamic social media advertisement voice work',
        audio: '/audio/Spiderman.mp3.mpeg'
      }
    ]

    const openLightbox = (index) => {
      currentImageIndex.value = index
      lightboxOpen.value = true
    }

    const openInstagram = () => {
      window.open('https://www.instagram.com/hiqmahlitla?igsh=MXVuZmFrbnV1OW1jYQ==', '_blank')
    }

    const handleImageError = (e) => {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23c0c0c0" width="400" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E'
    }

    return {
      skills,
      modelingImages,
      socialStats,
      voiceoverProjects,
      lightboxOpen,
      currentImageIndex,
      openLightbox,
      openInstagram,
      handleImageError
    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
}

// Hero Section
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 100px 20px 60px;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 50%, rgba(192, 192, 192, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(192, 192, 192, 0.08) 0%, transparent 50%);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-text {
  text-align: left;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 16px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 24px;
  font-weight: 600;
}

.hero-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.hero-image-container {
  display: flex;
  justify-content: center;
}

.hero-image-card {
  width: 100%;
  max-width: 450px;
  padding: 0;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

// Bio Section
.bio-section {
  background: rgba(0, 0, 0, 0.2);
}

.bio-card {
  padding: 40px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.bio-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

// Competencies Section
.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.competencies-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .competencies-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .competencies-grid {
    grid-template-columns: repeat(3, 1fr);
    perspective: 1000px;
  }
}

.skill-card {
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
  
  @media (min-width: 1024px) {
    &:nth-child(1), &:nth-child(4) {
      transform: rotate(-2deg);
      &:hover {
        transform: rotate(0deg) translateY(-12px) scale(1.03);
      }
    }
    
    &:nth-child(3), &:nth-child(6) {
      transform: rotate(2deg);
      &:hover {
        transform: rotate(0deg) translateY(-12px) scale(1.03);
      }
    }
  }
}

.skill-icon {
  font-size: 3.5rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .skill-card:hover & {
    transform: scale(1.2) rotate(10deg);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.skill-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.skill-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

// Masonry Grid
.masonry-grid {
  column-count: 3;
  column-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  cursor: pointer;
}

.image-card {
  padding: 0;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.9) 0%, rgba(232, 232, 232, 0.85) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  i {
    font-size: 2rem;
    color: white;
  }
}

.image-card:hover .image-overlay {
  opacity: 1;
}

// Stats Grid
.stats-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(3, 1fr);
    perspective: 1000px;
  }
}

.stat-card {
  padding: 50px 30px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateY(-15px) scale(1.05);
  }
  
  @media (min-width: 768px) {
    &:nth-child(1) {
      transform: rotate(-3deg);
      &:hover {
        transform: rotate(0deg) translateY(-15px) scale(1.05);
      }
    }
    
    &:nth-child(3) {
      transform: rotate(3deg);
      &:hover {
        transform: rotate(0deg) translateY(-15px) scale(1.05);
      }
    }
  }
}

.stat-icon {
  font-size: 3.5rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .stat-card:hover & {
    transform: scale(1.3) rotate(-10deg);
    filter: drop-shadow(0 0 24px rgba(192, 192, 192, 0.8));
  }
}

.stat-value {
  font-size: 2.5rem;
  color: #e8e8e8;
  margin-bottom: 8px;
}

.stat-label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.1rem;
}

// Voice-Over Grid
.voiceover-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .voiceover-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .voiceover-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.voiceover-card {
  padding: 35px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
  
  &:nth-child(odd) {
    &:hover {
      transform: translateY(-10px) rotate(-1deg) scale(1.02);
    }
  }
  
  &:nth-child(even) {
    &:hover {
      transform: translateY(-10px) rotate(1deg) scale(1.02);
    }
  }
}

.voiceover-icon {
  font-size: 2.8rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .voiceover-card:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.voiceover-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.voiceover-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 20px;
  line-height: 1.6;
}

.audio-player {
  width: 100%;
  margin-top: 16px;
  border-radius: 50px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  padding: 8px;
  outline: none;
  
  &::-webkit-media-controls-panel {
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.8) 100%);
    border-radius: 50px;
  }
  
  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-pause-button {
    background-color: #c0c0c0;
    border-radius: 50%;
  }
  
  &::-webkit-media-controls-current-time-display,
  &::-webkit-media-controls-time-remaining-display {
    color: #e8e8e8;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  
  &::-webkit-media-controls-timeline {
    background: rgba(192, 192, 192, 0.3);
    border-radius: 25px;
    margin: 0 10px;
  }
  
  &::-webkit-media-controls-volume-slider {
    background: rgba(192, 192, 192, 0.3);
    border-radius: 25px;
  }
}

// Testimonials
.testimonial-placeholder {
  padding: 60px 40px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.quote-icon {
  font-size: 3rem;
  color: #c0c0c0;
  margin-bottom: 20px;
}

.placeholder-text {
  font-size: 1.5rem;
  color: #e8e8e8;
  margin-bottom: 8px;
}

.placeholder-subtext {
  color: rgba(255, 255, 255, 0.6);
}

// CTA Section
.cta-card {
  padding: 60px 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.cta-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  line-height: 1.6;
}

.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

// Buttons
.cta-button {
  font-weight: 600;
  padding: 14px 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &.primary-btn {
    background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
    color: white;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      transform: scale(1.08);
      box-shadow: 0 12px 32px rgba(192, 192, 192, 0.5);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  &.secondary-btn {
    border: 2px solid #c0c0c0;
    color: #e8e8e8;
    background: transparent;
    
    &:hover {
      background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
      color: white;
      transform: scale(1.08);
      box-shadow: 0 12px 32px rgba(192, 192, 192, 0.5);
    }
  }
}

// Lightbox
.lightbox-card {
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1000;
  color: white;
  background: rgba(255, 255, 255, 0.1);
}

.lightbox-carousel {
  height: 100vh;
}

.lightbox-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
}

.lightbox-image {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
}

// Responsive
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .hero-text {
    text-align: center;
  }
  
  .hero-buttons {
    justify-content: center;
  }
  
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .masonry-grid {
    column-count: 1;
  }
  
  .competencies-grid,
  .stats-grid,
  .voiceover-grid {
    grid-template-columns: 1fr;
  }
}
</style>
