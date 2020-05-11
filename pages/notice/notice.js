// pages/notice/notice.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dormitory: null,
    dornums: null,
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
  onShow: function (dormitory2) {
    var that = this;
    // var dor2 = null;
    wx.cloud.callFunction({
      name: "getStumessage",
      data: {
        account: app.globalData.name
      },
      success: function (res) {
        let user = res.result.data;
        app.globalData.dormitory = user[0].dormitory;
        console.log(app.globalData.dormitory);
        that.setData({
          dormitory: user[0].dormitory,
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