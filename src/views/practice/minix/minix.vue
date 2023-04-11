<template>
  <!-- <div style="height: 200px">P</div> -->

  {{ x }}
</template>

<script setup lang="ts">
  import minix from './minix';

  //   console.log(minix());

  let { x, changeOn } = minix();
</script>
<style scoped>
  div {
    background: red;
    width: 300px;
  }
</style>
