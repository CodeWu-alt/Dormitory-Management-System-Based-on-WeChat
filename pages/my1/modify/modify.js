// pages/my1/modify/modify.js
let app= getApp();
let newname = null;        //变量，用于存放用户输入的账号
let newpassword = null;   //变量，用于存放用户输入的旧密码
let password1 = null;     //变量，用于存放用户输入的新密码
let password2 = null;     //变量，用于存放用户确认的新密码
let temp = true;

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //输入用户名
  inputName: function (event) {
    newname = event.detail.value    //将用户输入的账号放到变量里面
  },
  //输入旧密码
  inputPassword(event) {
    newpassword = event.detail.value//将用户输入的密码放到变量里面
  },
  //输入新密码
  inputPassword1(event) {
    password1 = event.detail.value//将用户输入的密码放到变量里面
  },
  //确认新密码
  inputPassword2(event) {
    password2 = event.detail.value//将用户输入的密码放到变量里面
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

  //修改密码函数
  check: function() {
    let that = this;
 
    if (newname != app.globalData.name || newpassword != app.globalData.password){
      wx.showToast({
        title: '请输入正确的用户名和密码！！！',
        icon: 'none',
        duration: 2000
      })
    } else {
      if(password1 != password2){
        wx.showToast({
          title: '两次输入的密码不相同，请重新输入',
          icon: 'none',
          duration: 2000
        })
      } else {
        console.log("成功")
        wx.cloud.callFunction({
          name: "updStudent",
          data:{
            password: password1,
            account: newname,
          },
          success: function (res) {
            console.log(res)
            wx.redirectTo({
              url: '../../login/login',
            })
          },
          fail: console.error
        })
      }
    }
    // wx.cloud.callFunction({
    //   name: "getStudent",
    //   success(res) {
    //     let user = res.result.data;
    //     console.log(user);
    //     for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
    //       if (app.globalData.name === user[i].account && app.globalData.password === user[i].password) {                   //用户名存在
    //         console.log('登陆成功！')
    //         app.globalData.userName = user[i].nickname
    //         temp = false
    //         wx.showToast({
    //           title: '登陆成功！！',
    //           icon: 'success',
    //           duration: 2000
    //         })
    //         wx.switchTab({
    //           url: '/pages/index/index',//这里是成功登录后跳转的页面
    //         })
    //       }
    //     }
    //     if (temp) {
    //       wx.showToast({
    //         title: '用户名或密码错误！！',
    //         icon: 'none',
    //         duration: 2000
    //       })
    //     }
    //   },
    //   fail(res) {
    //     console.log("请求云函数失败", res)
    //   }
    // })
  }
})