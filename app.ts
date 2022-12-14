// app.ts
App({

  globalData: {
    isLogin: false,
    device: {
      statusBarHeight: 0,
      safeBottomHeight: 0,
    },
  },

  onLaunch() {

    // 设备信息
    try {
      const res = wx.getSystemInfoSync()
      this.globalData.device = {
        statusBarHeight: res.statusBarHeight,
        safeBottomHeight: res.screenHeight - res.safeArea.bottom,
      }
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
