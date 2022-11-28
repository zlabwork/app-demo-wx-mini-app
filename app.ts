// app.ts
App({
  onLaunch() {

    // 设备信息
    try {
      const res = wx.getSystemInfoSync()
      // const safeBottom = res.screenHeight - res.safeArea.bottom
      console.log(res)
    } catch (e) {
      // Do something when catch error
    }

    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})
