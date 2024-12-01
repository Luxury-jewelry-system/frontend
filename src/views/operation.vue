<template>
    <div class="register-page">
        <el-card class="register-card" shadow="hover">
            <h2 class="welcome-text">Hello {{ role }}</h2>
            <el-form class="form-content">
                <el-form-item label="JM's Address" v-if="role == 'miningCompany'">
                    <el-input v-model="jewelryMakerAddress" style="width: 240px" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="Price" v-if="role == 'jewelryMaker'">
                    <el-input v-model="price" style="width: 240px" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item label="Select quality" v-if="role == 'qualityControlLab'">
                    <el-select v-model="form.quality" placeholder="Select your role">
                        <el-option v-for="item in quality" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </el-form-item>
                <el-form-item label="Diamond ID:">
                    <el-input v-model="diamondId" style="width: 240px" placeholder="Please input" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button class="center-button" @click="operate" type="primary"> {{ buttonLabel }}</el-button>
                    <el-button v-if="role == 'miningCompany'" class="center-button" @click="minerTransfer"
                        type="danger"> transfer</el-button>
                    <el-button v-if="role == 'jewelryMaker'" class="center-button" @click="issue" type="warning">
                        issue</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useUserStore } from "@/stores/user";
import { abi, contractAddress } from "@/contracts/index";
import Web3 from "web3";
export default {
    name: "OperatePage",
    setup() {
        const userStore = useUserStore();
        const diamondId = ref('');
        const jewelryMakerAddress = ref('');
        const price = ref('');
        const role = computed(() => userStore.role);
        const form = ref({
            quality: null, // 评级
        });
        const web3 = new Web3("http://127.0.0.1:8545");

        const contract = new web3.eth.Contract(abi, contractAddress);
        const quality = ref([
            { label: "S", value: "S" },
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "C", value: "C" },
            { label: "D", value: "D" },
            { label: "E", value: "E" },
        ]);
        const buttonLabel = computed(() => {
            switch (role.value) {
                case "miningCompany":
                    return "Mine";
                case "cuttingCompany":
                    return "Cut";
                case "qualityControlLab":
                    return "Engrave";
                case "jewelryMaker":
                    return "Embed";
                default:
                    return "Operate"; // 默认值
            }
        });
        const operate = async () => {
            try {
                if (!diamondId) {
                    alert("Please input the diamondId");
                    return
                }
                if (!role.value) {
                    alert("you donn't have a role");
                    return
                }

                let receipt;
                if (role.value === 'miningCompany') {
                    receipt = await contract.methods
                        .mineDiamond(diamondId.value)
                        .send({ from: userStore.walletAddress });
                } else if (role.value === 'cuttingCompany') {
                    receipt = await contract.methods
                        .cutAndPolishDiamond(diamondId.value)
                        .send({ from: userStore.walletAddress });
                } else if (role.value === 'jewelryMaker') {
                    receipt = await contract.methods
                        .embedInJewelry(diamondId.value)
                        .send({ from: userStore.walletAddress });
                } else if (role.value === 'qualityControlLab') {
                    receipt = await contract.methods
                        .qualityCheckAndLaserEngrave(diamondId.value, form.value.quality)
                        .send({ from: userStore.walletAddress });
                }
                console.log("Transaction receipt:", receipt);

            } catch(error) {
                console.error(error);
                alert("Failed to operate. Please try again.");
            }
        }
        const minerTransfer = async () => {
            try {
                if (!diamondId.value) {
                    alert("please input diamondId");
                    return
                }
                if (!jewelryMakerAddress.value) {
                    alert("please input jewelryMakerAddress");
                    return
                }
                
                // const diamonds = diamondReceipt
                let receipt = await contract.methods
                    .transferToJewelryMaker(diamondId.value, jewelryMakerAddress.value)
                    .send({ from: userStore.walletAddress });
                console.log("Transaction receipt:", receipt);
            } catch(error) {
                console.error(error);
                alert("Failed to transfer. Please try again.");
            }
        }

        const issue = async () => {
            try {
                if (!diamondId.value) {
                    alert("please input diamondId");
                    return
                }
                if (!price.value) {
                    alert("please input price");
                    return
                }
                const diamondReceipt = await contract.methods.getDiamondById(diamondId.value).call({from: userStore.walletAddress})
                const uniqueId = diamondReceipt.uniqueLaserID;
                
                const certificate = await window.ethereum.request({
                    method: 'personal_sign',  // 使用 personal_sign 签名
                    params: [uniqueId, userStore.walletAddress], // 签名的消息和账户地址
                });
                console.log(typeof certificate)

                let receipt = await contract.methods
                        .issueCertificate(diamondId.value, certificate, price.value)
                        .send({ from: userStore.walletAddress });
                console.log("Transaction receipt:", receipt);
            } catch (error) {
                console.log(error);
                alert("Failed to transfer. Please try again.");
            }
        }
        return {
            form,
            quality,
            role,
            buttonLabel,
            diamondId,
            price,
            issue,
            operate,
            jewelryMakerAddress,
            minerTransfer
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