// components/test5/test5.js
const myBehavior = require('../../behaviors/my-behavior')

import { storeBindingsBehavior } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'

Component({
  // 通过storeBindingsBehavior来实现自动绑定
  behaviors: [myBehavior, storeBindingsBehavior],
  // store
  storeBindings: {
    store,  // 指定要绑定的store
    fields: { // 指定要绑定的字段数据
      numA: () => store.numA,
      numB: () => store.numB,
      sum: 'sum'
    },
    actions: { // 指定要绑定的方法
      updateNum2: 'updateNum2'
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    username: 'ls'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    async getInfo () {
      await wx.p.request({
        url: 'https://applet-base-api-t.itheima.net/api/get',
        data: {
          name: 'zs',
          age: 20
        },
        // dataType: dataType,
        // enableCache: true,
        // enableChunked: true,
        // enableHttp2: true,
        // enableHttpDNS: true,
        // enableQuic: true,
        // forceCellularNetwork: true,
        // header: header,
        // httpDNSServiceId: 'httpDNSServiceId',
        method: 'get',
        // responseType: responseType,
        // timeout: 0,
        success: (result) => {
          console.log(result);
        },
        fail: (err) => {},
        complete: (res) => {},
      })
    },
    btnBHandler (e) {
      this.updateNum2(e.target.dataset.step)
    }
  }
})