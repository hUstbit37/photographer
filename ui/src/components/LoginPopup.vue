<template>
  <div class="login-popup-overlay" @click.self="$emit('close')">
    <div class="login-popup">
      <button class="close-btn" @click="$emit('close')">&times;</button>
      <h3>Login</h3>
      <p>Sign in to continue</p>
      <button class="google-login-btn">
        <i class="bi bi-google"></i>
        <span>Sign in with Google</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(['close'])
</script>

<style scoped>
.login-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
  backdrop-filter: blur(8px);
}

.login-popup {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  width: 90%;
  max-width: 380px;
  border: 1px solid #e0e0e0;
  color: #333;
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2.2rem;
  line-height: 1;
  cursor: pointer;
  color: #aaa;
  transition: color 0.2s;
}

.close-btn:hover {
    color: #333;
}

h3 {
  margin-top: 0;
  margin-bottom: 0.75rem;
  font-size: 1.8rem;
  font-weight: 700;
  color: #333;
}

p {
  margin-bottom: 2rem;
  color: #666;
  font-size: 1rem;
}

.google-login-btn {
  background-color: #fff;
  color: #444;
  border: 1px solid #ddd;
  padding: 14px 28px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.google-login-btn:hover {
  background-color: #f7f7f7;
  border-color: #ccc;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.google-login-btn i {
  font-size: 1.5rem;
  color: #DB4437;
}
</style>
