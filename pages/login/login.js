// pages/login/login.js
let app = getApp();
// 获取云数据库引用
// const db = wx.cloud.database();
// const admin = db.collection('student');  
let temp = true;


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //输入用户名
  inputName: function (event) {
    app.globalData.name = event.detail.value    //将用户输入的账号放到变量里面
  },
  //输入密码
  inputPassword(event) {
    app.globalData.password = event.detail.value//将用户输入的密码放到变量里面
  },

  //登陆函数
  login() {
    let that = this;
    //登陆获取用户信息
    // admin.get({
    //   success: (res) => {
    //     let user = res.data;
    // console.log(res.data);
    // for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
    //   if (name === user[i].account && password === user[i].password) {    //用户名存在
    //       console.log('登陆成功！')
    // app.globalData.userName = user[i].nickname
    //       temp = false
    //       wx.showToast({
    //         title: '登陆成功！！',
    //         icon: 'success',
    //         duration: 2000
    //       })
    //       wx.switchTab({
    //         url: '/pages/index/index',//这里是成功登录后跳转的页面
    //       })
    //     }
    //   }
    // if (temp) {
    //   wx.showToast({
    //     title: '用户名或密码错误！！',
    //     icon: 'none',
    //     duration: 2000
    //   })
    // } 
    //   }
    // })
    wx.cloud.callFunction({
      name: "getOfficer",
      success(res) {
        let user = res.result.data;
        console.log(user);
        for (let i = 0; i < user.length; i++) {  //遍历数据库对象集合
          if (app.globalData.name === user[i].account && app.globalData.password === user[i].password) {
            //用户名存在
            console.log('登陆成功！')
            app.globalData.userName = user[i].nickname
            temp = false
            wx.showToast({
              title: '登陆成功！！',
              icon: 'success',
              duration: 2000
            })
            wx.switchTab({
              url: '/pages/index/index',//这里是成功登录后跳转的页面
            })
          }
        }
        if (temp) {
          wx.showToast({
            title: '用户名或密码错误！！',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail(res) {
        console.log("请求云函数失败", res)
      }
    }),
      wx.cloud.callFunction({
        name: "getOfimessage",
        data: {
          account: app.globalData.name
        },
        success: function (res) {
          let user = res.result.data;
          app.globalData.dormitory = user[0].dormitory;
        },
        fail(res) {
          console.log("请求云函数失败", res)
        }
      }),
      wx.cloud.callFunction({
        name: "getPicture",
        success: function (res) {
          let user = res.result.data;
          app.globalData.lunbo1 = user[0].lunbo1;
          app.globalData.lunbo2 = user[0].lunbo2;
          app.globalData.lunbo3 = user[0].lunbo3;
        },
        fail(res) {
          console.log("请求云函数失败", res)
        }
      })
      
  }
})

