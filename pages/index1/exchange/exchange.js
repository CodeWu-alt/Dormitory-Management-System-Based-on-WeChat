// pages/notice1/lost/lost.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotopage1: function (event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/index1/exchange1/submit/submit"
    })
  },

  gotopage2: function (event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/index1/exchange1/status/status"
    })
  },

  gotopage3: function (event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/index1/exchange1/result/result"
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