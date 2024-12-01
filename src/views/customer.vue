<template>
  <div class="main-page">
    <el-main>
      <el-table :data="diamondData" border style="width: 100%">
        <el-table-column prop="id" label="id" width="50px"></el-table-column>
        <el-table-column prop="uniqueLaserID" label="Unique ID" width="180"></el-table-column>
        <el-table-column prop="price" label="Price" width="80px"></el-table-column>
        <el-table-column prop="digitalCertificate" label="digitalCertificate"></el-table-column>
        <el-table-column prop="grade" label="grade" width="80px"></el-table-column>
        <el-table-column prop="currentOwner" label="currentOwner"></el-table-column>
        <el-table-column label="Action">
          <template #default="scope">
            <el-button type="primary" size="small" @click="buyDiamond(scope.row)">
              Buy
            </el-button>
            <el-button type="warning" size="small" @click="searchDetail(scope.row)">
              Details
            </el-button>
            <el-button type="danger" size="small" @click="validate(scope.row)">
              Validate
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog v-model="dialogTableVisible" title="The Life Cycle of the Diamond" width="800">
        <el-timeline style="max-width: 600px">
          <el-timeline-item v-for="(activity, index) in activities" :key="index" :icon="activity.icon"
            :type="activity.type" :color="activity.color" :size="activity.size" :hollow="activity.hollow"
            :timestamp="activity.timestamp">
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </el-dialog>

    </el-main>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import Web3 from "web3";
import { useUserStore } from "@/stores/user"
import { useRouter } from 'vue-router';
import { MoreFilled } from '@element-plus/icons-vue'
import { abi, contractAddress } from "@/contracts/index";
export default {
  name: 'Customer',
  setup() {
    const userStore = useUserStore()
    const router = useRouter();
    const walletAddress = ref('0x123...ABC'); // 模拟钱包地址
    const diamondData = ref([
      { id: '001', uniqueLaserID: '001', price: '1 ETH', certificate: 'GIA123', quality: 'VVS1', owner: '0x123' },
      { id: '002', uniqueLaserID: '002', price: '0.8 ETH', certificate: 'GIA124', quality: 'VS2', owner: '0x456' },
    ]);
    const detail = ref();

    const searchDetail = async (row) => {
      const web3 = new Web3('http://127.0.0.1:8545');

      const contract = new web3.eth.Contract(abi, contractAddress);
      dialogTableVisible.value = true
      const receipt = await contract.methods
        .getDiamondTraceById(row.id)
        .call();
      detail.value = receipt
      activities.value[0].timestamp = new Date(new Number(detail.value.mining_time) * 1000)
      activities.value[1].timestamp = new Date(new Number(detail.value.cutting_time) * 1000)
      activities.value[2].timestamp = new Date(new Number(detail.value.grading_time) * 1000)
      activities.value[3].timestamp = new Date(new Number(detail.value.designingAndInlaying_time) * 1000)
      activities.value[4].timestamp = new Date(new Number(detail.value.issueCertificate_time) * 1000)
      activities.value[5].timestamp = new Date(new Number(detail.value.owner_time) * 1000)

    }


    // 在页面加载时发起合约请求
    onMounted(async () => {
      try {
        const web3 = new Web3('http://127.0.0.1:8545');

        // 请求用户授权连接
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        walletAddress.value = accounts[0]; // 获取第一个账户地址

        // 创建合约实例
        const contract = new web3.eth.Contract(abi, contractAddress);
        // 调用智能合约的 register 方法
        const receipt = await contract.methods
          .getAllDiamonds(walletAddress.value)
          .call(); // 使用当前钱包地址发起交易
        console.log(receipt, '钻石数据');
        diamondData.value = receipt


      } catch (error) {
        console.error('Error fetching data from contract:', error);
      }
    });
    const logout = () => {
      router.push('/'); // 返回注册页面
    };

    const validate = async(row) => {
      alert(`Validated diamond with ID: ${row.id} successfully`);
    }

    const buyDiamond = async(row) => {
      // 购买逻辑
      const price = row.price;
      const web3 = new Web3('http://127.0.0.1:8545');      
      const contract = new web3.eth.Contract(abi, contractAddress);
      await contract.methods
        .purchaseDiamond(row.id)
        .send({from: userStore.walletAddress, value: price});
      alert(`Buying diamond with ID: ${row.id} successfully`);

      
    };

    const dialogTableVisible = ref(false); // 点击Details打开对话框

    const activities = ref([  // 溯源信息
      {
        content: 'Mining the diamond by mining company',
        timestamp: '2024-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: MoreFilled,
      },
      {
        content: 'Cutting and polishing by cutting company',
        timestamp: '2024-05-02 19:00',
        color: '#0bbd87',
      },
      {
        content: 'Controlling quality and laser engraving of unique ID by grading lab',
        timestamp: '2024-05-07 10:24',
        size: 'large',
      },
      {
        content: 'Designing and inlaying the diamond into a jewelry',
        timestamp: '2024-06-12 22:16',
        type: 'primary',
        hollow: true,
      },
      {
        content: 'Issue certificate',
        timestamp: '2024-08-29 14:26',
      },

    ]);

    return {
      walletAddress,
      diamondData,
      logout,
      buyDiamond,
      dialogTableVisible,
      activities,
      searchDetail,
      detail,
      validate
    };
  },
};
</script>

<style>
.user-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: #f5f5f5;
  height: 60px;
}

.main-page {
  padding: 70px 120px;
}
</style>
