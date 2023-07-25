<template>
    <div>
        <div>
            <HeaderComponent />
        </div>
        <main>
            <slot/>
        </main>
        <div>
            <footer>
                <h1>Footer</h1>
            </footer>
        </div>
        
    </div>
</template>

<script>
import HeaderComponent from "@/components/house/Header.vue";
import FooterComponent from "@/components/house/Footer.vue";
export default {
    name: 'LayoutHouse',
    components: {
        HeaderComponent,
        FooterComponent,
    }
};
</script>

<style scoped>

</style>