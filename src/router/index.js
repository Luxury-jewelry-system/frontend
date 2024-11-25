import { createRouter, createWebHistory } from 'vue-router';
import RegisterPage from '@/views/Register.vue';
import Customer from '@/views/Customer.vue';
import OperatePage from '@/views/operation.vue';
import LoginPage from '@/views/login.vue';
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
    {
        path: '/operate',
        name: 'OperatePage',
        component: OperatePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
