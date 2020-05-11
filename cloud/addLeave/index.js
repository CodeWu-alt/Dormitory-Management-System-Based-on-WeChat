// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('leave').add({
      // data 传入需要局部更新的数据
      data: {
        account: event.account,
        realname: event.realname,
        dornumber: event.number,
        tel: event.tel,
        describe: event.describe,
        dormitory: event.dormitory,
        status: event.status,
        leavetime:event.time
      }
    })
  } catch (e) {
    console.error(e)
  }
}