<template>
  <div class="home-img">
    <!-- <img :src="`@/../public/week-picture/${dateStr}.jpg`" alt="" /> -->
  </div>

  <header class="header">
    <a :href="homeData.url" class="logo">{{ homeData.websiteTitle }}</a>

    <!-- <a-menu v-model:selectedKeys="current" mode="horizontal"> </a-menu> -->

    <!-- <nav class="navbar">
      <a href="#" class="active item" style="--i: 1">Home</a>
      <a href="#" class="item" style="--i: 2">About</a>
      <a href="#" class="item" style="--i: 3">Skills</a>
      <a href="#" class="item" style="--i: 4">Portfolio</a>
      <a href="#" class="item" style="--i: 5">sky</a>
      <span class="item" style="--i: 6" @click="onLoginClick">登录/注册</span>
    </nav> -->
  </header>

  <section class="home">
    <div class="home-content">
      <h3>{{ homeData.data.title }}</h3>
      <h1>Call Me Phoenix</h1>
      <h3>And I'm a <span class="multiple-text"></span></h3>
      <p style="line-height: 1.8">我真的做对了吗？我现在的生活好像没有什么意义。 </p>
      <p style="line-height: 1.8">你已经很努力了，不要太苛求自己。 </p>
      <p style="line-height: 1.8">可是我感觉自己好像一事无成，一直在原地踏步。 </p>
      <p style="line-height: 1.8">别忘了你曾经的梦想和目标，你一定能找到属于自己的方向。 </p>
      <p style="line-height: 1.8">我会继续努力的，希望有一天能找到自己真正的归宿。 </p>
      <div class="social-media">
        <a href="#" style="--i: 7"><i class="bx bxl-tiktok"></i></a>
        <a href="#" style="--i: 8"><i class="bx bxl-facebook-circle"></i></a>
        <a href="#" style="--i: 9"><i class="bx bxl-google"></i></a>
        <a href="#" style="--i: 10"><i class="bx bxl-linkedin-square"></i></a>
      </div>
      <a href="#" class="btn">Download CV</a>
    </div>
    <div class="home-img">
      <img :src="`@/../public/week-picture/${dateStr}.jpg`" alt="" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import homeData from './modules/home';
  import Meun from '../defalut/meun/meun.vue';

  import { useRoute, useRouter } from 'vue-router';
  // import { ElButton } from 'element-plus';

  let dateStr = ref();
  let router = useRouter();

  onMounted(() => {
    dateStr.value = new Date().getDay();
  });

  const handleSelect = (index?: any, indexPath?: string) => {
    router.push(index);

    // useRouter().push(index);
  };
  let onLoginClick = () => {};
</script>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;4 00;500;600;700&display=swap'); */
  /* @import url('https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'); */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    background: #000000;
    color: #ffffff;
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
  .el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu-item {
    background-color: transparent !important;
  }

  .navbar .el-menu-item {
    display: inline-block;
    font-size: 18px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 35px;
    opacity: 0;
    transition: 0.3s;
    animation: slideTop 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));
  }

  .navbar .el-menu-item:hover,
  .navbar .el-menu-item.active {
    color: inherit !important;
    border-bottom: solid 1px var(--el-menu-border-color);
  }

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
    /* opacity: 0.1; */
    animation: zoomIn 1s ease forwards, floatImage 4s ease-in-out infinite;
    /* animation-delay: 2s, 3s; */
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
      transform: scale(1); /* 元素放大缩小  2 是两倍 */
    }
  }

  @keyframes floatImage {
    0% {
      transform: translateY(0);
      opacity: 0.4;
    }

    50% {
      transform: translateY(-48px);
      /* xy轴线横移 */
      opacity: 0.8;
    }

    100% {
      transform: translateY(0);
      opacity: 0.4;
    }
  }
</style>
