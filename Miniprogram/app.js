// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    cookiedata:""
  },
  handleMessage(e) {
    // 检查消息内容是否存在
    if (e.detail && e.detail.phone) {
      console.log('Received phone number:', e.detail.phone);
    }
    console.log(e)
    // 处理接收到的数据
    var phoneNumber = e.detail.phone; // 假设发送的消息中包含 phone 属性
    console.log(phoneNumber);
  }
})
