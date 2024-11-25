<template>
    <div class="register-page">
        <el-card class="register-card" shadow="hover">
            <h2 class="welcome-text">Hello Role</h2>
            <el-form class="form-content">
                <el-form-item label="Diamond ID:">
                    <el-input v-model="diamondId" style="width: 240px" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button class="center-button" type="primary">Operate</el-button>
                </el-form-item>
            </el-form>
            <!-- <div v-if="walletAddress" class="wallet-info">
                <p><strong>Wallet Registered:</strong> {{ walletAddress }}</p>
                <p><strong>Role:</strong> {{ form.role }}</p>
            </div> -->
        </el-card>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    name: "OperatePage",
    setup() {

        const diamondId = ref('');

        return {
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