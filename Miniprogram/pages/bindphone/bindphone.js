// pages/bindphone/bindphone.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // testHome:'http://localhost:8080/#/pages/index/center'
        // testHome:'http://192.168.43.47:8080/#/pages/index/center',
        // basehome:'192.168.43.47'
        testHome:'http://127.0.0.1:8080/#/pages/index/center',
        basehome:'127.0.0.1',
        cookieData:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.cookieData=app.globalData.cookiedata
        console.log(this.cookieData)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {
        this.cookieData=app.globalData.cookiedata
        console.log(this.cookieData)
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },  

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    },
    getPhoneNumber(e){
        var that=this
        var ivobj=e.detail.iv
        var telobj=e.detail.encryptedData
        console.log(e)
        wx.login({
            success (res) {
              if (res.code) {
                var app=getApp()
                var res_url=encodeURIComponent('code') + '=' + encodeURIComponent(res.code)+'&'+encodeURIComponent('iv') + '=' + encodeURIComponent(ivobj)+'&'+encodeURIComponent('encryptedData') + '=' + encodeURIComponent(telobj)
                console.log(res_url)
                app.url=res_url
                wx.navigateBack({
                    delta: 1,
                    success: (res) => {
                    },
                    fail: (res) => {},
                    complete: (res) => {},
                  })
              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
      },
      test(){
        this.cookieData=app.globalData.cookiedata
        console.log(this.cookieData)
      }
    

})