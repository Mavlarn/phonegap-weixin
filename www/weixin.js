/**
 * WeiXin
 * version 0.9
 * author: Jian Chen / ajccom
 * https://github.com/ajccom/phonegap-weixin
 * tested cordova version - 2.3.0
 **/
var weixin = {
  register: function (appid, success, error) {
    cordova.exec(success, error, "WeiXin", "register", [appid]);
  },

  unregister: function (success, error) {
    cordova.exec(success, error, "WeiXin", "unregister", []);
  },

  openWeixin: function (success, error) {
    cordova.exec(success || null, error || null, "WeiXin", "openWeixin", []);
  },
  
  showToast: function (txt, success, error) {
    cordova.exec(success, error, "WeiXin", "showToast", [txt]);
  },
  
  send: function (arg, success, error) {
    if (typeof arg.isSendToTimeline === 'undefined') {arg.isSendToTimeline = true}
    if (arg.type === 'image' && typeof arg.imageType === 'undefined') {arg.imageType = 'url'}
    if (arg.type === 'music' || arg.type === 'video' || arg.type === 'webpage') {
        if (typeof arg.title === 'undefined') {arg.title = ''}
        if (typeof arg.desc === 'undefined') {arg.desc = ''}
        if (typeof arg.imgUrl === 'undefined') {arg.imgUrl = ''}
        if (typeof arg.isLowBand === 'undefined') {arg.isLowBand = false}
    }
    
    cordova.exec(success, error, "WeiXin", "send", [arg]);
  },
  
  //just test, and IOS can't use it now
  showCallback = function (result) {
    var txt = '';
    switch (result) {
      case 1:
        txt= '����ɹ�';
        break;
      
      case 2:
        txt='ȡ������';
        break;
      
      case 3:
        txt='��֤ʧ��';
        break;
      
      case 4:
        txt = 'δ֪����';
        break;
    }
    
    this.showToast(txt);
  }
}
module.exports = weixin;
