<template>
  <div class="contact-view">
    <!-- Hero Section -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Get In Touch</h1>
            <p class="lead">We'd love to hear from you. Reach out to book a session or ask any questions.</p>
          </div>
        </div>
      </div>
    </section>


    <!-- Contact Section -->
    <section class="contact-section section-padding">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8 text-center">
            <div class="section-header">
              <h2>Contact Us</h2>
              <p class="lead text-muted">We're here to help and answer any questions you might have</p>
              <div class="divider mx-auto my-3"></div>
            </div>
          </div>
        </div>

        <div class="row g-5">
          <!-- Contact Form -->
          <div class="col-lg-7">
            <div class="contact-form bg-white1 p-4 p-lg-5 rounded-3 shadow-sm">
              <div v-if="formSubmitted" class="alert alert-success">
                <i class="bi bi-check-circle-fill me-2"></i>
                Thank you for your message! We'll get back to you soon.
              </div>
              
              <form @submit.prevent="submitForm" v-else>
                <div class="row">
                  <div class="col-md-6 mb-4">
                    <label for="name" class="form-label">Your Name <span class="text-danger">*</span></label>
                    <input 
                      type="text" 
                      class="form-control form-control-lg" 
                      id="name" 
                      v-model="formData.name" 
                      required
                      placeholder="John Doe"
                    >
                  </div>
                  <div class="col-md-6 mb-4">
                    <label for="email" class="form-label">Email Address <span class="text-danger">*</span></label>
                    <input 
                      type="email" 
                      class="form-control form-control-lg" 
                      id="email" 
                      v-model="formData.email" 
                      required
                      placeholder="your@email.com"
                    >
                  </div>
                </div>

                <div class="mb-4">
                  <label for="subject" class="form-label">Subject</label>
                  <input 
                    type="text" 
                    class="form-control form-control-lg" 
                    id="subject" 
                    v-model="formData.subject"
                    placeholder="How can we help?"
                  >
                </div>

                <div class="mb-4">
                  <label for="service" class="form-label">Service Interested In</label>
                  <select class="form-select form-select-lg" id="service" v-model="formData.service">
                    <option value="">Select a service</option>
                    <option v-for="service in services" :key="service.id" :value="service.id">
                      {{ service.title }}
                    </option>
                  </select>
                </div>

                <div class="mb-4">
                  <label for="message" class="form-label">Your Message <span class="text-danger">*</span></label>
                  <textarea 
                    class="form-control form-control-lg" 
                    id="message" 
                    rows="5" 
                    v-model="formData.message" 
                    required
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div class="d-grid">
                  <button type="submit" class="btn btn-primary btn-lg" :disabled="formSubmitting">
                    <span v-if="formSubmitting">
                      <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Sending...
                    </span>
                    <span v-else>
                      <i class="bi bi-send-fill me-2"></i>Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-5">
            <div class="contact-info rounded-3 shadow-sm">
              <div class="info-item mb-5">
                <h3 class="h4 mb-4">Contact Information</h3>
                <p class="mb-4">Feel free to get in touch with us. We are always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                
                <ul class="list-unstyled">
                  <li class="d-flex mb-3">
                    <div class="icon-box me-3">
                      <i class="bi bi-geo-alt-fill text-primary"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Our Location</h6>
                      <a href="https://maps.app.goo.gl/2V38JyAQjsTA2Zxu7" target="_blank" class="text-muted">
                        123 Photography Street,<br>Vinh city, Nghe An province, Viet Nam
                      </a>
                    </div>
                  </li>
                  <li class="d-flex mb-3">
                    <div class="icon-box me-3">
                      <i class="bi bi-envelope-fill text-primary"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Email Us</h6>
                      <a href="mailto:info@photofolio.com" class="text-muted">info@photofolio.com</a><br>
                      <a href="mailto:bookings@photofolio.com" class="text-muted">bookings@photofolio.com</a>
                    </div>
                  </li>
                  <li class="d-flex mb-3">
                    <div class="icon-box me-3">
                      <i class="bi bi-telephone-fill text-primary"></i>
                    </div>
                    <div>
                      <h6 class="mb-0">Call Us</h6>
                      <a href="tel:+11234567890" class="text-muted">+1 (123) 456-7890</a><br>
                      <a href="tel:+1987654321" class="text-muted">+1 (987) 654-3210</a>
                    </div>
                  </li>
                </ul>

                <div class="social-links mt-4">
                  <h6 class="mb-3">Follow Us</h6>
                  <a href="#" class="me-3"><i class="bi bi-facebook fs-4"></i></a>
                  <a href="#" class="me-3"><i class="bi bi-instagram fs-4"></i></a>
                  <a href="#" class="me-3"><i class="bi bi-twitter fs-4"></i></a>
                  <a href="#" class="me-3"><i class="bi bi-pinterest fs-4"></i></a>
                  <a href="#" class="me-3"><i class="bi bi-youtube fs-4"></i></a>
                </div>
              </div>

              <div class="business-hours bg-light1 p-4 rounded-3">
                <h4 class="h5 mb-4">Business Hours</h4>
                <ul class="list-unstyled mb-0">
                  <li class="d-flex justify-content-between py-2 border-bottom">
                    <span>Monday - Friday</span>
                    <span class="text-muted">9:00 AM - 6:00 PM</span>
                  </li>
                  <li class="d-flex justify-content-between py-2 border-bottom">
                    <span>Saturday</span>
                    <span class="text-muted">10:00 AM - 4:00 PM</span>
                  </li>
                  <li class="d-flex justify-content-between py-2">
                    <span>Sunday</span>
                    <span class="text-muted">Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="ratio ratio-21x9">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120908.0196616731!2d105.61458232545161!3d18.736752048345767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139ce640b5a1dad%3A0xf8266890856bbaa1!2zVHAuIFZpbmgsIE5naOG7hyBBbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1749632594190!5m2!1svi!2s" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy"
          title="Our Location on Map"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        service: '',
        message: ''
      },
      formSubmitting: false,
      formSubmitted: false,
      services: [
        { id: 'wedding', title: 'Wedding Photography' },
        { id: 'portrait', title: 'Portrait Sessions' },
        { id: 'event', title: 'Event Coverage' },
        { id: 'commercial', title: 'Commercial Photography' },
        { id: 'real-estate', title: 'Real Estate' },
        { id: 'custom', title: 'Custom Package' }
      ]
    }
  },
  created() {
    // Check for service parameter in URL (from services page)
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam) {
      this.formData.service = serviceParam;
    }
  },
  methods: {
    async submitForm() {
      this.formSubmitting = true;
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // In a real app, you would send the form data to your backend
        // Example:
        // await axios.post('/api/contact', this.formData);
        
        // Show success message
        this.formSubmitted = true;
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          subject: '',
          service: '',
          message: ''
        };
        
        // Reset form after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
        
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error sending your message. Please try again later.');
      } finally {
        this.formSubmitting = false;
      }
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat;
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

.section-padding {
  padding: 6rem 0;
}

.section-header {
  margin-bottom: 3rem;
}

.section-header h2 {
  position: relative;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 1rem;
}

.divider {
  width: 60px;
  height: 3px;
  background: var(--primary-color);
  margin: 0 auto;
}

.contact-form {
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: var(--text-color);
  background: var(--card-bg);
  form {
    color: var(--text-color);
    background: var(--card-bg);
  }
}

.contact-info {
  background: var(--card-bg);
  .info-item {
    background: var(--card-bg);
    color: var(--text-color);
  }
  .business-hours {
    color: var(--text-color);
  }
}

.form-control:focus,
.form-select:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 0.25rem rgba(52, 152, 219, 0.25);
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  padding: 0.75rem 2rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
  border-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.info-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
}

.icon-box {
  width: 40px;
  height: 40px;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-color);
  flex-shrink: 0;
}

.social-links a {
  color: #6c757d;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--primary-color);
}

.business-hours {
  margin-top: 2rem;
}

.map-section {
  width: 100%;
  overflow: hidden;
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .page-header {
    padding: 6rem 0 3rem;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .contact-form {
    margin-bottom: 3rem;
  }
}

@media (max-width: 767.98px) {
  .page-header {
    padding: 5rem 0 2.5rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .section-padding {
    padding: 4rem 0;
  }
  
  .info-item {
    padding: 1.5rem;
  }
}

@media (max-width: 575.98px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .btn-lg {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }
  
  .social-links a {
    margin-right: 1rem !important;
  }
}
</style>
