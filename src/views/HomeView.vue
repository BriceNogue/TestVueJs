<script>
import { store } from '../stores/store';
export default {
  mounted() {
    console.log('Home: ', store.isConnected);
  }
}
</script>

<template>
  <main>
    <h1>Home</h1>
  </main>
</template>
