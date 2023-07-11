<template>
    <div>
        <div class="form-group search">
            <div class="col-8">
                <label for="">Search</label>
                <input type="search" class="form-control" name="" id="" aria-describedby="helpId"
                    placeholder="Search product">
            </div>
            <div class="col-2 nbr-prod">
                <b-icon icon="search" aria-hidden="true"></b-icon>
                <h5>Products</h5>
            </div>
        </div>
        <div class="products">
            <div class="card" v-for="product in store.products" :key="product.id">
                <div class="card-header">
                    <h5 class="card-title">{{ product.pName }}</h5>
                </div>
                <div class="card-body">
                    <img class="card-img" src="../assets/logo.svg" alt="Card image cap">
                    <div class="card-actions">
                        <b-button size="sm" class="mb-2" variant="primary" v-on:click.prevent="buyProduct(product)">
                            <b-icon icon="cash-coin" aria-hidden="true"></b-icon> Bey Now
                        </b-button>
                        <b-button size="sm" class="mb-2" variant="primary" @click.prevent="addToCart(product)">
                            <b-icon-cart-plus></b-icon-cart-plus>Add To Cart
                        </b-button>
                    </div>
                </div>
                <div class="card-footer" :class="{ outOfStock: product.qStock == 0 }">
                    <div>
                        <h5>{{ product.price }}</h5>
                    </div>
                    <div>
                        <h5>{{ product.qStock }} P</h5>
                    </div>
                </div>
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
    mounted() {

    },
    computed: {

    },
    methods: {
        /*checkCart(product) {
            store.cart.forEach(prod => {
            if(prod.id === product.id){
                console.log('True');
                return true;
            } else {
                console.log('false');
                return false;
            }
        })
        },*/

        addToCart(product) {
            if (product.qStock > 0) {
                store.cart.push(product)
            } else {
                alert(product.pName + " is out of stock!");
            }
        },
        buyProduct(product) {
            if (product.qStock > 0) {
                alert("Buy: " + product.pName);
            } else {
                alert(product.pName + " is out of stock!");
            }
        }
    }
}
</script>

<style scoped>
.search {
  padding-top: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.nbr-prod {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
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

.outOfStock {
    background: rgb(241, 67, 67);
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

.card-footer {
    display: flex;
    justify-content: space-between;
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