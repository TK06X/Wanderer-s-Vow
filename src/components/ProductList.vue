<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center mb-4">Our Products</h2>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ProductList',
    props: {
      products: {
        type: Array,
        required: true,
      },
    },
  });
</script>
