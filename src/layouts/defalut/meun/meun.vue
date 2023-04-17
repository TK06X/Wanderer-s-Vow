<template>
  <div class="banner">
    <div class="navbar">
      <img src="@/../public/logo.png" class="logo" />

      <ul>
        <li><a>666</a></li>
        <li><a>666</a></li>
        <li><a>666</a></li>
        <li><a>666</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router';

  const current = ref(0);

  onMounted(() => {
    window.addEventListener('scroll', function () {
      var header: any;
      header = document.querySelector('header');
      header.classList.toggle('small', window.scrollY > 0);
    });
  });
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
      url(@/../public/000.jpg);

    background-size: cover;
    background-position: center;
  }
  .logo {
    width: 120px;
    height: 120px;
    cursor: pointer;
  }

  .navbar {
    width: 85%;
    margin: auto;
    padding: 35px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .navbar ul li {
    list-style: none;
    display: inline-block;
    margin: 0 20px;
  }
  .navbar ul li a {
    text-decoration: none;
    color: #fff;
  }
  .navbar ul li::after {
    content: '';
  }
</style>
