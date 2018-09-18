<template>
    <div>
        <div v-for="item in list" class="help_item" @click="kindToggle(item.id)">
            <div class="help_item_title">
                <div class="help_item_title-name">{{item.name}}</div>
                <x-icon type="ios-arrow-down" size="12"></x-icon>
            </div>
            <div :class="['help_content', item.open ? 'help_item_show' : '']" >
                {{item.content}}
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.help_item {
  background: #ffffff;
  margin: 0.625rem;
  padding: 0.625rem;
}

.help_item_title {
  display: flex;
  flex-direction: row;
  align-items: center;
  .help_item_title-name {
    flex: 1;
  }
}

.help_content {
  font-size: .875rem;
  visibility: hidden;
  color: #999;
  height: 0;
}

.help_item_show {
  height: auto;
  overflow: hidden;
  visibility: visible;
  margin-top: .375rem;
  padding-top: .375rem;
  border-top: 1px solid #eaeaea;
}
</style>

<script>
export default {
  name: "Help",
  data() {
    return {
      list: [
        {
          id: "a1",
          name: "1、什么是金币？",
          open: false,
          content: "金币是给力赚的流通货币，100金币=1元人民币。"
        },
        {
          id: "a2",
          name: "2、金币有什么用？",
          open: false,
          content: "金币可以用来兑换《金币商城》里的礼品，也可以直接兑换现金。"
        },
        {
          id: "a3",
          name: "3、如何获得金币？",
          open: false,
          content:
            "获得金币的途径有以下几种：\n1>参加有奖调查可以获得海量金币；\n2>每邀请一位好友成功注册，可以获得50金币；\n3>被邀请的好友成功完成有奖调查，您可以获得20%的提成收益；\n4>每召回15天内不活跃的用户，可获得50金币。"
        },
        {
          id: "a4",
          name: "4、如何邀请好友注册？",
          open: false,
          content:
            "通过给力赚内的分享按钮，把内容分享给微信好友、微信群、朋友圈后，好友通过你的分享内容点击注册，并成功完成一份完整的有奖调查，即算成功邀请好友并获得推荐奖励。"
        },
        {
          id: "a5",
          name: "5、我兑换的奖品或现金什么时候能收到？",
          open: false,
          content:
            "提交兑换奖品或兑换现金的申请后，工作人员一般3-5个工作日内审核发放；遇法定节假日审核周期顺延。"
        }
      ]
    };
  },
  methods: {
    kindToggle: function(id) {
      for (var i = 0, len = this.list.length; i < len; ++i) {
        if (this.list[i].id == id) {
          this.list[i].open = !this.list[i].open;
        } else {
          this.list[i].open = false;
        }
      }
    }
  }
};
</script>
