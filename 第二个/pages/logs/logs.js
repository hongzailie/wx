//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
 calling: function() {
  //  微信自带一件拨打电话
    wx.makePhoneCall({

      phoneNumber: '18537777498',

      success: function() {

        console.log("拨打电话成功！")

      },

      fail: function() {

        console.log("拨打电话失败！")

      }

    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
