<template>
  <div class="gallery-view">
    <!-- Page Header -->
    <section class="page-header" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Our Gallery</h1>
            <p class="lead">A collection of our best moments captured in time</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Gallery Filters -->
    <div class="container my-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="row justify-content-center mb-5">
        <div class="col-md-8 text-center">
          <div class="btn-group" role="group">
            <button 
              v-for="category in categories" 
              :key="category.id"
              class="btn btn-outline-primary"
              :class="{ 'active': activeFilter === 'all' || activeFilter === category.id }"
              @click="setFilter(category.id)"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
      </div>

      <!-- Gallery Grid -->
      <div class="row g-4" :key="activeFilter" data-aos="fade-up" data-aos-duration="1000">
        <div 
          v-for="(item, index) in filteredGallery" 
          :key="index"
          class="col-md-6 col-lg-4 gallery-item"
          :class="item.category"
          :data-aos="'zoom-in'" 
          :data-aos-delay="(index % 6) * 100"
        >
          <div class="gallery-card" @click="openLightbox(index)">
            <img :src="item.thumbnail" :alt="item.title" class="img-fluid">
            <div class="gallery-overlay">
              <div class="gallery-info">
                <h5>{{ item.title }}</h5>
                <p class="mb-0">{{ item.category }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="isLightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">&times;</button>
        <div class="lightbox-container">
          <div class="lightbox-content" :style="{ transform: `translateX(${offsetX}%)` }">
            <div 
              v-for="(item, index) in filteredGallery" 
              :key="item.id"
              class="lightbox-slide"
              :class="{ 'active': currentImageIndex === index }"
            >
              <div class="image-wrapper">
                <img 
                  :src="item.large" 
                  :alt="item.title" 
                  class="lightbox-img"
                  loading="lazy"
                />
                <div class="lightbox-caption">
                  <h4>{{ item.title }}</h4>
                  <p class="text-uppercase">{{ item.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button 
          class="lightbox-nav prev" 
          @click.stop="prevImage"
          :disabled="currentImageIndex === 0"
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button 
          class="lightbox-nav next" 
          @click.stop="nextImage"
          :disabled="currentImageIndex === filteredGallery.length - 1"
        >
          <i class="bi bi-chevron-right"></i>
        </button>
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'GalleryView',
  data() {
    return {
      activeFilter: 'all',
      isLightboxOpen: false,
      currentImageIndex: 0,
      offsetX: 0,
      isAnimating: false,
      categories: [
        { id: 'all', name: 'All' },
        { id: 'wedding', name: 'Wedding' },
        { id: 'portrait', name: 'Portrait' },
        { id: 'nature', name: 'Nature' },
        { id: 'event', name: 'Event' }
      ],
      gallery: [
        {
          id: 1,
          title: 'Wedding Bliss',
          category: 'wedding',
          thumbnail: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg'
        },
        {
          id: 2,
          title: 'Portrait Session',
          category: 'portrait',
          thumbnail: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'
        },
        {
          id: 3,
          title: 'Mountain View',
          category: 'nature',
          thumbnail: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg'
        },
        {
          id: 4,
          title: 'Corporate Event',
          category: 'event',
          thumbnail: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
        },
        {
          id: 5,
          title: 'Beach Wedding',
          category: 'wedding',
          thumbnail: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg'
        },
        {
          id: 6,
          title: 'Urban Portrait',
          category: 'portrait',
          thumbnail: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
        },
        {
          id: 7,
          title: 'Forest Trail',
          category: 'nature',
          thumbnail: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'
        },
        {
          id: 8,
          title: 'Birthday Party',
          category: 'event',
          thumbnail: 'https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/2531546/pexels-photo-2531546.jpeg'
        },
        {
          id: 9,
          title: 'Couple Portraits',
          category: 'portrait',
          thumbnail: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
          large: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg'
        }
      ]
    }
  },
  computed: {
    filteredGallery() {
      if (this.activeFilter === 'all') {
        return this.gallery
      }
      // Make sure to compare with the category ID from categories array
      console.log(this.activeFilter, this.gallery.filter(item => item.category === this.activeFilter))
      return this.gallery.filter(item => item.category === this.activeFilter)
    },
    currentImage() {
      return this.filteredGallery[this.currentImageIndex] || {}
    }
  },
  methods: {
    setFilter(category) {
      this.activeFilter = category
      this.currentImageIndex = 0
      this.updateOffset()
      // Refresh AOS after the DOM updates
      this.$nextTick(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh()
        }
      })
    },
    openLightbox(index) {
      this.currentImageIndex = this.filteredGallery.findIndex(
        item => item.id === this.filteredGallery[index].id
      )
      this.isLightboxOpen = true
      document.body.style.overflow = 'hidden'
      // Prevent background scrolling when lightbox is open
      document.documentElement.style.overflow = 'hidden'
    },
    closeLightbox() {
      this.isLightboxOpen = false
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    },
    nextImage() {
      if (this.isAnimating || this.currentImageIndex >= this.filteredGallery.length - 1) return;
      this.isAnimating = true;
      this.currentImageIndex++;
      this.updateOffset();
      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    },
    prevImage() {
      if (this.isAnimating || this.currentImageIndex <= 0) return;
      this.isAnimating = true;
      this.currentImageIndex--;
      this.updateOffset();
      setTimeout(() => {
        this.isAnimating = false;
      }, 300);
    },
    updateOffset() {
      this.offsetX = -this.currentImageIndex * 100;
    },
    handleKeydown(e) {
      if (!this.isLightboxOpen) return
      
      switch (e.key) {
        case 'Escape':
          this.closeLightbox()
          break
        case 'ArrowRight':
          this.nextImage()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = 'auto'
  }
}
</script>

<style scoped>
/* Lightbox Transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.lightbox-container {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
  will-change: transform;
}

.lightbox-slide {
  position: relative;
  flex: 0 0 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
}

.image-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 80vh;
  padding: 1rem;
  box-sizing: border-box;
}

.lightbox-img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  margin: 0 auto;
  display: block;
}

.lightbox-caption {
  color: white;
  text-align: center;
  margin-top: 1.5rem;
  padding: 0.75rem 1.5rem;
  /* background: rgba(0, 0, 0, 0.5); */
  border-radius: 4px;
  max-width: 90%;
  width: auto;
  position: relative;
  z-index: 2;
}

.lightbox-caption h4 {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.3;
}

.lightbox-caption p {
  margin: 0.5rem 0 0;
  opacity: 0.9;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.lightbox-close {
  position: fixed;
  top: 1.5rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
  transition: all 0.2s;
  padding: 0.5rem;
  line-height: 1;
}

.lightbox-close:hover {
  opacity: 1;
  transform: scale(1.1);
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  width: 60px;
  height: 100px;
  font-size: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 1000;
  opacity: 0.7;
  padding: 0;
  margin: 0;
  outline: none;
}

.lightbox-nav:hover:not(:disabled) {
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  width: 70px;
}

.lightbox-nav:disabled {
  opacity: 0.2;
  cursor: not-allowed;
  background: rgba(0, 0, 0, 0.3);
}

.lightbox-nav.prev {
  left: 0;
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
}

.lightbox-nav.next {
  right: 0;
  border-radius: 4px 0 0 4px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
}

.lightbox-nav i {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .lightbox-nav {
    width: 50px;
    height: 80px;
    font-size: 2rem;
  }
  
  .lightbox-nav:hover {
    width: 55px;
  }
}

@media (max-width: 768px) {
  .lightbox-nav {
    width: 40px;
    height: 80px;
    font-size: 1.8rem;
  }
  
  .lightbox-nav:hover:not(:disabled) {
    width: 45px;
  }
  
  .lightbox-close {
    font-size: 2rem;
    right: 1rem;
    top: 1rem;
    background: rgba(0, 0, 0, 0.5);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .lightbox-slide {
    padding: 1rem;
  }
  
  .image-wrapper {
    padding: 0.5rem;
  }
  
  .lightbox-caption {
    padding: 0.5rem 1rem;
    margin-top: 1rem;
  }
  
  .lightbox-caption h4 {
    font-size: 1rem;
  }
  
  .lightbox-caption p {
    font-size: 0.8rem;
    margin-top: 0.25rem;
  }
}

.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat;
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.page-header .lead {
  font-size: 1.25rem;
  opacity: 0.9;
}

.gallery-card {
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.gallery-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.gallery-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-card:hover img {
  transform: scale(1.05);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1.5rem;
}

.gallery-card:hover .gallery-overlay {
  opacity: 1;
}

.gallery-info {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.gallery-card:hover .gallery-info {
  transform: translateY(0);
}

.gallery-info h5 {
  margin-bottom: 0.25rem;
  font-weight: 600;
}

.gallery-info p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
}

/* Lightbox Styles */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}

.lightbox-close {
  position: fixed;
  top: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1002;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.lightbox-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.lightbox-container {
  width: 90%;
  max-width: 1400px;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  display: flex;
  height: 100%;
  width: 100%;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.lightbox-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 80px;
  box-sizing: border-box;
}

.image-wrapper {
  position: relative;
  max-height: 80vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px 0;
}

.lightbox-img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: 4px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
  opacity: 0;
  animation: zoomIn 0.5s ease forwards 0.2s;
}

@keyframes zoomIn {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.lightbox-caption {
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  text-align: center;
  color: white;
  padding: 0 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.7);
  transition: all 0.3s ease;
  z-index: 2;
  opacity: 0;
  transform: translateY(10px);
}

.lightbox-slide.active .lightbox-caption {
  opacity: 1;
  transform: translateY(0);
}

.lightbox-caption h4 {
  margin: 0 0 5px 0;
  font-size: 1.6rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.5px;
}

.lightbox-caption p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.9;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 400;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.8);
}

/* Add subtle gradient fade at bottom */
.image-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40%;
  background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.image-wrapper:hover::after {
  opacity: 1;
}

.image-wrapper:hover .lightbox-caption {
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
  transform: translateY(-5px);
}

.lightbox-nav {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  opacity: 0.8;
}

.lightbox-nav:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-50%) scale(1.1);
  opacity: 1;
}

.lightbox-nav:disabled {
  opacity: 0.2;
  cursor: not-allowed;
  transform: translateY(-50%);
}

.lightbox-nav.prev {
  left: 30px;
}

.lightbox-nav.next {
  right: 30px;
}

/* Responsive adjustments */
@media (max-width: 992px) {
  .lightbox-slide {
    padding: 0 60px;
  }
  
  .lightbox-nav {
    width: 50px;
    height: 50px;
    font-size: 1.5rem;
  }
  
  .lightbox-nav.prev {
    left: 15px;
  }
  
  .lightbox-nav.next {
    right: 15px;
  }
}

@media (max-width: 768px) {
  .lightbox-slide {
    padding: 0 40px;
  }
  
  .lightbox-caption h4 {
    font-size: 1.2rem;
  }
  
  .lightbox-caption p {
    font-size: 0.75rem;
  }
  
  .lightbox-close {
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    font-size: 1.5rem;
  }
}

@media (max-width: 576px) {
  .lightbox-slide {
    padding: 0 20px;
  }
  
  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }
  
  .lightbox-caption h4 {
    font-size: 1.1rem;
  }
  
  .lightbox-caption p {
    font-size: 0.7rem;
  }
}

@media (max-width: 575.98px) {
  .page-header {
    padding: 6rem 0 3rem;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .btn-group {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .lightbox-nav.prev {
    left: 10px;
  }
  
  .lightbox-nav.next {
    right: 10px;
  }
}

@media (max-width: 575.98px) {
  .page-header {
    padding: 5rem 0 2.5rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .gallery-card {
    aspect-ratio: 1/1;
  }
  
  .lightbox-nav {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
  
  .lightbox-nav.prev {
    left: 5px;
  }
  
  .lightbox-nav.next {
    right: 5px;
  }
}
</style>
