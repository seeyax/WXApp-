// components/test4/test4.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    count: Number
  },
  options: {
    // 启用多个插槽占位符
    multipleSlots: true
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount () {
      this.setData({
        count: this.properties.count + 1
      })
      this.triggerEvent('sync', {value: this.properties.count})
    }
  }
})