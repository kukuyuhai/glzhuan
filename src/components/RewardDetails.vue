<template>
    <div class="withdraw_details">
        <div class="withdraw_details_list">
            <div class="withdraw_details_items vux-1px-b" v-for="item in list">
                <div class="items_info">
                    <div class="items_title">{{item.Details}}</div>
                    <div class="items_timesamp">{{item.CreateTime | formateTime}}</div>
                </div>
               <div class="items_cash">
                   <div v-if="item.ChangeType">+{{item.AmountChange}}</div>
                   <div v-else>-20</div>
               </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "RewardDetails",
  data() {
    return {
      add: true,
      list: [
        {
          rowid: 1,
          Id: 920908,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180828B41295号调查(14)'的提成",
          AmountChange: 2.0,
          ChangeType: 1,
          CreateTime: "2018-08-28T14:34:55.757"
        },
        {
          rowid: 2,
          Id: 809744,
          UserID: -1,
          TypeInfo: 12,
          Details: "获得第1次召回好友Cong奖励",
          AmountChange: 50.0,
          ChangeType: 1,
          CreateTime: "2018-08-23T00:24:26.07"
        },
        {
          rowid: 3,
          Id: 797635,
          UserID: -1,
          TypeInfo: 12,
          Details: "获得第1次召回好友一袭白衣胜雪奖励",
          AmountChange: 50.0,
          ChangeType: 1,
          CreateTime: "2018-08-22T15:23:28.547"
        },
        {
          rowid: 4,
          Id: 794826,
          UserID: -1,
          TypeInfo: 12,
          Details: "获得第1次召回好友Shipley奖励",
          AmountChange: 50.0,
          ChangeType: 1,
          CreateTime: "2018-08-22T11:44:00.4"
        },
        {
          rowid: 5,
          Id: 777586,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180816S40900号调查(43)'的提成",
          AmountChange: 8.0,
          ChangeType: 1,
          CreateTime: "2018-08-21T14:18:04.46"
        },
        {
          rowid: 6,
          Id: 777555,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180821B41048号调查(20)'的提成",
          AmountChange: 2.0,
          ChangeType: 1,
          CreateTime: "2018-08-21T14:16:59.66"
        },
        {
          rowid: 7,
          Id: 777540,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180817C40977号调查(31)'的提成",
          AmountChange: 20.0,
          ChangeType: 1,
          CreateTime: "2018-08-21T14:16:07.75"
        },
        {
          rowid: 8,
          Id: 721746,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180817B40959号调查(18)'的提成",
          AmountChange: 2.0,
          ChangeType: 1,
          CreateTime: "2018-08-17T18:57:29.45"
        },
        {
          rowid: 9,
          Id: 721714,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180817B40967号调查(19)'的提成",
          AmountChange: 2.0,
          ChangeType: 1,
          CreateTime: "2018-08-17T18:56:36.34"
        },
        {
          rowid: 10,
          Id: 721434,
          UserID: -1,
          TypeInfo: 3,
          Details:
            "您成功获得 '好友一袭白衣胜雪完成调查180817E40956号调查(26)'的提成",
          AmountChange: 6.0,
          ChangeType: 1,
          CreateTime: "2018-08-17T18:50:16.007"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
@import "~vux/src/styles/1px.less";
.withdraw_details {
  background: #ffffff;
}
.withdraw_details_items {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.9375rem 0.625rem;
  .items_info {
    flex: 1;
    font-size: 1rem;
    margin-bottom: 0.375rem;
    .items_timesamp {
      color: #999;
      font-size: 0.875rem;
    }
  }
  .items_cash {
    color: @blue;
  }
}
</style>



