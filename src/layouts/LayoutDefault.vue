<template>
    <div class="LayoutDefault">
        <div>
            <header></header>
        </div>
        <main class="LayoutDefault__main">
            <slot />
        </main>
        <div>
            <footer></footer>
        </div>
    </div>
</template>

<script>
import Header from '../components/header.vue';
import Footer from '../components/Footer.vue';
export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style lang="">
    
</style>