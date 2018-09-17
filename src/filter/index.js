import Vue from 'vue'

Vue.filter('formateTime',function(value){
    if(!value) return ''
    return value.replace("T", " ").substr(0,value.lastIndexOf(":"));
  })