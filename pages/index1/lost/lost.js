var app = getApp();
Page({
  data: {
    array: [],
    color: "#7fabfd",
  },
  onShow: function () {
    
  },
  // //输入状态
  // inputStatus(event) {
  //   var that = this;
  //   that.data.status = event.detail.value;
  // },

  change1: function() {
    var that = this;
    wx.cloud.callFunction({
      name: "getLeave2",
      data: {
        status: "离校",
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

  change2: function () {
    var that = this;
    wx.cloud.callFunction({
      name: "getLeave2",
      data: {
        status: "回校",
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
    let newId = event.currentTarget.dataset.id;
    let that = this;
    wx.cloud.callFunction({
      name: "getLeave1",
      data: {
        id: newId,
      },
      success(res) {
        console.log("成功");
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    })
    wx.showModal({
      title: '提示',
      content: '确定要删除该记录？会从数据库删除，不可恢复！！！',
      success(res) {
        if (res.confirm) {
          wx.cloud.callFunction({
            name: "deleteLeave",
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
});