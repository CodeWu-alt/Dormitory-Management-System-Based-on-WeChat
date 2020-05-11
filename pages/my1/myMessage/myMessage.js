// pages/my1/myMessage/myMessage.js
let app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: null,
    realname: null,
    gender: null,
    dormitory: null,
    tel: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.cloud.callFunction({
      name: "getOfimessage",
      data: {
        account: app.globalData.name
      },
      success: function (res) {
        let user = res.result.data;
        console.log(res);
        that.setData({
          name: app.globalData.name,
          realname: user[0].realname,
          gender: user[0].gender,
          dormitory: user[0].dormitory,
          tel: user[0].tel
        })
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    })
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