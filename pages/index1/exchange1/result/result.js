// pages/notice1/lost/lost.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [],
    color: "#7fabfd",
    // status: null,
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
      name: "getRecord",
      data: {
        dormitory: app.globalData.dormitory
      },
      success(res) {
        let user = res.result.data;
        console.log(user);
        that.setData({
          array: user
        })
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    })
  },

  delete(event) {
    console.log(event);
    let newId = event.currentTarget.dataset.id;
    let that = this;
    // wx.cloud.callFunction({
    //   name: "getLeave1",
    //   data: {
    //     id: newId,
    //   },
    //   success(res) {
    //     console.log("成功");
    //   },
    //   fail(res) {
    //     console.log("请求云函数失败", res)
    //   }
    // })
    wx.showModal({
      title: '提示',
      content: '确定要删除该记录？会从数据库删除，不可恢复！！！',
      success(res) {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: "deleteRecord",
            data: {
              id: newId
            },
            success: function (res) {
              console.log("删除成功"),
                wx.showToast({
                  title: '删除成功',
                  duration: 1000,
                })
            },
            fail(res) {
              console.log("请求云函数失败", res)
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
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