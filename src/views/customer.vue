<template>
    <div class="main-page">
      <el-main>
        <el-table :data="diamondData" border style="width: 100%">
          <el-table-column prop="id" label="id" width="50px"></el-table-column>
          <el-table-column prop="uniqueId" label="Unique ID" width="180"></el-table-column>
          <el-table-column prop="price" label="Price" width="80px"></el-table-column>
          <el-table-column prop="certificate" label="Certificate"></el-table-column>
          <el-table-column prop="quality" label="Quality" width="80px"></el-table-column>
          <el-table-column prop="owner" label="Owner"></el-table-column>
          <el-table-column label="Action">
            <template #default="scope">
              <el-button
                type="primary"
                size="small"
                @click="buyDiamond(scope.row)"
              >
                Buy
              </el-button>
              <el-button
                type="warning"
                size="small"
                @click="buyDiamond(scope.row)"
              >
              Details
              </el-button>
              <el-button
                type="danger"
                size="small"
                @click="buyDiamond(scope.row)"
              >
              Validate
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default {
    name: 'Customer',
    setup() {
      const router = useRouter();
      const walletAddress = ref('0x123...ABC'); // 模拟钱包地址
      const diamondData = ref([
        {id: '001', uniqueId: '001', price: '1 ETH', certificate: 'GIA123', quality: 'VVS1', owner: '0x123' },
        {id: '002', uniqueId: '002', price: '0.8 ETH', certificate: 'GIA124', quality: 'VS2', owner: '0x456' },
      ]);
  
      const logout = () => {
        router.push('/'); // 返回注册页面
      };
  
      const buyDiamond = (diamond) => {
        alert(`Buying diamond with ID: ${diamond.uniqueId}`);
        // 购买逻辑
      };
  
      return {
        walletAddress,
        diamondData,
        logout,
        buyDiamond,
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
  