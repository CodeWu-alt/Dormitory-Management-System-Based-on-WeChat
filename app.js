//app.js
App({
  onLaunch: function () {
    wx.cloud.init({
      env:"wx20200314-ash0b",
      traceUser: "true"
    })
  },

  globalData: {
    userInfo: null,
    userName: null,   //全局变量，用于存放用户的昵称
    name: null,      //全局变量，用于存放用户输入的账号
    password: null,   //全局变量，用于存放用户输入的密码
    dormitory: null,  //全局变量，用于存放用户宿舍信息
    dornumber: null, //宿舍号
    realname: null, //真实姓名
    lunbo1: null,
    lunbo2: null,
    lunbo3: null,
    openid: null //用户openid
  }
})
