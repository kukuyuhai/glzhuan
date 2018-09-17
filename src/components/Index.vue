<template>
  <div>
    <div class='rx_tab'>
        <div :class="activeIndex==0 ?'navar-bar-item active':'navar-bar-item'" @click="toggleTab(0)">短调查</div> 
        <div :class="activeIndex==1 ?'navar-bar-item active':'navar-bar-item'" @click="toggleTab(1)">客户调查</div>   
    </div> 
    <div v-if="activeIndex== 0">
      <a style="display: block;margin:.625rem;padding:1rem 1.625rem;background:#fff;box-sizing:border-box;border-radius:.375rem;position:relative;" :href="item.Url" v-for="item in list">
        <div class="question_number_id" style="font-size:1.125rem;border-bottom:1px solid #eaeaea;padding-bottom:.5rem;margin-bottom:.5rem;display:flex;align-items:center;color:#000;">
          <span style="font-size:1rem;">{{item.Name}} </span><span style="color:#999;font-size:.75rem;margin-left:6px;flex:1;">报错</span>
          <x-icon type="ios-arrow-right" size="18"></x-icon>
        </div>
        <div class="question_flex">
          <div class="left">
            <div>本段奖励：<span style="color:#ff6764;">{{item.Cash}}</span> 金币</div>
            <div>总奖励：<span style="color:#ff6764;">{{item.totalCash}}</span> 金币</div>
          </div>
          <div class="right">
              <x-circle
              :percent="item.gotProgress/item.totalProgress * 100"
              :stroke-width="6"
              :trail-width="6"
              :stroke-color="['#ff7e54', '#ff6764']"
              trail-color="#ececec">
              <span>
                <div>完成</div>
                <span  style="color:#ff6764">{{item.gotProgress}}/{{item.totalProgress}}</span>
              </span>
            </x-circle>
          </div>
        </div>
      </a>
    </div>
    <div v-else>
      <a style="display: block;margin:.625rem;padding:1rem 1.625rem;background:#fff;box-sizing:border-box;border-radius:.375rem;position:relative;" :href="item.Url" v-for="item in list">
        <div class="question_number_id" style="font-size:1.125rem;border-bottom:1px solid #eaeaea;padding-bottom:.5rem;margin-bottom:.5rem;display:flex;align-items:center;color:#000;">
          <span style="font-size:1rem;">{{item.Name}} </span><span style="color:#999;font-size:.75rem;margin-left:6px;flex:1;">报错</span>
          <x-icon type="ios-arrow-right" size="18"></x-icon>
        </div>
        <div class="" style="font-size:0.875rem;color:#666;align-items:space-between;display:flex;flex-direction:row;justify-content:space-between;">
          <div>奖励：<span style="color:#ff6764;">{{item.Cash}}</span> 元</div>  <div>开始时间：2010-08-09-20:00</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { Group, Cell, XCircle, XButton, Range } from "vux";

export default {
  components: {
    Group,
    Cell,
    XCircle,
    XButton,
    Range
  },
  data() {
    return {
      activeIndex: 0,
      percent: 90,
      list: [
        {
          AvgTime: 2,
          Cash: 10.0,
          CustomerProjectID: null,
          Name: "180912B41675号调查(18)",
          Number: 3505,
          Priority: 3,
          ProjectId: 41675,
          RewardType: 0,
          SampleType: 0,
          Silver: 0,
          StartTime: "/Date(1536743526000+0800)/",
          SuccessRate: 100,
          SupportMobile: 1,
          Url:
            "http://transfer.sumpanel.com/surveymobile/default.aspx?account=27a984e6f9a21a4f6955ebb00b0e4573d8cb4bb336da8ad227102647802266b4&temp=469119caa80095da",
          gotCash: 0,
          gotProgress: 2,
          totalCash: 10.0,
          totalProgress: 3
        },
        {
          AvgTime: 1,
          Cash: 10.0,
          CustomerProjectID: null,
          Name: "180912B41673号调查(18)",
          Number: 3441,
          Priority: 3,
          ProjectId: 41673,
          RewardType: 0,
          SampleType: 0,
          Silver: 0,
          StartTime: "/Date(1536738698000+0800)/",
          SuccessRate: 100,
          SupportMobile: 1,
          Url:
            "http://transfer.sumpanel.com/surveymobile/default.aspx?account=27a984e6f9a21a4f6955ebb00b0e4573d8cb4bb336da8ad227102647802266b4&temp=924f383cae382660",
          gotCash: 0,
          gotProgress: 0,
          totalCash: 10.0,
          totalProgress: 1
        },
        {
          AvgTime: 1,
          Cash: 10.0,
          CustomerProjectID: null,
          Name: "180912B41663号调查(18)",
          Number: 3547,
          Priority: 3,
          ProjectId: 41663,
          RewardType: 0,
          SampleType: 0,
          Silver: 0,
          StartTime: "/Date(1536733005000+0800)/",
          SuccessRate: 100,
          SupportMobile: 1,
          Url:
            "http://transfer.sumpanel.com/surveymobile/default.aspx?account=27a984e6f9a21a4f6955ebb00b0e4573d8cb4bb336da8ad227102647802266b4&temp=4e8cfba6d0aa1a97",
          gotCash: 0,
          gotProgress: 0,
          totalCash: 10.0,
          totalProgress: 1
        }
      ]
    };
  },
  created(){
    console.log("created")
  },
  mounted(){
    console.log("mounted")
  },
  methods: {
    toggleTab(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.rx_tab {
  width: 160px;
  height:28px;
  display: flex;
  flex-direction: row;
  border: 1px solid #ff6764;
  font-size: 12px;
  margin: 26px auto;
  border-radius: 3px;
}

.navar-bar-item {
  flex: 1;
  text-align: center;
  height: 100%;
  color: #ff6764;
  align-items: center;
  display: flex;
  justify-content: space-around;
}
.navar-bar-item.active {
  background: #ff6764;
  color: #fff;
}
.question_flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #666;
  .left {
    flex: 1;
    font-size:14px;
    line-height: 2.2;
  }
  .right {
    width: 64px;
    height: 64px;
    font-size:14px;
  }
}
</style>
