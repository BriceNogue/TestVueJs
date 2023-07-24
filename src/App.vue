<template>
  <!---<component :is="layout">-->
  <component :is="this.$route.meta.layout || 'div'">
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>

<style scoped></style>
