import { reactive } from "vue";
import { ProductModel } from "../models/ProductModel";

export const store = reactive({
    isConnected: false,
    usersList: [],
    connectedUser: '',
    cart: [],
    products: [
        {
            id: 0,
            pName: 'Montre Rolex',
            price: 19000,
            qStock: 12,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 1,
            pName: 'Iphone 13',
            price: 350000,
            qStock: 0,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 2,
            pName: 'Laptop Hp',
            price: 280000,
            qStock: 6,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 3,
            pName: 'Optical Mouse',
            price: 12000,
            qStock: 22,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 4,
            pName: 'Earphone',
            price: 2500,
            qStock: 31,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 5,
            pName: 'Ps5 Joystick',
            price: 35000,
            qStock: 0,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 6,
            pName: 'Plastation Ps4',
            price: 240000,
            qStock: 4,
            picture: '',
            description: 'Lorem Ipsum'
        },
        {
            id: 7,
            pName: 'Fast Charger',
            price: 12000,
            qStock: 23,
            picture: '',
            description: 'Lorem Ipsum'
        }
    ]
})