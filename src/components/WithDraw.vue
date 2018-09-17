<template>
	<div>
		<div class="withdraw_wrap">
			<div class="cash_label">金币金额：{{cash}} 金币</div>
			<div class="cash_label">提现金额:</div>
      <div class="withdraw_input vux-1px-b">
        <span>¥</span>
			  <input type="text" v-model="cash" placeholder="请填写提现金额">
      </div>
			<x-button type="primary" action-type="button" class="withdraw_btn">提现</x-button>
      <div class="withdraw_tips">
        <div>注意事项：</div>
        <ul>
          <li>提现金额不能少于5元。</li>
          <li>提现后3-5个工作日到账，请耐心等待。</li>
          <li>提现金币换算比例为500金币 = 1元。</li>
        </ul>
      </div>
		</div>
	</div>
</template>

<script>
import { XButton } from "vux";
export default {
  name: "WithDraw",
  components: {
    XButton
  },
  data() {
    return {
      cash: 100
    };
  }
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/1px.less";

.withdraw_wrap {
  padding: 20px;
  margin:16px;
  // box-sizing: border-box;
  // border: 1px solid #eeeeee;
  border-radius: 8px;
  background: #ffffff;
  // height: 18.75rem; //300px
  div.cash_label {
    margin: 10px 0;
    font-size:20px;
  }
}

.withdraw_input {
  position: relative;
  span {
    position: absolute;
    left: 0;
    top:18%;
    font-size: 24px;
  }
  input {
    line-height: 3;
    outline: none;
    border: none;
    padding-left:30px;
    font-size:20px;
  }
}

.withdraw_btn{
  margin: 20px 0;
}

.withdraw_tips {
  color: #333;
  font-size: 20px;
  ul {
    li {
      list-style-type: none;
      font-size: 12px;
      color: #999;
      line-height: 1.8;
    }
  }
}
</style>

