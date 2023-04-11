<template>
  <div class="login-page">
    <form class="login-form" v-if="isLoginForm" @submit.prevent="onLoginSubmit">
      <h2 class="title">Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="loginData.username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="loginData.password" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <div class="switch-link">
        <span>New user?</span>
        <a href="#" @click.prevent="switchToRegister">Register now</a>
      </div>
    </form>

    <form class="register-form" v-else @submit.prevent="onRegisterSubmit">
      <h2 class="title">Register</h2>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="registerData.email" required />
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" v-model="registerData.username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="registerData.password" required />
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
      <div class="switch-link">
        <span>Already have an account?</span>
        <a href="#" @click.prevent="switchToLogin">Login now</a>
      </div>
    </form>
  </div>
</template>

<script setup name="login" lang="ts">
  import { ref } from 'vue';
  const isLoginForm = ref(true);
  const loginData = ref({ username: '', password: '' });
  const registerData = ref({ email: '', username: '', password: '' });

  let switchToRegister = () => {
    isLoginForm.value = false;
  };

  function switchToLogin() {
    isLoginForm.value = true;
  }

  function onLoginSubmit() {
    // TODO: Handle login logic
  }

  function onRegisterSubmit() {
    // TODO: Handle register logic
  }
</script>

<style scoped>
  .login-page {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to bottom right, #7f93ee, #b186fc);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-form,
  .register-form {
    width: 400px;
    background-color: white;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    animation-name: slide-in;
    animation-duration: 0.5s;
  }

  .title {
    font-size: 28px;
    margin-bottom: 30px;
    color: #9c27b0;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    width: 100%;
  }

  label {
    font-size: 16px;
    margin-bottom: 5px;
    color: #666;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    border: none;
    border-bottom: 2px solid #ccc;
    font-size: 16px;
    padding: 10px 0;
    width: 100%;
    transition: all 0.3s ease;
    background-color: transparent;
  }

  input[type='text']:focus,
  input[type='password']:focus,
  input[type='email']:focus {
    outline: none;
    border-bottom-color: #9c27b0;
  }

  .btn {
    background-color: #9c27b0;
    color: white;
    font-size: 16px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .btn:hover {
    background-color: #673ab7;
  }

  .switch-link {
    font-size: 14px;
    margin-top: 20px;
    color: #666;
  }

  .switch-link span {
    margin-right: 5px;
  }

  .switch-link a {
    color: #9c27b0;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .switch-link a:hover {
    color: #673ab7;
  }

  /* 动画 */
  @keyframes slide-in {
    from {
      transform: translateY(-80px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
