<template>
  <div> </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';

  export default defineComponent({
    name: 'HomePage',
    data() {
      return {
        items: [] as any,
      };
    },
    async mounted() {
      try {
        const response = await axios.get('https://some-api.com/items');
        this.items = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  });
</script>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #eee;
  }

  nav ul {
    display: flex;
    list-style: none;
  }

  nav li {
    margin-right: 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
  }

  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
  }

  .card:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
  }

  .card h2 {
    margin-top: 10px;
    font-size: 1.5rem;
  }

  .card p {
    margin-top: 10px;
    font-size: 1rem;
    color: #666;
  }
</style>
