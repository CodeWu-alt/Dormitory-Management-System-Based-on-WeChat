// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await db.collection('lost').add({
      // data 传入需要局部更新的数据
      data: {
        name: event.name,
        getdate: event.getdate,
        describe: event.describe,
        src: event.src,
        dormitory: event.dormitory
      }
    })
  } catch (e) {
    console.error(e)
  }
}