<template>
    <div class="container">
        <div class="avatar_info">
            <div class="avatar_img">
                <img src="https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJ9OkEE4hRbaQrbnyjYtD6mKic4kt9dP6TBCkf08etFE9piaaIZPgKRib0IDs3FHlWVuHIOmP3tlRzhQ/132" alt="" srcset="">
            </div>
            <div class="nick_name">
                <div>Walker</div>
                <div>ID:QONJE</div>
            </div>
            <div class="user_account">
                <div>金币</div>
                <div>1000</div>
            </div>
        </div>
        <div class="cell">
            <group>
                <cell title="个人资料"  value="完善资料" :link="{path:'/PerfectInformation'}" is-link></cell>
                <cell title="通讯信息" :link="{path:'/contact'}" is-link></cell>
            </group>
            <group>
                <cell title="奖金明细"  :link="{path:'/reward/details'}" is-link></cell>
                <cell title="我的提现" :link="{path:'/my/trado'}" is-link></cell>
                <cell title="常见问题" is-link></cell>
            </group>
        </div>
    </div>
</template>

<script>
import { Group, Cell } from "vux";
export default {
  name: "UserCenter",
  components: {
    Group,
    Cell
  }
};
</script>
<style lang="less" scoped>
.avatar_info {
  background: linear-gradient(to bottom, #ff7e54, #ff6764);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  position: relative;
  overflow: hidden;
  color: #ffffff;
}

.avatar_img{
  width: 64px;
  height: 64px;
  margin: 10px;
  img{
      width: 100%;
      border-radius: 50%;
  }
}

.nick_name{
    flex: 1;
    font-size: 16px;
}

.user_account{
    text-align: center;
    margin-right: 10px;
    font-size: 16px;
}
</style>

