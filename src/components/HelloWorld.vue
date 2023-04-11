<script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue';

  // defineProps<{ msg: string }>()

  let obj = reactive({ a: 1, b: 2 });
  // let obj = { a: 1, b: 2 }
  let onCountClick = () => {
    obj.a = obj.a + 1;
  };

  onMounted(() => {
    console.log('');
  });
</script>

<template>
  啥也不是的页面

  <button @click="onCountClick"> ssss </button>
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
