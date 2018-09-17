<template>
    <div class="trado_wrap">
        <router-link class="cell vux-1px-b" :to="{path:`/my/trado/details`}" v-for="item in list" :key="item.id">
            <div class="trado_info">
                <div class="trado_title">提现{{item.Cash}}元奖金</div>
                <div class="trado_time">{{item.StateTime | formateTime}}</div>
            </div>
            <div class="trado_status">
                <div v-if="item.State == 1" style="color:#09bb07;">审核成功</div> 
                <div v-else-if="item.State == 2" style="color:#ff3800;"> 审核失败</div>
                <div v-else style="color:#ffbe00;">审核中</div>
            </div>
            <x-icon type="ios-arrow-right" size="18"></x-icon>
        </router-link>
    </div>
</template>

<script>
import { dateFormat } from "vux";

export default {
  name: "Trado",
  filters: {
    dateFormat
  },
  data() {
    return {
      list: [
        {
          rowid: 1,
          ID: 23129,
          Cash: 9.06,
          AddTime: "2018-09-11T02:07:09",
          State: 1,
          StateTime: "2018-09-11T02:08:14.177",
          Comment: "",
          TradeNo: "180911020709190583550094"
        },
        {
          rowid: 2,
          ID: 1161,
          Cash: 5.0,
          AddTime: "2018-07-11T16:21:48",
          State: 1,
          StateTime: "2018-07-16T17:52:19.883",
          Comment: "",
          TradeNo: "180711162148733338400094"
        },
        {
          rowid: 3,
          ID: 13,
          Cash: 5.5,
          AddTime: "2018-06-26T11:55:12",
          State: 2,
          StateTime: "2018-06-26T12:30:31.003",
          Comment: "",
          TradeNo: "180626115512968094650094"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.trado_wrap {
  height: 100%;
  .cell {
    background: #ffffff;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 6px;
  }
}

.trado_status{
    font-size: 16px;
}

.trado_info {
  flex: 1;
  .trado_title {
    font-size: 16px;
    color: #333;
  }

  .trado_time {
    font-size: 14px;
    color: #999;
  }
}
</style>


