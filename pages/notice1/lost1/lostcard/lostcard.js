// pages/notice1/lost/lost.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array2: [],
    color: "#7fabfd",
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
    var that = this;
    wx.cloud.callFunction({
      name: "getCards",
      success(res) {
        let user2 = res.result.data;
        console.log(user2);
        that.setData({
          array2: user2
        })
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    })
  },

  gotopage: function (event) {
    console.log(event)
    wx.navigateTo({
      url: "/pages/notice1/lost1/lostcard1/lostcard1"
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