<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';

const images = [
  { id: 1, src: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Portrait Photography' },
  { id: 2, src: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Wedding Photography' },
  { id: 3, src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=1600', alt: 'Nature Photography' },
];

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
};

const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.length) % images.length;
};

// Auto-advance slides
onMounted(() => {
  const interval = setInterval(() => {
    nextImage();
  }, 5000);

  return () => clearInterval(interval);
});
</script>

<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero-section" data-aos="fade-in" data-aos-duration="1000">
      <div class="hero-slider">
        <div 
          v-for="(image, index) in images" 
          :key="image.id"
          class="hero-slide"
          :class="{ active: currentImageIndex === index }"
          :style="{ backgroundImage: `url(${image.src})` }"
        >
          <div class="container h-100">
            <div class="hero-content">
              <h1>Capture Your Precious Moments</h1>
              <p class="lead">Professional photography services for weddings, portraits, and special events</p>
              <RouterLink to="/contact" class="btn btn-primary btn-lg">Book a Session</RouterLink>
            </div>
          </div>
        </div>
        
        <button class="slider-control prev" @click="prevImage">
          <i class="bi bi-chevron-left"></i>
        </button>
        <button class="slider-control next" @click="nextImage">
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </section>

    <!-- Featured Services -->
    <section class="section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2>Our Services</h2>
          <p class="text-muted">Professional photography services for all occasions</p>
        </div>
        
        <div class="row g-4">
          <div class="col-md-4" v-for="(service, index) in [
            { title: 'Wedding Photography', icon: 'bi-heart', desc: 'Capture your special day with our professional wedding photography services.' },
            { title: 'Portrait Sessions', icon: 'bi-person', desc: 'Beautiful portraits that showcase your personality and style.' },
            { title: 'Event Coverage', icon: 'bi-camera', desc: 'Professional coverage for all your special events and celebrations.' }
          ]" :key="service.title" :data-aos="'fade-up'" :data-aos-delay="100 * (index + 1)">
            <div class="service-card text-center p-4 h-100 d-flex flex-column">
              <div class="service-content">
                <div class="service-icon mb-3">
                  <i class="bi" :class="service.icon"></i>
                </div>
                <h3>{{ service.title }}</h3>
                <p class="text-muted">{{ service.desc }}</p>
              </div>
              <div class="mt-auto pt-3">
                <RouterLink to="/services" class="btn btn-outline-primary">Learn More</RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section bg-light1 py-5" data-aos="zoom-in" data-aos-duration="1000">
      <div class="container text-center">
        <h2>Ready to Capture Your Moments?</h2>
        <p class="lead mb-4">Book a session with us today and let's create something beautiful together.</p>
        <RouterLink to="/contact" class="btn btn-primary btn-lg">Contact Us</RouterLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  color: white;
}

.hero-slider {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.hero-slide::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.hero-slide.active {
  opacity: 1;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 2rem;
  margin-top: 15%;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-content .lead {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.slider-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
}

.slider-control:hover {
  background: var(--primary-color);
}

.slider-control.prev {
  left: 20px;
}

.slider-control.next {
  right: 20px;
}

.section-padding {
  padding: 6rem 0;
}

.section-header h2 {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
  font-weight: 700;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--primary-color);
}

.service-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .service-content {
    flex: 1;
    color: var(--text-color);
  }
  height: 100%;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-section {
  padding: 6rem 0;
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
  background-color: var(--card-bg);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
}

.cta-section h2 {
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--text-color);
}

.cta-section .lead {
  color: var(--text-color);
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content .lead {
    font-size: 1.25rem;
  }
}

@media (max-width: 767.98px) {
  .hero-section {
    height: 80vh;
    min-height: 500px;
  }
  
  .hero-content {
    margin-top: 30%;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .service-card {
    margin-bottom: 2rem;
  }
}
</style>
