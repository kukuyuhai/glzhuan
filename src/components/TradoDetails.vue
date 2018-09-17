<template>
    <div class="trado_details_wrap">
        <FormPreview header-label="提现金额"  header-value="¥5.00" :body-items="list" class="trado_detail_preview"></FormPreview>
    </div>
</template>


<script>
import { FormPreview } from "vux";

export default {
  components: {
    FormPreview
  },
  data() {
    return {
      list: [
        {
          label: "交易状态",
          value: "交易成功"
        },
        {
          label: "提现时间",
          value: "2018/7/11 16:21:48"
        },

        {
          label: "交易单号",
          value: "1000018301201807169854424234"
        },
        {
          label: "订单编号",
          value: "180711162148733338400094"
        },
        {
          label: "交易时间",
          value: "2018-07-16 17:52:19"
        }
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.trado_details_wrap {
  height: 100%;
  background: @bgGray;
}

.trado_detail_preview {
  background: @bgGray;
}
</style>

