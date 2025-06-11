<template>
  <div class="gallery-single-view">
    <!-- Breadcrumb Navigation -->
    <nav class="bg-light py-3">
      <div class="container">
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/gallery">Gallery</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ galleryItem?.title || 'Photo Details' }}
          </li>
        </ol>
      </div>
    </nav>

    <!-- Main Image -->
    <div class="main-image-container py-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="main-image-wrapper position-relative">
              <img 
                :src="galleryItem?.image || 'https://via.placeholder.com/1200x800/eee/ccc?text=Loading...'" 
                :alt="galleryItem?.title || 'Gallery Image'"
                class="img-fluid rounded-3 shadow"
                @load="imageLoaded = true"
                :class="{ 'img-loading': !imageLoaded }"
              >
              <div v-if="!imageLoaded" class="image-placeholder">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Gallery Info -->
    <section class="gallery-info py-4">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="d-flex justify-content-between align-items-center mb-4">
              <h1 class="h2 mb-0">{{ galleryItem?.title || 'Photo Title' }}</h1>
              <div class="d-flex gap-2">
                <button class="btn btn-outline-secondary" @click="shareImage" title="Share">
                  <i class="bi bi-share"></i>
                </button>
                <button class="btn btn-outline-secondary" @click="downloadImage" title="Download">
                  <i class="bi bi-download"></i>
                </button>
              </div>
            </div>

            <!-- Photo Meta -->
            <div class="meta d-flex flex-wrap gap-4 mb-4">
              <div class="meta-item">
                <i class="bi bi-person me-2 text-primary"></i>
                <span>By {{ galleryItem?.photographer || 'PhotoFolio Team' }}</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-calendar3 me-2 text-primary"></i>
                <span>{{ formatDate(galleryItem?.date) || 'June 9, 2025' }}</span>
              </div>
              <div class="meta-item">
                <i class="bi bi-tag me-2 text-primary"></i>
                <span>{{ galleryItem?.category || 'Photography' }}</span>
              </div>
            </div>

            <!-- Photo Description -->
            <div class="description mb-5">
              <p class="lead">{{ galleryItem?.description || 'No description available for this image.' }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'GallerySingleView',
  
  setup() {
    const route = useRoute();
    const imageLoaded = ref(false);
    
    // Mock data - In a real app, this would come from an API
    const galleryItem = ref({
      id: route.params.id,
      title: 'Beautiful Sunset at the Beach',
      description: 'A stunning sunset captured at the beach with vibrant colors reflecting on the water. The perfect moment when the sun kisses the horizon.',
      image: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1200',
      category: 'Nature',
      photographer: 'John Doe',
      date: '2025-06-01',
      camera: 'Sony A7R IV',
      lens: '24-70mm f/2.8',
      aperture: 'f/8',
      iso: '100',
      shutterSpeed: '1/250s',
      location: 'Maldives',
      tags: ['sunset', 'beach', 'nature', 'ocean']
    });

    // Format date to display
    const formatDate = (dateString) => {
      if (!dateString) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('en-US', options);
    };

    // Share image function
    const shareImage = () => {
      if (navigator.share) {
        navigator.share({
          title: galleryItem.value.title,
          text: galleryItem.value.description,
          url: window.location.href
        }).catch(console.error);
      } else {
        // Fallback for browsers that don't support Web Share API
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(galleryItem.value.title)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(shareUrl, '_blank');
      }
    };

    // Download image function
    const downloadImage = () => {
      const link = document.createElement('a');
      link.href = galleryItem.value.image;
      link.download = `photo-${galleryItem.value.id}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    // Fetch gallery item data (in a real app)
    const fetchGalleryItem = () => {
      // Simulate API call
      // In a real app: const response = await fetch(`/api/gallery/${route.params.id}`);
      // galleryItem.value = await response.json();
      console.log('Fetching gallery item:', route.params.id);
    };

    onMounted(() => {
      fetchGalleryItem();
      // Set document title
      document.title = `${galleryItem.value.title} - PhotoFolio`;
    });

    return {
      galleryItem,
      imageLoaded,
      formatDate,
      shareImage,
      downloadImage
    };
  }
};
</script>

<style scoped>
.gallery-single-view {
  min-height: 100vh;
  background-color: #fff;
}

/* Breadcrumb Styles */
.breadcrumb {
  padding: 0.5rem 0;
  background-color: transparent;
  margin-bottom: 0;
}

.breadcrumb-item + .breadcrumb-item::before {
  content: "\f285";
  font-family: "bootstrap-icons";
  color: #6c757d;
  padding: 0 0.5rem;
}

.breadcrumb-item a {
  color: #6c757d;
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumb-item a:hover {
  color: #0d6efd;
}

.breadcrumb-item.active {
  color: #0d6efd;
  font-weight: 500;
}

/* Main Image Container */
.main-image-container {
  background-color: #f8f9fa;
  margin-bottom: 2rem;
}

.main-image-wrapper {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.1);
  background-color: #f8f9fa;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image-wrapper img {
  max-height: 80vh;
  width: auto;
  max-width: 100%;
  transition: opacity 0.3s ease;
}

.main-image-wrapper img.img-loading {
  opacity: 0;
  height: 0;
  width: 0;
  position: absolute;
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
}

/* Gallery Info */
.gallery-info {
  padding: 2rem 0;
}

/* Meta Info */
.meta {
  color: #6c757d;
  font-size: 0.95rem;
}

.meta-item {
  display: flex;
  align-items: center;
}

/* Buttons */
.btn-outline-secondary {
  border-color: #dee2e6;
  color: #6c757d;
}

.btn-outline-secondary:hover {
  background-color: #f8f9fa;
  border-color: #dee2e6;
  color: #0d6efd;
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
  .main-image-wrapper {
    min-height: 300px;
  }
  
  .main-image-wrapper img {
    max-height: 60vh;
  }
  
  .gallery-info {
    padding: 1.5rem 0;
  }
  
  .meta {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem !important;
  }
  
  .meta-item {
    margin-bottom: 0.25rem;
  }
  
  .d-flex.justify-content-between {
    flex-direction: column;
    gap: 1rem;
  }
  
  .btn-group {
    width: 100%;
  }
  
  .btn {
    flex: 1;
    text-align: center;
  }
}

/* Animation */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.gallery-single-view {
  animation: fadeIn 0.3s ease-out;
}

/* Print Styles */
@media print {
  .gallery-single-view {
    padding: 0;
  }
  
  .main-image-wrapper {
    box-shadow: none;
    border: 1px solid #dee2e6;
    margin-bottom: 1rem;
  }
  
  .btn {
    display: none;
  }
  
  .breadcrumb {
    padding: 0.25rem 0;
    margin-bottom: 1rem;
  }
}
</style>
