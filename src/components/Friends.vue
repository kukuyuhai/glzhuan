<template>
    <div style="background:#ffffff;">
        <div class="banner">
            <img src="../assets/gotominiprogram.png" alt="" srcset="" style="width:100%;">
        </div>
         <div class='member-about-info'>
          <div class='member-about-info-num'>
            <div>邀请好友（人）</div>
            <div class='text-color-red'>10</div>
          </div>
          <div class='middle-line'></div>
          <div class='member-about-info-num'>
            <div>好友贡献金币</div>
            <div class='text-color-red'>1000</div>
          </div>
        </div>
        <div class="ask_content">
            <div class="ask_title">如何进入小程序</div>
            <ul>
                <li>1.点击微信公众号菜单，进入小程序</li>
                <li>2.长按下方二维码，点击识别图中小程序码</li>
                <li class="wx_code">
                    <img src="../assets/gh_c3c0dfd5c2e4_344.jpg" alt="" width='130' >
                </li>
            </ul>
            <div class='ask_title'>我能获得哪些收益？</div>
            <ul class='menber-about-list'>
                <li>1、每邀请一位好友，您可以获得50金币</li>
                <li>2、好友有效完成有奖问卷并获得金币，将向您进贡20% 金币，邀请好友越多，您的收入就越高</li>
                <li>3、邀请好友获得的受益无上限，邀请越多，收益越多</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: "Friends"
};
</script>

<style lang="less" scoped>
.member-about-info {
  width: 90%;
  height: 100px;
  background: #f1f1f1;
  border-radius: 8px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.member-about-info-num {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: @fontsize24;
}

.middle-line {
  width: 1px;
  height: 50px;
  background: @theme-color;
}

.ask_content {
  padding: 1rem;
  .ask_title {
    font-size: 1.125rem;
    text-align: center;
    margin: 1.25rem 0;
  }
  ul > li {
    font-size: 0.875rem;
    color: #999;
    line-height: 1.8;
  }

  .wx_code {
    text-align: center;
    margin: 0.625rem auto;
  }
}

ul li {
  list-style-type: none;
}
</style>

