<template>
  <q-page class="portfolio-page">
    <!-- Banner Section -->
    <section class="banner-section">
      <div class="banner-overlay"></div>
      <div class="container banner-content">
        <h1 class="page-title fade-in-up">Portfolio</h1>
        <p class="page-subtitle fade-in-up">Explore my work across modeling, social media, and voice-over</p>
      </div>
    </section>

    <!-- Filter Tabs -->
    <section class="filter-section">
      <div class="container">
        <q-tabs
          v-model="activeTab"
          class="portfolio-tabs"
          active-color="primary"
          indicator-color="primary"
          align="center"
        >
          <q-tab name="all" label="All Work" />
          <q-tab name="modeling" label="Modeling" />
          <q-tab name="social" label="Social Media" />
          <q-tab name="voice" label="Voice-Over" />
        </q-tabs>
      </div>
    </section>

    <!-- Portfolio Content -->
    <section class="section-padding portfolio-content">
      <div class="container">
        <!-- All / Modeling Tab -->
        <div v-show="activeTab === 'all' || activeTab === 'modeling'" class="portfolio-section">
          <h2 v-if="activeTab === 'all'" class="category-title gradient-text">Modeling Work</h2>
          <div class="masonry-grid">
            <div
              v-for="(image, index) in modelingImages"
              :key="'model-' + index"
              class="masonry-item fade-in-up"
              :style="{ animationDelay: `${index * 0.05}s` }"
              @click="openLightbox(index, 'modeling')"
            >
              <div class="glass-card image-card">
                <img
                  :src="image.src"
                  :alt="image.alt"
                  loading="lazy"
                  @error="handleImageError"
                />
                <div class="image-overlay">
                  <div class="overlay-content">
                    <i class="fas fa-search-plus"></i>
                    <p class="image-title">{{ image.title }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Media Tab -->
        <div v-show="activeTab === 'all' || activeTab === 'social'" class="portfolio-section">
          <h2 v-if="activeTab === 'all'" class="category-title gradient-text">Social Media Projects</h2>
          <div class="social-grid">
            <div
              v-for="(project, index) in socialProjects"
              :key="'social-' + index"
              class="glass-card social-card fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="social-image">
                <img
                  :src="project.image"
                  :alt="project.title"
                  @error="handleImageError"
                />
              </div>
              <div class="social-content">
                <h3 class="social-title">{{ project.title }}</h3>
                <p class="social-description">{{ project.description }}</p>
                <div class="social-stats">
                  <div class="stat-item">
                    <i class="fas fa-users"></i>
                    <span>{{ project.followers }}</span>
                  </div>
                  <div class="stat-item">
                    <i class="fas fa-heart"></i>
                    <span>{{ project.engagement }}</span>
                  </div>
                  <div class="stat-item">
                    <i class="fas fa-chart-line"></i>
                    <span>{{ project.growth }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Voice-Over Tab -->
        <div v-show="activeTab === 'all' || activeTab === 'voice'" class="portfolio-section">
          <h2 v-if="activeTab === 'all'" class="category-title gradient-text">Voice-Over Projects</h2>
          <div class="voice-grid">
            <div
              v-for="(project, index) in voiceProjects"
              :key="'voice-' + index"
              class="glass-card voice-card fade-in-up"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="voice-icon">
                <i class="fas fa-microphone"></i>
              </div>
              <h3 class="voice-title">{{ project.title }}</h3>
              <p class="voice-category">{{ project.category }}</p>
              <p class="voice-description">{{ project.description }}</p>
              <audio controls class="audio-player">
                <source :src="project.audio" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
              <div class="voice-tags">
                <span v-for="(tag, i) in project.tags" :key="i" class="tag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding cta-section">
      <div class="container">
        <div class="glass-card cta-card">
          <h2 class="cta-title">Like What You See?</h2>
          <p class="cta-description">
            Let's collaborate on your next project and create something extraordinary.
          </p>
          <q-btn
            unelevated
            rounded
            size="lg"
            class="cta-button"
            label="Start a Project"
            @click="$router.push('/contact')"
          />
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
  name: 'PortfolioPage',
  setup() {
    const activeTab = ref('all')
    const lightboxOpen = ref(false)
    const currentImageIndex = ref(0)

    const modelingImages = [
      { src: '/images/hero-portrait.jpeg', alt: 'Professional Model Portrait', title: 'Featured Portrait' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM.jpeg', alt: 'Fashion Editorial', title: 'Fashion Editorial' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM (1).jpeg', alt: 'Artistic Portrait', title: 'Artistic Portrait' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.29 AM (2).jpeg', alt: 'Elegant Portrait', title: 'Elegant Portrait' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.30 AM.jpeg', alt: 'Outdoor Fashion', title: 'Outdoor Fashion' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.31 AM.jpeg', alt: 'Lifestyle Photography', title: 'Lifestyle Photography' },
      { src: '/images/WhatsApp Image 2026-02-25 at 4.35.31 AM (1).jpeg', alt: 'Natural Light Portrait', title: 'Natural Light Portrait' },
      { src: '/images/ttyt.jpg', alt: 'Professional Shoot', title: 'Professional Shoot' }
    ]

    const socialProjects = [
      {
        title: 'Fashion Brand Growth',
        description: 'Managed social media strategy resulting in 300% follower increase and 250% engagement boost.',
        image: '/images/social/project-1.jpg',
        followers: '+15K',
        engagement: '+250%',
        growth: '300%'
      },
      {
        title: 'Beauty Brand Launch',
        description: 'Complete social media launch strategy with content planning and influencer collaboration.',
        image: '/images/social/project-2.jpg',
        followers: '+8K',
        engagement: '+180%',
        growth: '220%'
      },
      {
        title: 'Lifestyle Brand Revamp',
        description: 'Brand repositioning and content strategy overhaul for established lifestyle brand.',
        image: '/images/social/project-3.jpg',
        followers: '+12K',
        engagement: '+200%',
        growth: '280%'
      }
    ]

    const voiceProjects = [
      {
        title: 'Luxury Brand Commercial',
        category: 'Commercial',
        description: 'Elegant and sophisticated voice-over for high-end luxury brand campaign.',
        audio: '/audio/demo-1.mp3',
        tags: ['Commercial', 'Luxury', 'Elegant']
      },
      {
        title: 'Social Media Ad Campaign',
        category: 'Advertisement',
        description: 'Dynamic and engaging voice work for viral social media advertisement.',
        audio: '/audio/demo-2.mp3',
        tags: ['Social Media', 'Dynamic', 'Engaging']
      },
      {
        title: 'Brand Story Narration',
        category: 'Narration',
        description: 'Emotional and compelling brand story narration with authentic delivery.',
        audio: '/audio/demo-3.mp3',
        tags: ['Narration', 'Emotional', 'Storytelling']
      },
      {
        title: 'Product Launch Promo',
        category: 'Promotional',
        description: 'Energetic and persuasive voice-over for exciting product launch.',
        audio: '/audio/demo-4.mp3',
        tags: ['Promo', 'Energetic', 'Persuasive']
      }
    ]

    const openLightbox = (index) => {
      currentImageIndex.value = index
      lightboxOpen.value = true
    }

    const handleImageError = (e) => {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23c0c0c0" width="400" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E'
    }

    return {
      activeTab,
      lightboxOpen,
      currentImageIndex,
      modelingImages,
      socialProjects,
      voiceProjects,
      openLightbox,
      handleImageError
    }
  }
}
</script>

<style lang="scss" scoped>
.portfolio-page {
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
}

// Banner Section
.banner-section {
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(192, 192, 192, 0.05) 100%);
  overflow: hidden;
}

.banner-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
}

.banner-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.page-title {
  font-size: 4rem;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #e8e8e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
}

// Filter Section
.filter-section {
  padding: 40px 20px;
  background: rgba(0, 0, 0, 0.2);
}

.portfolio-tabs {
  :deep(.q-tab) {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 600;
    font-size: 1rem;
    
    &:hover {
      color: #e8e8e8;
    }
    
    &.q-tab--active {
      color: #c0c0c0;
    }
  }
  
  :deep(.q-tabs__indicator) {
    background: linear-gradient(90deg, #e8e8e8 0%, #c0c0c0 100%);
    height: 3px;
  }
}

// Portfolio Content
.portfolio-section {
  margin-bottom: 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
}

.category-title {
  font-size: 2rem;
  margin-bottom: 40px;
  text-align: center;
}

// Masonry Grid
.masonry-grid {
  column-count: 1;
  column-gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  cursor: pointer;
  animation: fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
}

.image-card {
  padding: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.03);
    
    img {
      transform: scale(1.15);
    }
  }
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(192, 192, 192, 0.9) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-content {
  text-align: center;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  i {
    font-size: 2.5rem;
    color: white;
    margin-bottom: 12px;
    display: block;
  }
}

.image-title {
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.image-card:hover .overlay-content {
  transform: translateY(0);
}

// Social Grid
.social-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .social-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .social-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
}

.social-card {
  padding: 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
  
  @media (min-width: 1024px) {
    &:nth-child(1) {
      transform: rotate(-2deg);
      &:hover {
        transform: rotate(0deg) translateY(-12px) scale(1.03);
      }
    }
    
    &:nth-child(3) {
      transform: rotate(2deg);
      &:hover {
        transform: rotate(0deg) translateY(-12px) scale(1.03);
      }
    }
  }
}

.social-image {
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
}

.social-card:hover .social-image img {
  transform: scale(1.15);
}

.social-content {
  padding: 30px;
}

.social-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.social-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 20px;
}

.social-stats {
  display: flex;
  gap: 24px;
  justify-content: space-around;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  
  i {
    font-size: 1.5rem;
    color: #c0c0c0;
  }
  
  span {
    font-weight: 600;
    color: white;
  }
}

// Voice Grid
.voice-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .voice-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .voice-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
}

.voice-card {
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

.voice-icon {
  font-size: 2.8rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .voice-card:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.voice-title {
  font-size: 1.4rem;
  margin-bottom: 8px;
  color: #e8e8e8;
}

.voice-category {
  color: #c0c0c0;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
}

.voice-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 20px;
}

.audio-player {
  width: 100%;
  margin-bottom: 16px;
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

.voice-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tag {
  padding: 6px 12px;
  background: rgba(192, 192, 192, 0.2);
  border-radius: 20px;
  font-size: 0.85rem;
  color: #e8e8e8;
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

.cta-button {
  background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
  color: white;
  font-weight: 600;
  padding: 14px 40px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
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
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .masonry-grid {
    column-count: 1;
  }
  
  .social-grid,
  .voice-grid {
    grid-template-columns: 1fr;
  }
}
</style>
