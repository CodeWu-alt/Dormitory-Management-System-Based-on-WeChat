// pages/notice1/check/check.js
var app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    dormitory: null,
    dornums: []
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
  // 生命周期函数--监听页面显示
  onShow: function () {
    var that = this;
    this.setData({
      dormitory: app.globalData.dormitory
    }),
    wx.cloud.callFunction({
      name: "getCheck",
      data: {
        dormitory: that.data.dormitory
      },
      success: function (res) {
        let user = res.result.data;
        console.log(user);
        that.setData({
          dornums: user[0].dornums
        })
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
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