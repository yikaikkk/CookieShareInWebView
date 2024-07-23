// index.js
// 获取应用实例
const app = getApp()

Page({
    handleMessage(e) {
        // 检查消息内容是否存在
        if (e.detail && e.detail.phone) {
          console.log('Received phone number:', e.detail.phone);
        }
        console.log(e)
        // 处理接收到的数据
        var phoneNumber = e.detail.data[0].phone; // 假设发送的消息中包含 phone 属性
        console.log(phoneNumber);
        app.globalData.cookiedata=phoneNumber
      },
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData:false,
    phonenumber:'',
    temp:'',
    testHome:'http://127.0.0.1:8080/#/pages/index/center?number=123ee',
    basehome:'127.0.0.1',
    lastpage:'http://127.0.0.1:8080/#/pages/index/center',
    show:true
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad(){
  },
  onShow() {
    var that=this
    var app=getApp();
       this.setData({
        lastpage:this.data.testHome,
         testHome:'/pages/index/center/?'+args.detail.userInfo.phonenumber
        
      })
      const webView = this.selectComponent('#aaa');
      if (webView) {
        webView.setSrc(testHome);
        webView.reload();
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log(this.data.userInfo)
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getPhoneNumber(e){
    var that=this
    var ivobj=e.detail.iv
    var telobj=e.detail.encryptedData
    console.log(e)
    wx.login({
        success (res) {
          if (res.code) {
            //发起网络请求
            wx.request({
                url: 'http://'+basehome+':80/test',
            //   url: 'http://192.168.3.35:80/test',
            //   url: 'http://127.0.0.1:80/test',
              data: {
                code: res.code,
                iv:ivobj,
                encryptedData:telobj,
                header: {'content-type': 'application/json'},
              },
              success:(res)=>{
               
                var number=res.data.phone
                console.log(number)
                that.setData({
                    phonenumber:number
                  })
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  },
  test(){
    wx.request({
        url: 'http://192.168.43.47:80/test/logtest',
        data: {
          Phonenumber:'',
          header: {'content-type': 'application/json',
                    // 'cookie':''
                    },
        },
        success:(res)=>{
            console.log(res.data)
        }
      })
      
  },

})
