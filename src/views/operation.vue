<template>
    <div class="register-page">
        <el-card class="register-card" shadow="hover">
            <h2 class="welcome-text">Hello  {{ role }}</h2>
            <el-form class="form-content">
                <el-form-item label="Diamond ID:">
                    <el-input v-model="diamondId" style="width: 240px" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button class="center-button" type="primary"> {{ buttonLabel }}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from "@/stores/user";
export default {
    name: "OperatePage",
    setup() {
        const userStore = useUserStore();
        const diamondId = ref('');
        const role = computed(() => userStore.role);
        const buttonLabel = computed(() => {
            switch (role.value) {
                case "miningCompany":
                    return "Mine";
                case "cuttingCompany":
                    return "Cut";
                case "qualityControlLab":
                    return "Engrave";
                case "jewelryMaker":
                    return "Sign";
                default:
                    return "Operate"; // 默认值
            }
        });
        return {
            role,
            buttonLabel,
            diamondId
        };
    },
};
</script>

<style>
.register-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.register-card {
    width: 400px;
    padding: 20px;
}

.wallet-info {
    margin-top: 20px;
    font-size: 14px;
    color: #333;
}

.welcome-text {
    text-align: center;
}

.center-button {
    display: block;
    margin: 0 auto;
}

.form-content .el-form-item {
    margin: 30px;
    /* 调整上下间距 */
}
</style>