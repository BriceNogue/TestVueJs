<template>
    <section>
        <form @submit="checkForm" method="post" class="form row">
            <div class="md-5 form-title">
                <h2>Create Account🙂</h2>
            </div>
            <div class="col-12 md-5" v-if="errors.length">
                <p class="error" v-for="error in errors">{{ error.value }}</p>
            </div>
            <div class="form-group col-6">
                <label for="">Firstname</label>
                <input type="text" v-model="user.firstname" required name="firstname" id="firstname" class="form-control"
                    placeholder="Firstname" aria-describedby="helpId">
            </div>
            <div class="form-group col-6">
                <label for="">Lastname</label>
                <input type="text" v-model="user.lastname" required name="lastname" id="lastname" class="form-control"
                    placeholder="Lastname" aria-describedby="helpId">
            </div>
            <div class="form-group col-6">
                <label for="">Email</label>
                <input type="email" v-model="user.email" required name="email" id="email" class="form-control"
                    placeholder="Email" aria-describedby="helpId">
            </div>
            <div class="form-group col-6">
                <label for="">Age</label>
                <input type="text" v-model.number="user.age" required pattern="[0-9]+" name="age" id="age"
                    class="form-control" placeholder="Age" aria-describedby="helpId">
            </div>
            <div class="form-group col-6">
                <label for="">Password</label>
                <input type="password" v-model="user.password" required name="password" id="password" class="form-control"
                    placeholder="Password" aria-describedby="helpId">
            </div>
            <div class="form-group col-6">
                <label for="">Confirm Password</label>
                <input type="password" v-model="confirmPassword" required name="confirmPassword" id="confirmPassword"
                    class="form-control" placeholder="Confirm password" aria-describedby="helpId">
            </div>
            <div class="form-group col-12 mt-3">
                <label class="form-check-label">
                    <input type="checkbox" v-model="isConditionValide" required class="form-check-input" name="" id=""
                        value="checkedValue" checked>
                    By checking this box you agree to the <a href="#">terms and conditions</a>
                </label>
            </div>
            <div class="col-6 mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
            <div class="col-6 mt-3">
                <button type="reset" class="btn btn-danger">Reset</button>
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
import { UserModel } from '../models/UserModel';
export default {
    data() {
        return {
            user: new UserModel,
            errors: [],
            users: [],
            isConditionValide: false,
            confirmPassword: '',
        }
    },
    mounted() {
        console.log('Mounted');
        if (localStorage.getItem('users')) {
            try {
                this.users = JSON.parse(localStorage.getItem('users'));
                console.log('try');
            } catch (e) {
                localStorage.removeItem('users');
                console.log('Catch');
            }
        }
        console.log(this.users);
    },

    computed: {
        checkPassword: {
            get() {
                return this.user.password === this.confirmPassword;
            },
        }
    },

    methods: {
        checkForm(e) {
            this.errors = [];
            if (this.user.age <= 1 || this.user.age > 99) {
                this.errors.push({ value: "Please check age!" })
                //return false;
            } else if (this.checkPassword) {
                console.log('Check Form ', this.user);
                //return true;
                this.addUser();
            }
            e.preventDefault();
        },

        addUser() {
            console.log('Adding')
            this.users.push(this.user);
            this.user = new UserModel;

            this.saveUsers();
        },

        saveUsers() {
            const parsed = JSON.stringify(this.users);
            localStorage.setItem('users', parsed)
            console.log('Saving');
            alert('Sign In succesfuly 😉')
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
    width: 500px;
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