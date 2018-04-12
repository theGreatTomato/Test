//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  getData:function(e) {
    wx:wx.request({
      url: 'http://www.lyztt.com.cn/html/bus20170321/test.php',
      method: 'GET',
      responseType: 'text',
      success: function(res) {console.log(res)},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})
