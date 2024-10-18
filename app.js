// app.js
// App({
//   // 应用生命周期函数
//   // 小程序初始化完成时，执行此函数，全局只触发一次，可以做一些初始化的工作
//   // onLaunch(options) {}
//   // 小程序启动，或从后台进入前台显示时触发
//   // onShow(options) {}
//   // 小程序从前台进入后台时触发
//   // onHide() {}
  
// })

import { promisifyAll} from 'miniprogram-api-promise'

const wxp = wx.p = {}
promisifyAll(wx, wxp)
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('onLauch');
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide');
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

