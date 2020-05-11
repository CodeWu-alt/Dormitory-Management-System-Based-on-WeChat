// pages/index/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   '../../images/swiper/lunbo2.jpg',
    //   '../../images/swiper/lunbo3.jpg',
    //   '../../images/swiper/lunbo1.jpg',
    // ],
    lunbo1:null,
    lunbo2:null,
    lunbo3:null,
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    navs: [{
      url: '/pages/index1/repair/repair',
      image: '/images/navigation/repair.png',
      text: '故障报修'
    }, {
        url: '/pages/index1/exchange/exchange',
      image: '/images/navigation/exchange.png',
      text: '换宿申请'
    }, {
        url: '/pages/index1/lost/lost',
      image: '/images/navigation/lost.png',
      text: '离校登记'
    }, {
        url: '/pages/index1/out/out',
      image: '/images/navigation/out.png',
      text: '舍友离校'
    }]
  },
  //功能导航到点击界面中
  gotopage: function (event) {
    console.log(event)
    wx.navigateTo({
      url: event.currentTarget.dataset.hi
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    this.setData({
      lunbo1: app.globalData.lunbo1,
      lunbo2: app.globalData.lunbo2,
      lunbo3: app.globalData.lunbo3,
    })
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