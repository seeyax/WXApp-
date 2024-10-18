// pages/home/home.js
import { createStoreBindings } from 'mobx-miniprogram-bindings'
import { store } from '../../store/store'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },
  getInfo () {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/get',
      method: 'GET',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },
  postInfo () {
    wx.request({
      url: 'https://applet-base-api-t.itheima.net/api/post',
      method: 'POST',
      data: {
        name: 'zs',
        age: 20
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.log(err);
      }
    })
  },
  gotoMessage () {
    wx.switchTab({
      url: '/pages/message/message'
    })
  },
  gotoInfo () {
    wx.navigateTo({
      url: '/pages/info/info?name=ls&six=男'
    })
  },
  getChild () {
  const test3 = this.selectComponent('.test3')
  test3.child()
  },
  syncCount (e) {
    this.setData({
      count: e.detail.value
    })
  },
  btnHandler (e) {
    this.updateNum1(e.target.dataset.step)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getInfo()
    this.postInfo()
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['numA', 'numB', 'sum'],
      actions: ['updateNum1']
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})