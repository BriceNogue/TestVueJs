<template>
    <div class="LayoutDefault">
        <Header />
        <main class="LayoutDefault__main">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style></style>