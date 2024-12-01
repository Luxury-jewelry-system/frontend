import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    walletAddress: "", // 钱包地址
    role: "",          // 角色
  }),
  actions: {
    setRole(newRole) {
      this.role = newRole; // 更新角色
    },
    setWalletAddress(newAddress) {
      this.walletAddress = newAddress; // 更新钱包地址
    },
  },
  persist: {
    enabled: true, // 启用持久化
    strategies: [
      {
        key: "user", // 存储的 key
        storage: localStorage, // 存储位置：localStorage 或 sessionStorage
      },
    ],
  },
});
