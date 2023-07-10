<template>
    <div class="products">
        <div class="card" v-for="product in store.products" :key="product.id">
            <div class="card-header">
                <h5 class="card-title">{{ product.pName }}</h5>
            </div>
            <div class="card-body">
                <img class="card-img" src="../assets/logo.svg" alt="Card image cap">
                <div class="card-actions">
                    <b-button size="sm" class="mb-2" variant="primary">
                        <b-icon icon="cash-coin" aria-hidden="true"></b-icon> Bey Now
                    </b-button>
                    <b-button size="sm" class="mb-2" variant="primary" @click.prevent="addToCart(product)">
                        <b-icon-cart-plus></b-icon-cart-plus>Add To Cart
                    </b-button>
                </div>
            </div>
            <div class="card-footer">
                <h5>{{ product.price }}</h5>
            </div>
        </div>
    </div>
</template>

<script>
import { ProductModel } from '../models/ProductModel';
import { store } from '../stores/store';

export default {
    data() {
        return {
            store: store,
        }
    },
    methods: {
        addToCart(product) {
            console.log(product);
        }
    }
}
</script>

<style scoped>
.products {
  padding-top: 5%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
    width: 30%;
    margin-bottom: 2rem;
    box-shadow: 0 0 5px 0 grey;
    transition: ease 0.5s;
}

.bi {
    color: white;
}

.card-body {
    position: relative;
}

.card-actions {
    display: none;
}

.card-actions button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    padding: 5px 15px 5px 15px;
}

.card:hover {
    scale: 1.1;

    .card-actions {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 7% 0 7%;
    }

    .card-img {
        display: block;
    }
}
</style>