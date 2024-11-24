<template>
    <div class="register-page">
        <el-card class="register-card" shadow="hover">
            <h2 class="welcome-text">Welcome to FuckDiamond</h2>
            <el-form class="form-content" :model="form">
                <el-form-item label="Select Role">
                    <el-select v-model="form.role" placeholder="Select your role">
                        <el-option v-for="role in roles" :key="role.value" :label="role.label" :value="role.value" />
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button class="center-button" type="primary" @click="register">Register</el-button>
                </el-form-item>
            </el-form>
            <div v-if="walletAddress" class="wallet-info">
                <p><strong>Wallet Registered:</strong> {{ walletAddress }}</p>
                <p><strong>Role:</strong> {{ form.role }}</p>
            </div>
        </el-card>
    </div>
</template>

<script>
import { ref } from "vue";
import Web3 from "web3";
import { useRouter } from 'vue-router';
export default {
    name: "RegisterPage",
    setup() {
        const router = useRouter();
        const form = ref({
            role: null, // 当前选择的角色
        });

        const roles = ref([
            { label: "Mining Company", value: "miningCompany" },
            { label: "Cutting Company", value: "cuttingCompany" },
            { label: "Quality Control Lab", value: "qualityControlLab" },
            { label: "Jewelry Maker", value: "jewelryMaker" },
            { label: "Customer", value: "customer" },
        ]);

        const walletAddress = ref("");

        const register = async () => {
            try {
                if (!window.ethereum) {
                    alert("MetaMask is not installed. Please install MetaMask and try again.");
                    return;
                }

                // 使用 Web3.js 连接钱包
                const web3 = new Web3(window.ethereum);

                // 请求用户授权连接
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                walletAddress.value = accounts[0]; // 获取第一个账户地址

                if (!form.value.role) {
                    alert("Please select a role before registering!");
                    return;
                }

                // 模拟角色绑定逻辑（将来可以与智能合约交互）
                alert(`Registration successful! Wallet: ${walletAddress.value}, Role: ${form.value.role}`);
                router.push('/customer')
            } catch (error) {
                console.error(error);
                alert("Failed to register. Please try again.");
            }
        };

        return {
            form,
            roles,
            walletAddress,
            register,
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