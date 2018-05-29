<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img class="img" v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <van-tabs>
      <van-tab title="涨幅榜">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item + ''" />
        </van-list>
      </van-tab>
      <van-tab title="跌幅榜">
        未完善
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant';
import { Lazyload } from 'vant';
import { Tab, Tabs } from 'vant';
import { List, Cell } from 'vant';

Vue.use(Swipe).use(SwipeItem);
Vue.use(Lazyload, {});
Vue.use(Tab).use(Tabs);
Vue.use(List).use(Cell);

export default {
   data() {
    return {
      images: [
        'https://img.yzcdn.cn/public_files/2017/09/05/3bd347e44233a868c99cf0fe560232be.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/c0dab461920687911536621b345a0bc9.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/4e3ea0898b1c2c416eec8c11c5360833.jpg',
        'https://img.yzcdn.cn/public_files/2017/09/05/fd08f07665ed67d50e11b32a21ce0682.jpg',
      ],
      list: [],
      loading: false,
      finished: false
    }
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style>
.home {
}

.img {
  height: 200px;
  width: 100%;
}

.van-swipe__indicator {
  border-radius: 3px;
  /* background: rgba(255, 255, 255, 0.6); */
  width: 12px;
  height: 4px;
}

.van-swipe__indicator--active {
  /* background: rgba(255, 255, 255, 1); */
}

.van-tabs__nav, .van-tab, .van-tab:active, .van-tabs__line {
  background: none;
}
.van-tabs--line {
  padding: 10px;
}
.van-tab--active {
  color: #ffffff;
}

.van-tab--active span {
  background-image: linear-gradient(-90deg, #955AE9 0%, #5978E8 100%);
  border-radius: 100px;
}

.var-tab {
  color: #5E5E84;
  font-size: 12px;
}

.van-tab span {
  width: 80px;
  height: 30px;
  line-height: 30px;
  display: inline-block;
}

[class*=van-hairline]::after {
  border: none !important;
}

.van-cell {
  color: #ffffff !important;
  background: rgba(46, 46, 71, 0.8) !important;
  border-radius: 6px;
  height: 60px;
  margin-bottom: 15px;
}
</style>