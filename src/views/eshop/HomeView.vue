<template>
  <div class="Home">
    <main>
      <div class="card card-1">
        <div class="col-6 card-action">
          <div class="col-12">
            <h1>Welcome {{ store.connectedUser.firstname }} 🙂</h1>
          </div>
          <div class="col-12">
            <button type="button" class="btn btn-get btn-primary">Get your first gift</button>
          </div>
        </div>
        <div class="col-6">
          <img class="card-image" src="@/assets/images/svg/undraw_gift_re_qr17.svg" alt="">
        </div>
      </div>

      <div>
        <product-card>
          <template #nomSlot>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nesciunt omnis sint nemo neque velit minus sequi distinctio natus reiciendis fuga adipisci dolorum, expedita earum ab dolorem. Delectus, aspernatur modi!</p>
          </template>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo quisquam ex, odit provident neque assumenda corrupti modi fuga adipisci. Et, aliquid! Quas ipsam et vitae deleniti asperiores, eius perspiciatis.</p>
          </div>
        </product-card>
      </div>
    </main>
  </div>
</template>

<script>
//import LayoutDefault from '@/layouts/LayoutDefault.vue';
import { store } from '@/stores/store';

import ProductCard from "@/components/eshop/ProductCard.vue";
export default {
  name: 'Home',
  /*created() {
    this.$emit('update:layout', LayoutDefault);
  },*/
  data() {
    return {
      store: store,
      products: store.products,
    }
  },
  components: {
    ProductCard
  },
  mounted() {
    console.log('Home: ', this.products);
  },
}
</script>

<style scoped>
main {
  padding: 5% 7% 5% 7%;
}

.card-1 {
  padding: 0 10px 10px 10px;
  flex-direction: row;
  box-shadow: 0 0 5px 0 grey;
}

.card-action {
  padding: 10% 0 0 5%;
}

.btn-get {
  width: 90%;
  border-radius: 50px;
  transition: ease 0.5s;
}

.btn-get:hover {
  scale: 1.1;
}

.card-image {
  width: 100%;
}
</style>
