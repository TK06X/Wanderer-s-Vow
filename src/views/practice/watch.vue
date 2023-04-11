<script setup lang="ts">
  import { ref, reactive, watchEffect, watch } from 'vue';

  // let obj = reactive({
  //   str: computed(() => {
  //     return 0;
  //   }),
  // });

  let obj = reactive({
    a: 1,
    arr: ['a', 'b'],
  });

  watch(obj.arr, (newVal, oldVal) => {
    console.log(newVal, oldVal);
  });

  // watch(obj.arr, (newVal, oldVal) => {
  //   console.log(newVal, oldVal);
  // });
  let msg = ref(0);
  let str = ref(0);
  // 多个监听值  （）=> 值
  watch([msg, str, () => obj.arr], (newVal, oldVal) => {});

  //   watchEffect  1 初始化也会执行   2 符合watch内容
  watchEffect(() => {
    // console.log(msg.value);
  });
</script>

<script setup lang="ts"></script>
<template>
  <!-- <input v-model="msg" />
  <input v-model="obj.a" />
  <input v-model="obj.arr" /> -->

  <A></A>
</template>
