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
                @click="dialogTableVisible = true">
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
        
        <el-dialog v-model="dialogTableVisible" title="The Life Cycle of the Diamond" width="800">
          <el-timeline style="max-width: 600px">
            <el-timeline-item
              v-for="(activity, index) in activities"
                :key="index"
                :icon="activity.icon"
                :type="activity.type"
                :color="activity.color"
                :size="activity.size"
                :hollow="activity.hollow"
                :timestamp="activity.timestamp"
              >
                {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-dialog>

      </el-main>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { MoreFilled } from '@element-plus/icons-vue'
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
        content: 'Entering possession of the jewelry maker',
        timestamp: '2024-06-12 22:16',
        type: 'primary',
        hollow: true,
      },
      {
        content: 'Designing and inlaying the diamond into a jewelry',
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






