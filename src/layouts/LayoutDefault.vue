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
import Header from "@/components/eshop/Header.vue";
import Footer from "@/components/eshop/Footer.vue";
export default {
    components: {
        Header,
        Footer,
    }
}
</script>

<style></style>