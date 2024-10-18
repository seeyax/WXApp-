// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    info: 'Hello World!!',
    img: '/images/截图.png',
    number: Math.random() *10,
    msg: '你好',
    count: 0,
    condition: true,
    array: ['q','w','e','r'],
    userList:[
      {id: 1, name: '小红'},
      {id: 2, name: '小王'},
      {id: 3, name: '小袁'}
    ],
    type: 0,
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
  },
  // 定义事件
  btnTapHandler(e) {
    console.log(e);
  },
  viewHandler (e) {
    console.log(e);
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  changeCount () {
    this.setData({
      count: this.data.count + 1
    })
  },
  btnTap2 (e) {
    console.log(e);
    console.log(e.target.dataset.info);
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  inputahandle (e) {
    // 通过e.detail.value获取文本框最新的值
    console.log(e.detail.value);
    this.setData({
      msg: e.detail.value
    })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
})
