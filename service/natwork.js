import {
  baseURL
} from "./config.js"

export default function request(options){
  wx.showLoading({
    title: '数据加载中...',
  })
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options,
      method: 'GET',
      data: {},
      success: function (res) {
        resolve(res)
        wx.hideLoading();
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}