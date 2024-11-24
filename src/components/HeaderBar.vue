<template>
  <el-header class="header">
    <div class="logo">Diamond Lifecycle System</div>
    <div class="user-menu">
      <!-- 头像 -->
      <el-avatar class="avatar" size="medium" @click="toggleDropdown" :src="avatarUrl" />
      <!-- 下拉菜单 -->
      <el-dropdown v-if="showDropdown" class="dropdown-menu" @click="handleMenuClick">
        <div class="dropdown-content">
          <p><strong>Wallet ID:</strong> {{ walletAddress }}</p>
          <el-button type="danger" size="small" @click="logout">
            Logout
          </el-button>
        </div>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HeaderBar",
  setup() {
    // 模拟用户钱包地址
    const walletAddress = ref("0x1234...ABCD");

    // 是否显示下拉菜单
    const showDropdown = ref(false);

    // 用户头像（可以换成动态的）
    const avatarUrl = ref(
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
    );

    // 切换下拉菜单显示状态
    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    // 登出逻辑
    const logout = () => {
      alert("Logged out successfully!");
      // 添加退出逻辑，如跳转到登录页面
    };

    return {
      walletAddress,
      showDropdown,
      avatarUrl,
      toggleDropdown,
      logout,
    };
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 60px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.logo {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.user-menu {
  display: flex;
  align-items: center;
  position: relative;
}

.avatar {
  width: 40px;
  /* 固定宽度 */
  height: 40px;
  /* 固定高度 */
  cursor: pointer;
  border: 1px solid #ddd;
}

.dropdown-menu {
  position: absolute !important;
  top: 60px;
  right: 0;
  width: 200px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.dropdown-content {
  text-align: center;
}

.dropdown-content p {
  margin-bottom: 10px;
}
</style>