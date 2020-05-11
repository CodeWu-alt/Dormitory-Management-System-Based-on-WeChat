// pages/notice1/lost1/create/create.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl: null,
    dormitory: null,
    number: null,
    tel: null,
    describe: null,
    status: "待处理"
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
    this.setData({
      dormitory: app.globalData.dormitory,
      number:app.globalData.dornumber
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

  upload() {
    console.log("点击上传")
    let that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        // const tempFilePaths = res.tempFilePaths
        console.log("选择成功", res);
        that.uploadImg(res.tempFilePaths[0]);
      }
    })
  },

  uploadImg(fileUrl) {
    wx.cloud.uploadFile({
      cloudPath: new Date().getTime() + '.png', // 上传至云端的路径
      filePath: fileUrl, // 小程序临时文件路径
      success: res => {
        // 返回文件 ID
        console.log("上传成功", res),
          this.setData({
            imgUrl: res.fileID
          })
      },
      fail: console.error
    })
  },

  update() {
    let that = this;
    wx.cloud.callFunction({
      name: "addRepair",
      data: {
        number: that.data.number,
        tel: that.data.tel,
        describe: that.data.describe,
        src: that.data.imgUrl,
        dormitory: that.data.dormitory,
        status: that.data.status
      },
      success: function (res) {
        console.log(res)
        wx.showToast({
          title: '上传成功！！',
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