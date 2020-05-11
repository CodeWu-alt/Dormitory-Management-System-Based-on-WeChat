// pages/notice1/lost1/create/create.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    account: null,
    realname: null,
    tel: null,
    describe: null,
    openid: null
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

  },

  update() {
    let that = this;
    wx.cloud.callFunction({
      name: "addCards",
      data: {
        tel: that.data.tel,
        describe: that.data.describe,
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
      wx.cloud.callFunction({
        name: "getloseCards",
        data: {
          account: that.data.account,
          realname: that.data.realname
        },
        success(res) {
          let user = res.result.data;
          that.setData({
            openid: user[0].openid
          })
        },
        fail(res) {
          console.log("请求云函数失败", res)
        }
      })
     
  }, 

  notice() {
    let that = this;
    wx.cloud.callFunction({
      name: "sendMessage",
      data: {
        openid: that.data.openid,
        tel: that.data.tel,
        realname: that.data.realname
      }
    }).then(res => {
      console.log("发送单条成功", res)
    }).catch(res => {
      console.log("发送单条失败", res)
    })
  }

})