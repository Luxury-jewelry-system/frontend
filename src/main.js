import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import router from './router';
import './assets/styles/global.css';

// 创建应用实例
const app = createApp(App);

// 创建 Pinia 实例
const pinia = createPinia();

// 配置 Pinia 持久化插件
pinia.use(piniaPluginPersistedstate);

// 使用插件
app.use(pinia);
app.use(ElementPlus);
app.use(router);

// 挂载应用
app.mount('#app');
