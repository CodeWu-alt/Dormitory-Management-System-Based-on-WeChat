// pages/notice1/lost1/create/create.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    realname: null
  },

  // //输入学号
  // inputAccount(event) {
  //   var that = this;
  //   that.data.account = event.detail.value;
  // },

  // //输入姓名
  // inputName(event) {
  //   var that = this;
  //   that.data.realname = event.detail.value;
  // },

  // //输入宿舍
  // inputDormitory(event) {
  //   var that = this;
  //   that.data.dormitory = event.detail.value;
  // },

  // //输入编号
  // inputNum(event) {
  //   var that = this;
  //   that.data.number = event.detail.value;
  // },


  // //输入电话
  // inputTel(event) {
  //   var that = this;
  //   that.data.tel = event.detail.value;
  // },



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
      realname: app.globalData.realname,
      account: app.globalData.name
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

  },

  update() {
    let that = this;
    wx.cloud.callFunction({
      name: "addloseCards",
      data: {
        openid: app.globalData.openid,
        account: that.data.account,
        realname: that.data.realname
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '提交成功！！',
          icon: 'success',
          duration: 2000
        })
        //app.globalData.dornumber = that.data.number;
        //app.globalData.dormitory = that.data.dormitory;
      },
      fail: console.error
    }),
      wx.requestSubscribeMessage({
      tmplIds: ['kPKm8IqNY-_sGvrI4GPR1N1f7UX2NzTp1s8T9s06pWA'], //生成的模板id
        success(res) {
          console.log('授权成功', res)
        },
        fail(res) {
          console, log('授权失败', res)
        }
      })
  }

})