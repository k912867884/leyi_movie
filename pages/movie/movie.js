import request from '../../service/natwork.js'
// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    reyingList:[],
    daiyingList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request('movieOnInfoList').then(res=>{
      let reyingList = res.data.data.movieList;
      for(var i=0;i<reyingList.length;i++){
        reyingList[i].img=JSON.parse(JSON.stringify(reyingList[i].img).replace(/w.h\//g,""))
      }
      this.setData({
        reyingList
      })
    });
    request('movieComingList?cityId=10').then(res=>{
      const daiyingList = res.data.data.comingList;
      for(var i = 0;i<daiyingList.length;i++){
        daiyingList[i].img = JSON.parse(JSON.stringify(daiyingList[i].img).replace(/w.h\//g, ""))
      }
      this.setData({
        daiyingList
      })
    });
  },
  onget:function(event){
    this.setData({
      active: event.detail.currentIndex
    })
  },
  // 获取电影id

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

  }
})