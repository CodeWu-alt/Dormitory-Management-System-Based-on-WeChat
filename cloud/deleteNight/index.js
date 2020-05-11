// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("night").where({ _id: event.id }).remove({
    success(res) {
      console.log(res.data)
    },
    fail(err) {
      return err
    }
  });
}