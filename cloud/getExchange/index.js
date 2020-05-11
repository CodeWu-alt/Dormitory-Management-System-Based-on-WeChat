// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return cloud.database().collection("exchange").where({
    account: event.account
  }).get({
    success(res) {
      return res
    },
    fail(err) {
      return err
    }
  });
}