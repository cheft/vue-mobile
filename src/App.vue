<template>
  <div>
    <van-tabbar v-model="active">
        <van-tabbar-item to="/" icon="shop">首页</van-tabbar-item>
        <van-tabbar-item to="/pris" icon="chat" dot>行情</van-tabbar-item>
        <van-tabbar-item to="/transaction" icon="records" info="5">交易</van-tabbar-item>
        <van-tabbar-item to="/profile" icon="gold-coin">我的</van-tabbar-item>
      </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
  
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);

export default {
  data() {
    return {
      active: 0
    };
  },
}
</script>

<style>
body {
  background: #17192B;
  color: #E8E8ED;
  padding-bottom: 70px;
}

.van-tabbar{
  position: fixed !important;
  background: #1E1F23;
  height: 70px;
  z-index: 9999;
}

[class*=van-hairline]::after {
  border: 2px solid #272635 !important;
}

.van-tabbar-item {
  color: #454F64;
  line-height: 1.5;
}

.van-tabbar-item--active {
  color: #5B7ED3;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
