<template>
  <div class="not-found">
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>404</h1>
            <h2 class="mb-4">Page Not Found</h2>
            <p class="lead">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <RouterLink to="/" class="btn btn-primary btn-lg mt-4">
              <i class="bi bi-house-door me-2"></i>Back to Home
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="section-padding">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center">
            <h3 class="mb-4">Looking for something specific?</h3>
            <p class="lead text-muted mb-5">Try one of these helpful links instead:</p>
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <RouterLink to="/gallery" class="btn btn-outline-primary">
                <i class="bi bi-images me-2"></i>View Gallery
              </RouterLink>
              <RouterLink to="/services" class="btn btn-outline-primary">
                <i class="bi bi-camera me-2"></i>Our Services
              </RouterLink>
              <RouterLink to="/about" class="btn btn-outline-primary">
                <i class="bi bi-person me-2"></i>About Us
              </RouterLink>
              <RouterLink to="/contact" class="btn btn-outline-primary">
                <i class="bi bi-envelope me-2"></i>Contact Us
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView',
  mounted() {
    // Set meta title
    document.title = 'Page Not Found - PhotoFolio';
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat;
  color: white;
  padding: 8rem 0 4rem;
  text-align: center;
  margin-bottom: 0;
}

.page-header h1 {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.page-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.page-header .lead {
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
}

.section-padding {
  padding: 6rem 0;
}

.btn-outline-primary {
  border-color: var(--primary-color);
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.btn-outline-primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Adjustments */
@media (max-width: 767.98px) {
  .page-header {
    padding: 6rem 0 3rem;
  }
  
  .page-header h1 {
    font-size: 5rem;
  }
  
  .page-header h2 {
    font-size: 2rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 0.75rem;
  }
  
  .d-flex.flex-wrap {
    flex-direction: column;
    gap: 0.75rem !important;
  }
}
</style>
