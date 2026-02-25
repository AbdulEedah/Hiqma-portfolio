<template>
  <q-page class="contact-page">
    <!-- Banner Section -->
    <section class="banner-section">
      <div class="banner-overlay"></div>
      <div class="container banner-content">
        <h1 class="page-title fade-in-up">Get in Touch</h1>
        <p class="page-subtitle fade-in-up">Let's create something amazing together</p>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="section-padding contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info fade-in-up">
            <h2 class="gradient-text info-title">Contact Information</h2>
            <p class="info-description">
              Ready to elevate your brand? Reach out through any of the channels below, 
              and I'll get back to you as soon as possible.
            </p>

            <div class="contact-methods">
              <!-- Email -->
              <a href="mailto:hiqmatmusa555@gmail.com" class="glass-card contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Email</h3>
                  <p class="method-value">hiqmatmusa555@gmail.com</p>
                </div>
              </a>

              <!-- Phone 1 -->
              <a href="tel:09033637808" class="glass-card contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Phone</h3>
                  <p class="method-value">0903 363 7808</p>
                </div>
              </a>

              <!-- Phone 2 -->
              <a href="tel:09127679128" class="glass-card contact-method">
                <div class="method-icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Alternative Phone</h3>
                  <p class="method-value">0912 767 9128</p>
                </div>
              </a>

              <!-- Instagram -->
              <a
                href="https://www.instagram.com/hiqmahlitla?igsh=MXVuZmFrbnV1OW1jYQ=="
                target="_blank"
                class="glass-card contact-method"
              >
                <div class="method-icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="method-content">
                  <h3 class="method-title">Instagram</h3>
                  <p class="method-value">@hiqmahlitla</p>
                </div>
              </a>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h3 class="social-title">Connect With Me</h3>
              <div class="social-links">
                <a
                  href="https://www.instagram.com/hiqmahlitla?igsh=MXVuZmFrbnV1OW1jYQ=="
                  target="_blank"
                  class="social-icon"
                >
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="mailto:hiqmatmusa555@gmail.com" class="social-icon">
                  <i class="fas fa-envelope"></i>
                </a>
                <a href="tel:09033637808" class="social-icon">
                  <i class="fas fa-phone"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-container fade-in-up" style="animation-delay: 0.2s">
            <div class="glass-card form-card">
              <h2 class="gradient-text form-title">Send a Message</h2>
              <q-form @submit="handleSubmit" class="contact-form">
                <q-input
                  v-model="form.name"
                  filled
                  label="Your Name *"
                  class="form-input"
                  :rules="[val => !!val || 'Name is required']"
                  dark
                  color="grey-4"
                />

                <q-input
                  v-model="form.email"
                  filled
                  type="email"
                  label="Your Email *"
                  class="form-input"
                  :rules="[
                    val => !!val || 'Email is required',
                    val => /.+@.+\..+/.test(val) || 'Please enter a valid email'
                  ]"
                  dark
                  color="grey-4"
                />

                <q-input
                  v-model="form.phone"
                  filled
                  label="Phone Number"
                  class="form-input"
                  dark
                  color="grey-4"
                />

                <q-select
                  v-model="form.service"
                  filled
                  :options="serviceOptions"
                  label="Service Interested In"
                  class="form-input"
                  dark
                  color="grey-4"
                />

                <q-input
                  v-model="form.message"
                  filled
                  type="textarea"
                  label="Your Message *"
                  class="form-input"
                  :rules="[val => !!val || 'Message is required']"
                  rows="6"
                  dark
                  color="grey-4"
                />

                <q-btn
                  type="submit"
                  unelevated
                  rounded
                  size="lg"
                  class="submit-btn"
                  label="Send Message"
                  :loading="submitting"
                />
              </q-form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links Section -->
    <section class="section-padding quick-links-section">
      <div class="container">
        <h2 class="section-title gradient-text">Explore More</h2>
        <div class="quick-links-grid">
          <div
            v-for="(link, index) in quickLinks"
            :key="index"
            class="glass-card quick-link-card fade-in-up"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="$router.push(link.path)"
          >
            <div class="link-icon">
              <i :class="link.icon"></i>
            </div>
            <h3 class="link-title">{{ link.title }}</h3>
            <p class="link-description">{{ link.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuasar } from 'quasar'

export default {
  name: 'ContactPage',
  setup() {
    const $q = useQuasar()
    const route = useRoute()
    const submitting = ref(false)

    const form = ref({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })

    const serviceOptions = [
      'Modeling Services',
      'Social Media Management',
      'Voice-Over Services',
      'General Inquiry'
    ]

    const quickLinks = [
      {
        icon: 'fas fa-user',
        title: 'About Me',
        description: 'Learn more about my journey and expertise',
        path: '/about'
      },
      {
        icon: 'fas fa-briefcase',
        title: 'Services',
        description: 'Explore the services I offer',
        path: 'services'
      },
      {
        icon: 'fas fa-images',
        title: 'Portfolio',
        description: 'View my work and past projects',
        path: 'portfolio'
      }
    ]

    onMounted(() => {
      // Pre-fill service if coming from services page
      if (route.query.service) {
        form.value.service = route.query.service
      }
    })

    const handleSubmit = () => {
      submitting.value = true

      // Simulate form submission
      setTimeout(() => {
        submitting.value = false
        
        $q.notify({
          type: 'positive',
          message: 'Message sent successfully! I\'ll get back to you soon.',
          position: 'top',
          timeout: 3000
        })

        // Reset form
        form.value = {
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        }
      }, 1500)
    }

    return {
      form,
      serviceOptions,
      quickLinks,
      submitting,
      handleSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.contact-page {
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

// Contact Grid
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
}

// Contact Info
.info-title {
  font-size: 2rem;
  margin-bottom: 20px;
}

.info-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 40px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateX(12px) scale(1.02);
  }
}

.method-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
  flex-shrink: 0;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px rgba(192, 192, 192, 0.3);
  
  .contact-method:hover & {
    transform: scale(1.15) rotate(10deg);
    box-shadow: 0 8px 24px rgba(192, 192, 192, 0.6);
  }
}

.method-content {
  flex: 1;
}

.method-title {
  font-size: 1rem;
  color: #e8e8e8;
  margin-bottom: 4px;
}

.method-value {
  font-size: 1.1rem;
  color: white;
  margin: 0;
}

// Social Section
.social-section {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.social-title {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #e8e8e8;
}

.social-links {
  display: flex;
  gap: 16px;
  justify-content: center;
}

.social-icon {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 1.3rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
    border-color: #c0c0c0;
    transform: translateY(-5px) scale(1.15);
    box-shadow: 0 8px 24px rgba(192, 192, 192, 0.5);
    color: #000000;
  }
}

// Contact Form
.form-card {
  padding: 40px;
}

.form-title {
  font-size: 2rem;
  margin-bottom: 30px;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-input {
  :deep(.q-field__control) {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    
    &:before {
      border-color: rgba(255, 255, 255, 0.1);
    }
  }
  
  :deep(.q-field__label) {
    color: rgba(255, 255, 255, 0.7);
  }
  
  :deep(.q-field__native) {
    color: white;
  }
}

.submit-btn {
  background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
  color: white;
  font-weight: 600;
  margin-top: 10px;
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
    transform: scale(1.05);
    box-shadow: 0 12px 32px rgba(192, 192, 192, 0.5);
    
    &::before {
      left: 100%;
    }
  }
}

// Quick Links Section
.quick-links-section {
  background: rgba(0, 0, 0, 0.2);
}

.section-title {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .quick-links-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.quick-link-card {
  padding: 40px 30px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-12px) scale(1.03);
  }
  
  &:nth-child(1) {
    &:hover {
      transform: translateY(-12px) rotate(-2deg) scale(1.03);
    }
  }
  
  &:nth-child(3) {
    &:hover {
      transform: translateY(-12px) rotate(2deg) scale(1.03);
    }
  }
}

.link-icon {
  font-size: 3.5rem;
  color: #c0c0c0;
  margin-bottom: 20px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  
  .quick-link-card:hover & {
    transform: scale(1.2) rotate(10deg);
    filter: drop-shadow(0 0 20px rgba(192, 192, 192, 0.6));
  }
}

.link-title {
  font-size: 1.4rem;
  margin-bottom: 12px;
  color: #e8e8e8;
}

.link-description {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
}

// Responsive
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
}
</style>
