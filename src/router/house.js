import HomeView from "@/views/house/HomeView.vue";

import LayoutHouse from "@/layouts/LayoutHouse.vue";

export default [
    {
        path: "/booking",
        name: "Booking",
        component: HomeView,
        meta: { layout: LayoutHouse } 
    }
]