<template>
  <q-page class="about-page">
    <!-- Banner Section -->
    <section class="banner-section">
      <div class="banner-overlay"></div>
      <div class="container banner-content">
        <h1 class="page-title fade-in-up">About Me</h1>
        <p class="page-subtitle fade-in-up">Discover my journey and expertise</p>
      </div>
    </section>

    <!-- Biography Section -->
    <section class="section-padding bio-section">
      <div class="container">
        <div class="bio-grid">
          <div class="bio-image-container fade-in-up">
            <div class="glass-card portrait-card">
              <img
                src="/images/WhatsApp Image 2026-02-25 at 4.35.29 AM (2).jpeg"
                alt="Musa Hiqma Oyiza"
                class="portrait-image"
                @error="handleImageError"
              />
            </div>
          </div>
          <div class="bio-content fade-in-up">
            <h2 class="gradient-text bio-title">Professional Journey</h2>
            <p class="bio-paragraph">
              Musa Hiqma Oyiza is a professional model, digital brand strategist, and voice-over artist 
              dedicated to helping brands communicate with clarity, elegance, and measurable impact.
            </p>
            <p class="bio-paragraph">
              She combines visual presence, strategic thinking, and vocal expression to elevate brands 
              in competitive digital environments. With a passion for storytelling and brand growth, 
              Hiqma brings authenticity and professionalism to every project.
            </p>
            <p class="bio-paragraph">
              Her multifaceted approach ensures that brands not only look exceptional but also connect 
              meaningfully with their target audiences through strategic social media management and 
              compelling voice-over work.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Strengths -->
    <section class="section-padding strengths-section">
      <div class="container">
        <h2 class="section-title gradient-text">Professional Strengths</h2>
        <div class="strengths-grid">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="glass-card strength-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="strength-header">
              <h3 class="strength-name">{{ skill.name }}</h3>
              <span class="strength-percentage">{{ skill.percentage }}%</span>
            </div>
            <div class="progress-bar">
              <div
                class="progress-fill"
                :style="{ width: skill.percentage + '%', animationDelay: `${index * 0.1 + 0.3}s` }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="section-padding mission-section">
      <div class="container">
        <div class="glass-card mission-card fade-in-up">
          <div class="mission-icon">
            <i class="fas fa-bullseye"></i>
          </div>
          <h2 class="mission-title gradient-text">Mission Statement</h2>
          <p class="mission-text">
            To create visual and vocal experiences that elevate brands and build authentic digital connections.
          </p>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding values-section">
      <div class="container">
        <h2 class="section-title gradient-text">Core Values</h2>
        <div class="values-grid">
          <div
            v-for="(value, index) in values"
            :key="index"
            class="glass-card value-card fade-in-up"
            :style="{ animationDelay: `${index * 0.15}s` }"
          >
            <div class="value-icon">
              <i :class="value.icon"></i>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-description">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding cta-section">
      <div class="container">
        <div class="glass-card cta-card">
          <h2 class="cta-title">Ready to Collaborate?</h2>
          <p class="cta-description">
            Let's bring your brand vision to life with professional modeling, strategic social media management, 
            and captivating voice-over work.
          </p>
          <q-btn
            unelevated
            rounded
            size="lg"
            class="cta-button"
            label="Get in Touch"
            @click="$router.push('contact')"
          />
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'AboutPage',
  setup() {
    const skills = [
      { name: 'Communication Skills', percentage: 95 },
      { name: 'Voice-Over Performance', percentage: 90 },
      { name: 'Emotional Intelligence', percentage: 92 },
      { name: 'Adaptability', percentage: 93 },
      { name: 'Team Collaboration', percentage: 94 },
      { name: 'Time Management', percentage: 91 }
    ]

    const values = [
      {
        icon: 'fas fa-star',
        title: 'Excellence',
        description: 'Committed to delivering exceptional quality in every project and interaction.'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Authenticity',
        description: 'Building genuine connections through honest and transparent communication.'
      },
      {
        icon: 'fas fa-lightbulb',
        title: 'Innovation',
        description: 'Embracing creative solutions and staying ahead of industry trends.'
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Professionalism',
        description: 'Maintaining the highest standards of conduct and reliability.'
      }
    ]

    const handleImageError = (e) => {
      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23c0c0c0" width="400" height="400"/%3E%3Ctext fill="%23ffffff" font-family="Arial" font-size="20" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle"%3EImage Placeholder%3C/text%3E%3C/svg%3E'
    }

    return {
      skills,
      values,
      handleImageError
    }
  }
}
</script>

<style lang="scss" scoped>
.about-page {
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

// Biography Section
.bio-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 60px;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.portrait-card {
  padding: 0;
  overflow: hidden;
}

.portrait-image {
  width: 100%;
  height: auto;
  display: block;
}

.bio-title {
  font-size: 2.5rem;
  margin-bottom: 30px;
}

.bio-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

// Strengths Section
.strengths-section {
  background: rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.strengths-grid {
  display: grid;
  gap: 30px;
  max-width: 900px;
  margin: 0 auto;
}

.strength-card {
  padding: 30px;
}

.strength-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.strength-name {
  font-size: 1.2rem;
  color: #e8e8e8;
}

.strength-percentage {
  font-size: 1.3rem;
  font-weight: 700;
  color: #c0c0c0;
}

.progress-bar {
  height: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #e8e8e8 0%, #c0c0c0 100%);
  border-radius: 10px;
  animation: fillProgress 1.5s ease-out forwards;
  transform-origin: left;
}

@keyframes fillProgress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

// Mission Section
.mission-card {
  padding: 60px 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
  }
}

.mission-icon {
  font-size: 4.5rem;
  color: #c0c0c0;
  margin-bottom: 30px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .mission-card:hover & {
    transform: scale(1.2) rotate(360deg);
    filter: drop-shadow(0 0 30px rgba(192, 192, 192, 0.8));
  }
}

.mission-title {
  font-size: 2.5rem;
  margin-bottom: 24px;
}

.mission-text {
  font-size: 1.3rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
}

// Values Section
.values-section {
  background: rgba(0, 0, 0, 0.2);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .values-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.value-card {
  padding: 40px 30px;
  text-align: center;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
  
  &:nth-child(1), &:nth-child(3) {
    &:hover {
      transform: translateY(-12px) rotate(-2deg) scale(1.03);
    }
  }
  
  &:nth-child(2), &:nth-child(4) {
    &:hover {
      transform: translateY(-12px) rotate(2deg) scale(1.03);
    }
  }
}

.value-icon {
  font-size: 3.5rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .value-card:hover & {
    transform: scale(1.2) rotate(10deg);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.value-title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.value-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
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

// Responsive
@media (max-width: 1024px) {
  .bio-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
}
</style>
