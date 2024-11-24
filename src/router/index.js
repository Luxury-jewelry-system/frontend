import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/views/Register.vue';
import Customer from '@/views/Customer.vue';

const routes = [
    {
        path: '/', // 默认路径
        name: 'RegisterPage',
        component: RegisterPage, // 注册页面
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
