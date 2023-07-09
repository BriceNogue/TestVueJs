<template>
    <section>
        <form @submit="toLogin" method="post" class="form">
            <div class="md-5 form-title">
                <h2>Welcome🙂</h2>
            </div>
            <div class="form-group">
                <label for="">Login</label>
                <input type="email" v-model="login" required name="login" id="login" class="form-control" placeholder="Login with your email"
                    aria-describedby="helpId">
            </div>
            <div class="form-group">
                <label for="">Password</label>
                <input type="password" v-model="password" required name="password" id="password" class="form-control" placeholder="Password"
                    aria-describedby="helpId">
            </div>
            <div class="form-group col-12 mt-3">
                <label class="form-check-label">
                    <input type="checkbox" v-model="rememberMe" class="form-check-input" name="" id=""
                        value="checkedValue" checked>
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
export default {
    data() {
        return {
            login: '',
            password: '',
            rememberMe: false,
        }
    },

    mounted() {
        
    },

    methods: {
        toLogin(e) {
            e.preventDefault()
        }
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