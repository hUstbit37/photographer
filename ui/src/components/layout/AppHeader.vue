<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useThemeStore } from '@/stores/theme';

const themeStore = useThemeStore();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const emit = defineEmits(['openLogin']);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 10) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }
};

onMounted(() => {
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <RouterLink class="navbar-brand d-flex align-items-center" to="/">
        <i class="bi bi-camera me-2"></i>
        <span>MyLife</span>
      </RouterLink>
      
      <button 
        class="navbar-toggler custom-toggler" 
        type="button" 
        @click="toggleMenu"
        aria-controls="navbarNav" 
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span class="hamburger">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </span>
      </button>
      
      <div 
        class="collapse navbar-collapse" 
        :class="{ 'show': isMenuOpen }" 
        id="navbarNav"
      >
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <RouterLink class="nav-link nav-link-effect" to="/">HOME</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav-link-effect" to="/gallery">GALLERY</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav-link-effect" to="/services">SERVICES</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav-link-effect" to="/about">ABOUT</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link nav-link-effect" to="/contact">CONTACT</RouterLink>
          </li>
        </ul>
        
        <div class="d-flex align-items-center ms-auto">
          <button 
            @click="themeStore.toggleTheme" 
            class="btn-icon nav-link-effect"
            :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <i v-if="themeStore.isDark" class="bi bi-sun"></i>
            <i v-else class="bi bi-moon"></i>
          </button>
          <button
            @click="$emit('openLogin')"
            class="btn-login nav-link-effect"
            aria-label="Open login popup"
          >
            <i class="bi bi-person-circle me-2"></i>
            <span>SIGN IN</span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nav-link-effect {
  position: relative;
}

.nav-link-effect::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary-color);
  transition: var(--transition);
}

.nav-link-effect:hover::after {
  width: 70%;
}

.btn-icon {
  background: none;
  border: none;
  color: var(--text-color);
  font-size: 1.5rem;
  cursor: pointer;
  padding: 8px 10px;
  line-height: 1;
  transition: color 0.2s;
}

.btn-login {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 8px;
  margin-left: 10px;
  transition: all 0.3s;
}

.btn-login i {
  font-size: 1.2rem;
}

.navbar {
  border-bottom: 1px solid var(--border-color);
}

/* Custom Hamburger Menu Styles */
.custom-toggler {
  padding: 0.5rem;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none;
  z-index: 1000;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 24px;
  position: relative;
  z-index: 1001;
}

.hamburger-line {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--text-color);
  border-radius: 1px;
  transition: all 0.3s ease-in-out;
  transform-origin: center;
}

/* Animation when menu is active (X shape) */
.custom-toggler.is-active .hamburger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.custom-toggler.is-active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: translateX(-20px);
}

.custom-toggler.is-active .hamburger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Ensure the toggler is visible on mobile */
@media (max-width: 991.98px) {
  .navbar-collapse {
    background-color: var(--bg-color);
    padding: 1rem;
    border-radius: 8px;
    margin-top: 0.5rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
}
</style>
