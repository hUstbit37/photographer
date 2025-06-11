<template>
  <footer class="footer bg-dark text-white py-5">
    <div class="container">
      <div class="row g-4">
        <!-- About Section -->
        <div class="col-lg-4 col-md-6">
          <div class="footer-about">
            <RouterLink class="navbar-brand d-flex align-items-center mb-3 text-white" to="/">
              <i class="bi bi-camera me-2"></i>
              <span>MyLife</span>
            </RouterLink>
            <p class="mb-4">Capturing life's precious moments with creativity and passion. Professional photography services for all your special occasions.</p>
            <div class="social-links">
              <a href="#" class="me-3 text-white"><i class="bi bi-facebook"></i></a>
              <a href="#" class="me-3 text-white"><i class="bi bi-instagram"></i></a>
              <a href="#" class="me-3 text-white"><i class="bi bi-twitter-x"></i></a>
              <a href="#" class="text-white"><i class="bi bi-pinterest"></i></a>
            </div>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="col-lg-2 col-md-6">
          <h5 class="text-uppercase mb-4">Quick Links</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><RouterLink to="/" class="text-white text-decoration-none">Home</RouterLink></li>
            <li class="mb-2"><RouterLink to="/gallery" class="text-white text-decoration-none">Gallery</RouterLink></li>
            <li class="mb-2"><RouterLink to="/services" class="text-white text-decoration-none">Services</RouterLink></li>
            <li class="mb-2"><RouterLink to="/about" class="text-white text-decoration-none">About Us</RouterLink></li>
            <li><RouterLink to="/contact" class="text-white text-decoration-none">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- Services -->
        <div class="col-lg-3 col-md-6">
          <h5 class="text-uppercase mb-4">Our Services</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Portrait Photography</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Wedding Photography</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Event Coverage</a></li>
            <li class="mb-2"><a href="#" class="text-white text-decoration-none">Commercial Photography</a></li>
            <li><a href="#" class="text-white text-decoration-none">Photo Editing</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="col-lg-3 col-md-6">
          <h5 class="text-uppercase mb-4">Contact Us</h5>
          <ul class="list-unstyled">
            <li class="mb-3">
              <i class="bi bi-geo-alt me-2"></i>
              <span>123 Photography St, City, Country</span>
            </li>
            <li class="mb-3">
              <i class="bi bi-telephone me-2"></i>
              <a href="tel:+1234567890" class="text-white text-decoration-none">+1 (234) 567-890</a>
            </li>
            <li class="mb-3">
              <i class="bi bi-envelope me-2"></i>
              <a href="mailto:info@mylife.com" class="text-white text-decoration-none">info@mylife.com</a>
            </li>
            <li>
              <i class="bi bi-clock me-2"></i>
              <span>Mon - Fri: 9:00 - 18:00</span>
            </li>
          </ul>
        </div>
      </div>
      <hr class="my-4">
      <div class="row align-items-center">
        <div class="col-md-6 text-center text-md-start">
          <p class="mb-md-0">&copy; 2025 MyLife. All rights reserved.</p>
        </div>
        <div class="col-md-6 text-center text-md-end">
          <p class="mb-0">
            <a href="#" class="text-white text-decoration-none me-3">Privacy Policy</a>
            <a href="#" class="text-white text-decoration-none">Terms of Service</a>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Footer Styles */
.footer {
  background-color: var(--dark-color);
  position: relative;
  z-index: 1;
  overflow: hidden;
}

.footer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.9) 100%);
  z-index: -1;
}

.footer h5 {
  color: #fff;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.8rem;
}

.footer h5::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer ul li {
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
}

.footer ul li:hover {
  transform: translateX(5px);
}

.footer ul li a:hover {
  color: var(--primary-color) !important;
  padding-left: 5px;
}

.social-links a {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  margin-right: 10px;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background: var(--primary-color);
  transform: translateY(-3px);
}

.footer-about p {
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
}

hr {
  border-color: rgba(255, 255, 255, 0.1);
}

/* Responsive adjustments */
@media (max-width: 991.98px) {
  .footer {
    text-align: center;
  }
  
  .footer h5::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .social-links {
    justify-content: center;
  }
}
</style>
