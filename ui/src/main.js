import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/fixed.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useThemeStore } from './stores/theme'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Initialize AOS (Animate On Scroll)
app.use(AOS.init({
  // Global settings:
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  
  // Settings that can be overridden per element:
  offset: 120,
  delay: 0,
  duration: 400,
  easing: 'ease',
  once: true, // Animation only happens once when scrolling down
  mirror: false,
  anchorPlacement: 'top-bottom',
}))

// Initialize theme store and set initial theme
const themeStore = useThemeStore()
const initialTheme = themeStore.isDark ? 'dark' : 'light'
document.documentElement.setAttribute('data-theme', initialTheme)

// Add global properties if needed
app.config.globalProperties.$filters = {
  formatDate(value) {
    if (!value) return ''
    return new Date(value).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
}

app.mount('#app')
