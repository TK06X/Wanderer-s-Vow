<template>
  <header class="header">
    <a :href="homeData.url" class="logo">{{ homeData.websiteTitle }}</a>

    <nav class="navbar">
      <a href="#" class="active item" style="--i: 1">Home</a>
      <a href="#" class="item" style="--i: 2">About</a>
      <a href="#" class="item" style="--i: 3">Skills</a>
      <a href="#" class="item" style="--i: 4">Portfolio</a>
      <a href="#" class="item" style="--i: 5">Contact</a>
      <div href="#" class="item" style="--i: 6">登录/注册</div>
    </nav>
  </header>

  <section class="home">
    <div class="home-content">
      <h3>{{ homeData.data.title }}</h3>
      <h1>Call Me Phoenix</h1>
      <h3>And I'm a <span class="multiple-text"></span></h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing dlit . Accusantium,ab autem repellat
        reiciendis ipsam perspicictis.
      </p>
      <div class="social-media">
        <a href="#" style="--i: 7"><i class="bx bxl-tiktok"></i></a>
        <a href="#" style="--i: 8"><i class="bx bxl-facebook-circle"></i></a>
        <a href="#" style="--i: 9"><i class="bx bxl-google"></i></a>
        <a href="#" style="--i: 10"><i class="bx bxl-linkedin-square"></i></a>
      </div>
      <a href="#" class="btn">Download CV</a>
    </div>
    <div class="home-img">
      <!-- <img :src="@/../public/week-picture/``.jpg" alt="" /> -->
    </div>
  </section>
</template>

<script setup lang="ts" name="home">
  import homeData from './home';
  // import  url('https://unpkg.com/typed.js@2.0.132/dist/typed.umd.js')
  let dateStr = ref();

  onMounted(() => {
    dateStr.value = new Date().getDay();
  });
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: #1f242d;
    color: #fff;
  }

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px 10%;
    background: transparent;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
  }

  .logo {
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    cursor: default;
    opacity: 0;
    animation: slideRight 1s ease forwards;
  }

  .navbar a {
    display: inline-block;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px;
    opacity: 0;
    transition: 0.3s;
    animation: slideTop 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .navbar a:hover,
  .navbar a.active {
    color: #b7b2a9;
  }
  /*  */
  .navbar div {
    display: inline-block;
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px;
    opacity: 0;
    transition: 0.3s;
    animation: slideTop 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .navbar div:hover,
  .navbar div.active {
    color: #b7b2a9;
  }

  .home {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 10% 0;
  }

  .home-content {
    max-width: 600px;
  }

  .home-content h3 {
    font-size: 32px;
    font-weight: 700;
    opacity: 0;
    animation: slideBottom 1s ease forwards;
    animation-delay: 0.7s;
  }

  .home-content h3:nth-of-type(2) {
    margin-bottom: 30px;
    opacity: 0;
    animation: slideTop 1s ease forwards;
    animation-delay: 0.7s;
  }

  .home-content h3 span {
    color: #b7b2a9;
  }

  .home-content h1 {
    font-size: 56px;
    font-weight: 700;
    margin: -3px 0;
    opacity: 0;
    animation: slideRight 1s ease forwards;
    animation-delay: 1s;
  }

  .home-content p {
    font-size: 16px;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: 0.7s;
  }

  .home-img img {
    max-width: 450px;
    border-radius: 50%;
    margin-right: -20px;
    box-shadow: 0 0 20px #b7b2a9;
    opacity: 0;
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    animation-delay: 2s, 3s;
  }

  .social-media a {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: transparent;
    border: 2px solid #b7b2a9;
    border-radius: 50%;
    color: #b7b2a9;
    font-size: 20px;
    text-decoration: none;
    margin: 30px 15px 30px 0;
    transition: 0.5s ease;
    opacity: 0;
    animation: slideLeft 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .social-media a:hover {
    background: #b7b2a9;
    color: #1f242d;
    box-shadow: 0 0 20px #b7b2a9;
  }

  .btn {
    display: inline-block;
    padding: 12px 28px;
    background: #b7b2a9;
    text-decoration: none;
    border-radius: 40px;
    box-shadow: 0 0 10px #b7b2a9;
    font-size: 16px;
    color: #1f242d;
    letter-spacing: 1px;
    font-weight: 600;
    transition: 0.5s ease;
    opacity: 0;
    animation: slideTop 1s ease forwards;
    animation-delay: 2s;
  }

  .btn:hover {
    box-shadow: 0 0 20px #b7b2a9;
  }

  .btn:active {
    background: none;
    color: #b7b2a9;
    border: 2px solid #b7b2a9;
  }

  /* 动画 */

  @keyframes slideRight {
    0% {
      transform: translateX(-100px);
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideLeft {
    0% {
      transform: translateX(100px);
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideTop {
    0% {
      transform: translateY(100px);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideBottom {
    0% {
      transform: translateY(-100px);
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes floatImage {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-24px);
    }

    100% {
      transform: translateY(0);
    }
  }
</style>
