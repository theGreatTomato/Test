// pages/tomato/tomato.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    item: {
      content:'sss'
    },
    upload:{ 
      chooseImage:false,
      originImageUrl:'',
      canvasImageUrl:''
    },
    componentData:{
      name:'tomato',
      id:'3',
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  getUserInfo:function(e) {
    console.log(e)
  },
  upload:function() {
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res) => {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res.tempFilePaths)
        this.setData({ upload: { chooseImage: true,originImageUrl:res.tempFilePaths} })
      }
    })
  },
  uploadnow:function() {
    wx.uploadFile({
      url: 'http://39.108.135.222/jsonp/ajax/test.php', //仅为示例，非真实的接口地址
      filePath: this.data.upload.originImageUrl[0],
      name: 'fileimage',
      /*formData: {
        '': 'test'//写别的也可以上传上去
      },*/
      success:  (res) => {
        wx.showToast({ // 显示Toast
          title: '已发送',
          icon: 'success',
          duration: 1500
        })
        this.setData({ upload: { chooseImage: false, originImageUrl: '#' } })
        console.log(res)
      }
    })
  }
})

