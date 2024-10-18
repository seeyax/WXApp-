// components/test2/test2.js
Component({
  options:{
    styleIsolation: "apply-shared"
  },
  /**
   * 组件的属性列表
   */
  properties: {
    max: {
      type:Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0
  },
  // 监听器
  observers: {
    "n1, n2": function (n1, n2) {
      // do something
      this.setData({
        sum: this.data.n1 + this.data. n2
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addCount () {
      if(this.data.count >= this.properties.max) return
      this.setData({
        count: this.data.count + 1
      })
      this.showCount()
    },
    showCount () {
      wx.showToast({
        title: 'count值为' + this.data.count,
        icon: '/images/tab_icons/cart.png',
      })
    },
    n1Add () {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    n2Add () {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  }
})