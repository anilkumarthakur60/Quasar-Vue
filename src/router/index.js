import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Counter from "@/components/Counter"
import Employee from "@/components/Employee"
import UserList from "@/components/UserList"
import vuexCounter from "@/components/vuex/VuexCounter"
const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/counter',
        name: 'Counter',
        component: Counter
    },
    {
        path: '/vuex-counter',
        name: 'vuexCounter',
        component: vuexCounter
    },
    {
        path: '/employee',
        name: 'Employee',
        component: Employee
    },
    {
        path: '/userlist',
        name: 'UserList',
        component: UserList
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router