<template>
  <q-page class="error-page flex flex-center">
    <div class="error-content text-center">
      <div class="glass-card error-card">
        <h1 class="error-code gradient-text">404</h1>
        <h2 class="error-title">Page Not Found</h2>
        <p class="error-description">
          Oops! The page you're looking for doesn't exist.
        </p>
        <q-btn
          unelevated
          rounded
          size="lg"
          class="home-btn"
          label="Go Home"
          @click="$router.push('/')"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ErrorNotFound'
}
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 100vh;
  background: linear-gradient(135deg, #000000 0%, #0a0a0a 50%, #000000 100%);
}

.error-card {
  padding: 60px 40px;
  max-width: 600px;
}

.error-code {
  font-size: 8rem;
  margin-bottom: 20px;
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  margin-bottom: 16px;
  color: white;
}

.error-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.home-btn {
  background: linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 100%);
  color: white;
  font-weight: 600;
  padding: 12px 40px;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(192, 192, 192, 0.4);
  }
}

// Responsive
@media (max-width: 768px) {
  .error-code {
    font-size: 5rem;
  }
}
</style>
