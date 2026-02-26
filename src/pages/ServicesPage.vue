<template>
  <q-page class="services-page">
    <!-- Banner Section -->
    <section class="banner-section">
      <div class="banner-overlay"></div>
      <div class="container banner-content">
        <h1 class="page-title fade-in-up">Services</h1>
        <p class="page-subtitle fade-in-up">Professional solutions tailored to your brand needs</p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="section-padding services-section">
      <div class="container">
        <div class="services-grid">
          <!-- Modeling Services -->
          <div class="glass-card service-card fade-in-up">
            <div class="service-icon">
              <i class="fas fa-camera"></i>
            </div>
            <h2 class="service-title gradient-text">Modeling Services</h2>
            <p class="service-description">
              Professional modeling services tailored to brand identity and campaign objectives.
            </p>
            <ul class="service-list">
              <li><i class="fas fa-check"></i> Brand shoots</li>
              <li><i class="fas fa-check"></i> Fashion modeling</li>
              <li><i class="fas fa-check"></i> Product campaigns</li>
              <li><i class="fas fa-check"></i> Lifestyle shoots</li>
              <li><i class="fas fa-check"></i> Editorial photography</li>
            </ul>
            <q-btn
              unelevated
              rounded
              class="service-btn"
              label="Request Quote"
              @click="openContactForm('Modeling')"
            />
          </div>

          <!-- Social Media Management -->
          <div class="glass-card service-card fade-in-up" style="animation-delay: 0.15s">
            <div class="service-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <h2 class="service-title gradient-text">Social Media Management</h2>
            <p class="service-description">
              Strategic management designed to increase visibility, engagement, and brand credibility.
            </p>
            <ul class="service-list">
              <li><i class="fas fa-check"></i> Account growth strategy</li>
              <li><i class="fas fa-check"></i> Content planning</li>
              <li><i class="fas fa-check"></i> Brand positioning</li>
              <li><i class="fas fa-check"></i> Engagement optimization</li>
              <li><i class="fas fa-check"></i> Account audits</li>
            </ul>
            <q-btn
              unelevated
              rounded
              class="service-btn"
              label="Request Quote"
              @click="openContactForm('Social Media Management')"
            />
          </div>

          <!-- Voice-Over Services -->
          <div class="glass-card service-card fade-in-up" style="animation-delay: 0.3s">
            <div class="service-icon">
              <i class="fas fa-microphone"></i>
            </div>
            <h2 class="service-title gradient-text">Voice-Over Services</h2>
            <p class="service-description">
              Professional voice delivery with emotional depth and tonal precision.
            </p>
            <ul class="service-list">
              <li><i class="fas fa-check"></i> Commercial voice-over</li>
              <li><i class="fas fa-check"></i> Social media ads</li>
              <li><i class="fas fa-check"></i> Brand promos</li>
              <li><i class="fas fa-check"></i> Narration</li>
              <li><i class="fas fa-check"></i> Character voice</li>
            </ul>
            <q-btn
              unelevated
              rounded
              class="service-btn"
              label="Request Quote"
              @click="openContactForm('Voice-Over')"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding process-section">
      <div class="container">
        <h2 class="section-title gradient-text">How I Work</h2>
        <div class="process-grid">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="glass-card process-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="process-number">{{ index + 1 }}</div>
            <h3 class="process-title">{{ step.title }}</h3>
            <p class="process-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Me Section -->
    <section class="section-padding why-section">
      <div class="container">
        <h2 class="section-title gradient-text">Why Choose Me</h2>
        <div class="why-grid">
          <div
            v-for="(reason, index) in reasons"
            :key="index"
            class="glass-card why-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="why-icon">
              <i :class="reason.icon"></i>
            </div>
            <h3 class="why-title">{{ reason.title }}</h3>
            <p class="why-description">{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding cta-section">
      <div class="container">
        <div class="glass-card cta-card">
          <h2 class="cta-title">Ready to Get Started?</h2>
          <p class="cta-description">
            Let's discuss your project and create something exceptional together.
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
              label="View Portfolio"
              @click="$router.push('/portfolio')"
            />
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'ServicesPage',
  setup() {
    const router = useRouter()

    const processSteps = [
      {
        title: 'Consultation',
        description: 'We discuss your brand goals, target audience, and project requirements in detail.'
      },
      {
        title: 'Strategy',
        description: 'I develop a customized approach tailored to your specific needs and objectives.'
      },
      {
        title: 'Execution',
        description: 'Professional delivery of services with attention to detail and brand alignment.'
      },
      {
        title: 'Review & Refine',
        description: 'Collaborative feedback process to ensure complete satisfaction with results.'
      }
    ]

    const reasons = [
      {
        icon: 'fas fa-award',
        title: 'Professional Excellence',
        description: 'Years of experience delivering high-quality work across multiple disciplines.'
      },
      {
        icon: 'fas fa-bolt',
        title: 'Quick Turnaround',
        description: 'Efficient project management ensuring timely delivery without compromising quality.'
      },
      {
        icon: 'fas fa-palette',
        title: 'Creative Approach',
        description: 'Unique perspective that brings fresh ideas and innovative solutions to every project.'
      },
      {
        icon: 'fas fa-comments',
        title: 'Clear Communication',
        description: 'Transparent and responsive communication throughout the entire project lifecycle.'
      },
      {
        icon: 'fas fa-chart-bar',
        title: 'Results-Driven',
        description: 'Focus on measurable outcomes that contribute to your brand growth and success.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Client-Focused',
        description: 'Dedicated to understanding and exceeding client expectations on every project.'
      }
    ]

    const openContactForm = (service) => {
      router.push({ path: 'contact', query: { service } })
    }

    return {
      processSteps,
      reasons,
      openContactForm
    }
  }
}
</script>

<style lang="scss" scoped>
.services-page {
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

// Services Grid
.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-card {
  padding: 50px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  
  &:nth-child(1) {
    animation: slideInLeft 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.1s;
    opacity: 0;
  }
  
  &:nth-child(2) {
    animation: fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.3s;
    opacity: 0;
  }
  
  &:nth-child(3) {
    animation: slideInRight 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    animation-delay: 0.5s;
    opacity: 0;
  }
}

@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    perspective: 1000px;
  }
  
  .service-card {
    transform-style: preserve-3d;
    
    &:nth-child(1) {
      transform: rotate(-2deg) translateY(-10px);
      
      &:hover {
        transform: rotate(0deg) translateY(-18px) scale(1.03);
      }
    }
    
    &:nth-child(2) {
      transform: translateY(10px);
      
      &:hover {
        transform: translateY(-8px) scale(1.03);
      }
    }
    
    &:nth-child(3) {
      transform: rotate(2deg) translateY(-10px);
      
      &:hover {
        transform: rotate(0deg) translateY(-18px) scale(1.03);
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .services-grid {
    grid-template-columns: 1fr;
    max-width: 600px;
  }
}

.service-icon {
  font-size: 4rem;
  color: #c0c0c0;
  margin-bottom: 24px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .service-card:hover & {
    transform: scale(1.15) rotate(5deg);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.service-title {
  font-size: 1.8rem;
  margin-bottom: 16px;
}

.service-description {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
  line-height: 1.6;
}

.service-list {
  list-style: none;
  padding: 0;
  margin: 0 0 32px 0;
  text-align: left;
  flex-grow: 1;
  
  li {
    padding: 12px 0;
    color: rgba(255, 255, 255, 0.85);
    display: flex;
    align-items: center;
    gap: 12px;
    
    i {
      color: #c0c0c0;
      font-size: 0.9rem;
    }
  }
}

.service-btn {
  background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
  color: white;
  font-weight: 600;
  padding: 14px 36px;
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

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.process-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .process-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}

.process-card {
  padding: 40px 30px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-12px) rotate(-1deg);
  }
}

.process-title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.process-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

// Why Section
.why-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .why-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.why-card {
  padding: 40px 30px;
  text-align: center;
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

.why-icon {
  font-size: 3.5rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .why-card:hover & {
    transform: scale(1.2);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.why-title {
  font-size: 1.3rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.why-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

// CTA Section
.cta-section {
  background: rgba(0, 0, 0, 0.2);
}

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

.cta-button {
  font-weight: 600;
  padding: 12px 40px;
  
  &.primary-btn {
    background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
    color: white;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 24px rgba(192, 192, 192, 0.4);
      color: white;
    }
  }
}

// Responsive
@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .process-grid,
  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>
