<template>
  <div>
    <group title="提高正确的跟人信息，有助于获得更多金币">
      <popup-radio title="性别" :options="options2" v-model="option2" @on-hide="hidePopRadio">
        <p slot="popup-header" class="vux-1px-b demo3-slot">请选择您的性别</p>
      </popup-radio>
      <!-- 出生日期 -->
      <datetime
      v-model="value1"
      @on-change="change"
      title="出生日期"
      @on-cancel="log('cancel')"
      @on-confirm="onConfirm"
      @on-hide="log('hide', $event)"></datetime>
      <!-- 城市 -->
      <x-address 
      @on-hide="logHide" 
      @on-show="logShow" 
      :title="title" 
      v-model="value" 
      :list="addressData" 
      @on-shadow-change="onShadowChange" 
      placeholder="" 
      :show.sync="showAddress"></x-address>
    </group>
    <div class="submit_button">
      <x-button type="primary" action-type="button">提现</x-button>
    </div>

  </div>
</template>

<script>
import { Datetime, Group, Cell, ChinaAddressV4Data, XAddress ,PopupRadio,XButton } from "vux";
export default {
  name: "PerfectInfomation",
  components: {
    Group,
    Cell,
    Datetime,
    XAddress,
    PopupRadio,
    XButton
  },
  data() {
    return {
      value1: "",
      value: [],
      addressData: ChinaAddressV4Data,
      title: "城市",
      showAddress:false,
      option2: '',
      options2: [{
        key: '1',
        value: '男'
      }, {
        key: '2',
        value: '女'
      }],
    };
  },
  methods: {
    log(str1, str2 = "") {
      console.log(str1, str2);
    },
    onConfirm(val) {
      console.log("on-confirm arg", val);
      console.log("current value", this.value1);
    },
    change(value) {
      console.log("change", value);
    },
    doShowAddress() {
      this.showAddress = true;
      setTimeout(() => {
        this.showAddress = false;
      }, 2000);
    },
    onShadowChange(ids, names) {
      console.log(ids, names);
    },
    changeData() {
      this.value2 = ["430000", "430400", "430407"];
    },
    changeDataByLabels() {
      this.value2 = ["广东省", "广州市", "天河区"];
    },
    changeDataByLabels2() {
      this.value2 = ["广东省", "中山市", "--"];
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data);
    },
    logHide(str) {
      console.log("on-hide", str);
    },
    logShow(str) {
      console.log("on-show");
    },
    hidePopRadio(){
      console.log(this.option2)
    }
  }
};
</script>

<style scoped>
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
</style>

