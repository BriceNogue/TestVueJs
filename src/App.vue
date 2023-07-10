<script>
import { store } from'./stores/store.js';
export default {
  data() {
    return {
      //isCon: false,
      store: store,
    }
  },

  mounted() {
    if (localStorage.getItem('users')) {
      try {
        this.$usersList = JSON.parse(localStorage.getItem('users'));
      } catch (e) {
        localStorage.removeItem('users');
      }
    }
    if (localStorage.getItem('connectedUser')) {
      try {
        this.$connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
      } catch (e) {
        localStorage.removeItem('connectedUser');
      }
    }
    this.getStat();
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
      this.getStat();
      e.preventDefault();
    },

    getStat() {
      if (localStorage.getItem('connectedUser')) {
        store.isConnected = true;
        //this.isCon = true;
      }else {
        store.isConnected = false;
        //this.isCon = false;
      }
    }
  }
}
</script>

<template>
  <div id="app">
    <header>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <a class="navbar-brand" href="#">TestVue2</a>
        <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/">Home</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" v-if="!store.isConnected" @click.prevent="getStat">
                <router-link to="login">Login</router-link>
              </a>
              <a class="nav-link" v-else @click.prevent="logout">
                <router-link to="login">Logout</router-link>
              </a>
            </li>
          </ul>
        </div>
        <div class="profil">
          <h2>{{ $connectedUser.fistname }}</h2>
        </div>
      </nav>
    </header>

    <router-view />

  </div>
</template>

<style scoped></style>
