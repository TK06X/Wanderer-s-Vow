<template>
  <div class="carousel">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :class="{ active: index === current }"
    />
  </div>
</template>

<script lang="ts" setup name="home">
  // import { defineComponent, ref, onMounted } from 'vue';
  import image1 from '@/assets/week-picture/1.jpg';
  import image2 from '@/assets/week-picture/2.jpg';
  import image3 from '@/assets/week-picture/3.jpg';
  import image4 from '@/assets/week-picture/4.jpg';
  import image5 from '@/assets/week-picture/5.jpg';
  import image6 from '@/assets/week-picture/7.jpg';

  const images = [image1, image2, image3, image4, image5, image6];
  const current = ref(0);
  const router = useRoute();

  // 自动切换图片
  const autoSwitch = () => {
    setInterval(() => {
      current.value = (current.value + 1) % images.length;
    }, 1000);
  };

  onMounted(() => {
    autoSwitch();
  });

  // return {
  //   images,
  //   current,
  // };
  // },
</script>

<style scoped>
  .carousel {
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
  }

  .active {
    opacity: 1;
  }

  img {
    opacity: 0;
    transition: opacity 1s ease-in-out;
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
  }

  .active {
    opacity: 1;
  }
</style>
