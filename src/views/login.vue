<template>
    <div class="register-page">
        <el-card class="register-card" shadow="hover">
            <h2 class="welcome-text">Welcome to HAHADiamond!</h2>
            <el-form class="form-content" :model="form">
                <el-form-item>
                    <el-button class="center-button" type="primary" @click="login">Login</el-button>
                </el-form-item>
                <el-form-item>
                    <el-link class="center-button" type="info" href="/">go to register</el-link>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { ref } from "vue";
import Web3 from "web3";
import { useRouter } from 'vue-router';
import { useUserStore } from "@/stores/user"
import { abi, contractAddress } from "@/contracts/index";
export default {
    name: "LoginPage",
    setup() {
        const router = useRouter();
        const userStore = useUserStore()
        const walletAddress = ref("");

        const login = async () => {
            try {
                if (!window.ethereum) {
                    alert("MetaMask is not installed. Please install MetaMask and try again.");
                    return;
                }

                // 使用 Web3.js 连接钱包
                const web3 = new Web3('http://127.0.0.1:8545');

                // 请求用户授权连接
                const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                walletAddress.value = accounts[0]; // 获取第一个账户地址

                // 创建合约实例
                const contract = new web3.eth.Contract(abi, contractAddress);
                // 调用智能合约的 register 方法
                const receipt = await contract.methods
                    .getUser(walletAddress.value)
                    .call(); // 使用当前钱包地址发起交易
                console.log('address:', walletAddress.value);

                console.log("Transaction receipt:", receipt);
                userStore.setWalletAddress(accounts[0]);
                userStore.setRole(receipt?.role);

                // 模拟角色绑定逻辑（将来可以与智能合约交互）
                alert(`Login successful!`);
                if (userStore.role === 'customer') {
                    router.push('/customer')
                } else {
                    router.push('/operate')
                }
            } catch (error) {
                console.error(error);
                alert("Failed to login. Please try again.");
            }
        };

        return {
            walletAddress,
            login,
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