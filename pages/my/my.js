// pages/my/my.js
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userimg: "../../images/university.jpg",
    arrow: "../../images/mine/right.png",
    text_back: '意见反馈',

    items: [{
      icon: '../../images/mine/myMessage.png',
      text: '个人信息',
      url: '../my1/myMessage/myMessage'
    },
    {
      icon: '../../images/mine/modify.png',
      text: '修改密码',
      url: '../my1/modify/modify'
    },
    {
      icon: '../../images/mine/back.png',
      text: '意见反馈',
      url: '../my1/feedback/feedback'
    },

    {
      icon: '../../images/mine/recommend.png',
      text: '推荐给同事',
      url: "../my1/recommend/recommend"
    },
    {
      icon: '../../images/mine/about.png',
      text: '关于我们',
      url: "../my1/about/about"
    }
    ],
  },

  gotopage: function (event) {
    wx.navigateTo({
      url: event.currentTarget.dataset.hi
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(app.globalData.userName)
    // if (app.globalData.userName == null) {
    //   wx.redirectTo({
    //     url: '../login/login',
    //   })
    // }
    // else{
    this.setData({ username: app.globalData.userName })
    // }
    // const ui = wx.getStorageSync('userinfo')
    // if(ui == null){
    //   wx.redirectTo({
    //     url: '../login/login',
    //   })
    // } else {
    //   this.setData({
    //     username: ui.nickname
    //   })
    // }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})