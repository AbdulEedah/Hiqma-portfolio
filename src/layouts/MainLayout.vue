<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="glass-header">
      <q-toolbar class="container">
        <q-toolbar-title class="logo">
          <router-link to="/" class="text-white text-decoration-none">
            <span class="logo-text">Musa Hiqma</span>
          </router-link>
        </q-toolbar-title>

        <!-- Desktop Menu -->
        <q-tabs 
          v-if="!$q.screen.lt.md" 
          class="desktop-menu"
          :model-value="currentRoute"
          active-color="primary"
          indicator-color="primary"
        >
          <q-route-tab to="/" label="Home" exact />
          <q-route-tab to="/about" label="About" />
          <q-route-tab to="/services" label="Services" />
          <q-route-tab to="/portfolio" label="Portfolio" />
          <q-route-tab to="/contact" label="Contact" />
        </q-tabs>

        <!-- Mobile Menu Button -->
        <q-btn
          v-if="$q.screen.lt.md"
          flat
          dense
          round
          icon="menu"
          @click="drawer = !drawer"
          class="mobile-menu-btn"
        />
      </q-toolbar>
    </q-header>

    <!-- Mobile Drawer -->
    <q-drawer
      v-model="drawer"
      side="right"
      overlay
      behavior="mobile"
      class="glass-drawer"
    >
      <q-list class="mobile-nav">
        <q-item 
          clickable 
          v-ripple 
          @click="navigateTo('/')" 
          :class="{ 'active-item': $route.path === '/' }"
        >
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-item 
          clickable 
          v-ripple 
          @click="navigateTo('/about')" 
          :class="{ 'active-item': $route.path === '/about' }"
        >
          <q-item-section>About</q-item-section>
        </q-item>
        <q-item 
          clickable 
          v-ripple 
          @click="navigateTo('/services')" 
          :class="{ 'active-item': $route.path === '/services' }"
        >
          <q-item-section>Services</q-item-section>
        </q-item>
        <q-item 
          clickable 
          v-ripple 
          @click="navigateTo('/portfolio')" 
          :class="{ 'active-item': $route.path === '/portfolio' }"
        >
          <q-item-section>Portfolio</q-item-section>
        </q-item>
        <q-item 
          clickable 
          v-ripple 
          @click="navigateTo('/contact')" 
          :class="{ 'active-item': $route.path === '/contact' }"
        >
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <footer class="glass-footer">
      <div class="container footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Musa Hiqma Oyiza</h3>
          <p class="footer-subtitle">Model | Social Media Manager | Voice-Over Artist</p>
        </div>
        
        <div class="footer-section">
          <div class="social-links">
            <a href="https://www.instagram.com/hiqmahlitla?igsh=MXVuZmFrbnV1OW1jYQ==" target="_blank" class="social-icon">
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
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Musa Hiqma Oyiza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'MainLayout',
  setup() {
    const drawer = ref(false)
    const router = useRouter()
    const route = useRoute()
    const currentYear = computed(() => new Date().getFullYear())
    const currentRoute = computed(() => route.path)

    const navigateTo = (path) => {
      router.push(path)
      drawer.value = false
    }

    return {
      drawer,
      navigateTo,
      currentYear,
      currentRoute
    }
  }
}
</script>

<style lang="scss" scoped>
.glass-header {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
  backdrop-filter: blur(30px) saturate(200%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #e8e8e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
}

.desktop-menu {
  :deep(.q-tab) {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 500;
    transition: all 0.3s ease;
    
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
    border-radius: 2px;
  }
}

.mobile-menu-btn {
  color: white;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(192, 192, 192, 0.1) 100%);
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(192, 192, 192, 0.2) 100%);
    border-color: rgba(255, 255, 255, 0.5);
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);
  }
  
  :deep(.q-icon) {
    font-size: 1.5rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  }
}

.glass-drawer {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.98) 0%, rgba(26, 26, 26, 0.95) 100%) !important;
  backdrop-filter: blur(30px) saturate(200%);
  border-left: 1px solid rgba(255, 255, 255, 0.15);
  
  :deep(.q-drawer__content) {
    background: transparent !important;
  }
}

.mobile-nav {
  padding: 20px 0;
  
  .q-item {
    color: white !important;
    margin: 8px 16px;
    border-radius: 12px;
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: 1.05rem;
    
    :deep(.q-item__section) {
      color: white !important;
    }
    
    &:hover {
      background: rgba(192, 192, 192, 0.15);
      color: #e8e8e8 !important;
      
      :deep(.q-item__section) {
        color: #e8e8e8 !important;
      }
    }
    
    &.active-item {
      background: rgba(232, 232, 232, 0.2);
      color: #e8e8e8 !important;
      border-left: 3px solid #c0c0c0;
      
      :deep(.q-item__section) {
        color: #e8e8e8 !important;
      }
    }
  }
}

.glass-footer {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(26, 26, 26, 0.9) 100%);
  backdrop-filter: blur(30px) saturate(200%);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 40px 20px 24px;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  margin-top: 60px;
}

.footer-content {
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.footer-section {
  margin-bottom: 0;
}

.footer-title {
  font-size: 1.4rem;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #ffffff 0%, #c0c0c0 50%, #e8e8e8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.2));
}

.footer-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.social-icon {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: white;
  font-size: 1.1rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  &:hover {
    background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
    border-color: #ffffff;
    transform: translateY(-4px) scale(1.1);
    box-shadow: 0 8px 20px rgba(192, 192, 192, 0.4), 0 0 30px rgba(255, 255, 255, 0.2);
    color: #000000;
  }
}

.footer-bottom {
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
    margin: 0;
  }
}

@media (min-width: 768px) {
  .footer-content {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-section {
    text-align: left;
  }
  
  .social-links {
    justify-content: flex-start;
  }
  
  .footer-bottom {
    border: none;
    padding: 0;
    text-align: right;
  }
}
</style>
