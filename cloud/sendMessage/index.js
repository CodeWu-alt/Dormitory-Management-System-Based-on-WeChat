// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    const result = await cloud.openapi.subscribeMessage.send({
      touser: event.openid,  //要推送给哪个用户
      page: '/pages/notice1/lost1/lostcard/lostcard',
      data: {  //推送的内容
        name1: {
          value: event.realname
        },

        phone_number3: {
          value: event.tel
        },
        
      },
      templateId: 'kPKm8IqNY-_sGvrI4GPR1N1f7UX2NzTp1s8T9s06pWA',
    })
    return result
  } catch (err) {
    return err
  }
}