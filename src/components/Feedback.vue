
<template>
    <div>
        <group title="问卷编号：201218961651E15165">
            <x-textarea 
            v-model="value" 
            :max="max"  
            :rows="rows"
            name="question"         
            placeholder="请详细描述一下您在问卷中所遇到的问题"></x-textarea>
        </group>
        <div class="weui-cells">
            <div class="weui-cell">
            <div class="weui-cell__bd">
                <div class="weui-uploader">
                <div class="weui-uploader__hd">
                    <div class="weui-uploader__title">请上传具体问题截图（必传）</div>
                    <div class="weui-uploader__info">{{files.length}}/1</div>
                </div>
                <div class="weui-uploader__bd">
                    <div class="weui-uploader__files" id="uploaderFiles">
                    <div>
                        <div :class="['weui-uploader__file', progressHidden || !uploadError  ? '' :'weui-uploader__file_status']" >
                        <img class="weui-uploader__img" />
                        <div class="weui-uploader__file-content">
                            <x-icon type="ios-information" size="23" class="weui-uploader__file-content-icon"></x-icon>
                        </div>
                        <div class="weui-uploader__file-content" >{{progress}}%</div>
                        </div>
                    </div>
                    </div>
                    <div class="weui-uploader__input-box">
                    <div class="weui-uploader__input" bindtap="chooseImage"></div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div class="submit_button">
            <x-button type="primary" action-type="button">提交</x-button>
        </div>
    </div>
</template>

<style scoped>
@import "../assets/wx_upload.css";
</style>

<script>
import { XTextarea, Group,XButton } from "vux";

export default {
  components: {
    XTextarea,
    Group,
    XButton
  },
  data() {
    return {
      value: "",
      max: 200,
      rows: 6,
      files: [],
      progressHidden: false,
      uploadError: false,
      progress: 0
    };
  }
};
</script>
