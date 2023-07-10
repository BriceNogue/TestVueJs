import { reactive } from "vue";

export const store = reactive({
    isConnected: false,
    usersList: [],
    connectedUser: null,
})