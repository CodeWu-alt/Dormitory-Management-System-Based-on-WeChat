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
    newnumber: null,
    time: null,
    describe: null
  },

  //输入学号
  inputAccount(event) {
    var that = this;
    that.data.account = event.detail.value;
  },

  //输入姓名
  inputName(event) {
    var that = this;
    that.data.realname = event.detail.value;
  },

  // //输入宿舍
  // inputDormitory(event) {
  //   var that = this;
  //   that.data.dormitory = event.detail.value;
  // },

  //输入编号
  inputNum(event) {
    var that = this;
    that.data.number = event.detail.value;
  },

  //输入描述
  inputDescribe(event) {
    var that = this;
    that.data.describe = event.detail.value;
  },

  //输入电话
  inputNewnumber(event) {
    var that = this;
    that.data.newnumber = event.detail.value;
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
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确定要修改宿舍？',
      success(res) {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: "updStuMessage",
            data: {
              account: that.data.account,
              realname: that.data.realname,
              newnumber: that.data.newnumber,
            },
            success: function (res) {
            },
            fail: console.error
          }),
            wx.cloud.callFunction({
              name: "addRecord",
              data: {
                account: that.data.account,
                realname: that.data.realname,
                newnumber: that.data.newnumber,
                dormitory: that.data.dormitory,
                number: that.data.number,
                time: that.data.time,
                describe: that.data.describe
              },
              success: function (res) {
                console.log(res)
                wx.showToast({
                  title: '修改成功！！',
                  icon: 'success',
                  duration: 2000
                })
                //app.globalData.dornumber = that.data.number;
                //app.globalData.dormitory = that.data.dormitory;
              },
              fail: console.error
            })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
   
  }

})