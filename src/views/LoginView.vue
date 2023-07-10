<template>
    <section>
        <div class="connected" v-if="store.isConnected">
            <div class="alert alert-primary" role="alert">
                <h1>Your are connected</h1>
            </div>
            <button type="button" class="btn btn-danger" @click="logout">Logout</button>
        </div>
        <form @submit="toLogin" method="post" class="form" v-if="!store.isConnected">
            <div class="md-5 form-title">
                <h2>Welcome🙂</h2>
            </div>
            <div class="form-group">
                <label for="">Login</label>
                <input type="email" v-model="login" required name="login" id="login" class="form-control"
                    placeholder="Login with your email" aria-describedby="helpId">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="password" required name="password" id="password" class="form-control"
                    placeholder="Password" aria-describedby="helpId">
            </div>
            <div class="form-group col-12 mt-3">
                <label class="form-check-label">
                    <input type="checkbox" v-model="rememberMe" class="form-check-input" name="" id="" value="checkedValue"
                        checked>
                    Remember me!
                </label>
            </div>
            <div class="mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="mt-4 row">
                <div class="col-9">
                    <a>
                        <router-link to="sign_in">Don't have an acount?</router-link>
                    </a>
                </div>
                <div class="col-3">
                    <a>
                        <router-link to="/">Home</router-link>
                    </a>
                </div>
            </div>
        </form>
    </section>
</template>
<script>
import { store } from '../stores/store';
export default {
    data() {
        return {
            login: '',
            password: '',
            store: store,
            rememberMe: false,
            users: [],
            isConnected: false,
        }
    },

    mounted() {
        if (localStorage.getItem('users')) {
            try {
                this.users = JSON.parse(localStorage.getItem('users'));
            } catch (e) {
                localStorage.removeItem('users');
            }
        }
        console.log(this.users);
        if (localStorage.getItem('connectedUser')) {
            try {
                this.$connectedUser = JSON.parse(localStorage.getItem('connectedUser'));
                store.isConnected = true
            } catch (e) {
                localStorage.removeItem('connectedUser');
            }
            console.log('Connected: ', this.$connectedUser);
        }
    },

    methods: {
        toLogin(e) {
            this.users.forEach(user => {
                if (user.email === this.login && user.password === this.password) {
                    store.connectedUser = user;
                    const parsed = JSON.stringify(user);
                    localStorage.setItem('connectedUser', parsed);
                    store.isConnected = true;
                    alert('Connection succesfuly 😉')
                    this.$router.push('/')
                } else {
                    console.log('Bad request!');
                }
            });
            e.preventDefault()
        },
        logout(e) {
            localStorage.removeItem('connectedUser');
            console.log('Logout...');
            store.isConnected = false;
            store.connectedUser = '';
            e.preventDefault();
        },
    }

}
</script>
<style >
section {
    width: 100%;
    height: 100vh;
    padding: 0 7% 0 7%;
    display: flex;
    justify-content: center;
    align-items: center;
}

form {
    width: 300px;
    padding: 15px;
    box-shadow: 0 0 10px 0 gray;
    border-radius: 5px;
}

.form-title {
    display: flex;
    justify-content: center;
}

button {
    width: 100%;
}
</style>