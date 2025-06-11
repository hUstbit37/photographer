<template>
  <div class="about-view">
    <!-- Hero Section -->
    <section class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <h1>About Me</h1>
            <p class="lead">Capturing moments that last a lifetime</p>
          </div>
        </div>
      </div>
    </section>


    <!-- About Section -->
    <section class="about-section section-padding">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="about-image">
              <img 
                src="https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Photographer" 
                class="img-fluid rounded-3 shadow"
              >
              <div class="experience-badge">
                <span class="h2 mb-0">10+</span>
                <span>Years Experience</span>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="section-header mb-4">
              <h2>Hello, I'm <span class="text-primary">Alex Johnson</span></h2>
              <div class="divider my-3"></div>
            </div>
            <p class="lead mb-4">
              I'm a passionate photographer dedicated to capturing the beauty in every moment. 
              With over a decade of experience, I specialize in wedding, portrait, and event photography.
            </p>
            <p class="mb-4">
              My journey in photography began when I received my first camera at the age of 15. 
              What started as a hobby quickly turned into a lifelong passion and career. 
              I believe that every picture tells a story, and I strive to capture the authentic emotions 
              and unique personalities of my subjects.
            </p>
            <div class="row g-4 mb-4">
              <div class="col-sm-6" v-for="(detail, index) in aboutDetails" :key="index">
                <div class="d-flex">
                  <div class="me-3">
                    <i class="bi" :class="detail.icon"></i>
                  </div>
                  <div>
                    <h5 class="mb-1">{{ detail.title }}</h5>
                    <p class="mb-0 text-muted">{{ detail.value }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-wrap gap-3">
              <a href="#contact" class="btn btn-primary">
                <i class="bi bi-envelope me-2"></i>Contact Me
              </a>
              <a href="#" class="btn btn-outline-primary">
                <i class="bi bi-download me-2"></i>Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Skills Section -->
    <section class="skills-section bg-light py-5">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2>My Skills</h2>
          <p class="text-muted">Professional skills in photography and editing</p>
        </div>
        <div class="row g-4">
          <div class="col-md-6" v-for="(skill, index) in skills" :key="index">
            <div class="skill-item">
              <div class="d-flex justify-content-between mb-2">
                <h6 class="mb-0">{{ skill.name }}</h6>
                <span class="text-muted">{{ skill.percentage }}%</span>
              </div>
              <div class="progress" style="height: 8px;">
                <div 
                  class="progress-bar bg-primary" 
                  role="progressbar" 
                  :style="{ width: skill.percentage + '%' }" 
                  :aria-valuenow="skill.percentage" 
                  aria-valuemin="0" 
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Testimonials Section -->
    <section class="testimonials-section section-padding">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2>Client Testimonials</h2>
          <p class="text-muted">What my clients say about my work</p>
        </div>
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <div class="testimonial-slider">
              <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-item">
                <div class="testimonial-content text-center">
                  <div class="mb-4">
                    <i class="bi bi-quote display-4 text-primary"></i>
                  </div>
                  <p class="lead mb-4">{{ testimonial.content }}</p>
                  <div class="testimonial-author">
                    <img :src="testimonial.avatar" :alt="testimonial.name" class="rounded-circle mb-2">
                    <h5 class="mb-1">{{ testimonial.name }}</h5>
                    <p class="text-muted mb-0">{{ testimonial.role }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  name: 'AboutView',
  data() {
    return {
      aboutDetails: [
        { icon: 'bi-person', title: 'Name', value: 'Alex Johnson' },
        { icon: 'bi-envelope', title: 'Email', value: 'alex@example.com' },
        { icon: 'bi-phone', title: 'Phone', value: '+1 234 567 890' },
        { icon: 'bi-geo-alt', title: 'Location', value: 'New York, USA' },
        { icon: 'bi-briefcase', title: 'Freelance', value: 'Available' },
        { icon: 'bi-award', title: 'Experience', value: '10+ Years' }
      ],
      skills: [
        { name: 'Portrait Photography', percentage: 95 },
        { name: 'Wedding Photography', percentage: 90 },
        { name: 'Photo Editing', percentage: 85 },
        { name: 'Lighting', percentage: 88 },
        { name: 'Photojournalism', percentage: 80 },
        { name: 'Video Editing', percentage: 75 }
      ],
      testimonials: [
        {
          content: 'Alex captured our wedding day perfectly. The photos are absolutely stunning and really captured the emotion of the day. We will cherish them forever!',
          name: 'Sarah & Michael',
          role: 'Wedding Clients',
          avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        {
          content: 'Working with Alex was an amazing experience. The attention to detail and ability to capture the perfect moment is truly remarkable. Highly recommended!',
          name: 'David Wilson',
          role: 'Corporate Client',
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          content: 'The family portraits we had done are beautiful. Alex made us all feel so comfortable and the results were better than we could have imagined.',
          name: 'The Johnson Family',
          role: 'Family Portraits',
          avatar: 'https://randomuser.me/api/portraits/women/45.jpg'
        }
      ]
    }
  },
  mounted() {
    // Initialize testimonial slider after component is mounted
    this.initTestimonialSlider();
  },
  methods: {
    initTestimonialSlider() {
      // This would be implemented with a proper slider library in a real project
      // For example: new Swiper('.testimonial-slider', { ... });
      console.log('Testimonial slider initialized');
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

.about-section {
  padding: 6rem 0;
  color: var(--text-color);
}

.about-image {
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

.experience-badge {
  position: absolute;
  bottom: -25px;
  right: 30px;
  background: var(--primary-color);
  color: white;
  padding: 1.5rem 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(52, 152, 219, 0.3);
  width: 150px;
}

.experience-badge span:first-child {
  display: block;
  font-weight: 700;
  line-height: 1;
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
  display: inline-block;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skills-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.testimonials-section {
  background-color: #fff;
}

.testimonial-item {
  background: white;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin: 0 15px;
}

.testimonial-content {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-author img {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 3px solid var(--primary-color);
  padding: 2px;
}

.testimonial-author h5 {
  margin-top: 1rem;
  margin-bottom: 0.25rem;
}

/* Responsive Adjustments */
@media (max-width: 991.98px) {
  .page-header {
    padding: 6rem 0 3rem;
  }
  
  .page-header h1 {
    font-size: 2.5rem;
  }
  
  .about-section {
    padding: 4rem 0;
  }
  
  .experience-badge {
    right: 20px;
    width: 130px;
    padding: 1rem 0.75rem;
  }
}

@media (max-width: 767.98px) {
  .page-header {
    padding: 5rem 0 2.5rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .about-image {
    margin-bottom: 3rem;
  }
  
  .experience-badge {
    right: 0;
    left: 0;
    margin: 0 auto;
    width: 150px;
    bottom: -25px;
  }
  
  .testimonial-item {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 575.98px) {
  .page-header h1 {
    font-size: 1.75rem;
  }
  
  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
  
  .testimonial-item {
    padding: 1.5rem 1rem;
  }
}
</style>
