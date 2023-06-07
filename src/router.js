import {createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './views/HomePage.vue'
import search from './views/search.vue'

const routes = [
    {
        path: '/', 
        component: HomePage 
    },
    {
        path: '/', 
        component: search
    },
]

const router = createRouter ({
    history: createWebHashHistory(),
    routes
})
export default router 