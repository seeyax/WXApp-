// components/test3/test3.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },
  options: {
    // 指定所有_开头的数据字段为纯数据字段
    pureDataPattern: /^_/
  },
  observers:{
    // '_rgb.r, _rgb.g, _rgb.b': function (r, g, b) {
    //   this.setData({
    //     fullColor: `${r},${g},${b}`
    //   })
    // }
    // 通配符
    '_rgb.**': function (obj) {
      this.setData({
        fullColor: `${obj.r},${obj.g},${obj.b}`
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    _rgb: {
      r: 0,
      g: 0,
      b: 0
    },
    fullColor: '0,0,0',
    a: true,  // 普通数据字段
    _b: true // 纯数据字段
  },
  lifetimes: {
    created () {
      console.log('created········');
    },
    attached () {
      console.log('attached··········');
    },
  },
  pageLifetimes: {
    show () {
      console.log('show');
      this._randomColor()
    },
    hide () {
      console.log('hide');
    },
    resize () {
      console.log('resize');
    }
  },

  // created () {
  //   console.log('created');
  // },
  // attached () {
  //   console.log('attached');
  // },

  /**
   * 组件的方法列表
   */
  methods: {
    changeR (){
      this.setData({
        '_rgb.r': this.data._rgb.r + 5 > 255 ? 255 : this.data._rgb.r + 5
      })
    },
    changeG (){
      this.setData({
        '_rgb.g': this.data._rgb.g + 5 > 255 ? 255 : this.data._rgb.g + 5
      })
    },
    changeB (){
      this.setData({
        '_rgb.b': this.data._rgb.b + 5 > 255 ? 255 : this.data._rgb.b + 5
      })
    },
    _randomColor () {
      this.setData({
        _rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    },
    child () {
      console.log('child');
    },

  }
})