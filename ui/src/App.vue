<script setup>
import { ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import LoginPopup from '@/components/LoginPopup.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import MainContent from '@/components/layout/MainContent.vue'

const themeStore = useThemeStore()
const isLoginPopupVisible = ref(false)

const openLoginPopup = () => {
  isLoginPopupVisible.value = true
}

const closeLoginPopup = () => {
  isLoginPopupVisible.value = false
}

// Initialize theme
if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('data-theme', themeStore.isDark ? 'dark' : 'light')
}
</script>

<template>
  <div id="page">
    <AppHeader @open-login="openLoginPopup" />
    <MainContent />
    <AppFooter />
    <LoginPopup v-if="isLoginPopupVisible" @close="closeLoginPopup" />
  </div>
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

<style scoped>
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

/* .btn-login:hover {
  background-color: var(--border-color);
  color: var(--text-color-secondary);
} */

.btn-login i {
  font-size: 1.2rem;
}

.navbar {
  border-bottom: 1px solid var(--border-color);
}

.content-section {
  padding: 1rem 0;
}

main {
  transition: var(--transition);
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
