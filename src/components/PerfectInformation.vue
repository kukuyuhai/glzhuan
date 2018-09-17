<template>
    <div>
        <group title="提高正确的跟人信息，有助于获得更多金币">
        <cell title="性别">
            <div>
            <span style="color: green">Hi, I\'m Vux.</span>
            </div>
        </cell>
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
    </div>
</template>

<script>
import { Datetime, Group, Cell, ChinaAddressV4Data, XAddress } from "vux";
export default {
  name: "PerfectInfomation",
  components: {
    Group,
    Cell,
    Datetime,
    XAddress
  },
  data() {
    return {
      value1: "",
      value: [],
      addressData: ChinaAddressV4Data,
      title: "城市",
      showAddress:false
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
    }
  }
};
</script>

