<template>
  <div class="services-view">
    <!-- Hero Section -->
    <section class="page-header" data-aos="fade-in" data-aos-duration="1000">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>Our Services</h1>
            <p class="lead">Professional photography services tailored to your needs</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section section-padding" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8 text-center">
            <div class="section-header">
              <h2>What We Offer</h2>
              <p class="lead text-muted">Explore our range of professional photography services</p>
              <div class="divider mx-auto my-3"></div>
            </div>
          </div>
        </div>

        <div class="row g-4">
          <div 
            v-for="(service, index) in services" 
            :key="service.id" 
            class="col-md-6 col-lg-4"
            :data-aos="'fade-up'" :data-aos-delay="100 * (index % 3)"
          >
            <div class="service-card h-100">
              <div class="service-icon">
                <i class="bi" :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p class="text-muted">{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, index) in service.features" :key="index">
                  <i class="bi bi-check-circle-fill text-primary me-2"></i>
                  {{ feature }}
                </li>
              </ul>
              <div class="service-footer mt-4">
                <div class="price">
                  <span class="h3">${{ service.price }}</span>
                  <span class="text-muted">/ {{ service.pricingUnit }}</span>
                </div>
                <RouterLink :to="`/contact?service=${service.id}`" class="btn btn-outline-primary">
                  Book Now
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Process Section -->
    <section class="process-section bg-light1 py-5" data-aos="fade-up" data-aos-duration="1000">
      <div class="container">
        <div class="row justify-content-center mb-5">
          <div class="col-lg-8 text-center">
            <div class="section-header">
              <h2>Our Process</h2>
              <p class="lead text-muted">How we work to capture your perfect moments</p>
              <div class="divider mx-auto my-3"></div>
            </div>
          </div>
        </div>

        <div class="process-steps">
          <div class="process-step" v-for="(step, index) in processSteps" :key="index" 
               :data-aos="'fade-left'" :data-aos-delay="200 * index">
            <div class="step-number">0{{ index + 1 }}</div>
            <div class="step-content">
              <h4>{{ step.title }}</h4>
              <p class="text-muted mb-0">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA Section -->
    <section class="cta-section py-5" data-aos="zoom-in" data-aos-duration="1000">
      <div class="container">
        <div class="cta-content text-center p-5 rounded-3">
          <h2 class="text-white mb-4">Ready to capture your special moments?</h2>
          <p class="lead text-white-50 mb-4">Get in touch to book your session or ask any questions.</p>
          <div class="d-flex justify-content-center gap-3">
            <RouterLink to="/contact" class="btn btn-light btn-lg">
              <i class="bi bi-envelope me-2"></i>Contact Us
            </RouterLink>
            <a href="tel:+1234567890" class="btn btn-outline-light btn-lg">
              <i class="bi bi-telephone me-2"></i>Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          id: 'wedding',
          title: 'Wedding Photography',
          icon: 'bi-heart',
          description: 'Capture the magic of your special day with our professional wedding photography services.',
          features: [
            'Full day coverage',
            'Online gallery',
            '200+ edited photos',
            'Pre-wedding consultation',
            'USB with all images'
          ],
          price: '1,999',
          pricingUnit: 'per event'
        },
        {
          id: 'portrait',
          title: 'Portrait Sessions',
          icon: 'bi-person',
          description: 'Professional portrait sessions for individuals, couples, and families.',
          features: [
            '1-2 hour session',
            '1-2 locations',
            '30+ edited photos',
            'Online gallery',
            'Print release'
          ],
          price: '299',
          pricingUnit: 'per session',
          featured: true
        },
        {
          id: 'event',
          title: 'Event Coverage',
          icon: 'bi-camera',
          description: 'Professional photography for corporate events, parties, and special occasions.',
          features: [
            'Up to 4 hours coverage',
            '100+ edited photos',
            'Online gallery',
            'Fast turnaround',
            'Print release'
          ],
          price: '899',
          pricingUnit: 'per event'
        },
        {
          id: 'commercial',
          title: 'Commercial Photography',
          icon: 'bi-briefcase',
          description: 'High-quality images for businesses, products, and advertising.',
          features: [
            'Customized to your needs',
            'Professional lighting setup',
            'High-resolution images',
            'Fast delivery',
            'Commercial usage rights'
          ],
          price: '499',
          pricingUnit: 'starting from'
        },
        {
          id: 'real-estate',
          title: 'Real Estate',
          icon: 'bi-house',
          description: 'Showcase your property with stunning professional photography.',
          features: [
            'Interior & exterior shots',
            'HDR processing',
            'Virtual tour options',
            'Fast 24h delivery',
            'Unlimited usage'
          ],
          price: '199',
          pricingUnit: 'per property'
        },
        {
          id: 'custom',
          title: 'Custom Package',
          icon: 'bi-stars',
          description: 'Need something special? Let\'s create a custom package just for you.',
          features: [
            'Tailored to your needs',
            'Flexible scheduling',
            'Custom deliverables',
            'Personal consultation',
            'Special requests'
          ],
          price: 'Contact',
          pricingUnit: 'for a quote'
        }
      ],
      processSteps: [
        {
          title: 'Consultation',
          description: 'We discuss your vision, requirements, and plan the perfect shoot.'
        },
        {
          title: 'Planning',
          description: 'We handle all the details including location scouting and scheduling.'
        },
        {
          title: 'Photo Session',
          description: 'Professional photography session with expert guidance and direction.'
        },
        {
          title: 'Editing',
          description: 'Careful selection and professional editing of your images.'
        },
        {
          title: 'Delivery',
          description: 'Receive your high-quality images in your preferred format.'
        }
      ]
    }
  }
}
</script>


<style scoped>
.page-header {
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1920') center/cover no-repeat;
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
  color: var(--text-color);
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

.service-card {
  background: var(--card-bg);
  border-radius: 8px;
  padding: 2.5rem 2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: rgba(52, 152, 219, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 1.75rem;
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.service-card p {
  color: #6c757d;
  margin-bottom: 1.5rem;
  text-align: center;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  flex-grow: 1;
}

.service-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
}

.service-footer {
  margin-top: auto;
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.price {
  margin-bottom: 1.25rem;
}

.price .h3 {
  color: var(--primary-color);
  font-weight: 700;
}

/* Process Section */
.process-section {
  /* background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); */
  background-color: var(--card-bg);
}

.process-steps {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  margin: 0 -15px;
}

.process-steps::before {
  content: '';
  position: absolute;
  top: 40px;
  left: 15px;
  right: 15px;
  height: 2px;
  background: #dee2e6;
  z-index: 1;
}

.process-step {
  flex: 0 0 20%;
  max-width: 20%;
  padding: 0 15px;
  position: relative;
  z-index: 2;
  text-align: center;
}

.step-number {
  width: 80px;
  height: 80px;
  background: white;
  border: 2px solid var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 auto 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.process-step:hover .step-number {
  background: var(--primary-color);
  color: white;
  transform: scale(1.1);
}

.step-content h4 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #3498db 0%, #2c3e50 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.cta-content {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-section h2 {
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.cta-section .lead {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

/* Responsive Adjustments */
@media (max-width: 1199.98px) {
  .process-step {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
    margin-bottom: 3rem;
  }
  
  .process-steps::before {
    display: none;
  }
}

@media (max-width: 991.98px) {
  .page-header {
    padding: 6rem 0 3rem;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .service-card {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 767.98px) {
  .process-step {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  .page-header {
    padding: 5rem 0 2.5rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .section-padding {
    padding: 4rem 0;
  }
  
  .cta-content {
    padding: 2rem !important;
  }
}

@media (max-width: 575.98px) {
  .process-step {
    flex: 0 0 100%;
    max-width: 100%;
  }
  
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 0.75rem;
  }
  
  .d-flex.gap-3 {
    flex-direction: column;
    gap: 0.75rem !important;
  }
}
</style>
