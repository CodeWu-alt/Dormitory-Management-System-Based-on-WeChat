// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('record').add({
      // data 传入需要局部更新的数据
      data: {
        account: event.account,
        realname: event.realname,
        newnumber: event.newnumber,
        dormitory: event.dormitory,
        number: event.number,
        time: event.time,
        describe: event.describe
      }
    })
  } catch (e) {
    console.error(e)
  }
}