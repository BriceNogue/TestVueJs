<template>
     <div class="Header">
            <header>
                <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <a class="navbar-brand logo" href="#">E-Shop</a>
                    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse"
                        data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="collapsibleNavId">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item">
                                <a class="nav-link">
                                    <router-link to="/">Home</router-link>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link btn-login" v-if="!store.isConnected">
                                    <router-link to="login">Login</router-link>
                                </a>
                                <a class="nav-link btn-logout" v-else @click.prevent="logout">
                                    <router-link to="login">Logout</router-link>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="cart-btn" @click="toggleCart()">
                        <div>
                            <b-icon icon="cart"></b-icon>
                        </div>
                        <div class="cart-number">
                            <p>{{ store.cart.length }}</p>
                        </div>
                    </div>
                    <div class="profil">
                        <h2>{{ store.connectedUser.firstname }}</h2>
                    </div>
                </nav>
            </header>

            <div class="card cart" :class="{ 'cart-close': isCartOpen === false, 'cart-open': isCartOpen === true }">
                <div class="card-header">
                    <h5 class="card-title">{{ store.cart.length }} Prods</h5>
                </div>
                <div class="card-body">
                    <div class="card" v-for="prod in store.cart">
                        <div>
                            <div>
                                <strong>{{ prod.pName }}</strong>
                            </div>
                            <div>
                                <b>{{ prod.price }}</b>
                            </div>
                        </div>
                        <div class="card-actions">
                            <div>
                                <b-icon icon="cart-x" @click.prevent="removeProduct(prod)" class="cash-coin"
                                    aria-hidden="true"></b-icon>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <b-button size="sm" class="mb-2 btn-cart" variant="primary" v-on:click.prevent="buyProduct()">
                        <b-icon icon="cash-coin" aria-hidden="true"></b-icon> Bey Now
                    </b-button>
                </div>
            </div>
        </div>
</template>

<script>
import { store } from "@/stores/store";
export default {
    name: 'Header',
  data() {
    return {
      //isCon: false,
      store: store,
      isCartOpen: false,
    }
  },

  mounted() {
    if (localStorage.getItem('users')) {
      try {
        store.usersList = JSON.parse(localStorage.getItem('users'));
      } catch (e) {
        localStorage.removeItem('users');
      }
    }
    if (localStorage.getItem('connectedUser')) {
      try {
        store.connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
      } catch (e) {
        localStorage.removeItem('connectedUser');
      }
    }
    console.log('Userrrr', store.connectedUser.firstname);
    //this.getStat();
  },

  /*computed: {
    isConnected() {
      if(this.isCon) {
        return true;
      }else {
        return false;
      }
    }
  },*/

  methods: {
    logout(e) {
      localStorage.removeItem('connectedUser');
      console.log('Logout...');
      store.isConnected = false;
      store.connectedUser = '';
      //this.getStat();
      e.preventDefault();
    },
    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
    },
    removeProduct(product) {
      store.cart.splice(store.cart.indexOf(product),1);
    },
    buyProduct() {
      alert('Buy in cart ')
    }

    /*getStat() {
      if (localStorage.getItem('connectedUser')) {
        store.isConnected = true;
        this.isCon = true;
      }else {
        store.isConnected = false;
        this.isCon = false;
      }
    }*/
  }
}
</script>

<style scoped>
#app {
    position: relative;
}

nav {
    height: 60px;
    padding: 0 7% 0 7%;
}

nav a.router-link-exact-active {
    color: blue;
    border: solid 1px;
    padding: 5px 15px 5px 15px;
    border-radius: 50px;
}

.logo {
    color: gray;
    font-weight: bold;
    font-style: italic;
}

.navbar-nav {
    display: flex;
    align-items: center;
}

.nav-item a {
    text-decoration-line: none;
    font-weight: 500;
}

.cart-btn {
    position: relative;
}

.cart-btn .b-icon {
    margin-right: 30px;
    width: 35px;
    height: 35px;
    padding: 7px;
    border-radius: 50px;
    background: blue;
    color: white;
    transition: ease 0.5s;
}

.cart-btn:hover {
    scale: 1.1;
}

.cart-number {
    width: 20px;
    height: 20px;
    border-radius: 50px;
    position: absolute;
    bottom: -1px;
    left: -10px;
}

.cart-number p {
    background-color: blue;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    display: flex;
    color: white;
}

.cart {
    width: 300px;
    position: absolute;
    right: 7%;
    z-index: 1;
}

.cart-open {
    display: block;
    animation: scaleIn .5s;
}

.cart-close {
    visibility: hidden;
    transition: 0.3s;
    animation: scaleOut .5s;
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes scaleOut {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0);
    }
}

.card-footer .btn-cart {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 50px;
    font-weight: bold;
    padding: 10px 15px 10px 15px;
}

.card-body {
    max-height: 300px;
    overflow-x: hidden;
}

.cash-coin {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
}

.cash-coin:hover {
    background-color: #f8cbcb;
}

.card-body .card {
    margin-bottom: 15px;
    padding: 5px 15px 5px 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    transition: 0.5s;
}

.card-actions {
    display: flex;
    align-items: center;
}

.card-body .card:hover {
    scale: 1.1;
}
</style>