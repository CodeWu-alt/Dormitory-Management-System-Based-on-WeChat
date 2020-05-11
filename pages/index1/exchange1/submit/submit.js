// pages/notice1/lost1/create/create.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    realname: null,
    dormitory: null,
    number: null,
    tel: null,
    time: null,
    describe: null,
    status: "待处理"
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

  //输入描述
  inputDescribe(event) {
    var that = this;
    that.data.describe = event.detail.value;
  },

  //输入电话
  inputTel(event) {
    var that = this;
    that.data.tel = event.detail.value;
  },

  //输入离校时间
  inputTime(event) {
    var that = this;
    that.data.time = event.detail.value;
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
      dormitory: app.globalData.dormitory,
      number: app.globalData.dornumber,
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
      name: "addExchange",
      data: {
        number: that.data.number,
        tel: that.data.tel,
        describe: that.data.describe,
        time: that.data.time,
        dormitory: that.data.dormitory,
        status: that.data.status,
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
    })
  }

})