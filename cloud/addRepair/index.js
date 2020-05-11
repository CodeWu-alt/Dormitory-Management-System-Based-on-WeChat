// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('repair').add({
      // data 传入需要局部更新的数据
      data: {
        dornumber: event.number,
        tel: event.tel,
        describe: event.describe,
        src: event.src,
        dormitory: event.dormitory,
        status: event.status
      }
    })
  } catch (e) {
    console.error(e)
  }
}